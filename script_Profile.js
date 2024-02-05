const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit",function(event) {

    event.preventDefault()
    console.log(email.value , password.value)
    alert("account created successfully")
    const userDetail = {
        email : email.value,
        password : password.value,
    }

     localStorage.setItem("userDetails", JSON.stringify(userDetail))

   
})