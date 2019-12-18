import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import MyErrorBoundary from './components/ErrorBoundary';
import FancyBtn from './components/RefTrans';
import { Btn, customizedBtn, customizedBtn2 } from './components/CustomizedBtn';
import MyPortal from './components/MyPortal';

const LazyComponent = React.lazy(() => import('./components/Lazy'));

const RedPrimaryBtn = customizedBtn(Btn, {color: 'red'});
const BlackSheepBtn = customizedBtn2({color: 'blue'})(Btn)

console.log('RedPrimaryBtn', RedPrimaryBtn)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: 'hello, React 16'
    }
    this.ref = React.createRef();
    this.changeState = this.changeState.bind(this);
  }
  componentDidMount() {
    console.log('ref: ', this.ref.current);
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log('preProps: ', preProps);
    console.log('preState: ', preState);
    console.log('snapshot: ', snapshot);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 1;
  }
  changeState() {
    this.setState({
      greet: 'Changed'
    })
  }
  render() {
    return (
      <MyErrorBoundary>
        <Suspense fallback={<div>loading...</div>}>
          <LazyComponent greet={this.state.greet} />
          <button onClick={this.changeState}>change</button>
          <Clock start={1971485071933} />
        </Suspense>
        <FancyBtn ref={this.ref}>Refs转发</FancyBtn>
        <br/>
        <RedPrimaryBtn desc="primary" />
        <BlackSheepBtn desc="Sheep" />
        <div id="portal"></div>
        <MyPortal>
          <span>myportal</span>
        </MyPortal>
      </MyErrorBoundary>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
