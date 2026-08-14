import { Howl, Howler } from 'howler';

let isInitialized = false;
let ambientSound = null;

// Web Audio API Nodes
let filterNode = null;
let pannerNode = null;

// Constants for our fluid simulation
const IDLE_FILTER_FREQ = 600; // Deep, muffled water
const MAX_FILTER_FREQ = 5000; // Bright, splashing water

export async function initAudio() {
  if (isInitialized) return;

  ambientSound = new Howl({
    src: ['/audio/ambient.mp3'],
    html5: false, // MUST be false to route through Web Audio API nodes
    loop: true,
    volume: 0, 
    preload: true,
    onload: () => {
      // Set up the custom Web Audio API routing
      const ctx = Howler.ctx;
      if (!ctx) return;

      // Create Low-Pass Filter
      filterNode = ctx.createBiquadFilter();
      filterNode.type = 'lowpass';
      filterNode.frequency.value = IDLE_FILTER_FREQ;
      filterNode.Q.value = 1; // Slight resonance

      // Create Stereo Panner
      pannerNode = ctx.createStereoPanner();
      pannerNode.pan.value = 0;

      // Reroute Howler's master output through our nodes
      Howler.masterGain.disconnect();
      Howler.masterGain.connect(filterNode);
      filterNode.connect(pannerNode);
      pannerNode.connect(ctx.destination);
    }
  });

  ambientSound.play();
  ambientSound.fade(0, 0.6, 3000); 

  isInitialized = true;
}

// ==========================================
// FLUID INTERACTION API
// ==========================================

export function splash(intensity = 1.0) {
  if (!isInitialized || !filterNode || !Howler.ctx) return;
  const ctx = Howler.ctx;
  
  // Instantly open the filter to simulate a splash
  const splashFreq = IDLE_FILTER_FREQ + (3000 * intensity);
  filterNode.frequency.cancelScheduledValues(ctx.currentTime);
  filterNode.frequency.setValueAtTime(splashFreq, ctx.currentTime);
  
  // Exponentially decay back to idle to simulate ripples settling
  filterNode.frequency.exponentialRampToValueAtTime(IDLE_FILTER_FREQ, ctx.currentTime + 1.5);
}

export function setFluidState(velocity, panX) {
  if (!isInitialized || !filterNode || !pannerNode || !Howler.ctx) return;
  const ctx = Howler.ctx;

  // 1. Map velocity to filter frequency (Opening the water)
  // Velocity is typically between 0 and 50 (mouse) or 0 to 1000 (scroll)
  // We use a smoothed approach to prevent harsh jumps
  const normalizedVel = Math.min(velocity / 100, 1); 
  const targetFreq = IDLE_FILTER_FREQ + (MAX_FILTER_FREQ - IDLE_FILTER_FREQ) * normalizedVel;

  // Gently ramp the filter to follow the movement
  filterNode.frequency.linearRampToValueAtTime(targetFreq, ctx.currentTime + 0.1);
  // Auto-settle back to idle if no more movement occurs
  filterNode.frequency.exponentialRampToValueAtTime(IDLE_FILTER_FREQ, ctx.currentTime + 0.8);

  // 2. Spatial Panning
  pannerNode.pan.linearRampToValueAtTime(panX, ctx.currentTime + 0.1);
}

export function diveDeep() {
  if (!isInitialized || !filterNode || !Howler.ctx) return;
  const ctx = Howler.ctx;
  
  // Plunge the filter extremely low for page transitions
  filterNode.frequency.cancelScheduledValues(ctx.currentTime);
  filterNode.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.5);
}

export function surface() {
  if (!isInitialized || !filterNode || !Howler.ctx) return;
  const ctx = Howler.ctx;
  
  // Bring it back to idle state
  filterNode.frequency.cancelScheduledValues(ctx.currentTime);
  filterNode.frequency.exponentialRampToValueAtTime(IDLE_FILTER_FREQ, ctx.currentTime + 1.5);
}

// ==========================================
// CORE AUDIO CONTROLS
// ==========================================

export function setPageVibe(pathname) {
  if (!isInitialized || !ambientSound) return;
  if (pathname === '/about') {
    ambientSound.fade(ambientSound.volume(), 0.8, 2000);
  } else if (pathname.startsWith('/work')) {
    ambientSound.fade(ambientSound.volume(), 0.5, 2000);
  } else {
    ambientSound.fade(ambientSound.volume(), 0.6, 2000);
  }
}

export function setWindVelocity(velocity) {
  // We now map scroll velocity to our fluid state instead of generating noise
  setFluidState(Math.abs(velocity) / 5, 0); // Scale down scroll velocity slightly, no pan
}

export function stopAudio() {
  if (!isInitialized) return;
  Howler.unload(); 
  isInitialized = false;
}

export function muteAudio(shouldMute) {
  Howler.mute(shouldMute);
}
