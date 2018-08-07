import store from '../store'

export default function (type){
    store.dispatch({
        type: type
    });
}