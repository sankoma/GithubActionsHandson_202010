import {play, RESULT, MOVE} from '../../src/service/rule'

describe('rule', () => {
  describe('play()', () => {

    describe('自分がぐーを出した時', () => {
      const myMove = MOVE.rock;
      it('相手がぐーを出した時', () => {
        expect(play(myMove, MOVE.rock)).toBe(RESULT.draw)
      });

      it('相手がちょきを出した時', () => {
        expect(play(myMove, MOVE.scissors)).toBe(RESULT.win)
      });

      it('相手がをぱー出した時', () => {
        expect(play(myMove, MOVE.paper)).toBe(RESULT.lose)
      });
    })

    describe('自分がちょきを出した時', () => {
      const myMove = MOVE.scissors;
      it('相手がぐーを出した時', () => {
        expect(play(myMove, MOVE.rock)).toBe(RESULT.lose)
      });

      it('相手がちょきを出した時', () => {
        expect(play(myMove, MOVE.scissors)).toBe(RESULT.lose)
      });

      it('相手がをぱー出した時', () => {
        expect(play(myMove, MOVE.paper)).toBe(RESULT.win)
      });
    })

    describe('自分がぱーを出した時', () => {
      const myMove = MOVE.paper;
      it('相手がぐーを出した時', () => {
        expect(play(myMove, MOVE.rock)).toBe(RESULT.win)
      });

      it('相手がちょきを出した時', () => {
        expect(play(myMove, MOVE.scissors)).toBe(RESULT.lose)
      });

      it('相手がをぱー出した時', () => {
        expect(play(myMove, MOVE.paper)).toBe(RESULT.lose)
      });
    })
  })
})
