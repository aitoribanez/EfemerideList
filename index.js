import React from 'react'

import EfemerideListHeader from './EfemerideListHeader'
import EfemerideListFooter from './EfemerideListFooter'
import EfemerideListItems from './EfemerideListItems'
// import './EfemerideList/styles.scss'

export default class EfemerideList extends React.Component {
  render () {
    let styles = {
      list: {
        fontSize: 14
      }
    }
    let efemerides = [
      {
        id: 1,
        date: 98,
        data: 'sadasd asdasd asdasdasd asdasdas'
      },
      {
        id: 2,
        date: 198,
        data: 'parrozki parrozki'
      }
    ]

    return <div className='container' style={styles.list} >
      <EfemerideListHeader title='efemerides' date='12/06/2016' />

      <EfemerideListItems efemerides={efemerides} />

      <EfemerideListFooter author='Aitor Ibañez' url='https://aitoribanez.com' />
    </div>
  }
}
