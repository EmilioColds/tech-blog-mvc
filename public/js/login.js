async function loginHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Not logged in!');
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginHandler);