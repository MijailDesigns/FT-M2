import React, { useState } from 'react';
import AppHooks from './AppHooks';
import AppClass from './AppClass';
import Counter from './UseReducer';

export default function App() {
  const [useHook, setUseHook] = useState(true);
  const [show, setShow] = useState(true);

  const componentShown = useHook ? <AppHooks /> : <AppClass />;

  return (
    <>
      <div>
        <Counter />
      </div>
      <div>
        <h3>Henry Hook Demo</h3>
        <button onClick={() => setUseHook(prev => !prev)}>
          {`Change to ${useHook ? 'Class' : 'Hook'}`}
        </button>
        <button onClick={() => setShow(prev => !prev)}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      {
        show ? componentShown : null
      }
    </>
  )
}