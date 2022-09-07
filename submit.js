/* method to give validation when mandatory check box is not checked */
function ValidateCheckBox() {
    var checkedItemCount = document.querySelectorAll("input[id=myCheck]:checked").length;
    checkedItemCount == 0 ? document.getElementById("myCheck").setAttribute("required","true")
    : document.getElementById("myCheck").removeAttribute("required");
  }
/* method to return if all mandatory parameters are filled  */
  function ValidateMandatoryParameters() {
    return document.getElementById("official-name").value != "" &&
    document.getElementById("myCheck").getAttribute("required") == null &&
    document.getElementById("country").value != "";
  }
/* method called when form is submitted*/
function submitForm(){
 
  ValidateCheckBox();
  var allValuesInputed = ValidateMandatoryParameters();

  var officialName = document.getElementById("official-name").value;
  document.getElementById("company-name").innerHTML = officialName;

  var commercialName = document.getElementById("commercial-name").value;
  document.getElementById("com-name").innerHTML = commercialName;

  var typeOfCompany = document.querySelector("input[id=company]:checked").value;
  document.getElementById("company-type").innerHTML = typeOfCompany;

  let services = [];
  document.querySelectorAll("input[id=myCheck]:checked")
  .forEach(element => services.push(element.defaultValue));
  document.getElementById("services").innerHTML = services;
  
  var countryOfOperation =  document.getElementById("country").value;
  document.getElementById("country-of-op").innerHTML = countryOfOperation;
  
  let companyProfile = [{
    "Official Company Name" : officialName,
    "Commercial Name": commercialName,
    "Type Of Company": typeOfCompany,
    "Services": services,
    "Country Of Operation": countryOfOperation
}];

if(allValuesInputed == true) alert(JSON.stringify(companyProfile));
/* return false used here to stop screen to reload after successful submission */
return !allValuesInputed;
}
