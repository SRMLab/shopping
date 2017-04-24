import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
  addInventoryItem,
  fetchReferences,
} from '../actions'

import Button from '../components/Button'
import InputText from '../components/InputText'
import InputSelect from '../components/InputSelect'
import InputSelectMultiple from '../components/InputSelectMultiple'
import AutoSelect from '../components/AutoSelect'
import Header from '../components/Header'
import SelectImageDialog from './SelectImageDialog'


const styles = {
  container: {
    padding: '10px',
  }
}

let categories = [];
let shops = [];

class NewInventoryItem extends Component {
  state = {
    errors: {},
    name: '',
    secondName: '',
    category: '',
    shops: [],
    imagePath: '',
  }
  handleChangeName = (e) => {
    this.setState({name: e.target.value})
  }
  handleChangeSecondName = (e) => {
    this.setState({secondName: e.target.value})
  }
  handleChangeCategory = (e, index, value) => {
    this.setState({category: value})
  }
  handleChangeShops = (e, index, values) => {
    console.log(values)
    this.setState({shops: values})
  }
  handleChangeImage = (imageUrl) => {
    this.setState({imagePath: imageUrl})
  }

  handleSubmit = (e) => {
    if (e) e.preventDefault()
    if (!this.state.name) {
      this.setState({errors: {name: 'This field is required'}})
      return
    }
    // if (!categories.includes(this.state.category)) categories.push(this.state.category);

    this.props.dispatch(addInventoryItem({
      name: this.state.name,
      secondName: this.state.secondName,
      category: this.state.category,
      imagePath: this.state.imagePath,
    }))
  }

  componentDidMount(){
    this.props.fetchReferences()
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
            <InputText
              label='Secondary Name'
              placeholder='Name of item'
              value={this.state.secondName}
              onChange={this.handleChangeSecondName}
              errorText={this.state.errors.secondName}
            />
            <InputSelect
              label="Category"
              placeholder='Choose one'
              value={this.state.category}
              onChange={this.handleChangeCategory}
              options={this.props.categories}
              errorText={this.state.errors.category}
            />

            <InputSelectMultiple
              label="Shops"
              placeholder='Choose one or more'
              values={this.state.shops}
              onChange={this.handleChangeShops}
              options={this.props.shops}
              errorText={this.state.errors.shops}
            />

            <SelectImageDialog onChange={this.handleChangeImage} itemImages={this.props.itemImages}/>
            <Button label='Submit' type='submit' />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.inventory.items,
    categories: state.inventory.categories,
    shops: state.inventory.shops,
    itemImages: state.inventory.itemImages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReferences: () => dispatch(fetchReferences()),
  }
}


NewInventoryItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewInventoryItem)

export default NewInventoryItem

