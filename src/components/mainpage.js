import React from 'react';
import './mainpage.css';
import newone from '../images/newone.png';
const MainPage = () => {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };





    return (
        <div>
            <div class="container">
        <h1  class="display-1">
            <p>Keep all your </p>
        <p  href="" class="typewrite" data-period="2000" data-type='[ "memories", "photos", "journal entries", "places visited" ]'>
          <span class="wrap"></span>
        </p>
        <p> in your adventure book ???? </p>
      </h1>
      
      </div>
      </div>
    
);
};

export default MainPage; 

// class="wrapper" class="static-txt">
//keep all your
//<ul class="dynamic-txts">
//    <li><span>memories</span></li>
//    <li><span>photos</span></li>
//    <li><span>places visited</span></li>
//    <li><span>journal entries </span></li>
//</ul>
//<div class="static-txt">in your adventure book</div>