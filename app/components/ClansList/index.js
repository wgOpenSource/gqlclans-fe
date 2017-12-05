import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableRow, TableBody, CircularProgress, TableHeader, TableHeaderColumn } from 'material-ui'
import Clan from 'components/Clan'

export default class extends React.Component {
    static propTypes = {
        ids: PropTypes.arrayOf(PropTypes.string),
        data: PropTypes.shape({
            clans: PropTypes.array,
        }),
    }

    renderHeaders() {
        return (
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow >
                    {['Name', 'Members count', 'Color', 'Messages', ' ', 'Action'].map((header, index) => (
                        <TableHeaderColumn colSpan="3" key={`${header}-${index}`}>{header}</TableHeaderColumn>
                    ))}
                </TableRow>
            </TableHeader>
        )
    }

    renderBody() {
        return (
            <TableBody displayRowCheckbox={false}>
                {this.props.ids.map(id => (
                    <Clan clan={this.props.data.clans.find((clans) => clans.clanId === id)} key={id} />
                ))}
            </TableBody>
        )
    }

    render() {
        return this.props.data.loading || !this.props.data.clans ? (
            <CircularProgress size={70} thickness={5} className="progress" />
        ) : (
            <Table>{this.renderHeaders()} {this.renderBody()}</Table>
        )
    }
}
