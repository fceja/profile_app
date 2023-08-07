export const observeElementVisibility = (targetClass: string, callback: (isVisible: boolean) => void) => {
    const observer = new IntersectionObserver(entries => {
        const isVisible = entries.some(entry => entry.isIntersecting);
        callback(isVisible)
    });

    console.log('targetClass is:')
    console.log(targetClass)

    const targetElement = document.querySelector('.image-gallery-slide.image-gallery-center');
    console.log('targetElement is:')
    console.log(targetElement)
    if (targetElement) {
        observer.observe(targetElement);
    }
}