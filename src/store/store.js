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
        fullname: null,
        survey: null,
        question: null,
        options: null
    }  
};

const states ={
    stages: ['To do', 'Doing', 'Done'],
    tasks: [
        {
            id: 0,
            title: 'My first task',
            stage: 'To do'
        },
        {
            id: 1,
            title: 'My second task',
            stage: 'Doing'
        },
        {
            id: 2,
            title: 'My third task',
            stage: 'Done'
        }
    ]
}

const store = createStore(initialState);
export default store;