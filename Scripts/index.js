$(function(){
  var word_array = [
          {text: "HTML", weight: 15},
          {text: "CSS", weight: 9, link: "http://jquery.com/"},
          {text: "Angular", weight: 6, html: {title: "I can haz any html attribute"}},
          {text: "node.js", weight: 7},
          {text: "Javascript", weight: 15},
          {text: "jQuery", weight: 6},
          {text: "git", weight: 8},
          {text: "gump", weight: 7},
          {text: "youman", weight:3},
          {text: "zepto.js", weight: 9},
          {text: "swiper", weight: 10},
          {text: "materialize.css", weight: 6},
          {text: "jQuery", weight: 13},
          {text: "bootstrap", weight: 15},
          {text: "jQuery", weight: 12},

          // ...as many words as you want
      ];


        // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
        $("#example").jQCloud(word_array);

        var can = document.querySelector('#canvas');
        var cans = document.querySelector('#canvas2')
        var ctx = can.getContext('2d');
        var r = function(deg){
          return (Math.PI/180)*deg
        }

        var draw = function(){
          ctx.width='400';
          ctx.height="400";
          ctx.clearRect(0,0,400,400);

          ctx.save()
          ctx.save()
          ctx.beginPath();
          ctx.translate(200,200)
          ctx.moveTo(5,0);
          ctx.arc(0,0,5,0,r(360));
          ctx.stroke()
          ctx.closePath();
          ctx.restore();

          var now = new Date();
          var s = now.getSeconds();
          var m = now.getMinutes();
          var h =now.getHours();
          var ss = r( s*6 );
          var mm = r( 360*( (m*60+s)/3600)  );
          var hh = r( 360*(h*3600+m*60+s)/43200 );
          // s
          ctx.save();
          ctx.beginPath();
          ctx.translate(200,200);
          ctx.strokeStyle='red';
          ctx.lineWidth = '3';
          ctx.rotate(ss)
          ctx.moveTo(0,5)
          ctx.lineTo(0,10)
          ctx.moveTo(0,-5)
          ctx.lineTo(0,-100);
          ctx.stroke()
          ctx.closePath();
          ctx.restore();

          // m

          ctx.save();
          ctx.beginPath();
          ctx.translate(200,200)
          ctx.rotate(mm)
          ctx.moveTo(0,5)
          ctx.lineTo(0,10)
          ctx.moveTo(0,-5)
          ctx.lineTo(0,-70);
          ctx.stroke()
          ctx.closePath();
          ctx.restore();

          // h

          ctx.save();
          ctx.beginPath();
          ctx.translate(200,200)
          ctx.rotate(hh)
          ctx.moveTo(0,5)
          ctx.lineTo(0,10)
          ctx.moveTo(0,-5)
          ctx.lineTo(0,-40);
          ctx.stroke()
          ctx.closePath();
          ctx.restore();

          ctx.restore();



        }

        draw()
        setInterval(draw,1000)






      });
