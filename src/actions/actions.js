import store from '../store/store';
import { auth, database } from './firebase';
/*
export const addComment = (name) => {
    let oldList = store.getState().board;
    const newList = oldList.concat({
        id: oldList.length,
        name: name,
    });
    store.setState({
        board: newList
    });

    console.log(newList);
};

export const removeComment = (index) => {
    const newforoList = store.getState().board.filter((item, idx) => idx !== index);
    store.setState({
        board: newforoList
    })
}*/

export function signUp(fullname, email, pass, survey, question, options) {
    console.log('signUp' + fullname + email + pass);

    auth.createUserWithEmailAndPassword(email, pass).then(user => {
        let newuser = {
            fullname, email, survey, question, options
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
                    fullname: fullUserInfo.fullname,
                    survey: fullUserInfo.survey,
                    question: fullUserInfo.question,
                    options: fullUserInfo.options
                }
            })
        })
    })
}


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

export const readAllComments = () => {
    firebase.database()
        .ref('comentarios/')
        .on('value', (res) => {
            snapshotToArray(res)
        });
}

firebase.database().ref('comentarios/').push({
    id: 0,
    name: 'Tes Board',
    cards: [
        {
            name: "Testeo",
            commit: ["Prototipo", "Estilos"],
            todostado: false
        },
        {
            name: "Mocha",
            commit: ["Prototipo", "Funcionalidad", "etc"],
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
    const res = await firebase.database().ref('comentarios/').push(newlist);
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
        commit: [],
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

/**** ADDING Comments ******************************/

export const addTodo = (selected, index, todocoment) => {
    let oldList = [...store.getState().board];
    oldList[selected].cards[index].todostado = false;
    oldList[selected].cards[index].commit.push(todocoment);
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