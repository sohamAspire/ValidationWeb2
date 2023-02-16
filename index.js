const myForm = document.getElementById('myForm')
const Email = document.getElementById('inputEmail4');
const Password = document.getElementById('inputPassword4');
const Name = document.getElementById('inputName4');
const Mobile = document.getElementById('inputMobile4');
const DOB = document.getElementById('inputDob4');
const Gender = document.getElementById('inputGroupSelect01');
document.getElementById("success").style.display = "none";
document.getElementById("failure").style.display = "none";

function openmodal() {
    document.getElementById("updating").style.display = "none";
    document.getElementById("adding").style.display = "block";
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

// Add Data 
function addData() {

    if (Name.value == '' || Email.value == '' || Mobile.value == '' || DOB == '' || Gender == '' || Password == '') {

        document.getElementById("success").style.display = "none";
        document.getElementById("failure").style.display = "block";
    }

    else {
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
        // console.log(data1);
        document.getElementById("success").style.display = "block";
        document.getElementById("failure").style.display = "none";
        setTimeout(alert, 1000);
        function alert() {
            location.reload();
        }

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
}
// Delete Data 

// Edit 
function openMod(e, id) {
    document.getElementById("updating").style.display = "block";
    document.getElementById("adding").style.display = "none";
    Email.value = e.parentElement.parentElement.cells[0].innerHTML;
    Password.value = e.parentElement.parentElement.cells[1].innerHTML;
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