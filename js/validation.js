const userLS = localStorage.getItem('userList');

axios.defaults.baseURL = 'https://miki-db-scrapbook-api.herokuapp.com/';

function validateUser() {
    const validate = {
        name: userLS
    }
    
    axios.post('/validate', validate)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        window.location.href = '/index.html';
    });
}

validateUser();