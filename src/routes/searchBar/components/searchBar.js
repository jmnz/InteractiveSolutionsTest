import React from 'react'
import ReactDOM from 'react-dom'
import { form, FormGroup, FormControl, Button, Col } from 'react-bootstrap'
import './searchBar.scss'

const searchBar = React.createClass({

  propTypes: {
    searching: React.PropTypes.bool,
    findCountries: React.PropTypes.func,
    countriesFound: React.PropTypes.array,
    toSearch: React.PropTypes.string
  },
  getDefaultProps () {
    return {
    }
  },

  render () {
    console.log('rendering')
    return (<div style={{ margin: '0 auto' }}>
      <form>
        <FormGroup bsSize='large'>
          <Col sm={10}>
            <FormControl type='text' ref='textfield'
              placeholder='Type your country here' />
          </Col>
          <Col sm={2}>
            <Button
              className='searchButton'
              type='submit'
              bsStyle='primary'
              bsSize='large'
              block disabled={this.props.searching}
              onClick={!this.props.searching ? (e) => { e.preventDefault(); return this.props.findCountries(ReactDOM.findDOMNode(this.refs.textfield).value) } : null}>
              {!this.props.searching ? 'Search' : 'searching'}
            </Button>
          </Col>
        </FormGroup>
      </form>
    </div>)
  }
})
export default searchBar
