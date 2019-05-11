import credentials from './credentials.js'


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.querySelector('input#search').value
    console.log(email)
    var studentInfo = credentials.studentsInfo.find(stu => {
        return stu.name = email
    })
    if(studentInfo != undefined) {
        alert('found!')
    }
})
   