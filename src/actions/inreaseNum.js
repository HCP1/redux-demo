import { INCREASE,DECREASE } from './type'
export const IncreaseNum = () => dispatch => {
    dispatch({
        type: INCREASE
    })
}
export const DecreaseNum = () => dispatch => {
    dispatch({
        type: DECREASE
    })
}