export default class Bird {
    defaultConfig = {
        color: 'steelblue',
        speed: 1 + Math.random() * 2,
        position: 0,
    }

    constructor(config) {
        config = {
            ...this.defaultConfig,
            ...config
        }
        const {
            color,
            speed,
            position,
            removeBird
        } = config

        this.color = color
        this.position = position
        this.removeBird = removeBird
        this.speed = speed
        this.el = this.render()
        this.addClickHandler()
    }

    addClickHandler() {
        this.el.addEventListener('click', () => {
            this.el.classList.add('bird__hit')
        })
    }

    update() {
        this.position = this.position + this.speed
        if (this.position > window.innerWidth) {
            this.removeBird(this)
            this.el.remove()
        } else {
            this.el.style.left = this.position + 'px'
        }
    }

    render() {
        const el = document.createElement('div')
        el.className = 'bird'
        el.style.background = this.color
        document.body.insertAdjacentElement('beforeend', el)
        return el
    }
}