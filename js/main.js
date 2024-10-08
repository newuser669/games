console.warn(
  "%cHello!!",
  "color: red; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "what are you doing here?"
);

// this setting controls if ads are shown,
// more info on the README.md file
const script = document.createElement("script");
script.src = "https://data.3kh0.net/script.js";
script.defer = true;
script.setAttribute("data-website-id", "47d72bde-ba44-4125-b161-00e0c2f5b7f0");
document.head.appendChild(script);
script.onload = function() {
  console.log("Data script loaded");
  umami.track([location.hostname, "pageview"].join("/"));
};

const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
  console.log("Title set to: " + local_title);
}
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
  console.log("Icon set to: " + local_icon);
}
