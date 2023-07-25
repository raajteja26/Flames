import React, { useState } from 'react';
import lovers from "./images/lovers.png";
import friends from "./images/friends.png";
import angry from "./images/angry.png";
import marriage from "./images/marriage.png";
import enemies from "./images/enemies.png";
import siblings from "./images/siblings.png";

const FlamesCalculator = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');
  const [count, setCount] = useState(0);
  const [image, setImage] = useState([friends,lovers,angry,marriage,enemies,siblings]);


  const handleInputChange = (event, setName) => {
    setName(event.target.value);
  };

  const tryOther = () => {
     setName1("")
     setName2("")
     setResult("")
  }
  const calculateFLAMES = () => {
    let name1Arr = name1.toLowerCase().replace(/ /g, '').split('');
    let name2Arr = name2.toLowerCase().replace(/ /g, '').split('');

    for (let i = 0; i < name1Arr.length; i++) {
      for (let j = 0; j < name2Arr.length; j++) {
        if (name1Arr[i] === name2Arr[j]) {
          name1Arr.splice(i, 1);
          name2Arr.splice(j, 1);
          i--;
          break;
        }
      }
    }

    const totalCount = name1Arr.length + name2Arr.length;
    const flamesOrder = ['Friends', 'Lovers', 'Angry', 'Marriage', 'Enemies', 'Siblings'];
    const remainingCount = totalCount % flamesOrder.length;
    setCount(remainingCount)
    setResult(flamesOrder[remainingCount]);
  };

  return (
    <div className="flames-calculator" style={{marginTop:"20px"}}>
      <p style={{margin:"0px"}}>Raajteja</p>
      <h1 style={{margin:"0px"}}>FLAMES</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name1}
          disabled={result ? true : false}
          onChange={(event) => handleInputChange(event, setName1)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter the other person's name"
          value={name2}
          disabled={result ? true : false}
          onChange={(event) => handleInputChange(event, setName2)}
        />
      </div>
       {name1 && name2 && !result ? <button  onClick={calculateFLAMES}>GO</button> : "" }
      {result ? <button  onClick={tryOther}>Try Other</button> : "" }
      
      {result && (
        <>
          <p>Relationship: {result}</p>
          <img
            src={image[count]}
            alt={result}
            style={{ width: '100%', height: '100%' }}
          />
        </>
      )}
    </div>
  );
};

export default FlamesCalculator;
