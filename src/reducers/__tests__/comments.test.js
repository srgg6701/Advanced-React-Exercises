import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actoins of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New comment'
    };

    const done = commentsReducer([], action);

    expect(done).toEqual(['New comment']);
});