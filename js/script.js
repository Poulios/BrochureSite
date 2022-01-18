// Selector
const counters = document.querySelectorAll('.counter-number');
// Main function
for(let n of counters) {
  n.innerText=0;
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText.match(/\d+/);
    const seconds =5; // change animation speed here
    const inc = ((target)/seconds)*0.09 + target/(90^2); 
    if(count < target) {
      n.innerText = Math.ceil(count + inc) + "+";
      setTimeout(updateCount, 100);
    } else {        
        n.innerText = target + "+";
    }
  }
  updateCount();
}

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        document.getElementById('navbar_top').classList.add('navbar_scrolled');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
// DOMContentLoaded  end