// github user finder example

$(document).ready(function() {
  $(document).on('keypress', '#username', function(){
    if (event.which === 13) {
      var input = $(this);
      var username = input.val();
      var xmlhttp = getGithubInfo(username);
      showUser(xmlhttp);
      console.log('username was: ' + username);
    }
  });
});

function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

  var data = xmlhttp.responseText;

  return xmlhttp;

  console.log(data);
}

function showUser(xmlhttp) {
  if(xmlhttp.status === 200) {
    var json = xmlhttp.responseText;
    var user = JSON.parse(json);
    $("h2").text(user.login + " 's Github user #" + user.id);
    $("div.information").append('<a href="' + user.html_url + '">Profile</a>');
    $("div.avatar").append('<img src="' + user.avatar_url + '">');
    console.log(user);
  } else {
    console.log("Error");
}
}
