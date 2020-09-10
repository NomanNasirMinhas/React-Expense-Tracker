const TransactionReducer =  ((state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION": {
            console.log(state);
            return [action.payload , ...state]
        }

        case "UPDATE_TRANSACTION": {

            const elementsIndex = state.findIndex(element => element.id == action.payload.id );

            let newArray = [...state];
            newArray[elementsIndex] = {...newArray[elementsIndex], amount: action.payload.amount};
            newArray[elementsIndex] = {...newArray[elementsIndex], desc: action.payload.desc};
            state= newArray;
            console.log(newArray)

            return state;
        }

        case "DELETE_TRANSACTION":{
            state = state.filter(tx => tx.id != action.payload.id);
            return state;
        }

        default:
            return state;
    }
})

export default TransactionReducer;