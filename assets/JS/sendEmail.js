function sendMail(contactForm) {
    emailjs.send("gmail", "elias", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }).then(function(response) {
            console.log("SECCESS", response);
        }, function(error) {
            console.log("FAILED", error);
        }
    );
    return false; //to block from loading a new page without request.
}
