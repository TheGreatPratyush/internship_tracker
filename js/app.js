const form = document.getElementById("appForm");
const appList = document.getElementById("appList");

function renderApplications() {
  const apps = getApplications();
  appList.innerHTML = "";

  const today = new Date();

  apps.forEach((app, index) => {
    const tr = document.createElement("tr");

    const deadlineDate = new Date(app.deadline);
    const diffDays = (deadlineDate - today) / (1000 * 60 * 60 * 24);

    if (diffDays >= 0 && diffDays <= 3) {
      tr.classList.add("deadline-soon");
    }

    tr.innerHTML = `
      <td>${app.company}</td>
      <td>${app.role}</td>
      <td>${app.type}</td>
      <td>${app.status}</td>
      <td>${app.deadline}</td>
      <td><button onclick="deleteApp(${index})">Delete</button></td>
    `;

    appList.appendChild(tr);
  });

  updateDashboard(apps);
}

function deleteApp(index) {
  const apps = getApplications();
  apps.splice(index, 1);
  saveApplications(apps);
  renderApplications();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const app = {
    company: company.value,
    role: role.value,
    type: type.value,
    status: status.value,
    deadline: deadline.value
  };

  const apps = getApplications();
  apps.push(app);
  saveApplications(apps);

  form.reset();
  renderApplications();
});

renderApplications();
