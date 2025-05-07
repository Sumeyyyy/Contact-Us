function validation(){
    const name = document.getElementById("Pname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("Rmessage");
feedback.textContent = `Thank you ${name}, Your message has received!`;
feedback.style.color = "black";
return false;
}