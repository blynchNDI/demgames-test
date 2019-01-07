import React, { Component } from 'react'
import {GameWrap, Progress, MatchItem} from '../components/GameItem'
// import {Card} from '../../components/Card'
// import {List, ListItem} from '../../components/List'
import {Wrap} from '../components/Grid'
import {List} from '../components/HorizontalList'
// import {BackBtn} from '../../components/Button'
import API from '../utils/API'
import trimUrl from '../utils/trimUrl';

/**
 * Temporary data for AWS S3
 * Return to question._id when full stack
 */
// import data from '../g4g-spanish.json';

export class Level extends Component {
    constructor(props) {
        super(props)
        this.handleQAClick = this.handleQAClick.bind(this)
        this.checkQA = this.checkQA.bind(this)
        this.shuffleData = this.shuffleData.bind(this)
        this.state = {
            questions: [],
            answers: [],
            questionId: '',
            answerId: '',
            selectedQ: '',
            selectedA: '',
            total: 0,
            progress: '',
            complete: false
        }
    }

    // best performance Fisher–Yates shuffle:
    shuffleData = array => {
        let m = array.length, t, i
        // While there remain elements to shuffle
        while (m) {
            // Pick a remaining element
            i = Math.floor(Math.random() * m--)
            // And swap it with the current element
            t = array[m]
            array[m] = array[i]
            array[i] = t
        }
        return array
    }

    componentDidMount() {
        // const questions = data;
        // const answers = this.shuffleData([...questions]);
        // const total = questions.length;
        // this.setState({questions, answers, total});


        API.getAllSpanishQuesitons()
        .then(res => {
            const   questions = res.data,
                    answers = this.shuffleData([...questions]),
                    total = questions.length
            this.setState({questions, answers, total})
        })
    }

    handleQAClick = (type, id) => {
        if (type === 'question') {
            const   questionId = id,
                    selectedQ = `q-${id}`
            this.checkQA(this.state.answerId, id)
            this.setState({questionId, selectedQ})
        }
        else {
            const   answerId = id,
                    selectedA = `a-${id}`
            this.checkQA(this.state.questionId, id)
            this.setState({answerId, selectedA})
        }
    }

    // check if a match
    checkQA = (a, b) => {
        if ((a !== '') && (a === b)) {
            const   questions = this.state.questions.filter(q => q.question !== b),
                    answers = this.shuffleData([...questions]),
                    total = this.state.total,
                    progress = ((total - questions.length) * 100 / total).toString()
            this.setState({questions, answers, progress})
            if (progress === '100') {
                this.setState({complete: true})
            }
        }
    }

    render() {
        let curUrl = this.props.match.url;
        // Only show level 1 for module 1 (for now)
        return (
            <Wrap>
                { (curUrl.split('/')[2] === 'disenando-un-argumento') && (curUrl.slice(-1) === '1') 
                    ? (
                        <GameWrap backURL={trimUrl(this.props.match.url, 'level')}>
                            <Progress
                                style="style1"
                                title="Nivel 1"
                                togo={this.state.questions.length}
                                num={this.state.progress}
                                complete={this.state.complete}
                                next='/done'
                            />
                            {this.state.questions.length 
                                ? (
                                    <List>
                                        {this.state.questions.map(question => (
                                            <MatchItem
                                                key={question.question}
                                                id={question.question}
                                                name={`q-${question.question}`}
                                                type="question"
                                                text={question.question}
                                                handleClick={this.handleQAClick}
                                                selectedQ={this.state.selectedQ}
                                                selectedA={this.state.selectedA}
                                            />
                                        ))}
                                    </List>
                                )
                                : ('')                        
                            }
                            {this.state.answers.length 
                                ? (
                                    <List>
                                        {this.state.answers.map(answer => (
                                            <MatchItem
                                                key={answer.question}
                                                id={answer.question}
                                                name={`a-${answer.question}`}
                                                type="answer"
                                                text={answer.option1}
                                                handleClick={this.handleQAClick}
                                                selectedQ={this.state.selectedQ}
                                                selectedA={this.state.selectedA}
                                            />
                                        ))}
                                    </List>
                                )
                                : ('')                        
                            }
                        </GameWrap>
                    )
                    : (
                        <GameWrap backURL={trimUrl(this.props.match.url, 'level')}>
                            <div className="text-center">
                                <h1>Coming Soon</h1>
                            </div>
                        </GameWrap>
                    )
                }
            </Wrap>
        )
    }
}