document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')
    const id = document.getElementById('id')
    const password = document.getElementById('password')
    btn.addEventListener('click', () => {
        login()
        
    })

    function login() {
        const req = {
            id : id.value,
            password : password.value
        }
        console.log(req)
    }
})