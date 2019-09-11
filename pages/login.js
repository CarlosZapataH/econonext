import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock, setName} from '../store'
import Link from 'next/link';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let text = event.target.value;
        this.setState({value: text});
        this.props.setName(text);
        //console.log(this.state);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const user = this.state.user;
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.props.name} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
                <Link href="/panel">
                    <a>Ir Panel</a>
                </Link>
            </form>
        </div>
    }
}


const mapDispatchToProps = {startClock, setName};
const mapStateToProps = state => ({
    name: state.name
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)