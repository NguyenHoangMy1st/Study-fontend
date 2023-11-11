import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [
        {
          id: '1a',
          name: 'Sony',
          avatar: '🎈'
        },
        {
          id: '2b',
          name: 'Iphone',
          avatar: '🎉'
        },
        {
          id: '3c',
          name: 'Samsung',
          avatar: '🎁'
        }
      ]
    }
  }