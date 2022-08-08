$(document).ready(function() {

    $('#addUser').click(function() {
        console.log('I am clicked')
      $('.menu').toggle("slide");
    });


  // API call to add/create a user
  const createUser = async(item) => {
      console.log(' add items ', JSON.stringify(item))
      const response = await fetch('http://localhost:23826/api/User/CreateUser', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item)
          //console.log("method",item)
      });

      const result = await response.json();
      console.log(' Response is ', result);
      if (result.length >= 1) {
          const alertDiv = document.querySelector(".alert")
          document.getElementById("add-name").value = "";
          document.getElementById("add-phone").value = "";
          document.getElementById("add-city").value = "";
      } else {
          document.querySelector(".message").innerHTML = "Something went wrong!"
      }

  }

  // Add form
  const addForm = document.getElementById('addForm');
  addForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const item = {
        userName: document.getElementById("add-name").value.trim(),
        phonenumber: document.getElementById("add-phone").value.trim(),
        city: document.getElementById("add-city").value.trim(),
      };
      createUser(item);    
      location.href = "index.html"
  });

  // Back button event
  const cancelButton = document.querySelector('input[type=button]');
  cancelButton.addEventListener('click', function(e) {
      location.href = "index.html"
  });
});