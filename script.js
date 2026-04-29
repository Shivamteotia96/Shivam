function openProject(title, desc) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("title").innerText = title;
  document.getElementById("desc").innerText = desc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
