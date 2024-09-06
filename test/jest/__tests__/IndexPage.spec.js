import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบหัวข้อ(title)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('FARM')
  });
  it('ตรวจสอบตัวแปร(title)', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'FARM'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('FARM')
  })
})
//------------------------------------------- ตรวจตัวแปร FirstName
describe('IndexPage', () => {
  it('ตรวจสอบตัวแปร (FirstName)', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          firstName: 'Knitanuson'
        }
      }
    })
    const firstNameElement = wrapper.find('#firstName')
    expect(firstNameElement.element.value).toBe('Knitanuson')
  })
})
//------------------------------------------- ตรวจสอบLastName
describe('IndexPage', () => {
  it('ตรวจสอบตัวแปร (LastName)', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          LastName: 'Mahawiratrakun'
        }
      }
    })
    const lastNameElement = wrapper.find('#lastName')
    expect(lastNameElement.element.value).toBe('Mahawiratrakun')
  });
})
//-------------------------------------------- ตรวจสอบ Number
describe('IndexPage', () => {
  it('ตรวจสอบตัวแปร (number)', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          number: '311'
        }
      }
    })
    const numberElement = wrapper.find('#number')
    expect(numberElement.element.value).toBe('311')
  })
})
//------------------------------------------
test('ทดสอบว่ามีฟอร์ม', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form').exists()).toBe(true)
})

test('ทดสอบว่าในฟอร์มมีอินพุตหรือไม่ฟหกฟหาาดาหฟ', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form > input').exists()).toBe(true)
})

test('มีปุ่มไหม', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('button').exists()).toBe(true)
})
