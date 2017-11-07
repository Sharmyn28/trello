import createStore from 'redux-zero';

const board = [
    {
        id: 0,
        name: 'Beth'
    },
    {
        id: 1,
        name: 'Diana'
    },
    {
        id: 2,
        name: 'Leo',
    },
    {
        id: 3,
        name: 'Listra'
    },
    {
        id: 4,
        name: 'Merk'
    },
    {
        id: 5,
        name: 'karen',
    }
];

const tboard = [
    {
        id: 0,
        name: 'Manuel'
    },
    {
        id: 1,
        name: 'Adele'
    },
    {
        id: 2,
        name: 'Vale',
    },
    {
        id: 3,
        name: 'Ana'
    },
    {
        id: 4,
        name: 'Malala'
    },
    {
        id: 5,
        name: 'George',
    }
];

const initialState = {
    board: board,
    tboard: tboard,
    selectedTodo: -1
};

const store = createStore(initialState);
export default store;