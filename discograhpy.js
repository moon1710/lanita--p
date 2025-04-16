const albums = [
  {
    id: 1,
    title: "Born To Die",
    year: "2012",
    cover: "assets/img/BornToDie.png",
  },
  {
    id: 2,
    title: "Ultraviolence",
    year: "2014",
    cover: "assets/img/Ultraviolence.png",
  },
  {
    id: 3,
    title: "Honeymoon",
    year: "2015",
    cover: "assets/img/Honey.png",
  },
  {
    id: 4,
    title: "Lust for Life",
    year: "2017",
    cover: "assets/img/LustForLife.png",
  },
  {
    id: 5,
    title: "Norman Fucking Rockwell!",
    year: "2019",
    cover: "assets/img/NFR.png",
  },
  {
    id: 6,
    title: "Blue Banisters",
    year: "2021",
    cover: "assets/img/BlueBanisters.png",
  },
  {
    id: 7,
    title: "Did You Know That There's a Tunnel Under Ocean Blvd",
    year: "2023",
    cover: "assets/img/DYKTTATUOB.png",
  },
];

const grid = document.getElementById("discography");

albums.forEach((album) => {
  const card = document.createElement("div");
  card.className = "album-card";

  card.innerHTML = `
    <div class="image-wrapper">
      <img src="${album.cover}" alt="${album.title} album cover">
      <div class="album-overlay">
        <a href="album.html?title=${encodeURIComponent(
            album.title
        )}" class="button-link">
        <button>LISTEN</button>
        </a>
      </div>
    </div>
    <div class="album-info">
      <h3>${album.title}</h3>
      <p>${album.year}</p>
    </div>
  `;

  grid.appendChild(card);
});
