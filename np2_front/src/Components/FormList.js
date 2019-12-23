import React, {Component} from 'react'
import { List, Avatar } from 'antd';

class FormList extends Component {
  data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  componentDidMount () {
    fetch('http://localhost:3002/api/forms')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render () {

    return (
      <List
        itemLayout="horizontal"
        dataSource={this.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    )
  }
}

export default FormList
