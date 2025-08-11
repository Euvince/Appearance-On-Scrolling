const ratio = 0

const options = {
    root : null,
    rootMagin :'0px',
    threshold : ratio
}

/**
 * 
 * @param {IntersectionObserverEntry} entries
 * @param {IntersectionObserver} observer
 */
const intersectObserver = (entries, observer) => {
    for (const entry of entries) {
        // console.log(entry.isIntersecting, entry.intersectionRatio)
        if (/* entry.intersectionRatio > ratio */ entry.isIntersecting) {
            entry.target.classList.remove('reveal')
            entry.target.classList.add('reveal-visible')
            // observer.unobserve(entry)
        }
    }
}

const observer = new IntersectionObserver(intersectObserver/* , options */)

// const twoCards = document.querySelectorAll('.reveal')

// twoCards.forEach((element) => observer.observe(element))

const observers = document.querySelectorAll('[class*="reveal-"]')

observers.forEach((element) => observer.observe(element))