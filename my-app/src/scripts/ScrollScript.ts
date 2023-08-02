const SetScrollVar = () => {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;

  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));

  // set css property for first page only
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100).toString()
  );
};

window.addEventListener("scroll", SetScrollVar);
window.addEventListener("resize", SetScrollVar);

export default SetScrollVar;
