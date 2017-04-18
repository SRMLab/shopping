import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

import { addInventoryItem, asyncRequest } from '../actions'
import _ from 'underscore'

import Button from '../components/Button'
import InputText from '../components/InputText'
import AutoSelect from '../components/AutoSelect'
import Header from '../components/Header'


const styles = {
  container: {
    padding: '10px',
  }
}

class NewInventoryItem extends Component {
  state = {
    errors: {},
    name: '',
    unit: '',
    category: '',
    sku: '',
    image: '',
  }
  handleChangeName = (e) => this.setState({name: e.target.value.trim()})
  handleChangeUnit = (value) => this.setState({unit: value.trim()})
  handleChangeCategory = (value) => this.setState({category: value.trim()})
  handleChangeSKU = (e) => this.setState({sku: e.target.value.trim()})
  handleSubmit = (e) => {
    if (e) e.preventDefault()
    if (!this.state.name) {
      this.setState({errors: {name: 'This field is required'}})
      return
    }
    this.props.dispatch(addInventoryItem({
      name: this.state.name,
      unit: this.state.unit,
      category: this.state.category,
      sku: this.state.sku,
      image: this.state.image,
    }))
  }
  render() {
    return (
      <div>
        <Header title='New Inventory Item' right='Submit' onClickRight={this.handleSubmit}/>
        <div style={styles.container}>
          <form onSubmit={this.handleSubmit}>
            <InputText
              label='Name'
              placeholder='Name of item'
              value={this.state.name}
              onChange={this.handleChangeName}
              errorText={this.state.errors.name}
            />
            <AutoSelect
              label="Unit"
              placeholder='Unit of item: select one or create'
              value={this.state.unit}
              onChange={this.handleChangeUnit}
              options={['case', 'bag', 'each']}
              errorText={this.state.errors.unit}
            />
            <AutoSelect
              label="Category"
              placeholder='Category of item: select one or create'
              value={this.state.category}
              onChange={this.handleChangeCategory}
              options={['Vegetables', 'Meat', 'Grain', 'Tools', 'Office']}
              errorText={this.state.errors.category}
            />
            <InputText
              label='SKU'
              placeholder='SKU of item. ex) A01'
              value={this.state.sku}
              onChange={this.handleChangeSKU}
              errorText={this.state.errors.sku}
            />
            <Button label='Search Images' />
            <Button label='Submit' type='submit' />
          </form>
        </div>
      </div>
    )
  }
}


NewInventoryItem = connect()(NewInventoryItem)

export default NewInventoryItem

// <InputSelect
//   label="Unit"
//   value={this.state.unit}
//   onChange={this.handleChangeUnit}
//   options={{case:"case", bag:"bag", ea:"ea", lb:"lb"}}
// />
