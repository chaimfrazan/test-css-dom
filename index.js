const container = document.getElementById("main");

const player1 = document.getElementById("p1");
const player2 = document.getElementById("p2");
const kube1 = document.getElementById("k1");
const kube2 = document.getElementById("k2");

const replace = document.getElementById("replace");
const play = document.getElementById("play");
const win = document.getElementById("win");

const p = true;
const total = 50;

container.addEventListener("click", (e) => {
  const players = [player1, player2];
  const start = players[Math.floor(Math.random() * players.length)];
  const target = e.target;
  if (target == play) {
    kube1.textContent = Math.floor(Math.random() * 6) + 1;
    kube2.textContent = Math.floor(Math.random() * 6) + 1;
    const intN1 = Number(kube1.textContent);
    const intN2 = Number(kube2.textContent);

    if (intN1 === intN2) {
      start.textContent = 0;

      if (target == replace && start.id == "p2") {
        start.id = "p1";
      }
      if (target == replace && start.id == "p1") {
        start.id = "p2";
      }
    } else {
      const t = intN1 + intN2;
      const num = Number(start.textContent);
      start.textContent = t + num;

      if (target == replace && start.id == "p2") {
        start.id = "p1";
      }

      if (target == replace && start.id == "p1") {
        start.id = "p2";
      }

      if (Number(start.textContent) > 50) {
        start.textContent = 0;
        win.textContent = `${start.id} win`;
      }
    }
  }
});
