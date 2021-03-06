import styled from 'styled-components'

const inputId = 'hero-upload'
const Button = styled.div`
  height: 30px;
  width: 30px;
  &::before {
    /* 让他可以定义宽高 */
    display: block;
    width: 27px;
    height: 27px;
    line-height: 27px;
    text-align: center;
    background-color: #2c313f;
    border-radius: 50%;
    font-size: 22px;
    color: #fff;
    transition: border-color 0.2s;
    border: 1.5px solid transparent;
    cursor: pointer;
  }
  &:hover {
    &::before {
      border-color: #fff;
    }
  }
  &.button-enter {
    height: 0;
    width: 0;
    opacity: 0.01;
  }
  &.button-enter-active {
    height: 30px;
    width: 30px;
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &.button-exit {
    height: 30px;
    width: 30px;
    opacity: 1;
  }
  &.button-exit-active {
    height: 0;
    width: 0;
    opacity: 0.01;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &.button-exit-done {
    display: none;
  }
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
})`
  position: relative;
`

export const UploadWrapper = styled.div`
  transition: height 0.4s;
  height: ${props => props._height};
  border-width: 2px;
  border-style: solid;
  border-color: rgba(185, 191, 204, 0.2);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  .filebox-enter {
    height: 0;
    margin: 0 16px;
    padding: 0;
    opacity: 0.01;
  }
  .filebox-enter-active {
    height: 48px;
    margin: 14px 16px 0 16px;
    opacity: 1;
    transition: all 0.4s;
  }
  .filebox-exit {
    height: 48px;
    margin: 14px 16px 0 16px;
    opacity: 1;
  }
  .filebox-exit-active {
    height: 0;
    margin: 0 16px;
    padding: 0;
    height: 0;
    opacity: 0.01;
    transition: all 0.4s;
  }
`
export const UploadTips = styled.div`
  width: 256px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 14px;
  padding: 14px 16px;
`

export const FileBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  padding: 9px;
  z-index: 102;
`

export const Progress = styled.div`
  position: relative;
  margin: 14px 16px 0 16px;
  width: 256px;
  height: 48px;
  background-color: #767b8b;
  border-radius: 4px;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: ${props => props._progress}%;
    height: 48px;
    border-radius: 4px;
    transition: width 0.4s;
    background-color: #22a061;
  }
`

export const CloseButton = styled(Button).attrs({
  className: 'icon-remove'
})`
`
export const FileInfo = styled.div`
  /* 放出剩余空间 */
  flex-grow: 1;
  padding: 0 8px;
`
export const FileTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 1;
  max-height: 16px;
  max-width: 162px;
`
export const FileSize = styled.div`
  font-size: 12px;
`
export const UploadButton = styled(Button).attrs({
  className: 'icon-upload'
})`
  justify-items: flex-end;
`

export const UndoButton = styled(Button).attrs({
  className: 'icon-undo'
})`
  justify-items: flex-end;
`