// Three.js Panda 3D Rotation Animation

// Panda mask definition
const pandaMask = [
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡗⠀⠀⠉⠑⢢⣴⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡶⢢⠀⠀⠀⠀⠀⠀⠀⠀⠻⠋⠀⠀⠀⠀⠀⢿⣿⠿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⢝⢧⡀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣄⠙⠄⠀⠀⠀⢀⠇⢠⡄⠀⠀⣄⡀⠀⠀⠀⣴⣄⠘⡀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡴⠶⢚⣫⣵⡶⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⡅⣤⣀⠃⠀⠘⠀⢿⠇⠀⠸⣿⣿⡄⠀⠀⣿⣿⣷⣷⣄⠀⠀⠀⠀⣀⣸⣿⡀⠸⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠛⠁⣹⣿⣷⣦⣤⣶⡄⢀⣀⠀⠙⠋⠁⣠⣾⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⡟⢰⣿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣾⣿⣿⣿⣿⣿⣿⣿⣌⣋⣀⣀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣈⣯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡿⠟⠿⣿⣿⠿⠛⠁⠀⠀⠀⠀⠈⢿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⣀⣠⣾⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⡿⠛⠒⠚⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢼⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
];

// Convert panda mask to canvas texture
function createPandaTexture(mask) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Calculate dimensions
  const rows = mask.length;
  const cols = mask[0].length;
  const cellSize = 8; // Size of each character cell
  canvas.width = cols * cellSize;
  canvas.height = rows * cellSize;
  
  // Set up canvas
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00ff00';
  ctx.font = `${cellSize}px monospace`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  
  // Draw the mask
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const char = mask[row][col];
      const BRAILLE_SPACE = '\u2800';
      if (char && char !== ' ' && char !== BRAILLE_SPACE) {
        ctx.fillText(char, col * cellSize, row * cellSize);
      }
    }
  }
  
  return canvas;
}

// Convert 3D model render to ASCII texture
function modelToAsciiTexture(model, renderer, camera, scene) {
  // Create offscreen render target
  const renderTarget = new THREE.WebGLRenderTarget(512, 512);
  renderer.setRenderTarget(renderTarget);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);
  
  // Read pixels from render target
  const pixels = new Uint8Array(512 * 512 * 4);
  renderer.readRenderTargetPixels(renderTarget, 0, 0, 512, 512, pixels);
  
  // Convert to ASCII
  const asciiChars = " .:-=+*#%@";
  const cellSize = 8;
  const cols = Math.floor(512 / cellSize);
  const rows = Math.floor(512 / cellSize);
  
  const canvas = document.createElement('canvas');
  canvas.width = cols * cellSize;
  canvas.height = rows * cellSize;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00ff00';
  ctx.font = `${cellSize}px monospace`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = Math.floor(col * cellSize * (512 / canvas.width));
      const y = Math.floor(row * cellSize * (512 / canvas.height));
      const idx = (y * 512 + x) * 4;
      
      // Get brightness from RGB
      const r = pixels[idx];
      const g = pixels[idx + 1];
      const b = pixels[idx + 2];
      const brightness = (r + g + b) / 3;
      const charIndex = Math.floor((brightness / 255) * (asciiChars.length - 1));
      const char = asciiChars[charIndex];
      
      if (char !== ' ') {
        ctx.fillText(char, col * cellSize, row * cellSize);
      }
    }
  }
  
  return canvas;
}

// Global variables
let scene, camera, renderer, panda, material, boxGeometry;

// Initialize Three.js scene
function init() {
  const canvas = document.getElementById('panda-canvas');
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;
  
  // Renderer setup
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Wait a bit for FBXLoader to be available, then load FBX panda model
  setTimeout(() => {
    loadFBXPanda();
  }, 100);
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    if (panda) {
      // Continuous rotation around Y axis (like Earth spinning)
      panda.rotation.y += 0.01;
    }
    
    renderer.render(scene, camera);
  }
  
  // Handle window resize
  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });
  
  // Start animation
  animate();
}

// Load default panda
function loadDefaultPanda() {
  // Remove existing panda
  if (panda) {
    scene.remove(panda);
  }
  
  // Create panda texture
  const textureCanvas = createPandaTexture(pandaMask);
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.needsUpdate = true;
  
  // Create material with the texture
  material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    color: 0x00ff00,
    side: THREE.DoubleSide
  });
  
  // Create box geometry with thickness
  const aspect = textureCanvas.width / textureCanvas.height;
  const pandaWidth = aspect * 3;
  const pandaHeight = 3;
  const pandaDepth = 0.3;
  boxGeometry = new THREE.BoxGeometry(pandaWidth, pandaHeight, pandaDepth);
  
  // Apply texture to all faces
  panda = new THREE.Mesh(boxGeometry, material);
  panda.rotation.x = -0.4;
  scene.add(panda);
}

// Load FBX panda model from project
function loadFBXPanda() {
  // Check if FBXLoader is available
  if (typeof THREE.FBXLoader === 'undefined') {
    console.error('FBXLoader not available. Falling back to default panda.');
    loadDefaultPanda();
    return;
  }
  
  const loader = new THREE.FBXLoader();
  
  // Load textures
  const textureLoader = new THREE.TextureLoader();
  const pandaTexture = textureLoader.load('lazy-panda/textures/PANDA.png');
  const groundTexture = textureLoader.load('lazy-panda/textures/internal_ground_ao_texture.jpeg');
  
  // Load FBX model
  loader.load(
    'lazy-panda/source/panda.fbx',
    function(fbx) {
      console.log('FBX loaded successfully!', fbx);
      
      // Remove existing panda
      if (panda) {
        scene.remove(panda);
      }
      
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(fbx);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 3 / maxDim;
      
      fbx.scale.multiplyScalar(scale);
      fbx.position.sub(center.multiplyScalar(scale));
      
      // Apply textures to model first
      fbx.traverse((child) => {
        if (child.isMesh) {
          // Try to use existing textures if available
          if (child.material && child.material.map) {
            // Keep original texture for now
          } else {
            // Apply panda texture
            child.material = new THREE.MeshBasicMaterial({
              map: pandaTexture,
              transparent: true,
              color: 0x00ff00,
              side: THREE.DoubleSide
            });
          }
        }
      });
      
      // Apply green material to all meshes (ASCII-like look)
      fbx.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            transparent: true,
            side: THREE.DoubleSide,
            wireframe: false
          });
        }
      });
      
      // Add to scene
      scene.add(fbx);
      
      panda = fbx;
      panda.rotation.x = -0.4;
      console.log('Panda model added to scene');
      
      // Try to create ASCII texture after a delay
      setTimeout(() => {
        try {
          console.log('Attempting to create ASCII texture...');
          const asciiCanvas = modelToAsciiTexture(fbx, renderer, camera, scene);
          const asciiTexture = new THREE.CanvasTexture(asciiCanvas);
          asciiTexture.needsUpdate = true;
          
          // Apply ASCII texture to model
          fbx.traverse((child) => {
            if (child.isMesh) {
              child.material = new THREE.MeshBasicMaterial({
                map: asciiTexture,
                transparent: true,
                color: 0x00ff00,
                side: THREE.DoubleSide
              });
            }
          });
          console.log('ASCII texture applied');
        } catch (e) {
          console.error('Error creating ASCII texture:', e);
          console.log('Using solid green material instead');
        }
      }, 500);
    },
    function(progress) {
      // Loading progress
      console.log('Loading FBX:', (progress.loaded / progress.total * 100) + '%');
    },
    function(error) {
      console.error('Error loading FBX:', error);
      console.error('Full error details:', error);
      // Fallback to default panda if FBX fails to load
      console.log('Falling back to default panda mask');
      loadDefaultPanda();
    }
  );
}

// Start when DOM is ready
window.addEventListener('DOMContentLoaded', init);
