import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addInventoryItem } from '../actions'
import _ from 'underscore'

import Button from '../components/Button'
import InputText from '../components/InputText'
import AutoSelect from '../components/AutoSelect'
import Header from '../components/Header'
import SelectImageDialog from './SelectImageDialog'


const styles = {
  container: {
    padding: '10px',
  }
}

class NewInventoryItem extends Component {
  state = {
    errors: {},
    name: '',
    category: '',
    imagePath: '',
    errors: {
      name: ''
    }
  }
  handleChangeName = (e) => {
    this.setState({name: e.target.value})
  }
  handleChangeCategory = (value) => this.setState({category: value.trim()})
  handleChangeImage = (imageUrl) => this.setState({imagePath: imageUrl})

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
      imagePath: this.state.imagePath,
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
              label="Category"
              placeholder='Category of item: select one or create'
              value={this.state.category}
              onChange={this.handleChangeCategory}
              options={['Vegetables', 'Meat', 'Grain', 'Tools', 'Office']}
              errorText={this.state.errors.category}
            />
            <SelectImageDialog onChange={this.handleChangeImage}/>
            <Button label='Submit' type='submit' />
          </form>
        </div>
      </div>
    )
  }
}

NewInventoryItem = connect()(NewInventoryItem)

export default NewInventoryItem

