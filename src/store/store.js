import createStore from 'redux-zero';
import { otherBoard, board  } from './dataBase';

const initialState = {
    board: board,
    tboard: otherBoard,
    selectedTodo: -1,
    idBoard: 0,
    showReply: false,

    successLogin: false,
    user: {
        id: null,
        email: null,
        firstname: null,
        lastname: null
    },
    boards: null,
    stages: null,
    tasks: null
};

const store = createStore(initialState);
export default store;