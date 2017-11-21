import React from 'react';
import '../styles/style.css';
import { NavLink } from 'react-router-dom';
import { addStage, addComment, nextTitle, handleLoginClick, handleLogoutClick } from '../actions/actions';
import Head from './Head'
import Footer from './footer'
import { connect } from 'redux-zero/react';
import Stage from './stage';

const DetailedBoard = ({ name, ide, index }) => {
    return (
        <div className="board" id={ide}>
            <div className="inner">
                <h4><NavLink onClick={()=> {nextTitle(index)}} to={'/details'}>{name}</NavLink></h4>
            </div>
        </div>
    );
}

const OtherBoard = ({ tboard }) => {
    const OtherBoardComponent = tboard.map((item, index) => {
        return <DetailedBoard
            key={index}
            name={item.name}
            index={index}
        />
    })

    return (
        <section>
            <header class="view-header">
                <h3><i class="fa fa-users"></i><span> Other boards</span></h3>
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

const AddNewBoard = ({ showReply }) => {
    return (
        !showReply && <div className="board add-new">
            <div className="inner">
                <a id="add_new_board" onClick={() => handleLoginClick()}>Add new board...</a>
            </div>
        </div>
    )
}

const NewBoard = ({ showReply, stages, tasks }) => {
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


const Boards = ({ tboard, board, showReply, stages, tasks }) => {
    /*const onSubmit = e => {
        e.preventDefault();
        if (this.refInput.value) {
            addComment(this.refInput.value);
            this.refInput.value = '';
        }
    }*/

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
                                    {/*<AddNewBoard showReply={showReply} />*/}
                                    <NewBoard showReply={showReply} />
                                    
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


class Board extends React.Component {
    render() {
        const { title, boardId, stages, tasks } = this.props;

        let list = null;
        if (stages)
            list = stages.map(stage => {
                return <Stage key={stage.id} title={stage.title} stageId={stage.id}
                    tasks={tasks == null ? null : tasks.filter(task => task.stageId === stage.id)}
                />
            });
        return (
            <div className="Board-container">
                <h3> {title} </h3>
                <div className="Board-column">
                    {list}
                </div>
                <div className="Board-column">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addStage(this.stageInputRef.value, boardId);
                    }}>
                        <input type="text" ref={e => this.stageInputRef = e} />
                        <button type="submit">
                            save list
                  </button>
                    </form>
                </div>
            </div>
        );
    }
}
//export default Boards;
const mapToProps = ({ tboard, board }) => ({ tboard, board });
export default connect(mapToProps)(Boards);