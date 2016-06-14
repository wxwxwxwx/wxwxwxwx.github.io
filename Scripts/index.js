$(function(){
  var word_array = [
          {text: "HTML", weight: 15,link: "http://wxwxwxwx.github.io/blog/2015/html-css"},
          {text: "CSS", weight: 9,link: "http://wxwxwxwx.github.io/blog/2015/html-css"},
          {text: "Angular", weight: 6, html: {title: "I can haz any html attribute"},link: "http://wxwxwxwx.github.io/blog/2016/angular"},
          {text: "node.js", weight: 7,link: "http://jquery.com/"},
          {text: "Javascript", weight: 15,link: "http://wxwxwxwx.github.io/blog/2015/Javascript"},
          {text: "jQuery", weight: 6,link: "http://wxwxwxwx.github.io/blog/2015/Jquery"},
          {text: "DOM", weight: 8,link: "http://wxwxwxwx.github.io/blog/2015/Dom"},
          {text: "Event", weight: 7,link: "http://wxwxwxwx.github.io/blog/2015/Event"},
          {text: "materialize.css", weight: 6,link: "http://jquery.com/"},
          {text: "youman", weight:3,link: "http://jquery.com/"},
          {text: "zepto.js", weight: 9,link: "http://wxwxwxwx.github.io/blog/2016/zepto"},
          {text: "swiper", weight: 3,link: "http://jquery.com/"},

          {text: "bootstrap", weight: 15,link: "http://wxwxwxwx.github.io/blog/2016/bootstrap"},
          {text: "fullpage", weight: 15,link:"http://wxwxwxwx.github.io/blog/2016/fullpage"},
          {text: "Ajax", weight: 9, link: "http://wxwxwxwx.github.io/blog/2015/Ajax"},
          {text: "sass", weight: 6, html: {title: "I can haz any html attribute"},link:"http://wxwxwxwx.github.io/blog/2015/sass"},
          {text: "Canvas", weight: 7,link:"http://wxwxwxwx.github.io/blog/2015/canvas"},
          {text: "Amet", weight: 3}



          // ...as many words as you want
      ];


        // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
        $("#example").jQCloud(word_array,{
          delayedMode:true,
        });

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
