import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { action } from './store'

import { 
  HeroWrapper, 
  Title, 
  Input, 
  Discrible, 
  Content, 
  Label, 
  UploadBox, 
  UploadWrapper,
  MultipleVideo,
  SingleVideo,
  VideoContent,
  Video,
} from './style';

import { PointVideoSource, WaterVideoSource } from './pure/video'
class Hero extends Component {
  render() {
    // 调用方法
    const { handleVideoLoad } = this.props
    // 传入变量
    const { videoLoad } = this.props
    return (
      <HeroWrapper>
        <Content>
          <Title>
            Upload something simply
          </Title>
          <Discrible>
            You can drop the file or click the button to uplaod file
          </Discrible>
          <Input />
          <Label>
            <UploadWrapper>
              <UploadBox>
                Drag & Drop your files or Browse
              </UploadBox>
            </UploadWrapper>
          </Label>
        </Content>
        <Video>
          <SingleVideo>
            <CSSTransition
              in={videoLoad}
              timeout={3000}
              // 在这里不能使用 css model 因为 CSSTransition 是动态加入 css 标签的
              classNames='video'
            >
              {/* onXX 里应该写一个方法, 而不是执行方法 */}
              {/* 这里只有该 video 显示出来比较突兀 所以使用 动画 延迟加载  */}
              <VideoContent onLoadedData={handleVideoLoad}><PointVideoSource /></VideoContent>
            </CSSTransition>
          </SingleVideo>
          <MultipleVideo>
            <VideoContent><WaterVideoSource /></VideoContent>
            <VideoContent><WaterVideoSource /></VideoContent>
            <VideoContent><WaterVideoSource /></VideoContent>
            <VideoContent><WaterVideoSource /></VideoContent>
          </MultipleVideo>
        </Video>
      </HeroWrapper>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    // 这里的第一个参数是 combineReducers 的 key 值
		videoLoad: state.getIn(['hero', 'videoLoad']),
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleVideoLoad() {
      // action.videoLoad() 返回一个对象
      dispatch(action.videoLoad())
		},
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Hero)