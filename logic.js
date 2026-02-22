document.addEventListener("DOMContentLoaded", function () {
  let tab = "all";
  const cards = document.getElementsByClassName("job-card");
  const total = document.getElementById("total-count");
  const interview = document.getElementById("interview-count");
  const rejected = document.getElementById("rejected-count");
  const rightCount = document.getElementById("jobs-count");
  const emptyBox = document.getElementById("empty-space");

  for (let i = 0; i < cards.length; i++) {
    cards[i].setAttribute("data-status", "all");
  }

  const interviewBtns = document.getElementsByClassName("btn-interview");
  for (let i = 0; i < interviewBtns.length; i++) {
    interviewBtns[i].onclick = function () {
      const card = this.parentNode.parentNode;
      const st = card.getAttribute("data-status");

      if (st === "interview") {
        card.setAttribute("data-status", "all");
      } else {
        card.setAttribute("data-status", "interview");
      }
      refresh();
    };
  }

  const rejectedBtns = document.getElementsByClassName("btn-rejected");
  for (let i = 0; i < rejectedBtns.length; i++) {
    rejectedBtns[i].onclick = function () {
      const card = this.parentNode.parentNode;
      const st = card.getAttribute("data-status");

      if (st === "rejected") {
        card.setAttribute("data-status", "all");
      } else {
        card.setAttribute("data-status", "rejected");
      }
      refresh();
    };
  }

  const del = document.getElementsByClassName("btn-delete");
  for (let i = 0; i < del.length; i++) {
    del[i].onclick = function () {
      const card = this.parentNode;
      card.remove();
      refresh();
    };
  }

  document.getElementById("tab-all").onclick = function () {
    tab = "all";
    refresh();
  };

  document.getElementById("tab-interview").onclick = function () {
    tab = "interview";
    refresh();
  };

  document.getElementById("tab-rejected").onclick = function () {
    tab = "rejected";
    refresh();
  };

  function refresh() {
    let visible = 0;
    let intCount = 0;
    let rejCount = 0;

    for (let i = 0; i < cards.length; i++) {
      const s = cards[i].getAttribute("data-status");

      if (s === "interview") intCount++;
      if (s === "rejected") rejCount++;

      if (tab === "all" || s === tab) {
        cards[i].classList.remove("hidden");
        visible++;
      } else {
        cards[i].classList.add("hidden");
      }
    }

    total.innerText = cards.length;
    interview.innerText = intCount;
    rejected.innerText = rejCount;
    rightCount.innerText = visible + " jobs";

    if (visible === 0 && tab !== "all") {
      emptyBox.classList.remove("hidden");
    } else {
      emptyBox.classList.add("hidden");
    }
  }
  refresh();
});
