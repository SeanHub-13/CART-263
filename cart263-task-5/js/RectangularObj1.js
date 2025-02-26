class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x - (w / 2);
    this.y = y - (h / 2);
    this.width = w;
    this.height = h;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.baseY = y;
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

    const colorValue = Math.min(255, Math.max(0, avgFrequency * 10));
    this.fill_color = `rgb(${colorValue}, 0, ${255 - colorValue})`;
    this.stroke_color = `rgb(${255 - colorValue}, 0, ${colorValue})`;

    this.context.stroke(); // set the stroke
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.strokeRect(this.x, this.y, this.width, this.height);
    this.context.moveTo(0, this.y);
  }

  update() {
    //update freestyle
    // this.x+=1;
    //console.log("rectangle update")
  }
}
