async function logout() {
    const response = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        window.location.replace('/');
    } else {
        const data = await response.json();
        alert(data.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const logoutLink = document.querySelector('#logout');
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });
});