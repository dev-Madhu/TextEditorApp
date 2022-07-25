import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  EditorBox,
  Image,
  TextContainer,
  ButtonBox,
  Bold,
  Underline,
  Italic,
  TextArea,
  Heading,
  ListItem,
  ImageBox,
} from './StyledComponents'

class TextEditor extends Component {
  state = {userInput: '', color: false, bold: false, ital: false, line: false}

  onChangeTextValue = event => {
    this.setState({userInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({
      color: !prevState.color,
      bold: !prevState.bold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      ital: !prevState.ital,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      line: !prevState.line,
    }))
  }

  render() {
    const {userInput, color, line, ital, bold} = this.state
    return (
      <MainContainer>
        <EditorBox>
          <ImageBox>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageBox>
          <TextContainer>
            <ButtonBox>
              <ListItem>
                <Bold
                  data-testid="bold"
                  color={color}
                  bold={bold}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Bold>
              </ListItem>
              <ListItem>
                <Italic
                  data-testid="italic"
                  ital={ital}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Italic>
              </ListItem>
              <ListItem>
                <Underline
                  data-testid="underline"
                  line={line}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Underline>
              </ListItem>
            </ButtonBox>
            <TextArea
              cols="7"
              color={color}
              bold={bold}
              line={line}
              ital={ital}
              rows="10"
              value={userInput}
              onChange={this.onChangeTextValue}
            >
              {userInput}
            </TextArea>
          </TextContainer>
        </EditorBox>
      </MainContainer>
    )
  }
}

export default TextEditor
