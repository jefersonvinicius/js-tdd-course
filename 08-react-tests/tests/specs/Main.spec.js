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

    describe('textColor prop', () => {
        it('should use #fff as default textColor', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('color').equal('#fff');
        });

        it('should use #f01 as custom textColor', () => {
            const wrapper = shallow(
                <FullHeader title="TDD" textColor="#f01" />
            );
            expect(wrapper).to.have.style('color').equal('#f01');
        });
    });

    describe('font prop', () => {
        it('should use sans-serif as default font', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });

        it('should use cursive as custom font', () => {
            const wrapper = shallow(<FullHeader title="TDD" font="cursive" />);
            expect(wrapper).to.have.style('font-family').equal('cursive');
        });
    });

    describe('bgImg prop', () => {
        it('should has empty background image when the prop bgImg is"nt passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('background-image').equal('url()');
        });

        it('should has background image equals bgImg prop', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgImg="bg.jpg" />);
            expect(wrapper)
                .to.have.style('background-image')
                .equal('url(bg.jpg)');
        });
    });

    describe('video prop', () => {
        it('should have video tag when a video is passed', () => {
            const wrapper = shallow(
                <FullHeader title="TDD" video="my_video.mp4" />
            );
            expect(wrapper.find('video')).to.have.length(1);
        });

        it('should not have video tag when a video is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('video')).to.have.length(0);
        });

        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(
                <FullHeader title="TDD" video="my_video.mp4" />
            );
            expect(wrapper.find('video').props().src).to.be.equal(
                'my_video.mp4'
            );
        });
    });
});
