const ul = document.querySelector("ul"),
  input = document.querySelector(".content ul .tag"),
  tagNumb = document.querySelector(".details span");

let maxTags = 0,
  tags = [];

countTags();
createTag();

function countTags() {
  input.focus();
  tagNumb.innerText = maxTags + tags.length;
}

function createTag() {
  ul.querySelectorAll("li").forEach((li) => li.remove());
  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
      ul.insertAdjacentHTML("afterbegin", liTag);
    });
  countTags();
}

function remove(element, tag) {
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
  element.parentElement.remove();
  countTags();
}

function addTag(e) {
  if (e.key == "Enter") {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (tag.length > 1 && !tags.includes(tag)) {
      if (tags.length < 10) {
        tag.split(",").forEach((tag) => {
          tags.push(tag);
          createTag();
        });
      }
    }
    e.target.value = "";
  }
}

input.addEventListener("keyup", addTag);

const removeBtn = document.querySelector(".details .remove");
removeBtn.addEventListener("click", () => {
  tags.length = 0;
  ul.querySelectorAll("li").forEach((li) => li.remove());
  countTags();
});

function sendWa() {
  // Mengambil nilai dari input nama
  var noMeja = document.getElementById("noMeja").value;
  var name = document.getElementById("name").value;

  // Mengambil nilai dari setiap elemen <li> dalam elemen <ul>
  var orderElements = document.querySelectorAll(".content ul li");
  var order = Array.from(orderElements)
    .map((li) => li.textContent)
    .join(", ");

  // Membuat pesan WhatsApp
  var waMessage =
    "*No. Meja :* " +
    noMeja +
    "\n" +
    "*Nama Pemesan:* " +
    name +
    "\n" +
    "*Pesanan :* " +
    order;

  // Membuat link WhatsApp dengan pesan yang dihasilkan
  var linkWa =
    "https://wa.me/+6282360733742?text=" + encodeURIComponent(waMessage);

  // Membuka jendela baru untuk mengirim pesan WhatsApp
  window.open(linkWa, "_blank");
}

// modal script

const section = document.querySelector("section"),
  show = document.querySelector(".cart .btnCart"),
  close = document.querySelector(".details .remove");

show.addEventListener("click", () => section.classList.add("active"));

close.addEventListener("click", () => section.classList.remove("active"));

// script agar semua card dapat diliat infonya
const cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  const movein = card.querySelector(".image-item");
  const moveout = card.querySelector(".card-body");

  movein.addEventListener("click", () => card.classList.add("move"));
  moveout.addEventListener("click", () => card.classList.remove("move"));
});

// funcion auto scroll "pesan sekarang"

function pesan() {
  var pesanan = document.querySelector(".menu");
  pesanan.scrollIntoView({ behavior: "smooth" });
}
