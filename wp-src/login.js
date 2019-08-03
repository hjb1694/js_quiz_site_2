import './navtoggle';
import axios from 'axios';

document.querySelector('#subbut').addEventListener('click', e => {
    e.preventDefault();

    const errBox = document.querySelector('.errbox');

    const fields = {
        email : document.querySelector('#email').value.trim(), 
        password : document.querySelector('#password').value
    }

    axios.post('http://localhost:3001/user/login', {
        email : fields.email, 
        password : fields.password
    })
    .then(res => {

        console.log(res.data);

        if(res.data.error){

            errBox.innerHTML = res.data.error;

        }else if(res.data.success){

            window.location.href = '/quizzes';

        }


    })
    .catch(err => {

        errBox.innerHTML = err;


    });

    


});
