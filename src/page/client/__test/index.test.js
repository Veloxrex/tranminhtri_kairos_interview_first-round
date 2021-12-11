import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import ClientPage from "..";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


const mockStore = configureStore([]);

describe('Client page', () => {
  let wrapper;

  beforeEach(() => {
    jest.useFakeTimers()
    const initialState = {
     
    }
    const store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <ClientPage/>
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