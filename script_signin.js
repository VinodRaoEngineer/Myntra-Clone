const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit",function(event) {

    event.preventDefault()
    // console.log(email.value , password.value)
    const userDetail = {
        email : email.value,
        password : password.value,
    }

    //  console.log(userDetail)
   const savedDetails = JSON.parse( localStorage.getItem("userDetails")) || {} ;
   console.log( "saveDetail:", savedDetails)

   if(userDetail.email === savedDetails.email && userDetail.password === savedDetails.password){
    localStorage.setItem("isAuth", "Authenticated");
    alert("login success")
   }
   else{
    alert("Invalid Credentials")
   }

})