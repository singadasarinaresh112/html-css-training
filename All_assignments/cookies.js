// Examples of localStorage, sessionStorage and cookies

// localStorage.setItem('name','bob')
// localStorage.removeItem('name')

// sessionStorage.setItem('name','bob')
// sessionStorage.setItem('name','john')
// console.log(sessionStorage.name)

// document.cookie = 'name=David; expires=Wed, 18 Jan 11:00:00 UTC';
// document.cookie = 'name=David; expires=Wed, 18 Jan 11:00:00 UTC; path=/';

/*function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    let expires = 'expries='+ d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}*/

function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }