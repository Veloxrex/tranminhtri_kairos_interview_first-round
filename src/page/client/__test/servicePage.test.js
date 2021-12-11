import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ServicePage from '../servicePage';

configure({ adapter: new Adapter() });


const mockStore = configureStore([]);

describe('Service component', () => {
  let wrapper;

  beforeEach(() => {
    jest.useFakeTimers()
    const initialState = {
     
    }
    const store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <ServicePage/>
      </Provider>
    )
  })

  afterEach(() => {
    // Switch to real timers after each of test cases
    jest.useRealTimers();
  });
  it('Should render without errors', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})