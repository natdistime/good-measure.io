let emailForm = document.querySelector("#emailForm");

// create an event listener typw submit

emailForm.addEventListener("submit", e => {
  // get the input values
  let nameInput = document.querySelector("#nameInput").value;
  let birthdayInput = document.querySelector("#birthdayInput").value;
  let contentInput = document.querySelector("#contentInput").value;

  window.open(
    `mailto:info@goodmeasurefoodbank.com?subject=Schedule Appointment&body=Hello Nathalie, my name is ${nameInput} and I would like to book an appointment
      
      <br>
      Regards, ${nameInput}.
    `
  );

  // clean form after submit
  emailForm.reset();

  // prevents the form to go away
  e.preventDefault();
});
