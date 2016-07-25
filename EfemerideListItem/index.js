import React from 'react'
// import './styles.scss'

export default class EfemerideListItem extends React.Component {
  render () {
    let efemeride = this.props.efemeride

    let styles = {
      listItem: {
        display: 'flex'
      },
      listItemP: {
        display: 'flex',
        marginLeft: 10
      }
    }

    return <div className='row'>
      <div className='col s8'>
        <li style={styles.listItem}>
          <h4>{efemeride.date}</h4>
          <p style={styles.listItemP}>{efemeride.data}</p>
        </li>
      </div>
    </div>
  }
}

EfemerideListItem.propTypes = {
  efemeride: React.PropTypes.object.isRequired
}
