const pombo = require('./')
const { assert } = require('chai')

const isDraw = ({ author, draw }) => (author === null || typeof author === 'string') && (typeof draw === 'string')

describe('node-pombo unity tests', () => {

  describe('module structure', () => {

    it('default is a random draw', () => assert(isDraw(pombo.default)))

    it('draws is a list of draw', () => {
      assert.typeOf(pombo.draws, 'array')
      assert(pombo.draws.every(draw => isDraw(draw)))
    })

    it('randomDraw is a function that returns a draw', () => {
      assert.typeOf(pombo.randomDraw, 'function')
      assert(isDraw(pombo.randomDraw()))
    })
  })
})
