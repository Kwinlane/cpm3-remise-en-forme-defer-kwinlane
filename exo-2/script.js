const btn = document.querySelector('.btn')


function validateForm (){
    var name = document.getElementById('name');
    var mail = document.getElementById('mail');
    var msg = document.getElementById('msg');
    if (name == null || name == "",mail == null || mail == "",msg == null || msg == "")
    alert("Veuillez remplir tous les champs !");
    return false;
}

btn.addEventListener('click', validateForm);


