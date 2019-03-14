import styled from 'styled-components'

const inputId = 'hero-upload'

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  color: #c7ccd8;
  background-color: #1e2430;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.p`
  font-size: 2em;
  color: #fff;
`

export const Discrible = styled.p`
  margin: 2em 3em;
  font-size: 1.125em;
`

export const Input = styled.input.attrs({
  id: inputId,
  type: 'file',
  multiple: 'multiple',
  accept: 'accept',
})`
  display: none;
`
export const Label = styled.label.attrs({
  htmlFor: inputId
})``

export const UploadWrapper = styled.div`
  height: 76px;
  width: 288px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(185, 191, 204, 0.2);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const UploadBox = styled.div`
  font-size: 14px;
`

export const Video = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`
export const VideoContent = styled.video.attrs({
  autoPlay: 'autoplay',
  loop: 'loop',
  muted: true,
})`

`
export const SingleVideo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  video {
    opacity: 0;
    width: 1280px;
    z-index: 0;
    mix-blend-mode: screen;
  }
  &::after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(180deg,rgba(40,42,46,0),#1e2430 95%);
    z-index: 1;
    content: "";
  }

  .video-enter {
    transition: opacity 3s;
    opacity: .5;
  }
  .video-enter-done {
    opacity: .5;
  }
`
export const MultipleVideo = styled.div`
  video {
    mix-blend-mode: screen;
  }
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 1400px;
  height: 100%;
  z-index: 0;
`