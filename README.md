# ASCII Panda

A minimal static web app featuring a rotating ASCII panda on a black background. Built with plain HTML, CSS, and vanilla JavaScript—no frameworks or dependencies required.

## Features

- Full-screen black background with green ASCII art
- 3D rotating panda animation with perspective projection
- Depth shading using ASCII characters
- Gentle wobble animation (not a full spin)
- Minimal hacker terminal aesthetic

## How to Run

### Option 1: Direct File Opening
Simply open `index.html` in your web browser.

### Option 2: Static File Server
Use a simple HTTP server:

```bash
# Using npx serve
npx serve .

# Or using Python
python -m http.server 8000

# Or using Node.js http-server
npx http-server
```

Then open `http://localhost:3000` (or the port shown) in your browser.

## Project Structure

- `index.html` - Main HTML document
- `styles.css` - Styling (black background, centering, monospace font)
- `panda.js` - Animation logic (3D rotation, perspective projection, rendering)
- `README.md` - This file

## Customization

To modify the panda appearance, edit the `pandaMask` array in `panda.js`:

```javascript
const pandaMask = [
  "        ####        ",
  "      ########      ",
  // ... add your own ASCII art here
];
```

Each string represents a row, and non-space characters will be rendered as part of the panda.

## Technical Details

- Uses `requestAnimationFrame` for smooth animation
- 3D rotation around X and Y axes with perspective projection
- Depth shading using ASCII character set: `" .:-=+*#%@"`
- Output grid: 60×30 characters
- Gentle wobble animation (sinusoidal rotation, not full 360° spin)

# ascii-panda
