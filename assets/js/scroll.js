let scrollDownText = document.querySelector('.scroll-down-text');
let scrollBtn = document.querySelector('.scroll-btn');


scrollDownText.onclick = function () {
  window.scrollTo ({
    top: 1272,
    behavior: "smooth"
  });
};


window.onscroll = function () {
  if (pageYOffset > 700) {
    scrollBtn.classList.add('active');
  } else {
    scrollBtn.classList.remove('active')
  }
};

scrollBtn.onclick = function () {
  window.scrollTo ({
    top: 0,
    behavior: "smooth"
  });
};
