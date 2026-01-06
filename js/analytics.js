function updateDashboard(apps) {
  const total = apps.length;
  const interviews = apps.filter(a => a.status === "Interview").length;
  const offers = apps.filter(a => a.status === "Selected").length;

  document.getElementById("totalApps").textContent = total;
  document.getElementById("interviews").textContent = interviews;
  document.getElementById("offers").textContent = offers;


  const rate = total > 0 ? Math.round((offers / total) * 100) : 0;
  const bar = document.getElementById("selectionRateBar");
  if (bar) {
    bar.style.width = rate + "%";
    document.getElementById("rateLabel").textContent = rate + "% Hired";
  }
}