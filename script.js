var divViewSF = document.getElementById("spoiler-filmes");

function spoilerFilmes() {
  if (divViewSF.style.display === "none") {
    divViewSF.style.display = "block";
  } else {
    divViewSF.style.display = "none";
  }
}

var divViewST = document.getElementById("spoiler-supertrunfo");

function spoilerSuperTrunfo() {
  if (divViewST.style.display === "none") {
    divViewST.style.display = "block";
  } else {
    divViewST.style.display = "none";
  }
}

var divViewM = document.getElementById("spoiler-mentalista");

function spoilerMentalista() {
  if (divViewM.style.display === "none") {
    divViewM.style.display = "block";
  } else {
    divViewM.style.display = "none";
  }
}

var divViewTC = document.getElementById("spoiler-tabelaC");

function spoilerTC() {
  if (divViewTC.style.display === "none") {
    divViewTC.style.display = "block";
  } else {
    divViewTC.style.display = "none";
  }
}

var divViewCM = document.getElementById("spoiler-CM");

function spoilerCM() {
  if (divViewCM.style.display === "none") {
    divViewCM.style.display = "block";
  } else {
    divViewCM.style.display = "none";
  }
}

function mudarTema() {
  document.body.classList.toggle("dark");
}