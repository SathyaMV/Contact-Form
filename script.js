const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");
const dob = document.getElementById("date");
const job = document.querySelector("#job");
const company = document.querySelector("#company");
const sector = document.querySelector("#sector");
const check = document.querySelector("#check");
const radio = document.querySelector("#radio");
const submitBtn = document.querySelector("#submit");
const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // From validation function
  formValid();

  // Storing input values inside variables
  let checkboxes = document.querySelectorAll('input[name="checker"]:checked');
  let output = [];
  checkboxes.forEach((checkbox) => {
    output.push(checkbox.value);
  });
  let firstNameVal = firstName.value;
  let lastNameVal = lastName.value;
  let emailVal = email.value;
  let mobileVal = mobile.value;
  let dobVal = dob.value;
  let jobVal = job.value;
  let companyVal = company.value;
  let sectorVal = sector.value;
  let radioVal = form.radio.value;
  let checkVal = output;

  // Values inside the variables are pushed inside an array
  const formValue = [];

  formValue.push({
    firstName: firstNameVal,
    lastName: lastNameVal,
    email: emailVal,
    mobile: mobileVal,
    dob: dobVal,
    job: jobVal,
    company: companyVal,
    sector: sectorVal,
    check: checkVal,
    radio: radioVal,
  });

  formValue.forEach((e) => {
    console.log(e);
  });

  const validation = formValue.map((item) => {
    return Boolean(
      item.firstName &&
        item.lastName &&
        item.email &&
        item.mobile &&
        item.dob &&
        item.job &&
        item.company &&
        item.sector &&
        item.check[0] &&
        item.radio
    );
  });

  console.log(validation);
  if (validation[0] === true) {
    alert("Form Submitted Successfully");
  }
});

function formValid() {
  let valid = true;
  // First Name Validation
  if (firstName.value.length == 0) {
    document.getElementById("firstNameErr").innerText =
      "* Please enter first name";
  } else {
    document.getElementById("firstNameErr").innerText = "";
  }

  // Last Name Validation
  if (lastName.value == 0) {
    document.getElementById("lastNameErr").innerText =
      "* Please enter last name";
  } else {
    document.getElementById("lastNameErr").innerText = "";
  }

  // Email Validation
  let mail = email.value.trim();
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.length == 0) {
    document.getElementById("emailErr").innerText =
      "* Please enter an email address";
  } else if (!emailPattern.test(mail)) {
    document.getElementById("emailErr").innerText =
      "* Please enter a valid email address";
  } else {
    document.getElementById("emailErr").innerText = "";
  }

  // Phone Number Validation
  if (mobile.value.length == 0) {
    document.getElementById("mobileErr").innerText =
      "* Please enter a mobile number";
  } else {
    document.getElementById("mobileErr").innerText = "";
  }

  // Date of birth Validation
  if (dob.value.length == "") {
    document.getElementById("dateErr").innerText =
      "* Please enter date of birth (dd/mm/yyy)";
  } else {
    document.getElementById("dateErr").innerText = "";
  }

  // Job Title Validation
  const jobValue = job.value.trim();
  if (jobValue == "") {
    document.getElementById("jobErr").innerText = "* Please select a job title";
  } else {
    document.getElementById("jobErr").innerText = "";
  }

  // Company Validaton
  if (company.value.length == 0) {
    document.getElementById("companyErr").innerText = "* Please enter company";
  } else {
    document.getElementById("companyErr").innerText = "";
  }

  // Sector Validation
  const sectorValue = sector.value.trim();
  if (sectorValue == "") {
    document.getElementById("sectorErr").innerText = "* Please select a sector";
  } else {
    document.getElementById("sectorErr").innerText = "";
  }

  // Checkbox Validation
  if (
    form.checker[0].checked == false &&
    form.checker[1].checked == false &&
    form.checker[2].checked == false &&
    form.checker[3].checked == false &&
    form.checker[4].checked == false
  ) {
    document.getElementById("checkErr").innerText =
      "* Please select atleast one option";
  } else {
    document.getElementById("checkErr").innerText = "";
  }

  // Radio Validation
  if (form.radio[0].checked == false && form.radio[1].checked == false) {
    document.getElementById("radioErr").innerText = "* Please select field";
  } else {
    document.getElementById("radioErr").innerText = "";
  }

  return valid;
}
