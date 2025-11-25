// ASCII Panda 3D Rotation Animation
// Converts a 2D panda mask into 3D points and rotates them with perspective

// Panda mask definition
const pandaMask = [
  "        ####        ",
  "      ########      ",
  "     ###    ###     ",
  "    ##  ##  ##      ",
  "   ##  ####  ##     ",
  "   ##  ####  ##     ",
  "   ##        ##     ",
  "   ### #### ###     ",
  "    ##########      ",
  "      ######        ",
  "     ##    ##       ",
  "    ##      ##      ",
];

// ASCII characters for depth shading (lightest to darkest)
const asciiChars = " .:-=+*#%@";

// Grid dimensions for output
const GRID_WIDTH = 60;
const GRID_HEIGHT = 30;

// 3D projection settings
const DISTANCE = 4;
const BASE_SCALE = 15;

// Animation state
let angleX = 0;
let angleY = 0;

// Convert panda mask to 3D points
function maskToPoints(mask) {
  const points = [];
  const rows = mask.length;
  const cols = mask[0].length;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mask[row][col] !== ' ') {
        // Normalize coordinates to [-1, 1]
        const x = (col / (cols - 1)) * 2 - 1;
        const y = (row / (rows - 1)) * 2 - 1;
        points.push({ x, y, z: 0 });
      }
    }
  }
  
  return points;
}

// Rotate a point around X and Y axes
function rotatePoint(p, ax, ay) {
  // Rotate around Y axis
  const cosY = Math.cos(ay);
  const sinY = Math.sin(ay);
  const x1 = p.x * cosY - p.z * sinY;
  const z1 = p.x * sinY + p.z * cosY;
  
  // Rotate around X axis
  const cosX = Math.cos(ax);
  const sinX = Math.sin(ax);
  const y1 = p.y * cosX - z1 * sinX;
  const z2 = p.y * sinX + z1 * cosX;
  
  return { x: x1, y: y1, z: z2 };
}

// Project 3D point to 2D screen coordinates with perspective
function projectPoint(p) {
  const z2 = p.z + DISTANCE;
  if (z2 <= 0) return null; // Behind camera
  
  const scale = BASE_SCALE / z2;
  const screenX = p.x * scale + GRID_WIDTH / 2;
  const screenY = p.y * scale + GRID_HEIGHT / 2;
  
  return {
    x: Math.round(screenX),
    y: Math.round(screenY),
    z: z2
  };
}

// Convert depth to ASCII character
function depthToChar(z) {
  // Normalize depth to [0, 1] range
  // Closer points have smaller z values (after DISTANCE offset)
  const normalized = Math.max(0, Math.min(1, (z - 2) / 4));
  const index = Math.floor(normalized * (asciiChars.length - 1));
  return asciiChars[index];
}

// Render the panda
function render() {
  const canvas = document.getElementById('ascii-panda');
  
  // Update rotation angles (gentle wobble, not full spin)
  angleX += 0.015;
  angleY += 0.02;
  
  const rotX = Math.sin(angleX) * 0.4;
  const rotY = Math.sin(angleY) * 0.6;
  
  // Convert mask to points
  const points = maskToPoints(pandaMask);
  
  // Create grid for rendering
  const grid = Array(GRID_HEIGHT).fill(null).map(() => 
    Array(GRID_WIDTH).fill(' ')
  );
  
  // Rotate and project each point
  points.forEach(point => {
    const rotated = rotatePoint(point, rotX, rotY);
    const projected = projectPoint(rotated);
    
    if (projected && 
        projected.x >= 0 && projected.x < GRID_WIDTH &&
        projected.y >= 0 && projected.y < GRID_HEIGHT) {
      const char = depthToChar(projected.z);
      // Use stronger character if multiple points map to same cell
      const current = grid[projected.y][projected.x];
      const currentIndex = asciiChars.indexOf(current);
      const newIndex = asciiChars.indexOf(char);
      if (newIndex > currentIndex) {
        grid[projected.y][projected.x] = char;
      }
    }
  });
  
  // Convert grid to string
  const output = grid.map(row => row.join('')).join('\n');
  canvas.textContent = output;
  
  // Continue animation
  requestAnimationFrame(render);
}

// Start animation when page loads
window.addEventListener('DOMContentLoaded', () => {
  render();
});

