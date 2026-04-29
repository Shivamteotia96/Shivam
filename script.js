// Smooth scroll (better control than CSS)
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Project modal
function openProject(title, desc) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("title");
  const modalDesc = document.getElementById("desc");

  modal.style.display = "block";
  modalTitle.innerText = title;
  modalDesc.innerText = desc;
}

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
