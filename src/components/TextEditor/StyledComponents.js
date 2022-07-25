import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

export const EditorBox = styled.div`
  background-color: #1b1c22;
  width: 60%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
`
export const Image = styled.img`
  width: 400px;
  height: 400px;
`

export const ButtonBox = styled.ul`
  border-bottom: 1px solid #cbd5e1;
  display: flex;
  list-style-type: none;
  width: 100%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  background-color: #25262c;
  width: 400px;
  height: 450px;
`

export const TextArea = styled.textarea`
  font-size: 18px;
  background-color: #25262c;
  outline: none;
  border: none;
  height: 100%;
  color: ${props =>
    props.color || props.line || props.ital ? '#faff00' : '#f1f5f9'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.ital ? 'italic' : 'normal')};
  text-decoration: ${props => (props.line ? 'underline' : 'normal')};
  font-family: 'Roboto';
`

export const Bold = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-style: ;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  background-color: transparent;
`

export const Italic = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.ital ? '#faff00' : '#f1f5f9')};
  font-style: ${props => (props.ital ? 'italic' : 'normal')};
`

export const Underline = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  text-decoration: ${props => (props.line ? 'underline' : 'normal')};
  color: ${props => (props.line ? '#faff00' : '#f1f5f9')};
`

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #fff;
`

export const ListItem = styled.li`
  padding: 0;
`
