import React ,{ Component } from 'react';

class Header extends Component {
    render() {
        const headerStyle = {
            textAlign: 'center',
            padding: 20,
            background: '#000',
            color: '#fff',
            textTransform: 'uppercase'
        };

        return (
            <header style={headerStyle}>
                <h1>{this.props.heading}</h1>
            </header>    
        )
    }
}

export default Header;
