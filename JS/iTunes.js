// Obtener el nombre del álbum desde los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const albumQuery = params.get("title"); 

const container = document.getElementById("album-details");

if (!albumQuery) {
  container.innerHTML = "<p>No se especificó ningún álbum.</p>";
} else {
  fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      albumQuery
    )}+lana+del+rey&entity=song&limit=10`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.resultCount === 0) {
        container.innerHTML = `<p>No se encontraron canciones para <strong>${albumQuery}</strong>.</p>`;
        return;
      }

      const albumTitle = data.results[0].collectionName;
      const cover = data.results[0].artworkUrl100.replace(
        "100x100bb",
        "600x600bb"
      );

      const songs = data.results
        .map(
          (track) => `
        <li style="margin-bottom: 1rem;">
          <strong>${track.trackName}</strong><br>
          <audio controls src="${track.previewUrl}"></audio>
        </li>
      `
        )
        .join("");

      container.innerHTML = `
        <h1>${albumTitle}</h1>
        <img src="${cover}" alt="${albumTitle}" style="max-width:300px; margin: 1rem 0;">
        <h2>Tracklist:</h2>
        <ul style="list-style: none; padding: 0;">
          ${songs}
        </ul>
        <a href="index.html">← Volver</a>
      `;
    })
    .catch((err) => {
      container.innerHTML = "<p>Ocurrió un error al obtener las canciones.</p>";
      console.error(err);
    });
}
