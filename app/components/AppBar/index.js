import React from 'react'
import PropTypes from 'prop-types'
import { AppBar as AppBarMaterial, List, ListItem } from 'material-ui'

import styles from './styles.scss'

export default class extends React.Component {
    static propTypes = {
        data: PropTypes.shape({
            servers: PropTypes.arrayOf(PropTypes.shape({
                server: PropTypes.string,
                playersOnline: PropTypes.number,
            })),
            loading: PropTypes.bool,
        })
    }

    renderServers() {
        return !this.props.data.loading && this.props.data.servers ? (
            <List>
                {this.props.data.servers.map((info) => (
                    <ListItem
                        leftIcon={<span className="serverInfoID">[{info.server}]</span>}
                        primaryText={info.playersOnline}
                        key={`server-info-${info.server}`}
                    />
                ))}
            </List>
        ) : null
    }

    render() {
        return (
            <AppBarMaterial title="Wargaming Open Source" iconElementRight={this.renderServers()} />
        )
    }
}
