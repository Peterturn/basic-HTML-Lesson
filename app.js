fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    const userData = data.results[0];
    const userDataContainer = document.getElementById("user-card");
    // console.log(userDataContainer);
    userDataContainer.innerHTML = `
        <p>Name: ${userData.name.first} ${userData.name.last}</p>
        <p>Email: ${userData.email}</p>
        <p>Phone: ${userData.phone}</p>
        <p>Location: ${userData.location.city}, ${userData.location.country}</p>
        <img src="${userData.picture.medium}" alt="User Picture">
    `;
  })
  .catch((error) => {
    console.error("Error:", error);
  });