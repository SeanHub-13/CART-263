class FreeStyleObj {
  constructor(x, y, length, f_color, s_color, context) {
    this.x = x;
    this.y = y;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.theta = 0;
    this.length = length;
    this.yOffset = 20;
    this.angularSpeed = .07;
    this.context = context;
    this.baseY = y; // Store the initial y position
    this.animationSpeed = 0.05; // Speed of the up and down motion
    this.animationTheta = 0; // Angle for the sine wave

    // Set up audio context and analyzer
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.analyzer = this.audioContext.createAnalyser();
    this.analyzer.fftSize = 256;
    this.dataArray = new Uint8Array(this.analyzer.frequencyBinCount);

    // Get microphone input
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.audioContext.createMediaStreamSource(stream).connect(this.analyzer);
      })
      .catch(err => {
        console.error('Error accessing microphone: ', err);
      });
  }

  display() {
    this.analyzer.getByteFrequencyData(this.dataArray);
    const avgFrequency = this.dataArray.reduce((a, b) => a + b, 0) / this.dataArray.length;

    // Change color based on average frequency with higher sensitivity
    const colorValue = Math.min(255, Math.max(0, avgFrequency * 10));
    this.fill_color = `rgb(${colorValue}, 0, ${255 - colorValue})`;
    this.stroke_color = `rgb(${255 - colorValue}, 0, ${colorValue})`;

    // Adjust amplitude based on average frequency
    const amplitude = avgFrequency / .5;

    // Get canvas dimensions
    const canvasWidth = this.context.canvas.width;

    // Center the line vertically
    this.y = this.baseY + Math.sin(this.animationTheta) * 50; // Update y position with sine wave

    this.theta = 0; // reset every time
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.moveTo(0, this.y);
    for (let i = 0; i < canvasWidth; i++) {
      this.context.lineTo(i, (Math.sin(this.theta) * amplitude) + this.y);
      this.context.lineTo(i, (Math.sin(this.theta) * amplitude) + this.y + this.yOffset);
      this.theta += this.angularSpeed;
    }
    this.context.stroke(); // set the stroke
  }

  update() {
    // Update the animation angle
    this.animationTheta += this.animationSpeed;
  }
}