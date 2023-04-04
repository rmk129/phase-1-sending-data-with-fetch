// Add your code here
function submitData (sname, semail) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: sname,
            email: semail,
        })
        
    })
    .then(function (resp) {
        return resp.json();
    })
    .then(function(e) {
        document.body.innerHTML = e['id']
    })
    .catch(function (error) {
        document.body.innerHTML = error.message
    })
    
}




// function fetchPost (idObj) {
    
//     return fetch('http://localhost:3000/users', {
//         method: 'POST', 
//         headers: {
//             'Content-Type': 'application.json',
//             "Accept": "application/json",
//         },
//         body: JSON.stringify(idObj),
//     })
//     .then(resp => resp.json())
// }