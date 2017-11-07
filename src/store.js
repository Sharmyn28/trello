import createStore from 'redux-zero';

const board = [
    {
        id: 0,
        name: 'Rita'
    },
    {
        id: 1,
        name: 'Melania'
    },
    {
        id: 2,
        name: 'Arich-jos',
    },
    {
        id: 3,
        name: 'Rita'
    },
    {
        id: 4,
        name: 'Melania'
    },
    {
        id: 5,
        name: 'Arich-jos',
    }
];

const tboard = [
    {
        id: 0,
        name: 'Rita'
    },
    {
        id: 1,
        name: 'Melania'
    },
    {
        id: 2,
        name: 'Arich-jos',
    },
    {
        id: 3,
        name: 'Rita'
    },
    {
        id: 4,
        name: 'Melania'
    },
    {
        id: 5,
        name: 'Arich-jos',
    }
];



const initialState = {
    board: board,
    tboard: tboard,
    selectedTodo: -1
};

const store = createStore(initialState);
export default store;