import {Bowling} from "../../src/bowling/bowling"

describe('Bowling', () => {

  let bowling: Bowling

  beforeEach(() => {
    bowling = new Bowling()
  })

  it('should score 0 for all gutters', () => {
    roll(0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0)
    expect(bowling.getScore()).toBe(0)
  })

  it('should score 20 for all roles knocking down 1 pin', () => {
    roll(1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1)
    expect(bowling.getScore()).toBe(20)
  })

  it('should compute spares and it\'s bonus', () => {
    roll(5,5, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3)
    expect(bowling.getScore()).toBe(67)
  })

  it('should compute strike and it\'s bonus', () => {
    roll(10, 3,5, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0)
    expect(bowling.getScore()).toBe(26)
  })

  it('should compute a perfect score', () => {
    roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10)
    expect(bowling.getScore()).toBe(300)
  })

  const roll = (...rolls: number[]) => {
    for (const pinsDown of rolls) {
      bowling.roll(pinsDown)
    }
  }

})
