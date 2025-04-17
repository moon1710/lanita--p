feather.replace();

const params = new URLSearchParams(window.location.search);
const albumTitle = params.get("title");
const listContainer = document.getElementById("track-list");
const albumTitleEl = document.getElementById("album-title");
const albumCoverEl = document.getElementById("album-cover");

let currentPlaying = null;

function formatTime(time) {
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

if (!albumTitle) {
  listContainer.innerHTML = "<p>No se especificó ningún álbum.</p>";
} else {
  fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      albumTitle
    )}+lana+del+rey&entity=song&limit=10`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.resultCount) {
        listContainer.innerHTML = `<p>No se encontraron canciones para <strong>${albumTitle}</strong>.</p>`;
        return;
      }

      const filteredTracks = data.results.filter(
        (track) => track.artistName.toLowerCase() === "lana del rey"
      );

      if (!filteredTracks.length) {
        listContainer.innerHTML = `<p>No se encontraron canciones válidas para <strong>${albumTitle}</strong>.</p>`;
        return;
      }

      const album = filteredTracks[0];
      albumTitleEl.textContent = album.collectionName;
      albumCoverEl.src = album.artworkUrl100.replace("100x100bb", "600x600bb");
      albumCoverEl.alt = album.collectionName;

      filteredTracks.forEach((track) => {
        const trackDiv = document.createElement("div");
        trackDiv.className = "track";

        trackDiv.innerHTML = `
              <img src="${track.artworkUrl60}" alt="cover">
              <div class="track-info">
                <div class="track-title">${track.trackName}</div>
                <div class="controls">
                  <button class="btn play-btn"><i data-feather="play"></i></button>
                  <span class="time">0:00</span>
                </div>
                <div class="progress-bar"><div class="progress"></div></div>
                <audio src="${track.previewUrl}"></audio>
              </div>
            `;

        listContainer.appendChild(trackDiv);
        feather.replace();

        const audio = trackDiv.querySelector("audio");
        const playBtn = trackDiv.querySelector(".play-btn");
        const icon = playBtn.querySelector("i");
        const timeDisplay = trackDiv.querySelector(".time");
        const progress = trackDiv.querySelector(".progress");

        playBtn.addEventListener("click", () => {
          if (currentPlaying && currentPlaying !== audio) {
            currentPlaying.pause();
            const prevIcon = document
              .querySelector("audio[src='" + currentPlaying.src + "']")
              ?.parentElement.querySelector(".play-btn i");
            if (prevIcon) {
              prevIcon.setAttribute("data-feather", "play");
              feather.replace();
            }
          }

          if (audio.paused) {
            audio.play();
            icon.setAttribute("data-feather", "pause");
            feather.replace();
            currentPlaying = audio;
          } else {
            audio.pause();
            icon.setAttribute("data-feather", "play");
            feather.replace();
          }
        });

        audio.addEventListener("timeupdate", () => {
          timeDisplay.textContent = formatTime(audio.currentTime);
          const percent = (audio.currentTime / audio.duration) * 100;
          progress.style.width = percent + "%";
        });

        audio.addEventListener("ended", () => {
          icon.setAttribute("data-feather", "play");
          feather.replace();
          progress.style.width = "0%";
          timeDisplay.textContent = "0:00";
        });

        const lyricsBtn = document.createElement("button");
        lyricsBtn.className = "lyrics-btn";
        lyricsBtn.textContent = "lyrics";

        lyricsBtn.addEventListener("click", () => {
          const modal = document.getElementById("lyrics-modal");
          const lyricsText = document.getElementById("lyrics-text");
          const lyricsTitle = document.getElementById("lyrics-title");

          lyricsText.textContent = "Cargando letra...";
          lyricsTitle.textContent = track.trackName;
          modal.style.display = "flex";

          fetch(
            `https://api.lyrics.ovh/v1/Lana Del Rey/${encodeURIComponent(
              track.trackName
            )}`
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.lyrics) {
                lyricsText.textContent = data.lyrics;
              } else {
                lyricsText.textContent = "Letra no disponible 🥲";
              }
            })
            .catch(() => {
              lyricsText.textContent = "Error al obtener la letra.";
            });
        });

        // Añadir el botón justo debajo del reproductor
        trackDiv.querySelector(".track-info").appendChild(lyricsBtn);

      });
    });
}

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Feather icons
if (typeof feather !== 'undefined') {
  feather.replace();
}