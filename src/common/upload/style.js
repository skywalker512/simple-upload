import styled from 'styled-components'

const inputId = 'hero-upload'
const Button = styled.div`
  height: 30px;
  width: 30px;
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
`
export const FileTitle = styled.div`
`
export const FileSize = styled.div`
`
export const UploadButton = styled(Button)`
  justify-items: flex-end;
`