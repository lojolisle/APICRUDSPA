$(document).ready(function() {

    // Edit form
    const editForm = document.getElementById('editForm');

    // API call  Update User
    const updateUserApiCall = async(item) => {
        console.log('item for update ', item)
        const response = await fetch('http://localhost:23826/api/User/UpdateUser', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        const result = await response.json();
        console.log(result);
        if (result.length >= 1) {
            const alertDiv = document.querySelector(".alert")
            // success class
            alertDiv.classList.add('alert-success');
            alertDiv.innerHTML = "User " + item.userName + " has been updated successfully!"
        }
    }

    editForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const itemId = document.getElementById("edit-id").value.trim();
        const item = {
        id: parseInt(itemId, 10),
        userName: document.getElementById("edit-name").value.trim(),
        phonenumber: document.getElementById("edit-phone").value.trim(),
        city: document.getElementById("edit-city").value.trim(),
        };
        updateUserApiCall(item);
        location.href = "index.html"
    
    });

    //Back button event
    const cancelButton = document.querySelector('.editClose');
    cancelButton.addEventListener('click', function(e) {
        location.href = "index.html"
    });

});