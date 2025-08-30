function showRegister(){
    document.getElementById("homeBox").style.display="none";
    document.getElementById("registerForm").style.display="block";

}

function showLogin(){
    document.getElementById("homeBox").style.display="none";
    document.getElementById("loginForm").style.display="block";
}

function goHome(){
    document.getElementById("registerForm").style.display="none";
    document.getElementById("loginForm").style.display="none";
    document.getElementById("homeBox").style.display="block";
}

function register(){
    let user=document.getElementById("regUser").value;
    let pass=document.getElementById("regPass").value;

    if(user==""  || pass==""){
        alert("Please fill all the fields");
        return;
    }

    localStorage.setItem(user,pass);
    alert("Registration Successful");
    goHome();

}

function login(){
    let user=document.getElementById("logUser").value;
    let pass=document.getElementById("logPass").value;
    let storedPass=localStorage.getItem(user);
    if(storedPass && storedPass===pass){
        // alert("Login Successful");
        document.getElementById("loginForm").style.display="none";
        document.getElementById("securedPage").style.display="block";
        document.getElementById("userDisplay").innerText=user;
    }
    else{
        alert("Invalid Credentials");
    }
}

function logout(){
    document.getElementById("securedPage").style.display="none";
    document.getElementById("homeBox").style.display="block";
}