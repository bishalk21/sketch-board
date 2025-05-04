# Openboard Clone

- API

  - canvas API (for 2d graphical drawing)
  - real-time drawing (using web sockets, socket.io, express server)

- Features

  - Drawing on canvas
  - Eraser
  - undo/redo
  - sticky notes
  - download board as image
  - deployment(hosting) on heroku with github (real-time collaboration)

` - path of graphics --> based on the path of the mouse`

- Canvas API

  - a HTML element - used to draw graphics on the fly using JavaScript.
  - a part of the HTML5 specification and is supported by all modern browsers.
  - a container for graphics - used to draw shapes, text, images, and animations.
  - The canvas API provides a set of methods and properties for drawing on the canvas.
  - The canvas API is a low-level API, which means that it provides a set of methods and properties for drawing on the canvas, but it does not provide any high-level abstractions for drawing shapes or images.

  - steps to create a canvas

    1. Create a canvas element in HTML
    2. Get the canvas element using JavaScript
    3. Set the width and height of the canvas
    4. Get the drawing context using the getContext() method
    5. Use the drawing context to draw on the canvas
    6. Use the canvas API methods to draw shapes, text, images, and animations

  - properties of canvas API

    - width: the width of the canvas in pixels
    - height: the height of the canvas in pixels
    - getContext: a method that returns a drawing context on the canvas, or null if the context identifier is not supported.
    - getBoundingClientRect: a method that returns the size of an element and its position relative to the viewport.
    - toDataURL: a method that returns a data URL containing a representation of the image in the format specified by the type parameter (default is PNG).
    - toBlob: a method that creates a Blob object representing the image contained in the canvas.
    - toDataURL: a method that returns a data URL containing a representation of the image in the format specified by the type parameter (default is PNG).

- Canvas Learning

```js
let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// tool to draw on canvas where we can use the canvas API
let tool = canvas.getContext("2d");

tool.strokeStyle = "red"; // color of the line
tool.lineWidth = 5; // width of the line

// begin drawing
// point to start drawing
// point to end drawing
// set the color of the line (fill color)

// to add new line on top of the previous line
// draw a line to the point (200, 200)
// set the color of the line (fill color)

// tool.beginPath();
// tool.moveTo(10, 10);
// tool.lineTo(100, 100);
// tool.stroke = "";

// to make new line
// tool.beginPath();
// tool.moveTo(100, 100);
// tool.lineTo(200, 200);
// tool.stroke = "";
```
