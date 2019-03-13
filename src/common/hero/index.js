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
            {()=>{
              for (let index = 0; index < 4; index++) {
                // 在这里因为 index 不会改变，所以使用此来确定 key 值
                return <VideoContent key={index}><WaterVideoSource /></VideoContent>
              }
            }}
          </MultipleVideo>
        </Video>
      </HeroWrapper>
    )
  }
}