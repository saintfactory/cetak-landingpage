function ValidateEmail(inputText) {
  // based on regular expression unicode
  var regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(inputText.value.match(regex)) {

    // this should be passed based on form class=form-group in Home.vue, but i don't know how to reference it
    form.group;
    return true;

  }
  else {
    alert("Masukkan alamat email yang benar");
    form.group;
    return false;
  }
}