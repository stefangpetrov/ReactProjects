import './App.css';
import React from 'react'
import HookCounter from './Components/HookCounter';
import HookFormHandling from './Components/HookFormHandling';
import UseStateArrays from './Components/UseStateArrays';
import UseEffectHook from './Components/UseEffectHook';
import DataFetching from './Components/DataFetching';
import NestComponentA from './Components/NestComponentA';
import UseReducerCounter from './Components/UseReducerCounter';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/*<HookCounter></HookCounter>*/}
      {/*<HookFormHandling></HookFormHandling>*/}
      {/*<UseStateArrays></UseStateArrays>*/}
      {/*<UseEffectHook></UseEffectHook>*/}
      {/*<DataFetching></DataFetching>*/}
      {/*<UserContext.Provider value={'Pesho'}>
        <ChannelContext.Provider value={'Evolution'}>
        <NestComponentA></NestComponentA>
        </ChannelContext.Provider>
      </UserContext.Provider>*/}
      <UseReducerCounter></UseReducerCounter>
      
    </div>
  );
}

export default App;
