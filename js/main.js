let users = [];

function salvar() {
    let inputEmail = document.getElementById('exampleInputEmail1').value;
    let inputName = document.getElementById('exampleInputName').value;
    let user = {
        email: inputEmail,
        name: inputName
    }
    users.push(user);
    if (users.length > 4) {
        users.shift();
    }
    document.getElementById('register').reset();
    showUsers();
}


function showUsers() {
    for(let i = 1; i <= 4; i++){
        if(users[0]){
            document.getElementById('user1Email').textContent = users[0].email
            document.getElementById('user1Name').textContent = users[0].name
        } else if(!users[0]){
            document.getElementById('user1Email').textContent = 'Sem cadastro'
            document.getElementById('user1Name').textContent = 'Sem cadastro'
        }

        if(users[1]){
            document.getElementById('user2Email').textContent = users[1].email
            document.getElementById('user2Name').textContent = users[1].name
        } else if(!users[1]){
            document.getElementById('user2Email').textContent = 'Sem cadastro'
            document.getElementById('user2Name').textContent = 'Sem cadastro'
        }
        if(users[2]){
            document.getElementById('user3Email').textContent = users[2].email
            document.getElementById('user3Name').textContent = users[2].name
        } else if(!users[2]){
            document.getElementById('user3Email').textContent = 'Sem cadastro'
            document.getElementById('user3Name').textContent = 'Sem cadastro'
        }
        if(users[3]){
            document.getElementById('user4Email').textContent = users[3].email
            document.getElementById('user4Name').textContent = users[3].name
        } else if(!users[3]){
            document.getElementById('user4Email').textContent = 'Sem cadastro'
            document.getElementById('user4Name').textContent = 'Sem cadastro'
        }
    }
}