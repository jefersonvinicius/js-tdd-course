import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('FullHeader', () => {
    it('should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    describe('title prop', () => {
        it('should have h1 tag when a title is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have h1 tag when a title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    describe('subtitle prop', () => {
        it('should not has the subtitle', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h2')).to.be.length(0);
        });

        it('should has the subtitle provided on props', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="Test" />);
            expect(wrapper.find('h2').props().children).to.be.equal('Test');
        });
    });

    describe('bgColor prop', () => {
        it('should use #ccc as default bgColor', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });

        it('should use #f01 as custom bgColor', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgColor="#f01" />);
            expect(wrapper).to.have.style('background-color').equal('#f01');
        });
    });
});
