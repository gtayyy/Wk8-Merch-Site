import inventoryListReducer from './../../reducers/inventory-list-reducer';

describe('inventoryListReducer', () => {
	const currentState = {
		1: {
			name: 'Cool pants',
			price: '5.99',
			leftInStock: '25',
			id: 1
		}, 2: {
			name: 'Cool beanie',
			price: '30.50',
			leftInStock: 1,
			id: 2
		}
	}
	let action;
	const merchItem = {
		name: 'Cool Shirt',
		price: "11.99",
		leftInStock: "55",
		id: 1
	}

	test('Should return default state is there is no action type passed into reducer', () => {
		expect(inventoryListReducer({}, { type: null })).toEqual({});
	});

	test('Should successfully add new merch item to masterStockList', () => {
		const { name, price, leftInStock, id } = merchItem;
		action = {
			type: 'ADD_UPDATE_ITEM',
			name: name,
			price: price,
			leftInStock: leftInStock,
			id: id 
		};
		expect(inventoryListReducer({}, action)).toEqual({
			[id] : {
				name: name,
				price: price,
				leftInStock: leftInStock,
				id: id 
			}
		});
	});
	test('Should successfully delete a stock item.', () => {
		action = {
			type: 'DELETE_ITEM',
			id: 1
		};
		expect(inventoryListReducer(currentState, action)).toEqual({
			2: {
				name: 'Cool beanie',
				price: '30.50',
				leftInStock: 1,
				id: 2
			}
		});
	});
	

});
