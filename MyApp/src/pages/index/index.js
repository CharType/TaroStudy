import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    name:"你好，程倩sssss",
    text:"啦啦sss"
  }

  componentWillMount () {
    console.log("第一次渲染之前执行，只执行一次")
   }

  componentDidMount () { 
    console.log("第一次渲染之后执行，只执行一次")
    this.setState({name:"设置之后的文字"},()=>{
      alert("在回调函数中获取到的更新之后的值是："+this.state.name);
    })
    alert("获取到的更新之后的值是："+this.state.name);
  }

  componentWillUnmount () { 
    console.log("卸载的时候执行，只执行一次")
  }

  componentDidShow () {
    console.log("页面显示的时候触发")
   }

  componentDidHide () { 
   console.log("页面隐藏的时候触发")
  }

  componentDidUpdate () {
    console.log("state中的数据更新之后")
  }

  componentWillUpdate () {
    console.log("state中数据将要更新")
  }

  shouldComponentUpdate (nextPreops, nextState) {
    console.log("检查此次setState是否要更新render")
    return true;
  }

  componentWillReceiveProps (nextPreops) {
    console.log("会在父组件传递给子组件的参数发生改变的时候触发")
  }

  render () {
    return (
      <View className='index'>
        <Text>{this.state.name}{this.state.text}</Text>
      </View>
    )
  }
}
