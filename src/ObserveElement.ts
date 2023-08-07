export const observeElementVisibility = (
  targetClass: string,
  callback: (isVisible: boolean) => void
) => {
  const observer = new IntersectionObserver((entries) => {
    const isVisible = entries.some((entry) => entry.isIntersecting);
    callback(isVisible);
  });

  const targetElement = document.querySelector(targetClass);

  if (targetElement) {
    const imgElement = targetElement.querySelector("img");

    if (imgElement) {
      // Create a promise that resolves when the image loads
      const imageLoadPromise = new Promise((resolve) => {
        imgElement.addEventListener("load", resolve);
      });

      // Wait for the image to be loaded before observing
      imageLoadPromise.then(() => {
        observer.observe(targetElement);
      });
    }
  }
};
