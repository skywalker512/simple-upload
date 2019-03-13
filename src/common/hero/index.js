import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
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
export default class Hero extends Component {
  // 目前只能使用这样加入同样的 元素
  getMultipleVideo() {
    const MultipleVideoList = []
    for (let index = 0; index < 4; index++) {
      MultipleVideoList.push(<VideoContent key={index}><WaterVideoSource /></VideoContent>)
    }
    return MultipleVideoList
  }
  
  render() {
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
            <CSSTransition>
              <VideoContent><PointVideoSource /></VideoContent>
            </CSSTransition>
          </SingleVideo>
          <MultipleVideo>
            {this.getMultipleVideo()}
          </MultipleVideo>
        </Video>
      </HeroWrapper>
    )
  }
}