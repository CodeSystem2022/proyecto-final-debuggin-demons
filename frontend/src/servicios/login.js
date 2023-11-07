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