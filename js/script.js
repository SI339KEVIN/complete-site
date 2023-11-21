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

    console.log("Dark mode toggled");
  }