let email = document.querySelector('input#email') 
let res = document.querySelector('div#res') 
let er = document.querySelector('div#error')

function submit(){
    if (email.value.length == 0 || 
        email.value == '' ||
        email.value.indexOf('@') == -1 ||
        email.value.indexOf('.') == -1){
            res.innerHTML = ('Please provide a valid email') 
            document.querySelector('div#border').style.borderColor = "hsl(0, 93%, 68%)"
            er.style.display = 'flex'
            er.style.alignItems = 'center'
        } else {
            
        }

}



