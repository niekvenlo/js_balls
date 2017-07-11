$(function() {

  // Helper method
  function _rand(n) {
    return Math.floor(Math.random()*n)
  }

  function Ball(e) {
    // Add to array
    this.id = balls_array.length;

    // Set physical characteristics
    this.diameter = 50+_rand(40);

    // Set position and velicity
    this.pos_x = e.pageX-this.diameter/2;
    this.pos_y = e.pageY-this.diameter/2;
    this.vel_x = 1+_rand(4);
    this.vel_y = 0+_rand(2);

    // Add ball to tracker array
    balls_array.push(this);

    // Paint ball to the screen to init
    this.paint()
  }
  // Create DOM element and set base parameter
  Ball.prototype.paint = function() {
    str_ball = '<div id="ball_'+this.id+'" class="ball"></div>';
    $('body').append(str_ball);
    dom_ball = $('#ball_'+this.id)[0]
    dom_ball.style.width = this.diameter+'px';
    dom_ball.style.height = this.diameter+'px';
  }
  // Update DOM element
  Ball.prototype.move = function () {
    this.pos_x = this.pos_x + this.vel_x;
    this.pos_y = this.pos_y + this.vel_y;
    $('#ball_'+this.id).css({
      left: this.pos_x+'px',
      top: this.pos_y+'px'
    });
  };

  var balls_array = [];
  $(document).click(function(e) { new Ball(e) });

  setInterval(balls_move, 100);

  function balls_move() {
    balls_array.forEach( function(ball) {
      ball.move()
    })
  }
});
