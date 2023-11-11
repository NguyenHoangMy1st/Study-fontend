import { useState } from "react";
import "./App.css";
import Clock from "./Clock";

function App() {
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)
  return (
    <div className="App">
      {/* <button onClick={() => setName('Apple')}>Change name</button>
      <button onClick={() => setVisible(false)}>Hide Clock component</button>
      {visible && <Clock name={name} />} */}
      {/* <Layout>
        <h1>Hello</h1>
        <BareInput
          type='password'
          value='100'
          autoFocus
          className='input-control'
          onChange={() => {}}
        />
        <BareButton />
      </Layout> */}
      {/* <LoginControl hidden={false} /> */}
      {/* <CorrectlyState /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UncontrolledComponent /> */}
      {/* <Calculator />
       */}
      {/* <Inheritance /> */}
      {/* <Composition /> */}
      <FilterableProductTable />
    </div>
  );
}

export default App;
