document.addEventListener("DOMContentLoaded", () => {
  const logout = async () => {
    const response = await fetch("/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
      const data = await response.json();
      alert(data.message);
    }
  };

  const logoutLink = document.querySelector("#logout");
  logoutLink.addEventListener("click", (e) => {
    e.preventDefault();
    logout();
  });
});
