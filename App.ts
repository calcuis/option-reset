import { useEffect, useState } from 'react';

function App() {

  const data = [];

  const [item, setItem] = useState<any>([]);
  const [swap, setSwap] = useState(0);

  const pickItem = async() => {
    try {
    setItem(data[Math.floor(Math.random()*data.length)]);
    setValues(initialValues);
    } catch (err) {
    console.log(err);
    }
  };

  useEffect(() => {
    pickItem();
  }, []);

  const initialValues = {
    choice: "",
  };
  
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
        <button onClick={pickItem}>Randomize</button>

        <div onChange={handleInputChange}>
	 <ul>
            <li>{item.title&&item.title}</li>

            {item.a&&<li><input type="radio" value="a" checked={values.choice=="a"} name="choice" readOnly/> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>}
            {item.b&&<li><input type="radio" value="b" checked={values.choice=="b"} name="choice" readOnly/> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>}
            {item.c&&<li><input type="radio" value="c" checked={values.choice=="c"} name="choice" readOnly/> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>}
            {item.d&&<li><input type="radio" value="d" checked={values.choice=="d"} name="choice" readOnly/> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>}
            {item.e&&<li><input type="radio" value="e" checked={values.choice=="e"} name="choice" readOnly/> {item.e}{values.choice==item.ans && item.ans=="e" &&"✔️"}</li>}

	 </ul>
	</div>
    </>
  )
}

export default App;
