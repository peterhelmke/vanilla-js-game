export default class Counter {
    constructor() {
        this.playerPoint = 0
        this.birdsPoint = 0
        this.counterEl = this.render()

    }

    addPlayerPoint() {
        this.playerPoint++
        this.update()
    }

    addBirdsPoint() {
        this.birdsPoint++
        this.update()
    }

    render() {
        const counterEl = document.createElement('div')
        counterEl.className = 'counter'
        document.body.insertAdjacentElement('beforeend', counterEl)
        return counterEl
    }

    update() {
        this.counterEl.innerHTML = this.playerPoint + ' : ' + this.birdsPoint

    }
}