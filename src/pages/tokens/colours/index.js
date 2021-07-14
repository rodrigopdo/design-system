import React, { useState } from 'react';
import { Title, ColourTitle, TextContent, Table, TextColour1, TextColour2, TextColour3, Alert } from './styles';
import { Main, PageContainer } from '../../../utilities/grid';
import { coloursData } from '../../../contents/coloursData';
import { FaRegCopy } from 'react-icons/fa';
import copy from "copy-to-clipboard"; 

const Colours = () => {

const [showCopied, setShowCopied] = useState();

const x = coloursData[0].hexCode

  return (
    <Main>
      <PageContainer>
      {coloursData.map((item, index) => {
        
        const hexColour = item.hexCode;
        
        const copyToClipboard = () => {
          copy(hexColour);
          setShowCopied(!showCopied);
          // alert(hexColour + ' Copied to Clipboard!')
          setTimeout(() => setShowCopied(showCopied), 4000)
        };

        return <>
          <Title>{item.title}</Title>
          <TextContent key={index} bgColour={item.hexCode}>
            <ColourTitle colour={item.textContainerColour}>
              <h3 >{item.colourName}</h3>
              <p>{item.hexCode}</p>
              <button onClick={copyToClipboard}><FaRegCopy/> <small show={showCopied}>copy</small></button>
            </ColourTitle>
            <div>
              <Table borderLight={item.borderLight}color={item.textContainerColour}>
                <thead>
                  <tr>
                    <td>Colour</td>
                    <td>16px</td>
                    <td>18px</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TextColour1 color={'#000'}>Black</TextColour1>
                    <td>{item.legibleColour1}</td>
                    <td>{item.legibleColour1}</td>
                  </tr>
                  <tr>
                    <TextColour2 color={'#fff'}>White</TextColour2>
                    <td>{item.legibleColour2}</td>
                    <td>{item.legibleColour2}</td>
                  </tr>
                  <tr>
                    <TextColour3 color={'#1DA042'}>Green</TextColour3>
                    <td>{item.legibleColour3}</td>
                    <td>{item.legibleColour3}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </TextContent>
        </>
      })}
      </PageContainer>
      <Alert show={showCopied}>
        <h3>{`Copied to Clipboard!`}</h3>
      </Alert>
    </Main>
  )
}

export default Colours;
