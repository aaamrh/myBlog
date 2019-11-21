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
      tag:[],
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
    let tags = this.state.tag;
    let tag = ev.target.value;

    if(tags.indexOf(tag) === -1){
      tags.push(tag)
      this.setState({
        tag : tags
      })
    }else{
      tags.splice( tags.indexOf(tag), 1 )
      this.setState({
        tag : tags
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
    setTimeout(this.setEditorContentAsync, 1000)
  }

  componentWillUnmount () {
    this.isLivinig = false
  }

  handleEditor = (editorState) => {
    let text, html;
    html = editorState.toHTML();

    text = html.replace(/(<[\w][^>]*>)|(<\/[\w]+>)/g, function($0, $1, $2){
      if($2 === '</p>'){  return '\n' }
      return '';
    })
    
    this.setState({
      content: text,
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
              <label className='f-fl'>React: <input type='checkbox' name='tag'  onChange={this.handleCheckBox} value='React' /></label> 
              <label className='f-fl'>Python: <input type='checkbox' name='tag'  onChange={this.handleCheckBox} value='Python' /></label> 
              <label className='f-fl'>Flask: <input type='checkbox' name='tag'  onChange={this.handleCheckBox} value='Flask' /></label> 
              <label className='f-fl'>Vue: <input type='checkbox' name='tag'  onChange={this.handleCheckBox} value='Vue' /></label> 
              <label className='f-fl'>Js: <input type='checkbox' name='tag'  onChange={this.handleCheckBox} value='js' /></label> 
              <label className='f-fl'>感悟: <input type='checkbox' name='tag'  onChange={this.handleCheckBox} value='diary' /></label> 
              <label className='f-fl'>读书笔记: <input type='checkbox' name='tag'  onChange={this.handleCheckBox} value='book' /></label> 
              <label className='f-fl'>投资理财: <input type='checkbox' name='tag'  onChange={this.handleCheckBox} value='financing' /></label> 
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