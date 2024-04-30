var API_URL = 'http://localhost:4000/api/v1';

document.getElementById('userFormSub').addEventListener('submit', userLogin);


function userLogin(event) {
    event.preventDefault();
    
    const form = event.target;

    const formData = new FormData(form);
    

    fetch(`${API_URL}/user`, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
    return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}