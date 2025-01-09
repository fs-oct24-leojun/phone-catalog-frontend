// handles smooth scroll to the top of the page

export const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}