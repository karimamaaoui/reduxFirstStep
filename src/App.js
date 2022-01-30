import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement,logout,login} from './store/actions'

function App() {
  const count=useSelector(state=>state.counter.count);
  const isLogged =useSelector(state=>state.logged.logged);
  console.log(count)
  const dispatch =useDispatch();
  return (
    <div className="App">
        <header>
            <div>
              {count}
            <div>

              {
                isLogged ? <button onClick={() => dispatch(logout())} >{console.log(isLogged)}Logout </button> :        
                    <button onClick={() => dispatch(login())} > {console.log(isLogged)} Login </button>
              }
            </div>
            
            </div>

        </header>
        <div className='counter'>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(increment(3))}>+3</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(decrement(2))}>-2</button>

        </div>
    </div>
  );
}

export default App;
