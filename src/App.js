import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const URL_API = 'http://devopstestaar.eastus2.cloudapp.azure.com/api/user'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  /* 
    *ACUMULADOR
    TO-DO -> Setear un acumulador y iterar sobre price de cada producto y acumular el total de productos en el state amount
  */
  componentDidMount() {
    console.log(URL_API)
    fetch(URL_API)
      .then(res => res.json())
      .then((response) => {
        console.log(response)
        this.setState({
          items: response.items
        })

      }
      )
      .catch(error => console.log(error))
  }



  render() {
    const { items } = this.state;
    return (
      <div>
        <Form name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 5,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off">
          <Form.Item
            label="Username">
              <Input prefix={<UserOutlined />}/>
          </Form.Item>
          
          <Form.Item
            label="Password">
              <Input.Password prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit"> Login</Button>
          </Form.Item>
        </Form>

        <h1>Last users connections</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.fullName} {item.country}
            </li>
          ))}
          <Button type="primary">Add</Button>
          <Button type="danger">Delete</Button>
          

        </ul>
       
      </div>
    )
  }
}
