const cards = document.querySelectorAll(".card");

console.log(cards);

window.onload = function () {
  cards.forEach((card) => {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector(".card-content .card-text");

    if (textContent.scrollHeight == textContent.clientHeight) {
      seeMoreBtn.style.display = "none";
      textContent.style.height = "fit-content";
    } else {
      card.classList.add("gradient");
    }
  });
};
cards.forEach((card) => {
  let seeMoreBtn = card.querySelector(".see-more-btn");
  let textContent = card.querySelector(".card-content .card-text");

  seeMoreBtn.addEventListener("click", () => {
    card.classList.toggle("active");
    card.classList.toggle("gradient");

    if (card.classList.contains("active")) {
      seeMoreBtn.innerHTML = "See Less";
      textContent.style.height = textContent.scrollHeight + "px";
    } else {
      seeMoreBtn.innerHTML = "See More";
      textContent.style.height = "100px";
    }
  });
});
