const count = 5;
export function reducer(state=count,action){
    const{type,payload} = action;
    switch(type){
        case "increment" : return state + payload;
        case "decrement" : return state - payload;
        default : return state;
    }
}