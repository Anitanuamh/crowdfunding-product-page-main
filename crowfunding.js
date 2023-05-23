var popupBtn = document.getElementById("popup-btn");
var closeBtn = document.getElementById("close-btn");
var secondCloseBtn = document.getElementById("second-close-btn");
var popupOverlay = document.getElementById("popup-overlay");
var secondPopupOverlay = document.getElementById("second-popup-overlay");

popupBtn.addEventListener("click", function() {
  popupOverlay.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  popupOverlay.style.display = "none";
  secondPopupOverlay.style.display = "block";
});

secondCloseBtn.addEventListener("click", function() {
  secondPopupOverlay.style.display = "none";
});

var pledgeToggle = document.querySelector(".pledge-toggle");
var extraContent = document.querySelector(".extra-content");

pledgeToggle.addEventListener("click", function() {
  extraContent.style.display = extraContent.style.display === "none" ? "block" : "none";
});

