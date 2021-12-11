import { fromJS } from "immutable";
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import LoginPage from "..";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const dataMock = {
  "createdAt": "2021-10-21T08:36:53.248Z",
  "name": "Jimmie Thompson",
  "avatar": "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg",
  "username": "Mona_Kassulke14",
  "password": "EECsjlVnWIXfeuA",
  "token": `Mona_Kassulke14EECsjlVnWIXfeuA${Date.now()}`,
  "id": "1"
}

const mockStore = configureStore([]);

describe('Login page', () => {
  let wrapper;

  beforeEach(() => {
    jest.useFakeTimers()
    const initialState = {
      loginPage: fromJS({
        userInfo: undefined,
        errorMessage: undefined
      })
    }

    initialState.loginPage = initialState.loginPage
      .set('userInfo', dataMock)
      .set('errorMessage', '')
    
    const store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <LoginPage/>
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