document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')
    const id = document.getElementById('id')
    const password = document.getElementById('password')
    btn.addEventListener('click', () => {
        login()
        
    })

    function login() {
        const data = {
            id:id.value,
            password:password.value
        }
        
        fetch('/login', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }).then(res => res.json()).
        then(data => {
            if(data.success){
                location.href = '/'
            }else{
                alert(data.msg)
            }
        })
    }
})