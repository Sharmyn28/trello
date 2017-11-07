import store from './store';

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
}