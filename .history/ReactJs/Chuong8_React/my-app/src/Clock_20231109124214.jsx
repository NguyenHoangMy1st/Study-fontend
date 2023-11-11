import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
      super(props)
      console.log('constructor')
      this.state = {
        time: {
          created: new Date().toLocaleTimeString()
        },
        seconds: {
          created: new Date().getSeconds()
        },
        name: this.props.name,
        lists: [],
        darkMode: false
      }
      this.date = '22/8/2022'
      this.getTime = this.getTime.bind(this)
    }