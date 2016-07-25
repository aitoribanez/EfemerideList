import React from 'react'
// import './styles.scss'

export default class EfemerideListFooter extends React.Component {
  render () {
    let styles = {
      listFooter: {
        backgroundColor: 'grey',
        padding: 5
      }
    }

    return <div className='row'>
      <div className='col s9' style={styles.listFooter}>
        CC 2016 <a href={this.props.url}>{this.props.author}</a>
      </div>
    </div>
  }
}

EfemerideListFooter.propTypes = {
  url: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired
}
