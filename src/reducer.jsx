export const initialState = {
    basket: [{
        id: 1,
        title:"The lean startup: How Constant Innovation Creates Radically Successful Buisnesses Paperback",
        price: 29.96,
        rating: 4,
        image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" ,
    },
    {
        id: 2,
        title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
        price: 289,
        rating: 3,
        image:"https://m.media-amazon.com/images/I/510uEUwLn-L._SL1037_.jpg",        
    }
],
    user: null,
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {

    switch(action.type){
        case 'ADD_TO_BASKET':
        // Logic for adding item to basket
        return{ 
            ...state,
            basket: [...state.basket, action.item]
        };
        case 'REMOVE_FROM_BASKET': {
        // Logic for removing item from basket  
        let newBasket = [...state.basket];

        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        );

        if(index >= 0) {
            // item exists in basket, remove it...
            newBasket.splice(index, 1);
        } else {
            console.warn(`Cant remove product (id: ${action.id}) as its not found`)
        }

        return { 
            ...state,
            basket: newBasket,
        };
        }
    default:
        return state;  
    }
}

export default reducer;

