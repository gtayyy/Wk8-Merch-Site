//turn this into object to put into state={}
import { v4 } from 'uuid';

const mainInventoryList = {
    [v4()]: {
        name: 'My Bloody Valentine- "Loveless" Vinyl LP',
        price: '$30',
				leftInStock: '20',
				imgSrc: "img/vinyl.jpeg",
        id: v4(),
    }, [v4()]: {
        name: 'Sonic Youth "Washing Machine" T-shirt',
        price: '$15',
				leftInStock: '25',
				imgSrc: "img/tshirt.jpeg",
        id: v4(),
    }, [v4()]: {
        name: 'Pavement Tour Hoodie',
        price: '$45',
        leftInStock: '10',
        //imgSrc: 'img/hoodie.png',
        id: v4(),
    }
}

const reducer = (state = {mainInventoryList}, action) => {
    const { name, price, leftInStock, id } = action;
    switch (action.type) {
    case 'ADD_UPDATE_ITEM':
        return Object.assign({}, state, {
            [id]: {
                name: name,
                price: price,
                leftInStock: leftInStock,
                id: id
            }
        });
    case 'DELETE_ITEM':
        let newState = { ...state };
        delete newState[id];
        return newState;
    default:
        return state;
}
};
export default reducer;