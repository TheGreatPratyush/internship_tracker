function updateDashboard(apps) {
  document.getElementById("totalApps").textContent = apps.length;

  const interviews = apps.filter(a => a.status === "Interview").length;
  const offers = apps.filter(a => a.status === "Selected").length;

  document.getElementById("interviews").textContent = interviews;
  document.getElementById("offers").textContent = offers;
}
