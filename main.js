 let signUpinputs = document.querySelectorAll('#signUp input');
console.log(signUpinputs);
let loginInputs = document.querySelectorAll('#login input')
console.log(loginInputs);


let loginBtn = document.getElementById('loginBtn')
let signBtn = document.getElementById('signBtn')


let signAlert = document.querySelector('.signAlert');
let logAlert = document.querySelector('.logAlert');


// save data in local storage as object
const data = JSON.parse(localStorage.getItem('userData')) || [];
console.log(data) 


//save names only to use it as Welcome + user name 
const names = JSON.parse(localStorage.getItem('userName')) || [];
console.log(names);


// main 2 functions << signup function & login function

function signUp() 
{
        // pushing data to array 
        data.push({
            id: data.length, // use the current length of the array as the new ID
            name: signUpinputs[0].value,
            email: signUpinputs[1].value,
            password: signUpinputs[2].value
        });

        names.push ({
            name: signUpinputs[0].value
        });

        // Save the updated data array to localStorage
        localStorage.setItem('userData', JSON.stringify(data));
        localStorage.setItem('userName' , JSON.stringify(names))

        // console check
        console.log('saved');
        console.log(data);


        // sign up input check 
        for(let i=0; i<signUpinputs.length; i++){
            if(signUpinputs[i].value === ''){
                signAlert.innerHTML="Inputs Are Required";
                signAlert.style.color='red';
                signAlert.style.fontSize='18px';
            }
            else{
                signAlert.innerHTML="Saved";
                signAlert.style.color='green';
                signAlert.style.fontSize='22px';
            }
        }
}


let found = false;
let Name ='';

function logIn() 
{
    for (let i = 0; i < data.length; i++) {
        // add trim function to handel user is input
        if ( (loginInputs[0].value === data[i].email.trim() ) && ( loginInputs[1].value === data[i].password.trim()) ) {
            console.log('found');
            found = true;
            for(let i=0; i<names.length;i++){
                if(found){
                    Name = names[i].name
                    localStorage.setItem('foundName' , Name);
                    console.log(Name)
                    break;
                }
            }
            welcome();
            break;
        }
    }
    // not found ,, false
    if (!found) {
        console.log('not found');
        logAlert.innerHTML="User Does Not Have Acc";
        logAlert.style.color='red';
        logAlert.style.fontSize='18px';
    }

    
    // found ,, true
    if (found) {
        //move to next page  << welcome page
        welcome();
        setInterval(function(){
            window.location.href = './welcomePage.html'; 
        },500);
    }
}

function welcome(){
            let text = document.getElementById('text');
            welcomeText = `Welcome ${Name}`;
            console.log(welcomeText);
            if(text){
            text.innerHTML = welcomeText;
            }
}
