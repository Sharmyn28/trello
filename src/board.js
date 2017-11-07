import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { addComment } from './actions';
import Head from './Head'
import Footer from './footer'
import { connect } from 'redux-zero/react';

const User = ({ name }) => {
    return (
        <div className="board">
            <div className="inner">
                <h4>{name}</h4>
            </div>
        </div>
    );
}

const Usertwo = ({ tboard }) => {
    return (
        <section>
            <header class="view-header">
                <h3><i class="fa fa-users"></i><span> Other boards</span>
                </h3>
            </header>
            <div className='boards-wrapper'>
                {
                    tboard.map((list, index) => {
                        return (
                            <div className='board'>
                                <div className='inner'>
                                    <h4>{list.name}</h4>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </section>)
}

const Boards = ({ board, tboard }) => {
    const onSubmit = e => {
        e.preventDefault();
        if (this.refInput.value) {
            addComment(this.refInput.value);
            this.refInput.value = '';
        }

    };
    const boardComponent = board.map((item, index) => {
        return <User
            key={index}
            name={item.name}
            index={index}
        />
    })

    return (
        <div id='main_container'>
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
                                    {boardComponent}
                                    <div className="board add-new">
                                        <div class="inner">
                                            <a id="add_new_board">Add new board...</a>
                                        </div>
                                    </div>
                                    <div className='board form'>
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
                                                    <a >cancel</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <Usertwo tboard={tboard} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

//export default Boards;
const mapToProps = ({ board, tboard }) => ({ board, tboard });
export default connect(mapToProps)(Boards);