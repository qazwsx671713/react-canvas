import store from "./store";
export function changeDrawState(data){
    store.dispatch({
        type:'modify_draw',
        data:data
    })
    return
}