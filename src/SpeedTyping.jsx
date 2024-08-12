import React, { useEffect, useRef, useState } from 'react'
import TypingArea from './TypingArea';
import { getSetting, getTypingTypes, paragraphs } from './assets';

const SpeedTyping = ({i = 0}) => {

  let typingTypes = getTypingTypes();
  const setting = getSetting();

  let typingSpeed = 225;
  if ( setting.level === 'Easy')
    typingSpeed = 225;
  else if ( setting.level === 'Medium')
    typingSpeed = 325;
  else if ( setting.level === 'Hard')
    typingSpeed = 450;

  const [fontSize, setFontSize] = useState(setting.fontSize);
  console.log(fontSize);

  const maxTime = Math.round((paragraphs[i].text.length / typingSpeed) * 60);

  

  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [time, setTime] = useState(typingTypes === 'accuracy' ? 0 : maxTime);
  const [WPM, setWPM] = useState(0);
  const [CPM, setCPM] = useState(0);
  const [inpFieldValue, setInpFieldValue] = useState('');
  const paraRef = useRef(null);
  const inputField = useRef(null);
  const [mistakes, setMistakes] = useState(0);

  function getParagraphs()
  {
    if ( paraRef.current === null )
      paraRef.current = new Map();

    return paraRef.current;
  }

  const loadParagraphs = () => {
    const ifield = document.getElementsByClassName('input-field');
    document.addEventListener('keydown', () => inputField.current.focus());
    const content = Array.from(paragraphs[i].text).map((letter, index) => {
      return (
        <span key={index}
        className={` ${index===0 ? 'active' : ''}`}
        
        ref={ node => {
          const para = getParagraphs();

          if ( node !== null )
          {
            para.set(index, node);
          }
          else 
            para.delete(letter);
        }}
        >
          {letter}
        </span>
      );
    });
    setTypingText(content);
    setInpFieldValue('');
  }

  useEffect(() => {
    loadParagraphs();
  }, []);

  useEffect(() => {
    let intervalId;

    if ( typingTypes === 'accuracy')
    {
      if ( isTyping && charIndex < getParagraphs().size)
      {
        intervalId= setInterval(() => {
          setTime(time + 1);
        }, 1000);
  
        let cpm = (charIndex - mistakes - 1) / (time / 60);
        if ( time === 0 || cpm < 0 )
          cpm = 0;
        setCPM(parseInt(cpm));
        setWPM(parseInt(cpm/5));
      }
    }
    else if ( typingTypes === 'speed') 
    {
      if ( isTyping && charIndex < getParagraphs().size && time > 0 )
        {
          intervalId= setInterval(() => {
            setTime(time - 1);
          }, 1000);
    
          let cpm = (charIndex - mistakes - 1) / ((maxTime - time) / 60);
          if ( (60 - time) === 0 || cpm < 0 )
            cpm = 0;
          setCPM(parseInt(cpm));
          setWPM(parseInt(cpm/5));
        }
    }
    
    return () => clearInterval(intervalId);
  }, [time, isTyping]);

  const initTyping = (e) => {
    let typeChar = e.target.value; 
    let characters = getParagraphs();

    let check;
    if ( typingTypes === 'speed')
    {
      check = charIndex < characters.size && time > 0;
    }
    else if ( typingTypes === 'accuracy')
    {
      check = charIndex < characters.size;
    }
    
    if ( check )
    {
      let currChar = characters.get(charIndex);
      if ( charIndex + 1 < characters.size )
          characters.get(charIndex + 1).classList.add('active');
      currChar.classList.remove('active');
      if ( typeChar === currChar.innerText)
      {
        currChar.classList.add('correct');
      }
      else 
      {
        currChar.classList.add('wrong');
        setMistakes(mistakes + 1);
      }
      setIsTyping(true);
      setCharIndex(charIndex + 1);
    }
    else 
    {
      setIsTyping(false);
    }
    
    
  }

  const resetGame = () => {
    
    const characters = getParagraphs();
    for ( let i = 0; i < charIndex; i++ )
    {
      if ( characters.get(i).classList.contains('correct')) 
        characters.get(i).classList.remove('correct');
      else if ( characters.get(i).classList.contains('wrong')) 
        characters.get(i).classList.remove('wrong');
    }
    if ( charIndex === characters.size )
      characters.get(charIndex-1).classList.remove('active');
    else 
      characters.get(charIndex).classList.remove('active');
    characters.get(0).classList.add('active');
    setCharIndex(0);
    setTime(typingTypes === 'accuracy' ? 0 : maxTime);
    setMistakes(0);
    setCPM(0);
    setWPM(0);
    setIsTyping(false);
  }

  const handleKeyDown = (e) => {
    const characters = getParagraphs();
    if ( e.key === 'Backspace' && charIndex > 0 
      && charIndex < characters.size 
    )
    {
      if ( characters.get(charIndex-1).classList.contains('correct'))
        characters.get(charIndex-1).classList.remove('correct');

      if ( characters.get(charIndex-1).classList.contains('wrong'))
      {
        characters.get(charIndex-1).classList.remove('wrong');
        setMistakes(mistakes - 1);
      }

      characters.get(charIndex).classList.remove('active');
      characters.get(charIndex - 1).classList.add('active');
      setCharIndex(charIndex - 1);
    }
  }


  return (
    <div className={`relative w-[520px] h-auto px-5 py-5 border border-solid 
      border-slate-400 rounded-lg text-[${fontSize}px] ${setting.theme === 'Light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <input ref={inputField} type = "text"
            className = "input-field absolute opacity-0 -z-10"
            value={
              inpFieldValue
            }
            onChange = {
                initTyping
            }

            onKeyDown={handleKeyDown}
            />
      <TypingArea
       typingText={typingText}
       resetTyping={resetGame}
       time={time}
       CPM={CPM}
       WPM={WPM}
       mistakes={mistakes}
       />
    </div>
  )
}

export default SpeedTyping