import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('VD');
  const [count, setCount] = useState(0);
  const changeDuringPeriod = () => {
    setInterval(handleNameChange, 100);
  }
  const handleNameChange = () => {
    const names = ["VD", "DV", "Together"];
    const int = Math.floor(Math.random() * 3)
    setName(names[int]);
  }
  const onClickFunc = () => {
    setCount(count+1)// он устанавливается как 1 + 1
    setCount(count+1)// устанавливается как 1 + 1 не как 2 + 1 потому что передается в параметрах функции
    console.log(count);
  }

  const onClickFunc2 = (name) => {
    console.log(count);
  }

  const onClickFunc3 = (e) => {
    console.log(e.target.innerText);
  }
  return (
    <main> 
      <p onDoubleClick = {onClickFunc}>
        Hello {name}!
      </p>

      <button onClick={handleNameChange}>
        Поменять имя
      </button>

      <button onClick={onClickFunc2}>
        просто кликай 2
      </button>

      <button onClick = {(e) => onClickFunc3(e)}>
        клик 3
      </button>

    </main>
  )
}

export default Content