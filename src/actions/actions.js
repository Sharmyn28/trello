import store from '../store/store';
import firebase from 'firebase'
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



//inicializando firebase
var config = {
    apiKey: "AIzaSyBE9qcjnHfiHSbeX44w1yB0s6yJI95l8IU",
    authDomain: "trello-fire.firebaseapp.com",
    databaseURL: "https://trello-fire.firebaseio.com",
    projectId: "trello-fire",
    storageBucket: "trello-fire.appspot.com",
    messagingSenderId: "587446245909"
};
firebase.initializeApp(config);

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

/********************** Lista de board *********************************/

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

/********************* add works Comments ******************************/

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