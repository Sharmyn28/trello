import React from 'react';
import '../styles/style.css';
import { NavLink } from 'react-router-dom';
import { addStage, addNewBoard } from '../actions/actions'; /** addComment, nextTitle, handleLoginClick, handleLogoutClick */
import Head from './Head'
import Footer from './footer'
import { connect } from 'redux-zero/react';
import Stage from './stage';
import { board } from '../store/dataBase';

/*const DetailedBoard = ({ name, ide, index }) => {
    return (
        <div className="board" id={ide}>
            <div className="inner">
                <h4><NavLink onClick={()=> {nextTitle(index)}} to={'/details'}>{name}</NavLink></h4>
            </div>
        </div>
    );
}*/

const OtherBoard = ({ tboard }) => {
    /*const OtherBoardComponent = tboard.map((item, index) => {
        return <DetailedBoard
            key={index}
            name={item.name}
            index={index}
        />
    })*/

    return (
        <section>
            <header className="view-header">
                <h3><i className="fa fa-users"></i><span> Other boards</span></h3>
            </header>
            <div className='boards-wrapper'>
                {/*OtherBoardComponent*/}
                {
                    tboard.map((list, index) => {
                        return (
                            <div className='board' key={index}>
                                <div className='inner'>
                                    <h4>{list.name}</h4>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

/*const AddNewBoard = ({ showReply }) => {
    return (
        !showReply && <div className="board add-new">
            <div className="inner">
                <a id="add_new_board" onClick={() => handleLoginClick()}>Add new board...</a>
            </div>
        </div>
    )
}*/

/*const NewBoard = ({ showReply}) => {
    const onSubmit = e => {
        e.preventDefault();
        if (this.refInput.value) {
            addComment(this.refInput.value);
            this.refInput.value = '';
        }

    };
    return (
        !showReply && <div className='board form'>
            <div className='inner'>
                <h4>New board</h4>
                <form onSubmit={onSubmit} id='new_board_form'>
                    <div className="inner-wrap">
                        <input
                            type="text"
                            id="board_name"
                            name="name"
                            placeholder="User"
                            ref={e => (this.refInput = e)}
                        />
                        <button type="submit" name="submit">Create board</button>
                        <span> or </span>
                        <a onClick={() => handleLogoutClick()}>Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    )

}*/


/*const Boards = ({ tboard, board, showReply }) => {
    /*const onSubmit = e => {
        e.preventDefault();
        if (this.refInput.value) {
            addComment(this.refInput.value);
            this.refInput.value = '';
        }
    //}
    

    const MyBoardComponent = board.map((item, index) => {
        return <DetailedBoard
            key={index}
            name={item.name}
            index={index}
        />
    })

    return (
        <main id='main_container'>
            <div>
                <div id='authentication_container' className='application-container'>
                    <Head />
                    <div className='main-container'>
                        <div className="view-container boards index">
                            <section>
                                <header class="view-header" >
                                    <h3><i class="fa fa-user"></i><span> My boards</span></h3>
                                </header>
                                <div className="boards-wrapper">
                                    {MyBoardComponent}
                                    {/*<AddNewBoard showReply={showReply} />//}
                                    <NewBoard showReply={showReply} />
                                    
                                </div>
                            </section>
                            <OtherBoard tboard={tboard} />
                        </div>
                        </div>
                </div>
            </div>
            {/*<Footer />//}
        </main>
    );
};*/

class Board extends React.Component{
    render(){
        const { title } = this.props;
        return(
            <div className='board'>
                <div className='inner'>
                    <h4>{title}</h4>
                </div>
            </div>
        )
    }
}

class NewBoard extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <div>
                <div className='board form'>
                    <div className='inner'>
                        <h4>New board</h4>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            addNewBoard(this.boardInputRef.value, user.id);
                        }} id='new_board_form'>
                            <div className="inner-wrap">
                                <input type="text" id="board_name" name="name" placeholder="User"
                                    ref={e => this.boardInputRef = e}
                                />
                                <button type="submit" name="submit">Create board</button>
                                <span> or </span>
                                <a>Cancel</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const BoardView = ({ user, boards, tboard }) =>{
    let list = null;
    if (boards)
        list = boards.map(board => {
            return <Board 
                key={board.user_id}
                title={board.title}
            />
        });

    return (
        <main id='main_container'>
            <div>
                <div id='authentication_container' className='application-container'>
                    <Head />
                    <div className='main-container'>
                        <div className="view-container boards index">
                            <section>
                                <header className="view-header" >
                                    <h3><i className="fa fa-user"></i><span> My boards</span></h3>
                                </header>
                                <div className="boards-wrapper">
                                    {list}
                                    <NewBoard user={user} />
                                </div>
                            </section>
                            <OtherBoard tboard={tboard} />
                        </div>
                    </div>
                </div>
            </div>
            {/*<Footer />*/}
        </main>
    );
}


const mapToProps = ({ user, boards, tboard }) => ({ user, boards, tboard });
export default connect(mapToProps)(BoardView);