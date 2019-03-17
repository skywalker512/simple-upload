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
    border: 1.5px solid #767b8b;
    cursor: pointer;
  }
  &:hover {
    &::before {
      border-color: #fff;
    }
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
export const UploadTips = styled.div`
  font-size: 14px;
`

export const FileBox = styled.div`
  box-sizing: border-box;
  width: 256px;
  height: 48px;
  background-color: #767b8b;
  border-radius: 4px;
  display: flex;
  padding: 9px;
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