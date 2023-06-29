import { useState } from 'react'
import './Trending.css'
import Banner from './Banner';

function Trending(props) {
    document.addEventListener('DOMContentLoaded', function() {
    
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(function( carousel ) {
      
            const ele = carousel.querySelector('ul');
            const amountvisible = Math.round(ele.offsetWidth/ele.querySelector('li:nth-child(1)').offsetWidth);
            const bullets = carousel.querySelectorAll('ol li');
            const slides = carousel.querySelectorAll('ul li');
            const nextarrow = carousel.querySelector('.next');
            const prevarrow = carousel.querySelector('.prev');
      
            // Initialize the carousel
            nextarrow.style.display = 'block';
            prevarrow.style.display = 'block';
            ele.scrollLeft = 0;
            bullets[0].classList.add('selected');
            slides[0].classList.add('selected');
            if(amountvisible>1) {
              var removeels = carousel.querySelectorAll('ol li:nth-last-child(-n + '+(amountvisible-1)+')');
              removeels.forEach(function(removeel) {
                removeel.remove();
              });
            }
      
            const setSelected = function() {
                bullets.forEach(function(bullet) {
                   bullet.classList.remove('selected');
                });
                slides.forEach(function(slide) {
                   slide.classList.remove('selected');
                });
                const scrolllength = carousel.querySelector('ul li:nth-child(2)').offsetLeft - carousel.querySelector('ul li:nth-child(1)').offsetLeft;
                const nthchild = (Math.round((ele.scrollLeft/scrolllength)+1));
                carousel.querySelector('ol li:nth-child('+nthchild+')').classList.add('selected'); 
                carousel.querySelector('ul li:nth-child('+nthchild+')').classList.add('selected'); 
                if(carousel.parentElement.parentElement.querySelector('.dynamictitle')) {
                    const title = carousel.querySelector('ul li:nth-child('+nthchild+') img').getAttribute('title'); 
                    if(title) carousel.parentElement.parentElement.querySelector('.dynamictitle').innerHTML = title;
                }
            }
      
            const scrollTo = function(event) {
                event.preventDefault();
                ele.scrollLeft = ele.querySelector(this.getAttribute('href')).offsetLeft;
            }
            
            const nextSlide = function() {
                if(!carousel.querySelector('ol li:last-child').classList.contains('selected')) {
                    carousel.querySelector('ol li.selected').nextElementSibling.querySelector('a').click();
                } else {
                    carousel.querySelector('ol li:first-child a').click();
                }
            }
      
            const prevSlide = function() {
                if(!carousel.querySelector('ol li:first-child').classList.contains('selected')) {
                    carousel.querySelector('ol li.selected').previousElementSibling.querySelector('a').click();
                } else {
                    carousel.querySelector('ol li:last-child a').click();
                }
            }
            
            const setInteracted = function() {
              ele.classList.add('interacted');
            }
                
            // Attach the handlers
            ele.addEventListener("scroll", debounce(setSelected));
            ele.addEventListener("touchstart", setInteracted);
            ele.addEventListener('keydown', function (e){
                if(e.key == 'ArrowLeft') ele.classList.add('interacted');
                if(e.key == 'ArrowRight') ele.classList.add('interacted');
            });
      
            nextarrow.addEventListener("click", nextSlide);
            nextarrow.addEventListener("mousedown", setInteracted);
            nextarrow.addEventListener("touchstart", setInteracted);
      
            prevarrow.addEventListener("click", prevSlide);
            prevarrow.addEventListener("mousedown", setInteracted);
            prevarrow.addEventListener("touchstart", setInteracted);
      
            bullets.forEach(function(bullet) {
              bullet.querySelector('a').addEventListener('click', scrollTo);
              bullet.addEventListener("mousedown", setInteracted);
              bullet.addEventListener("touchstart", setInteracted);
            });
      
            //setInterval for autoplay
            if(carousel.getAttribute('duration')) {
              setInterval(function(){ 
                if (ele != document.querySelector(".carousel:hover ul") && ele.classList.contains('interacted')==false) {
                  nextarrow.click();
                }
              }, carousel.getAttribute('duration'));
            }
          
          
        }); //end foreach
      
      }); //end onload
      
    const trending = props.trending.slice(1, 5);
      
      /**
      * Debounce functions for better performance
      * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
      * @param  {Function} fn The function to debounce
      */
      function debounce (fn) {
      // Setup a timer
      let timeout;
      // Return a function to run debounced
      return function () {
        // Setup the arguments
        let context = this;
        let args = arguments;
        // If there's a timer, cancel it
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }
        // Setup the new requestAnimationFrame()
        timeout = window.requestAnimationFrame(function () {
          fn.apply(context, args);
        });
      };
      };
    return (
        <>

            <div className="carousel" duration="7000">
                <ul tabIndex="0">

                    <li id="c1_slide1">
                        <Banner 
                            name={trending[0].Name}
                            genre={trending[0].Genre}
                            author={trending[0].Author}
                            img={trending[0].Cover}
                            description={trending[0].content.substring(0, 100) + '...'}
                        
                        />
                    </li>

                    <li id="c1_slide2">
                        <Banner 
                            name={trending[1].Name}
                            genre={trending[1].Genre}
                            author={trending[1].Author}
                            img={trending[1].Cover}
                            description={trending[1].content.substring(0, 100) + '...'}
                        />
                    </li>

                    <li id="c1_slide3">
                        <Banner 
                            name={trending[2].Name}
                            genre={trending[2].Genre}
                            author={trending[2].Author}
                            img={trending[2].Cover}
                            description={trending[2].content.substring(0, 100) + '...'}
                        />  
                    </li>

                    <li id="c1_slide4">
                        <Banner 
                            name={trending[3].Name}
                            genre={trending[3].Genre}
                            author={trending[3].Author}
                            img={trending[3].Cover}
                            description={trending[3].content.substring(0, 100) + '...'}
                        />
                    </li>



                </ul>
                <ol>
                    <li><a href="#c1_slide1"></a></li>
                    <li><a href="#c1_slide2"></a></li>
                    <li><a href="#c1_slide3"></a></li>
                    <li><a href="#c1_slide4"></a></li>
                </ol>
                <div className="prev">&lsaquo;</div>
                <div className="next">&rsaquo;</div>
            </div>
        </>
    )
}

export default Trending