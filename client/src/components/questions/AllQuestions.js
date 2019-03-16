import React, {Component} from "react";
import {Link} from "react-router-dom";

class AllQuestions extends Component {
    render() {
        const {questions} = this.props;

        return (
            <ul className="AllQuestions">
                {questions.map(question => {
                    return (
                        <li key={question._id}>
                            <Link to={`/questions/${question._id}`}>{question.title}</Link> -
                            {question.user ? 
                                <Link to={`/users/${question.user._id}/${question.user.name}`}>{question.user.name}</Link> :
                                'User deleted profile :('
                            }
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default AllQuestions;