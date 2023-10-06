var name = prompt("Введите свое имя")
var surName = prompt("Введите свое фамилие")
var years = prompt("Введите свой возрост")
if (years <= 18){
    alert("Привет " + name)
}else if( years >= 18 && years <= 60){
    alert('Здравствуйте, ' + surName + ' ' + name )
}else if (years >= 60 && years <= 80) {
    alert('Добро пожаловать, ' + surName + ' ' + name)
}else {
    console.error('Произошла ошибка')
}