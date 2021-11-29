const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('should shuffle the array of bots so computer chooses random duo each time', () => {
        expect(typeof shuffleArray).toBe('string')
    }

    test('should be string', () => {
        expect(shuffleArray).toEqual('string')
    })
})


