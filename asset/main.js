document.addEventListener("DOMContentLoaded", function () {
  let targetMenu = document.querySelector("body");
  let uiMenu = document.createElement("div");
  uiMenu.className = "uiMenu";
  uiMenu.setAttribute("onclick", "this.classList.toggle('open')");
  targetMenu.appendChild(uiMenu);

  let targetButton = document.querySelector(".uiMenu");

  let uiButtonToc = document.createElement("div");
  uiButtonToc.innerHTML = "목차";
  uiButtonToc.className = "uiButton toc";
  uiButtonToc.addEventListener("click", (e) => {
    e.stopPropagation();
    let toc = document.querySelector("#toc");
    let body = document.querySelector("body");
    if (body.classList.contains("toc2")) {
      body.classList.remove("toc2");
      body.classList.remove("toc-left");
      toc.style.display = "none";
    } else {
      body.classList.add("toc2");
      body.classList.add("toc-left");
      toc.style.display = "block";
    }
  });
  targetButton.appendChild(uiButtonToc);

  let uiButtonPdf = document.createElement("div");
  uiButtonPdf.addEventListener("click", function (e) {
    window.onbeforeprint = function () {
      // window.PagedPolyfill.preview();
    };

    window.print();

    window.onafterprint = function () {};
  });

  uiButtonPdf.innerHTML = "PDF";
  uiButtonPdf.className = "uiButton pdf";
  targetButton.appendChild(uiButtonPdf);
});
