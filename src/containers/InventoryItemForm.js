import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
  addInventoryItem,
  modifyInventoryItem,
  fetchReferences,
} from '../actions/inventory'

import Button from '../components/Button'
import InputText from '../components/InputText'
import InputSelect from '../components/InputSelect'
import Header from '../components/Header'
import SelectImageDialog from '../components/SelectImageDialog'
import ImageUpload from '../components/ImageUpload'

import { FIELD_REQUIRED } from '../constants/form'


const styles = {
  container: {
    padding: '10px',
  }
}

class InventoryItemForm extends Component {
  state = {
    errors: {},
    id: null,
    name: '',
    secondName: '',
    category: '',
    shopFirst: '',
    shopSecond: '',
    imagePath: '',
    image: null,
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
  handleChangeShopFirst = (e, index, value) => {
    this.setState({shopFirst: value})
  }
  handleChangeShopSecond = (e, index, value) => {
    this.setState({shopSecond: value})
  }
  handleChangeImage = (image) => {
    this.setState({image: image})
  }
  handleSubmit = (e) => {
    if (e) e.preventDefault()
    const errors = formValidate(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({errors: errors})
      return
    }

    // Make an array of shops with shop first and shop second
    let shops = []
    if (this.state.shopFirst !== 'N/A' && this.state.shopFirst !== '') 
      shops.push(this.state.shopFirst)
    if (this.state.shopSecond !== 'N/A' && this.state.shopSecond !== '') 
      shops.push(this.state.shopSecond)

    const item = {
      name: this.state.name.trim(),
      secondName: this.state.secondName.trim(),
      category: this.state.category,
      shops: shops,
      imagePath: this.state.imagePath,
      image: this.state.image,
    }
    if (this.state.id) this.props.modifyInventoryItem(this.state.id, item);
    else this.props.addInventoryItem(item);
  }

  componentWillMount(){
    if (this.props.params.id){
      console.log(this.props.params.id)
      const item = this.props.items[this.props.params.id];
      this.setState({
        id: this.props.params.id,
        name: item.name,
        secondName: item.secondName,
        category: item.category,
        // shopFirst: item.shop[0],
        // shopSecond: item.shop[0],
        // imagePath: item.imagePath,
        image: item.image,
      })
    }
  }
  componentDidMount(){
    this.props.fetchReferences()
  }
  render() {
    const shoplist = ['N/A', ...this.props.shops]
    let imageView = null
    if (this.state.image) {
      imageView = (<img src={this.state.image} />)
    }
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

            <InputSelect
              label="Shop 1st"
              placeholder='Choose one'
              value={this.state.shopFirst}
              onChange={this.handleChangeShopFirst}
              options={shoplist}
              errorText={this.state.errors.shopFirst}
            />

            <InputSelect
              label="Shop 2nd"
              placeholder='Choose one'
              value={this.state.shopSecond}
              onChange={this.handleChangeShopSecond}
              options={shoplist}
              errorText={this.state.errors.shopSecond}
            />

            <ImageUpload onChange={this.handleChangeImage}/> 

            { imageView }
            <SelectImageDialog 
              onChange={this.handleChangeImage} 
              itemImages={this.props.itemImages}/>

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
    addInventoryItem: (item) => dispatch(addInventoryItem(item)),
    modifyInventoryItem: (id, item) => dispatch(modifyInventoryItem(id, item)),
  }
}


InventoryItemForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryItemForm)

export default InventoryItemForm

function formValidate(state){
  let errors = {};
  if (!state.name.trim()) errors.name = FIELD_REQUIRED;
  if (!state.secondName.trim()) errors.secondName = FIELD_REQUIRED;
  if (!state.category) errors.category = FIELD_REQUIRED;
  return errors;
}