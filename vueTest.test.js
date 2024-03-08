
import { mount } from '@vue/test-utils'
import { render,describe ,it,expect, } from 'vitest'

import home from "./src/FrontedLayout/home.vue"



describe('home', () => {
    it('should work', () => {
        const wrapper = mount(home,{
            props:{
                msg:"hello"
            },
           
        })
        const vm = wrapper.vm

        vm.test()
        // expect(wrapper.text()).toContain("hello")
        expect(vm.test(1,1)).toBe(2)
    })
})

 
