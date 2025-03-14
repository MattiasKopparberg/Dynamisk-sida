//hamburger menu made with knowledge retained from "övning nav-bar" and reading about classList on w3schools.
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".navContent").classList.toggle("active");
});
//same as hamburger menu, but consulting ChatGPT for where to start and suggestions on dynamic JS elements
// with specific instructions to not to give code or solutions. And only answers when i got stuck such as
// "give the header a new class to dynamically change styling".
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

function fetchResume() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const experienceSection = document.getElementById("experience");

      data.experience.forEach((job) => {
        const position = job.Position;
        const company = job.Company;
        const date = job.Date;
        const description = job.Description;
        const image = job.Image;

        const experienceDiv = document.createElement("div");
        experienceDiv.classList.add("resumeColumn");

        const leftColumn = document.createElement("div");
        leftColumn.classList.add("leftColumn");
        leftColumn.innerHTML = `
                  <strong>${position} at ${company} (${date})</strong><br>
                  <p>${description}</p>
              `;

        const rightColumn = document.createElement("div");
        rightColumn.classList.add("rightColumn");
        if (image) {
          rightColumn.innerHTML = `<img src="${image}" alt="${position}">`;
        }

        experienceDiv.appendChild(leftColumn);
        experienceDiv.appendChild(rightColumn);

        experienceSection.appendChild(experienceDiv);
      });

      const educationSection = document.getElementById("education");
      data.education.forEach((course) => {
        const student = course.degree;
        const school = course.institution;
        const duration = course.date;
        const curriculum = course.curriculum;
        const diploma = course.diploma;

        const educationDiv = document.createElement("div");
        educationDiv.classList.add("resumeColumn");

        const leftColumn = document.createElement("div");
        leftColumn.classList.add("leftColumn");
        leftColumn.innerHTML = `
                    <strong>${student} at ${school} (${duration})</strong><br>
                    <p>${curriculum}</p>
                `;

        const rightColumn = document.createElement("div");
        rightColumn.classList.add("rightColumn");
        if (diploma) {
          rightColumn.innerHTML = `<img src="${diploma}" alt="${student}">
          <h3>Click to view diploma</h3>`;
          rightColumn.addEventListener("click", () => {
            window.open(diploma);
          });
        }

        educationDiv.appendChild(leftColumn);
        educationDiv.appendChild(rightColumn);

        educationSection.appendChild(educationDiv);
      });
    });
  }