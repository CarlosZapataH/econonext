import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock, setName} from '../store'
import Link from 'next/link';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        //const isLoggedIn = this.state.isLoggedIn;
        //const user = this.state.user;
        return <div>
            <h1>Hola, {this.props.name}</h1>
            <Link href="/login">
                <a>Ir login</a>
            </Link>

        </div>
    }
}

const mapStateToProps = state => ({
    name: state.name
});

const mapDispatchToProps = {startClock, setName};
export default connect(mapStateToProps, mapDispatchToProps)(Index)