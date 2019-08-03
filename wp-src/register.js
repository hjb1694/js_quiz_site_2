import './navtoggle';
import validator from 'validator';
import axios from 'axios';


document.querySelector('#subbut').addEventListener('click', e => {

    //Prevent default form submission
    e.preventDefault();


    let errs = 0; // errors count
    const errMsgs = []; //  error messages 
    const errBox = document.querySelector('#errbox'); //error box
    errBox.innerHTML = '';  //clear error box 

    // Get form field values
    const fields = {
        name : document.querySelector('#name').value.trim(), 
        email : document.querySelector('#email').value.trim(), 
        createPass : document.querySelector('#createPass').value, 
        confirmPass : document.querySelector('#confirmPass').value
    }

    // Regular expressions that passwords require
    const passwordRegs = {
        caps : /[A-Z]/,
        lowercase : /[a-z]/,
        specialChar : /[$%^&*#@!-]/
    }

    const genError = (message)=>{
        errs++;
        errMsgs.push(`<p>${message}</p>`);
    }


    //Check name length
    if(fields.name.length < 2){

        genError('Please enter a name.');

    }

    //Check if valid email
    if(!validator.isEmail(fields.email)){

        genError('Please enter a valid email address.');

    }

    //Check if password length is lower than 8 characters
    if(fields.createPass.length < 8){

        genError('Password must be at least 8 characters.');

    }

    //Check if password has at least one capital letter
    if(!passwordRegs.caps.test(fields.createPass)){

        genError('Password must contain at least one capital letter.');

    }

    //check if password has at least one lowercase letter
    if(!passwordRegs.lowercase.test(fields.createPass)){

        genError('Password must contain at least one lowercase letter');

    }

    //check if password contains at least one specific, special character
    if(!passwordRegs.specialChar.test(fields.createPass)){

        genError('Password must contain at least one of the following special characters: $%^&*#@!-');

    }


    // Check if password matches confirm password
    if(fields.createPass !== fields.confirmPass){

        genError('Passsword does not match confirm password.');

    }

    if(errs){
        
        for(let msg of errMsgs){

            errBox.insertAdjacentHTML('beforeend',msg);

        }

    } else {

        axios.post('/user/register', {
            name : fields.name, 
            email : fields.email, 
            password : fields.createPass
        })
        .then(res => {

            const resData = res.data;

            if(resData.error){

                errBox.innerHTML = resData.error;

            } else if(resData.success) {

                window.location.href = 'http://localhost:3001/';

            }


        })
        .catch(err => {

            console.log(err);

            errBox.innerHTML = err;

        })


    }


});
