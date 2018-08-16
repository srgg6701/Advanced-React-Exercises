// https://github.com/geraintluff/tv4
import tv4 from 'tv4'
import stateSchema from './stateSchema'

export default ({ dispatch, getState }) => next => action => {
    next(action);
    if (!tv4.validate(getState(), stateSchema)){
        console.error('%cInvalid JSON schema!', 'background-color: orange; color: white; padding: 4px');
    }
}