import React, { Component } from 'react';
import { connect } from 'react-redux';

export class UserHeader extends Component {
    

    render() {
        const {user} = this.props;
    
        if (!user) {
            return <div>Loading...</div>
        }


        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
}

// function UserHeader(props) {

//     useEffect(() => {
//         fetchUser(props.userId);
//     }, [props.userId])

//     return (
//         <div>
//             {props.user ? props.user.name : null}
//         </div>
//     )
// }


// ownProps is used to get access to the UserHeader's props
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps)(UserHeader)
