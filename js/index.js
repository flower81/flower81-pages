var headerElement = document.getElementById("header"),
  headerElementH1 = document.getElementById("header-h1"),
  documentElement = null;

if (navigator.userAgent.toLowerCase().match(/webkit | msie 5/)) {
  documentElement = document.body;
} else {
  documentElement = document.documentElement;
};

window.onscroll = function() {
  if (document.documentElement.scrollTop === 0) {
    headerElement.classList.remove("header-menu");
    headerElement.classList.add("makeItTransparent");

    headerElementH1.classList.remove("header-h1");
  } else {
    headerElement.classList.add("header-menu");
    headerElement.classList.remove("makeItTransparent");    
    headerElementH1.classList.add("header-h1");
  }
};
