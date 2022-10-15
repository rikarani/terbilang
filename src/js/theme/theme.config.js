export const darkSwitch = () => {
  const html = document.querySelector("html");

  html.classList.add("dark");
  localStorage.setItem("theme", "Dark");
};

export const lightSwitch = () => {
  const html = document.querySelector("html");

  html.classList.remove("dark");
  localStorage.setItem("theme", "Light");
};
