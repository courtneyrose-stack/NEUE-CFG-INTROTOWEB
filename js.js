document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submit").addEventListener("click", function(){
        var form = {};

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        if(name === "" | email === "" | query ===""){ //if empty stop function
            alert("Please complete the form");
            return;
        }

        form.name = name;
        form.email = email;

        var confirm = "Thanks " + form.name + " for signing up using the following email: " + form.email;

        document.getElementById("demo").innerHTML = confirm;
    });
});