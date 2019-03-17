import styled from 'styled-components'

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  color: #c7ccd8;
  background-color: #1e2430;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  z-index: 100;
  display: flex;
  margin-top: 200px;
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
export const Video = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`
export const VideoContent = styled.video.attrs({
  // autoPlay: 'autoplay',
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