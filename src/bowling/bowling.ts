export class Bowling {

  private rolls: number[] = new Array<number>()

  public roll(pinsDown: number) {
    this.rolls.push(pinsDown)
  }

  public getScore(): number {
    let score = 0
    let rollIndex = 0
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollIndex)) {
        score += 10 + this.rolls[rollIndex+1] + this.rolls[rollIndex+2]
        rollIndex+= 1
      } else if (this.isSpare(rollIndex)) {
        score += 10 + this.rolls[rollIndex+2]
        rollIndex+= 2
      } else {
        score += this.rolls[rollIndex] + this.rolls[rollIndex+1]
        rollIndex+= 2
      }
    }
    return score
  }

  private isStrike(rollIndex: number) {
    return this.rolls[rollIndex] === 10
  }

  private isSpare(rollIndex: number) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10
  }

}
