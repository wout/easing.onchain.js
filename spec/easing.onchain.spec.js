import {Ea} from '../easing.onchain.js'

describe('Ea', () => {
  describe('.se', () => {
    it('uses a linear equasion by default', () => {
      expect(Ea.se(5, 25)).toBeCloseTo(0.2, 1)
    })

    it('uses a accepts a start and end value for the range', () => {
      expect(Ea.se(0, [-5, 15])).toBeCloseTo(0.25, 1)
    })

    it('uses customly configured easing methods', () => {
      Ea.eq['<>'] = p => -Math.cos(p * Math.PI) / 2 + 0.5
      
      expect(Ea.se(5, 25, Ea.eq['<>'])).toBeCloseTo(0.1, 1)
    })
  })
})