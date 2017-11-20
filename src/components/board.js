import React from 'react';
import '../styles/style.css';
import { NavLink } from 'react-router-dom';
import { readAllComments, addComment, nextTitle, handleLoginClick, handleLogoutClick } from '../actions/actions';
import Head from './Head'
import Footer from './footer'
import { connect } from 'redux-zero/react';

const User = ({ name, ide, index }) => {
    return (
        <div className="board" id={ide}>
            <div className="inner">
                <h4><NavLink onClick={()=> {nextTitle(index)}} to={'/details'}>{name}</NavLink></h4>
            </div>
        </div>
    );
}

const OtherBoard = ({ tboard }) => {
    return (
        <section>
            <header class="view-header">
                <h3><i class="fa fa-users"></i><span> Other boards</span></h3>
            </header>
            <div className='boards-wrapper'>
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

const LogoutButton = ({ showReply }) => {
    return (
        !showReply && <div className="board add-new">
            <div className="inner">
                <a id="add_new_board" onClick={() => handleLoginClick()}>Add new board...</a>
            </div>
        </div>
    )
}

const LoginButton = ({ showReply }) => {
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

}

readAllComments();

const Boards = ({ tboard, board, showReply }) => {
    /*const onSubmit = e => {
        e.preventDefault();
        if (this.refInput.value) {
            addComment(this.refInput.value);
            this.refInput.value = '';
        }
    }*/

    const BoardComponent = board.map((item, index) => {
        

        return <User
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
                                    {BoardComponent}
                                    <LogoutButton showReply={showReply} />
                                    <LoginButton showReply={showReply} />
                                    {/*<div className="board add-new">
                                        <div class="inner">
                                            <a id="add_new_board">Add new board...</a>
                                        </div>
                                    </div>
                                    <div className='board form'>
                                        <div className='inner'>
                                            <h4>New board</h4>
                                            {/*<form id='new_board_form'> {onSubmit = { onSubmit }}
                                                <div className="inner-wrap">
                                                    <input
                                                        type="text"
                                                        id="board_name"
                                                        name="name"
                                                        placeholder="User"

                                                    />{ref = { e => (this.refInput = e) }}
                                                    <button type="submit" name="submit">Create board</button>
                                                    <span> or </span>
                                                    <a >cancel</a>
                                                </div>
    </form>*/}
                                        {/*</div>
                                    </div>*/}
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
};

//export default Boards;
const mapToProps = ({ tboard, board }) => ({ tboard, board });
export default connect(mapToProps)(Boards);