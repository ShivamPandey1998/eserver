export const reducer = (state, action) =>{
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            item: state.item.filter((curElem) =>{
                return curElem.id  !==  action.payload;
            })
        }
    }

    if(action.type === "CLEAR_CART"){
        return{
            ...state, item:[]
        };
    };
    if(action.type === "INCREMENT"){
        let updatedCard = state.item.map((currElem) =>{
            if(currElem.id === action.payload){
                return{...currElem, quantity:currElem.quantity + 1}
            }
            return currElem;
        })
        return {...state , item: updatedCard}
    }
    if(action.type === "DECREMENT"){
        let updatedCard = state.item.map((currElem) =>{
            if(currElem.id === action.payload){
                return{...currElem, quantity:currElem.quantity - 1}
            }
            return currElem;
        }).filter((curElem) =>{
            return curElem.quantity !== 0;

        })
        return {...state , item: updatedCard}
    }
    if(action.type === "GET_TOTAL"){
        let { totalItem,totalAmount } = state.item.reduce(
            (accum,curval) =>{
            let { quantity,price } = curval
            accum.totalItem += quantity;
            let upadatedTotalAmount = price * quantity;
            accum.totalAmount += upadatedTotalAmount;

            return accum;
        },{
            totalItem: 0,
            totalAmount: 0,
        })
        return {...state, totalItem , totalAmount};
    }

    return state;
}
