import React from 'react'
import Task from './task'
import { addTask, addStage } from '../actions/actions'
import Head from './Head';
import Footer from './footer';
import { connect } from 'redux-zero/react';

class NewStage extends React.Component {
    render() {
        const { boardId } = this.props;
        return (
            <div className="list form">
                <div className='inner'>
                    <h4>New List</h4>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addStage(this.stageInputRef.value, boardId)}}
                        id='new_list_form'>
                        <div className="inner-wrap">
                            <input
                                type="text"
                                id="list_name"
                                name="name"
                                placeholder="Add a new list..."
                                required=""
                                ref={e => this.stageInputRef = e}
                            />
                            <button type="submit">Save list</button>
                            <span> or </span>
                            <a>Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

class Stage extends React.Component {
    render() {
        let list = null;
        if (this.props.tasks)
            list = this.props.tasks.map(task => {
                return <Task key={task.id} title={task.title} />
            })
        return (
            <div>
                <h3> {this.props.title}</h3>
                {list}
            </div>
        )
    }
}

const StageView = ({ boards }) => {
    let list = null;
    /*if (boards)
        list = boards.map(board => {
            return <Board
                key={board.user_id}
                title={board.title}
            />
        });*/

    return (
        <main id='main_container'>
            <div>
                <div id='authentication_container' className='application-container'>
                    <Head />
                    <div className='main-container'>
                        <div className="view-container boards show">
                            <header className="view-header" >
                                <h3> ghfvhg</h3>
                            </header>
                            <div className="canvas-wrapper">
                                <div className="canvas">
                                    <div className="lists-wrapper">
                                        {list}
                                        <NewStage boardId={boards}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Footer />*/}
        </main>
    );
}


const mapToProps = ({ boards }) => ({boards});
export default connect(mapToProps)(StageView);
//export default Stage