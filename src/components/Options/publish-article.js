import React, { Component } from 'react';
import {connect} from 'react-redux'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

import '../../style/func.scss' 
import './Options.scss'


import { publish } from '../../redux/article.redux'

@connect(
  state=>state.article,
  {publish}
)
class PublishArticle extends Component {
  constructor(props){
    super(props)
    this.state={
      type:[],
      title:'',
      date:'',
      breaf_content:'',
      content:'',
      editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
      outputHTML: '<p></p>'
    }
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleEditor = this.handleEditor.bind(this)
  }

  handleCheckBox(ev){
    let types = this.state.type;
    let type = ev.target.value;

    if(types.indexOf(type) === -1){
      types.push(type)
      this.setState({
        type : types
      })
    }else{
      types.splice( types.indexOf(type), 1 )
      this.setState({
        type : types
      })
    }
  }

  handleChange(ev){
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }

  handleSubmit(ev){
    console.log(this.props)
    console.log(this.state)
    this.props.publish(this.state)
  }

  // editor
  componentDidMount () {
    this.isLivinig = true
    // 3秒后更改编辑器内容
    setTimeout(this.setEditorContentAsync, 3000)
  }

  componentWillUnmount () {
    this.isLivinig = false
  }

  handleEditor = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  setEditorContentAsync = () => {
    this.isLivinig && this.setState({
      editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
    })
  }

  render() {
    const { editorState, outputHTML } = this.state
    return (
      <div className='publish-article f-clearfix'>
        <form >
          <div>
            <label className='label'> 文章标题: </label>
            <input type='text' name='title' onChange={this.handleChange} />
          </div>

          {/* <div>
            <label className='label'> 发布日期: </label>
            <input type='date' name='date' onChange={this.handleChange} /> 
          </div> */}

          {/* <div>
            <label className='label'> 文章简介:  </label>
            <textarea name='breaf_content' onChange={this.handleChange}></textarea>
          </div> */}

          {/* <div>
            <label className='label'> 文章内容:  </label>
            <textarea name='content' onChange={this.handleChange}></textarea>
          </div> */}

          <div className='f-clearfix'>
            <label className='label f-fl'>标签：</label>
            <div className='f-fl f-clearfix'>
              <label className='f-fl'>React: <input type='checkbox' name='type'  onChange={this.handleCheckBox} value='React' /></label> 
              <label className='f-fl'>Python: <input type='checkbox' name='type'  onChange={this.handleCheckBox} value='Python' /></label> 
              <label className='f-fl'>Flask: <input type='checkbox' name='type'  onChange={this.handleCheckBox} value='Flask' /></label> 
              <label className='f-fl'>Vue: <input type='checkbox' name='type'  onChange={this.handleCheckBox} value='Vue' /></label> 
              <label className='f-fl'>html/css: <input type='checkbox' name='type'  onChange={this.handleCheckBox} value='html/css' /></label> 
            </div>
          </div>

          <div>
            <div className="editor-wrapper">
              <BraftEditor
                value={editorState}
                onChange={this.handleEditor}
              />
            </div>
            <h5>输出内容</h5>
            <div className="output-content">{outputHTML}</div>
          </div>

          <input type='button' value='提交' onClick={this.handleSubmit} />
        </form>
        
       

      </div>
    );
  }
}

export default PublishArticle;