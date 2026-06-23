const baseURL = "http://localhost:5000";

const petForm = document.getElementById("petForm");

if (petForm) {
  petForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const petName = document.getElementById("petName").value;
    const type = document.getElementById("type").value;
    const breed = document.getElementById("breed").value;
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value;

    const token = localStorage.getItem("token");

    const res = await fetch(`${baseURL}/api/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({ petName, type, breed, age, location })
    });

    const data = await res.json();
    alert("Pet Added Successfully");
    window.location.href = "dashboard.html";
  });
}

const petList = document.getElementById("petList");

if (petList) {
  fetch(`${baseURL}/api/pets`)
    .then(res => res.json())
    .then(data => {
      data.forEach(pet => {
        petList.innerHTML += `
          <div class="card">
            <h3>${pet.petName}</h3>
            <p>Type: ${pet.type}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Age: ${pet.age}</p>
            <p>Location: ${pet.location}</p>
          </div>
        `;
      });
    });
}