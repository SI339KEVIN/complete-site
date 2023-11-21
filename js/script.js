function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    var card = document.getElementsByClassName('card');
    for (var i = 0; i < card.length; i++) {
        card[i].classList.toggle('dark-mode');
    }

    var card = document.getElementsByClassName('card-travel');
    for (var i = 0; i < card.length; i++) {
        card[i].classList.toggle('dark-mode');
    }

    var darkToggle = document.getElementsByClassName('dark-toggle')[0];
    darkToggle.classList.toggle('dark-mode');

    var scrollButtonDark = document.getElementsByClassName('scroll-to-top')[0];
    scrollButtonDark.classList.toggle('dark-mode');

    console.log("Dark mode toggled");
  }

// Scroll to top button

// Get the button:
let mybutton = document.getElementById("scrollButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to top on click
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// I used the W3Schools tutorial to create the scroll to top button. I modified it by changing the CSS to better match the current "dark mode" button. I also added a topFunction so that the button supports scrolling to the top onClick.