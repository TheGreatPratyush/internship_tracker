function getApplications() {
  return JSON.parse(localStorage.getItem("applications")) || [];
}

function saveApplications(apps) {
  localStorage.setItem("applications", JSON.stringify(apps));
}
