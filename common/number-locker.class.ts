export class NumberRangePicker {

    private availableNumbers: Map<number, boolean> = new Map<number, boolean>()

    constructor(private readonly from: number, private readonly to: number) {
        for (let i = from; i < to; i++) {
            this.availableNumbers.set(i, false)
        }
    }


    lock(): number {
        let x = randomNumber(0, this.availableNumbers.size)
        this.availableNumbers.set(x, true)
        return x
    }

    release(x: number) {
        this.availableNumbers.set(x, false)
    }
}