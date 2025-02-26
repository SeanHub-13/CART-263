class CircularObj {
  constructor(x, y, radius, f_color, s_color, context, drawingBoard, xUpdate, yUpdate) {
    // Position and size information
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.drawingBoard = drawingBoard;
    this.xUpdate = xUpdate;
    this.yUpdate = yUpdate;
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      true
    );
    this.context.fill(); // set the fill
    this.context.lineWidth = 2; //change stroke
    this.context.closePath();
    this.context.stroke();
  }

  update() {
    //update circle
    this.x = this.drawingBoard.mouseOffsetX + (200 - this.xUpdate);
    this.y = this.drawingBoard.mouseOffsetY + (150 - this.yUpdate);
    //console.log("circle update");
  }
}
