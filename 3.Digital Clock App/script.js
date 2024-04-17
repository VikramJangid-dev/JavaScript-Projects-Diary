const timeUpdate = () => {
  const currentTime = new Date();
  document.querySelector(".clock__timer").innerHTML =
    currentTime.toLocaleTimeString();
};
setInterval(timeUpdate, 1000);
