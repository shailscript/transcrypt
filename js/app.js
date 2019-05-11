import credentials from './credentials.js'


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.querySelector('input#search').value
    console.log(email)
    var studentInfo = credentials.studentsInfo.filter(stu => {
        return stu.email = email
    })
    const resultContainer = document.getElementById('results')
    if(studentInfo != undefined) {
        const renderResult = () => {
            resultContainer.innerHTML = ""
            resultContainer.style.display = "block"
            studentInfo.forEach(item => {
                let certificate = document.createElement('div')
                let name = document.createElement('span')
                let email = document.createElement('span')
                let school = document.createElement('span')
                let depID = document.createElement('span')
                let courseCode = document.createElement('span')
                let status = document.createElement('span')
                let grade = document.createElement('span')

                certificate.className = 'certificate'
                name.innerHTML = `<strong>Name :</strong> ${item.first_name} ${item.last_name}`
                email.innerHTML = `<strong>Email :</strong> ${item.email}`
                school.innerHTML = `<strong>School :</strong> ${item.school}`
                depID.innerHTML = `<strong>Department ID :</strong> ${item.department_id}`
                courseCode.innerHTML = `<strong>Course Code :</strong> ${item.Course_code}`
                status.innerHTML = `<strong>Status :</strong> ${item.Status}`
                grade.innerHTML = `<strong>Grade :</strong> ${item.Grade}`

                certificate.append(name ,email, school, depID, courseCode, status, grade)
                resultContainer.append(certificate)
            })
        }
        renderResult()
    }
})




   