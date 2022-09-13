const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})
window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content-inner') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
});

const form = document.getElementById("form")
const button = document.getElementById("closeBtn")

form.addEventListener("input", update)
form.addEventListener("change", update)

function update() {
  const isRequired = form.checkValidity()

  if (isRequired) {
    button.style.opacity = 1
    button.style.cursor = "pointer"
    return
  }
}


function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button');