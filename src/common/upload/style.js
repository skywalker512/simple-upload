import styled from 'styled-components'

const inputId = 'hero-upload'
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
