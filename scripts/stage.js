
class Dancer {
  constructor (top, left, speed) {
    this.setPosition();
    this.top = top;
    this.left = left;
    this.speed = speed;
    this.notLazy();
  }

  setPosition () {
    let newq = makeNewPosition();
    this.$node = $('<div class="dancer"></div>');
    this.$node.css({top: newq[0], left: newq[1]});
    
  }

  notLazy () {
    let newq = makeNewPosition();
    this.$node.animate({ top: newq[0], left: newq[1]}, this.speed, () => {
      this.notLazy(this.speed);
      
    });
  }  
}

class Tapper extends Dancer {
  constructor (top, left, speed) {
    super(top, left, speed);
    this.$node.addClass('tapper');
  }
}

class Rainbow extends Dancer {
  constructor (top, left, speed) {
    super(top, left, speed);
    this.$node.addClass('rainbow');
  }
}

$(() => {
  $('#regular').on('click', function () {
    let dancer = new Dancer(Math.random() * $('#stage').height(), Math.random() * $('#stage').width(), 2000);
    $('#stage').append(dancer.$node);
  });

  $('#tapper').on('click', function () {
    let tapper = new Tapper(Math.random() * $('#stage').height(), Math.random() * $('#stage').width(), 600);
    $('#stage').append(tapper.$node);
  });
  
  $('#rainbow').on('click', function () {
    let rainbow = new Rainbow(Math.random() * $('#stage').height(), Math.random() * $('#stage').width(), 1200);
    $('#stage').append(rainbow.$node);
  });

  $('#rest').on('click', function () {
    $('.dancer').stop().animate({top: $('#stage').height() - 30}, 2000);
  });

  $('#clean').on('click', function () {
    $('.dancer').remove();
  });

});

// ----------------------------------------------------

function makeNewPosition () {
    
  // Get viewport dimensions (remove the dimension of the div)
  let h = $(window).height() - 50;
  let w = $(window).width() - 50;
  let nh = Math.floor(Math.random() * h);
  let nw = Math.floor(Math.random() * w);
  return [nh,nw];
  
}


// function Dancer (top, left, speed) {
//   const dancer = {};

//   dancer.$node = $('<div class="dancer"></div>');
  
//   dancer.setPosition = function (top, left) {
//     dancer.$node.css({top: top, left: left});
//   };

//   dancer.notLazy = function (speed) {
//     let newq = makeNewPosition();
//     dancer.$node.animate({ top: newq[0], left: newq[1]}, speed, function () {
//       dancer.notLazy(speed);
//     });
//   };
  
//   dancer.setPosition(top, left);
//   dancer.notLazy(speed);
  
//   return dancer;
// }

// function Tapper (top, left, speed) {
//   let tapper = Dancer(top, left, speed);
//   return tapper;
// }

// function Rainbow (top, left, speed) {
//   let rainbow = Dancer(top, left, speed);
//   return rainbow;
// }
