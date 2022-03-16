// business logic
function Contact(first, last, city, county) {
  this.firstName = first;
  this.lastName = last;
  this.cityName = city;
  this.countyName = county;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedCityName = $("input#new-city-name").val();
    var inputtedCountyName = $("input#new-county-name").val();
    if (inputtedFirstName.length != ""){
      var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedCityName, inputtedCountyName);

      $("ul#contacts").append("<li><span class=\"contact\">" + newContact.firstName + " " + newContact.lastName + "</span></li>");
  
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input#new-city-name").val("");
      $("input#new-county-name").val("");
    }

    if ($(".contact") != 0) {
      $(".contact").last().click(function() {
        $("#show-contact").show(); // show-contact
        $("#show-contact h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $(".city-name").text(newContact.cityName);
        $(".county-name").text(newContact.countyName);
      });  
    }
  });
}); 


// business logic
function Contact(first, last, city, county) {
  this.firstName = first;
  this.lastName = last;
  this.cityName = city;
  this.countyName = county;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}