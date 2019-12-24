import React, {Component} from 'react'
import { List, Avatar } from 'antd';
import MenuList from '@material-ui/icons/List';
import {Link} from "react-router-dom";

class FormList extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount () {
    fetch('http://localhost:3002/api/forms')
      .then(response => response.json())
      .then(data => this.setState({'data': data}));
  }

  render () {

    return (
      <List
        itemLayout="horizontal"
        dataSource={this.state.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<MenuList />}
              title={<Link to={`/view/${item.id}`} >{item.title}</Link>}
            />
          </List.Item>
        )}
      />
    )
  }
}

export default FormList
