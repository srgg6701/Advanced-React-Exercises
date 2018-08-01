import { SAVE_COMMENT } from './types'

export default comment => ({
    type: SAVE_COMMENT,
    payload: comment
});