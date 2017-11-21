import store from '../store/store';
import { auth, database } from './firebase';
import { board } from '../store/dataBase';
/*
export const removeComment = (index) => {
    const newforoList = store.getState().board.filter((item, idx) => idx !== index);
    store.setState({
        board: newforoList
    })
}*/

export function signUp(firstname, lastname, email, pass) {
    console.log('signUp' + firstname + lastname + email + pass);

    auth.createUserWithEmailAndPassword(email, pass).then(user => {
        let newuser = {
            firstname, lastname, email
        }
        database.ref('users/' + user.uid).set(newuser);

        // database.ref ('users/' + user.uid + '/options').update ( 'option1, option2, option3...');   
        //  database.ref ('users/').push (newuser);   

        database.ref('users/' + user.uid).once('value').then(res => {
            const fullUserInfo = res.val();

            console.log('full info ', fullUserInfo);
            store.setState({
                user: {
                    id: user.uid,
                    email: fullUserInfo.email,
                    firstname: fullUserInfo.firstname,
                    lastname: fullUserInfo.lastname
                }
            })
        })
    })
}

export function signOut() {
    auth.signOut();
    store.setState({
        successLogin: false,
        user: {
            id: '',
            email: ''
        }
    })
}

export function signIn(user, pass) {
    auth.signInWithEmailAndPassword(user, pass).then(userObj => {

        database.ref('users/' + userObj.uid).once('value').then(res => {
            const fullUserInfo = res.val();

            console.log('full info ', fullUserInfo);
            store.setState({
                user: {
                    id: userObj.uid,
                    email: fullUserInfo.email,
                    firstname: fullUserInfo.firstname,
                    lastname: fullUserInfo.lastname
                }
            })
        })
    })
}

/**** NEW BOARD ****/
export function addNewBoard(title, userId) {

    database.ref('boards/').push({
        title: title,
        user_id: userId
    }).then(res => {
        console.log('board id: ', res.key)
    });

}

/**** TASK & STAGE ****/

export function readBoard() {
    database.ref('stages').on('value', res => {
        let stages = []
        res.forEach(snap => {
            const stage = snap.val();
            stages.push(stage);
        })
        store.setState({
            stages: stages
        })
    });

    database.ref('tasks').on('value', res => {
        let tasks = [];
        res.forEach(snap => {
            const task = snap.val();
            tasks.push(task)
        })
        store.setState({
            tasks: tasks
        })
    });
}

export function addStage(text, board_id) {

    /*let stages = [...store.getState().stages];
    stages.push(text)
    /*store.setState ({
       stages : stages
    })  */

    let newobj = {
        title: text,
        board_id: board_id
    }
    console.log('stage', newobj)
    database.ref('stages').push(newobj);
}

export function addTask(stageId, text) {
    console.log('addTask:', stageId + ' - ' + text);

    let tasks = [...store.getState().tasks];

    let newTask = {
        id: store.getState().tasks.length,
        title: text,
        stage: stageId
    }

    database.ref('tasks/' + newTask.id).set(newTask);
    /*
    store.setState ({
       tasks : tasks
    })  */
}


auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user', user);
        let usersRef = database.ref('/users');
        let userRef = usersRef.child(user.uid);

        database.ref('users/' + user.uid).once('value').then(res => {
            const fullUserInfo = res.val();

            store.setState({
                successLogin: true,
                user:{
                    id: user.uid,
                    email: fullUserInfo.email,
                    firstname: fullUserInfo.firstname,
                    lastname: fullUserInfo.lastname
                }
            })
        });

        database.ref('boards').on('value', res =>{
            let boards =[];
            res.forEach(snap => {
                const board = snap.val();
                board.id = snap.key;
                boards.push(board)
            });
            store.setState({
                boards: boards.filter(board => board.user_id === user.uid)
            })
        });

        database.ref('tasks').on('value', res =>{
            let tasks = [];
            res.forEach( snap => {
                const task = snap.val();
                tasks.push(task)
            })
            store.setState({
                tasks: tasks
            })
        })
    }
});
/**** MORE ACTIONS ****/

const snapshotToArray = snapshot => {
    let comments = []
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        let key = childSnapshot.key;
        item.id = key;
        comments.push(item);
        console.log('item', item)
    });
    store.setState({
        board: comments
    })

};


database.ref('comentarios/').push({
    id: 0,
    name: 'Test Board',
    cards: [
        {
            name: "Testing",
            comment: ["first", "second"],
            todostado: false
        },
        {
            name: "Second",
            comment: ["add comment", "second test", "etc"],
            todostado: false
        }
    ],
    toggle: false
})

export async function addComment(name) {
    let oldList = [...store.getState().board];
    const change = store.getState().showReply;
    const newState = !change;
    const newlist = {
        id: oldList.length,
        name: name,
        cards: [],
        toggle: false
    };
    const res = await database.ref('comentarios/').push(newlist);
    newlist.id = res.key;

    const newList = oldList.concat(newlist);
    store.setState({
        board: newList,
        showReply: newState
    });

    console.log(newList);
};

export const nextTitle = (index) => {
    store.setState({
        idBoard: index
    })
}

export const handleLoginClick = () => {
    const change = store.getState().showReply;
    const newState = !change;
    store.setState({ showReply: newState });
}

export const handleLogoutClick = () => {
    let bolean = store.getState().showReply ? false : true;
    store.setState({ showReply: bolean });
}

/**** BOARD LIST ****/

export const addList = (selected, name) => {
    let oldList = [...store.getState().board];
    oldList[selected].toggle = false;
    oldList[selected].cards.push({
        name: name,
        comment: [],
        todostado: false
    });

    store.setState({
        board: oldList,
    });

    console.log('listas', oldList);

};

export const handleHideClick = (selected) => {
    let oldList = [...store.getState().board];
    oldList[selected].toggle = true;
    store.setState({
        board: oldList
    })
}

export const handleShowClick = (selected) => {
    let oldList = [...store.getState().board];
    oldList[selected].toggle = false;
    store.setState({
        board: oldList
    })
}

/**** ADDING COMMENTS ******************************/

export const addTodo = (selected, index, todocoment) => {
    let oldList = [...store.getState().board];
    oldList[selected].cards[index].todostado = false;
    oldList[selected].cards[index].comment.push(todocoment);
    console.log('nuevo comentario...')
    store.setState({
        board: oldList,
    });

    console.log('tareasss', oldList);
};

export const TodoHideClick = (selected, index) => {
    let oldList = [...store.getState().board];
    oldList[selected].cards[index].todostado = true;
    store.setState({ board: oldList });
}

export const TodoShowClick = (selected, index) => {
    let oldList = [...store.getState().board];
    oldList[selected].cards[index].todostado = false;
    store.setState({ board: oldList });
}