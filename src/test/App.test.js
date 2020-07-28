import React from 'react';
import {shallow} from 'enzyme'
import App from '../App';
import {Title} from "../components/Title";
import {Input} from "../components/Input";

const  setup = (props ={},state=null) =>{
  const wrapper = shallow(<App {...props}/>)
  if (state) wrapper.setState(state);
  return wrapper;
}
const findByAtrr = (wrapper,val)=>{
  return wrapper.find(`[data-test="${val}"]`);
}

describe('<App/>', ()=> {// grouping
  it('Should in <App/> Component to be one div', () => {// untuk test it
    const wrapper = setup();// shallow= menggambil isi dari component app
    expect(wrapper.find('div').length).toBe(1)
  });
  it('Should in <App/> Component to be one h1', function () {
    const wrapper = setup();
    expect(wrapper.find('h1').length).toBe(1)
  });
  it('Should in Component is called at least once', function () {
    const wrapper = setup();
    const appComponent = findByAtrr(wrapper,'component-app')
    expect(appComponent.length).toEqual(1)
  });
  it('renders in increment button', function () {
    const wrapper = setup();
    const counterDisplay = findByAtrr(wrapper,'increment-button')
    expect(counterDisplay.length).toEqual(1)
  });
  it('Initial State name is string', function () {
    const wrapper = setup();
    const initialNameState = wrapper.state('name');
    expect(initialNameState).toMatch("")// karena sudah menggambil langsung bukan component tidak pakai length!
  });

  it('one click button counter should be result', function () {
    const  counter = 0;
    const wrapper=setup(null,{counter});

    findByAtrr(wrapper, 'increment-button').simulate('click');
    const display = findByAtrr(wrapper,'counter-display');
    expect(display.text()).toContain(counter + 1)
  });

  describe("<Input/>",()=>{
    it('should be 1 input element',  () =>{
      const wrapper=shallow(<Input/>)
      expect(wrapper.find('input').length).toBe(1);
    });
    it('change handle input', ()=> {
      const handleChangeSpy = jest.fn();
      const wrapper = shallow(<Input handleChange={handleChangeSpy} />);
      const event = { target: { value: 'aaa' } };
      wrapper.find('input').simulate('change', event);
      expect(handleChangeSpy).toHaveBeenCalledWith('aaa');
    });
  })

  describe("<Title/>", ()=>{
    it('should ', function () {
      const wrapper= shallow(<Title/>);
      expect(wrapper.find("h1").length).toBe(1);
    });
    it('props ', ()=> {
      const wrapper=shallow(<Title text={'React'}/>);
      expect(wrapper.text()).toBe('Hello React');
    });
  })
})












// const setup = (props = {}, state=null)=>{
//   const wrapper = shallow(<App {...props}/>);
//   if (state) wrapper.setState(state);
//   return wrapper;
// }
// const findByTag = (wrapper,val)=>{
//   return wrapper.find(val);
// }
//
// const findByAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// };
// describe("<App/>", () => {
//   it("should in <App/> components to be one div", function () {
//     const wrapper = setup();
//     const appComponent = findByTag(wrapper,"div");
//     expect(appComponent.length).toEqual(1);
//   });
//   it('should in <App/> components to be one h1', function () {
//     const wrapper = setup();
//     const appComponent = findByTag(wrapper,"h1");
//     expect(appComponent.length).toBe(1);
//   });
//   it('should component is called at least once', function () {
//     const wrapper = setup();
//     const appComponent = findByAttr(wrapper,"counter-display");
//     expect(appComponent.length).toEqual(1);
//   });
//   it('should in <App/> components to be one button', function () {
//     const wrapper = setup();
//     const appComponent = findByTag(wrapper,"button");
//     expect(appComponent.length).toBe(1);
//   });
// });