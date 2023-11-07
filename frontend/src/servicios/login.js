const  login= async () => {
    const inputUsername = document.querySelector("#input-username-login").value;
    const inputPassword = document.querySelector("#input-password-login").value;
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputUsername,
          password: inputPassword,
        }),
        mode: "no-cors",
      };

    const response = await fetch("http://localhost:3000/auth/login", options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    localStorage.setItem("user", response.json());
    console.log(response.json);
  } catch (error) {
    console.error(error);
  }
}