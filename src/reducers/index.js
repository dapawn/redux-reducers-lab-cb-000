export default function ingredientReducer(state = [], action) {
  switch (action.type) {	
     case 'ADD_INGREDIENT':	
       return [...state, action.payload];	
     case 'REMOVE_INGREDIENT':	
       return state.filter((elem) =>  action.payload !== elem);	
  }	
  return state	
}

