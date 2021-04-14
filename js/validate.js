function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let lat = document.querySelector('#lat');
  let long = document.querySelector('#long');
  let flag = false;
  lat = parseFloat(lat.value);
  long = parseFloat(long.value);

  if((lat > 90 || lat < -90 || isNaN(lat)) && (long > 180 || long < -180 || isNaN(long))){
    document.querySelector('#lat-warning').innerText = "* must be a valid Latitude (-90 to 90)";
    event.preventDefault();
  }
  else{
    if(lat > 90 || lat < -90 || isNaN(lat)){
      document.querySelector('#lat-warning').innerText = "* must be a valid Latitude (-90 to 90)";
      event.preventDefault();
    }
    else{
      document.querySelector('#lat-warning').innerText = "*";
    }
    if(long > 180 || long < -180 || isNaN(long)){
      document.querySelector('#long-warning').innerText = "* must be a valid Longitude (-180 to 180)";
      event.preventDefault();
    }
    else{
      document.querySelector('#long-warning').innerText = "*";
      }
  }
  console.log('TODO - validate the longitude, latitude values before submitting');
  return flag;

  // if(long > 180 || long < -180 || isNaN(long)){
  //   document.querySelector('#long-warning').innerText = "* must be a valid Longitude (-180 to 180)";
  //   flag = false;
  //   event.preventDefault();
  // }
  // else{
  //   document.querySelector('#long-warning').innerText = "*";
  //   flag = true;
  // }
  // else if (lat < 90 || lat > -90 || !isNaN(lat)){
  //   document.querySelector('#lat-warning').innerText = "*";
  //   flag = true;)
  // }
  // else if(long < 180 || long > -180 || isNaN(long)){
  //   document.querySelector('#long-warning').innerText = "*";
  //   flag = true;
  // }

}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
