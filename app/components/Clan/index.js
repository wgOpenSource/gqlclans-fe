import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import {
    List,
    ListItem,
    RaisedButton,
    Snackbar,
    TableRow,
    TableRowColumn,
    TextField,
} from 'material-ui'

export class Clan extends React.Component {
    static propTypes = {
        clan: PropTypes.object,
        mutate: PropTypes.func,
    }

    state = {
        open: false,
        message: '',
        status: null,
    }

    sendMessage = () => {
        const variables = {
            clanId: this.props.clan.clanId,
            body: this.state.message,
        }

        this.props.mutate({ variables }).then(({ data }) => {
            this.setState({ open: true, status: data.addMessage.success  })
        })
    }

    handleRequestClose = () => {
        this.setState({ open: false })
    }

    handleChange = (event) => {
        this.setState({ message: event.target.value })
    }

    render() {
        return (
            <TableRow>
                <TableRowColumn>[{this.props.clan.tag}]-{this.props.clan.name}</TableRowColumn>
                <TableRowColumn>{this.props.clan.members.length}</TableRowColumn>
                <TableRowColumn>
                    <div style={{backgroundColor: this.props.clan.color, width: 30, height: 30}} />
                </TableRowColumn>
                <TableRowColumn>
                    <List>
                        {this.props.clan.messages.map(message => (
                            <ListItem primaryText={message.body}/>
                        ))}
                    </List>
                </TableRowColumn>
                <TableRowColumn>
                    <TextField
                        hintText="Type message to a clan"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <RaisedButton label="Send message" primary onClick={this.sendMessage} />
                    <Snackbar
                        open={this.state.open}
                        message={`Message "${this.state.message}" to clan "${this.props.clan.name}" was sent with status "${this.state.status}"`}
                        autoHideDuration={4000}
                        onRequestClose={this.handleRequestClose}
                    />
                </TableRowColumn>
            </TableRow>
        )
    }
}


export const mutation = gql`
    mutation addMessage($body: String, $clanId: ID) {
        addMessage(body: $body, clanId: $clanId){
            message {
                body
            }
            success
        }
    }
`

export default graphql(mutation)(Clan)
