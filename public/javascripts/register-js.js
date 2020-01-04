window.onload = function() {
}

function register() {
    var form = document.getElementById('form');
    var email = document.getElementById('email');
    var pw = document.getElementById('pw');
    var rpw = document.getElementById('rpw');
    var t = document.getElementById('truely');

    // if (email.value.search('ac.kr') > 0) {
        if ((pw.value != '' && rpw.value != '') && (pw.value == rpw.value)) {
            // send authorification email
            form.submit();
            t.value = '1';
            return true;
        } else {
            alert('Doesn\'t correct pw and rpw');
        }
    // } else {
    //     alert('Invalid email format');
    // }
    t.value = '0';
    return false;
}

