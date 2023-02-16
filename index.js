const myForm = document.getElementById('myForm')
const Email = document.getElementById('inputEmail4');
const Password = document.getElementById('inputPassword4');
const Name = document.getElementById('inputName4');
const Mobile = document.getElementById('inputMobile4');
const DOB = document.getElementById('inputDob4');
const Gender = document.getElementById('inputGroupSelect01');


function openmodal() {
    document.getElementById("updating").style.display = "none";
    document.getElementById("adding").style.display = "block";
    var len = document.getElementsByTagName("input").length
    for (let index = 0; index < len; index++) {
        document.getElementsByTagName("input")[index].removeAttribute("style");
    }
    myForm.reset();
    // console.log(DOB.value);
}
// Onload 
function showData() {
    data1 = JSON.parse(localStorage.getItem('items'));
    console.log(data1);
    data1.forEach((i, index) => {
        document.getElementById("data").innerHTML += `<tr>
            <td>${i.Email}</td>
            <td>${i.Password}</td>
            <td>${i.Name}</td>
            <td>${i.Mobile}</td>
            <td>${i.Date}</td>
            <td>${i.Gender}</td>
            <td><button class='btn btn-outline-secondary' data-toggle='modal' onclick='openMod(this,${index})' data-target='#exampleModalCenter'>Edit</button>
            <button class='btn btn-outline-danger' onclick='deleteAl(this,${index})'>Delete</button></td>
            </tr> `
    })
}
// Onload 
function alert() {
    location.reload();
}
// Add Data 
function addData() {

    if (ValidateName() == true && ValidateEmail() == true && ValidateMobile() == true && ValidateDate() == true && ValidateGender() == true && ValidatePassword() == true) {
        if (localStorage.getItem("items") == null) {
            var itemsArray = [];
        }
        else {
            var itemsArray = JSON.parse(localStorage.getItem("items"))
        }
        userdetail = {
            Email: Email.value,
            Password: Password.value,
            Name: Name.value,
            Mobile: Mobile.value,
            Date: DOB.value,
            Gender: Gender.value
        };
        itemsArray.push(userdetail)
        localStorage.setItem('items', JSON.stringify(itemsArray))
        data1 = JSON.parse(localStorage.getItem('items'));

        document.getElementById("success").style.display = "block";
        document.getElementById("failure").style.display = "none";
        setTimeout(alert, 1000);

    }
    else {
        console.log("False");
        document.getElementById("success").style.display = "none";
        document.getElementById("failure").style.display = "block";
        setTimeout(alert, 1000);
    }

}

// Validation
// Add Data 


// Delete Data 
function deleteAl(e, ind) {
    data = JSON.parse(localStorage.getItem('items'));
    data.splice(ind, 1)
    localStorage.setItem('items', JSON.stringify(data))
    e.parentElement.parentElement.remove();
    alert();
}
// Delete Data 

// Edit 
function openMod(e, id) {
    document.getElementById("updating").style.display = "block";
    document.getElementById("adding").style.display = "none";
    Email.value = e.parentElement.parentElement.cells[0].innerHTML;
    Password.value = e.parentElement.parentElement.cells[1].innerHTML;
    Name.value = e.parentElement.parentElement.cells[2].innerHTML;
    Mobile.value = e.parentElement.parentElement.cells[3].innerHTML;
    DOB.value = e.parentElement.parentElement.cells[4].innerHTML;
    Gender.value = e.parentElement.parentElement.cells[5].innerHTML;
    btn = document.getElementById("updating");
    data = JSON.parse(localStorage.getItem('items'));
    btn.addEventListener("click", function () {
        data[id] = {
            Email: Email.value,
            Password: Password.value,
            Name: Name.value,
            Mobile: Mobile.value,
            Date: DOB.value,
            Gender: Gender.value
        }
        console.log(data);
        localStorage.setItem('items', JSON.stringify(data))
        location.reload();
    })
}

// Edit     


// Validation 
function ValidateName() {
    var check = /^[a-zA-Z]{3,10}$/;
    if (Name.value == '' || check.test(Name.value) == false) {
        Name.style.border = "1px solid red"
        return false;
    }
    else {
        Name.style.border = "1px solid green"
        return true;
    }
}


function ValidateEmail() {
    var email = /\S+@\S+\.\S+/;
    if (Email.value == '' || email.test(Email.value) == false) {
        Email.style.border = "1px solid red";
        return false;
    }
    else {
        Email.style.border = "1px solid green";
        return true;
    }
}
function ValidatePassword() {
    if (Password.value == '') {
        Password.style.border = "1px solid red"
        return false;
    }
    else {
        Password.style.border = "1px solid green"
        return true;
    }
}

function ValidateMobile() {
    var mobile = /^[0-9]{10}$/
    if (Mobile.value == '' || mobile.test(Mobile.value) == false) {
        Mobile.style.border = "1px solid red"
        return false;
    }
    else {
        Mobile.style.border = "1px solid green";
        return true;
    }
}
function ValidateDate() {
    var date = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/
    if (DOB.value == '' || date.test(DOB.value) == false) {
        DOB.style.border = "1px solid red";
        return false;
    }
    else {
        DOB.style.border = "1px solid green";
        return true;
    }
}
function ValidateGender() {
    if (Gender.value == '') {
        Gender.style.border = "1px solid red"
        return false;
    }
    else {
        Gender.style.border = "1px solid green";
        return true;
    }
}