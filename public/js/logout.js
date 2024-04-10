async function logout() {
    const response = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        window.location.href = ('/');
    } else {
        const data = await response.json();
        alert(data.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#logout').addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });
});