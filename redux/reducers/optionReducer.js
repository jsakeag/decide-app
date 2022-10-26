let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let optionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        console.log("ADD_TO_CART");
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
        };
      } else {
        console.log("REMOVE_FROM_CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.id !== action.payload.id
            ),
          ],
        };
      }
      console.log(newState, "a");
      return newState;
    }

    default:
      return state;
  }
};

export default optionReducer;