let email = document.getElementsByName('email')[0]
let pas = document.getElementsByName('password')[0]
let number=document.getElementsByName('ph')[0]

let btn = document.getElementsByTagName('button')[0]

let obj = {}
  btn.addEventListener("click", function () {
    obj.email = email.value;
    obj.pas = pas.value;
    obj.number=number.value;

    let dis = document.getElementById('main')
    dis.innerHTML = `<h2>USER DETAILS</h2><p>username=${obj.email}<br>Password=${obj.pas}<br>Ph-No=${obj.number}</p>`

    dis.style.color = 'red';
    // dis.styleh2.color='blue'               
    dis.style.fontSize = '10px';           
    dis.style.border = '1px solid black'; 
    dis.style.boxSizing = 'border-box';   
    // dis.style.textAlign = 'center';
    dis.style.width='200px'


    let h2 = dis.getElementsByTagName('h2')[0];  
    h2.style.color = 'blue'; 
    h2.style.marginLeft = '60px';

    email.value = "";
    pas.value = "";
    number.value="";
})
console.log(obj) 