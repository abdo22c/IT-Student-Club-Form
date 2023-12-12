function validateForm() {
    event.preventDefault();
    let firstname = document.getElementById("firstName").value;
    let lastname = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("birthdate").value;
    let languages = document.querySelectorAll('input[type="checkbox"]:checked');
    let gender  = document.querySelectorAll('input[type="radio"]:checked')
    
    if (firstname.length === 0 ||/[^a-zA-Z]/.test(firstname)) {
        alert("enter a valid first name");
        return;
    }

    if (/[^a-zA-Z]/.test(lastname) || lastname.length === 0) {
        alert("enter a valid last name");
        return;
    }

    if(dateOfBirth.length === 0){
        alert("enter a birthdate ")
        return;
    }

    let birthYear = new Date(dateOfBirth).getFullYear();
    if (birthYear > 2006) {
        alert("Date of birth should be before 2006.");
        return;
    }

   
    if (languages.length === 0) {
        alert("Select at least one language.");
        return;
    }

    if (gender.length !== 1) {
        alert("select a gender male or female");
        return;
    }

    displayOutput(firstname, lastname, dateOfBirth, languages, gender);

    return true;
}

function displayOutput(firstName, lastName, dateOfBirth, languages, gender) {
    let outputDiv = document.getElementById("output");
    
    outputDiv.innerHTML = `
        <h2>Form Submission Successful!</h2>
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Date of Birth: ${dateOfBirth}</p>
        <p>Languages: ${Array.from(languages).map(lang => lang.value).join(', ')}</p>
        <p>Gender: ${gender[0].value}</p>
    `;
}

