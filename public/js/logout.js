async function logout() {
    const response = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert('Log out failed!');
    }
}

document.querySelector('#logout').addEventListener('click', logout);