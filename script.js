console.log("Berhasil Connect");

const inputNamaMenu = document.querySelector("#menu-nama");
const inputHargaMenu = document.querySelector("#menu-harga");
const inputDeskripsiMenu = document.querySelector("#menu-deskripsi");

const previewNama = document.querySelector("#preview-nama");
const previewHarga = document.querySelector("#preview-harga");
const previewDeskripsi = document.querySelector("#preview-deskripsi");

console.log(inputNamaMenu);
console.log(previewNama);

inputNamaMenu.addEventListener("input", function () {
  console.log("Pengguna mengetik nama menu");

  const teksInputan = inputNamaMenu.value;

  if (teksInputan === "") {
    previewNama.textContent = "Nama Menu";
  } else {
    previewNama.textContent = teksInputan;
  }
});

inputHargaMenu.addEventListener("input", function () {
  console.log("Pengguna mengetik harga menu");

  const hargaInputan = inputHargaMenu.value;

  if (hargaInputan === "" || hargaInputan === "0") {
    previewHarga.textContent = "Rp0";
  } else {
    previewHarga.textContent = "Rp" + hargaInputan;
  }
});

inputDeskripsiMenu.addEventListener("input", function () {
  console.log("Pengguna mengetik deskripsi menu");

  const deskripsiInputan = inputDeskripsiMenu.value;

  if (deskripsiInputan === "") {
    previewDeskripsi.textContent = "Deskripsi menu akan muncul di sini.";
  } else {
    previewDeskripsi.textContent = deskripsiInputan;
  }
});
