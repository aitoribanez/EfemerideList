import React from 'react'
// import './styles.scss'

export default class EfemerideListHeader extends React.Component {
  render () {
    let styles = {
      listHeader: {
        backgroundColor: 'red',
        marginTop: 10,
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        textTransform: 'uppercase'
      },
      listHeaderSpan: {
        margin: '10px 10px 10px 3em',
        fontWeight: 400
      }
    }

    return <div className='row'>
      <div className='col s9' style={styles.listHeader}>
        <h5>{this.props.title}</h5>
        <span style={styles.listHeaderSpan}>{this.props.date}</span>
      </div>
    </div>
  }
}

EfemerideListHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string
}
