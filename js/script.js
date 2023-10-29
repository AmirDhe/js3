
function userForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var province = document.getElementById('province').value;
    var membership = document.querySelector('input[name="membership"]:checked').value;

    var output = "Name: " + firstName + " " + lastName + "<br>" +
                 "Email: " + email + "<br>" +
                 "Address: " + address + "<br>" +
                 "City: " + city + "<br>" +
                 "Province: " + province + "<br>" +
                 "Membership: " + membership;

    document.getElementById('output').innerHTML = output;
    return false; 
}


function myExcelFuns() {
    var numbersStr = document.getElementById('numbers').value;
    var numbers = numbersStr.split(' ').map(Number);

    var functionSelected = document.querySelector('input[name="function"]:checked').value;

    var result;
    switch (functionSelected) {
        case 'AutoSum':
            result = numbers.reduce((acc, curr) => acc + curr, 0);
            break;
        case 'Average':
            result = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
            break;
        case 'Max':
            result = Math.max(...numbers);
            break;
        case 'Min':
            result = Math.min(...numbers);
            break;
    }

    document.getElementById('result').innerHTML = "Result: " + result;
    return false; 
}

