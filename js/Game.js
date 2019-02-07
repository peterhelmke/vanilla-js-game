import Bird from './Bird'
import Hunter from './Hunter'
import Counter from './Counter'

export default class Game {
    entities = []
    loopCounter = 0

    constructor() {
        this.createHunter()
        this.createCounter()
        this.loop()
    }

    createHunter() {

        this.hunter = new Hunter()
        this.entities = [...this.entities, this.hunter]
    }

    createCounter() {

        this.counter = new Counter()
    }

    addBird() {
        const config = {
            onRemove: this.removeBird,
            onClick: this.updatePlayerPoints,
            onEscape: this.updateBirdsPoints,
        }

        this.entities = [...this.entities, new Bird(config)]
    }

    removeBird = bird => {
        const index = this.entities.indexOf(bird)
        this.entities = [...this.entities.slice(0, index), ...this.entities.slice(index + 1)]
    }

    updatePlayerPoints = () => {
        this.counter.addPlayerPoint()
    }

    updateBirdsPoints = () => {
        this.counter.addBirdsPoint()
    }

    loop() {
        Math.random() < 1 / 60 && this.addBird()
        this.entities.forEach(entity => entity.update())
        requestAnimationFrame(() => this.loop())
    }
}