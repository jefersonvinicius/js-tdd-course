import React from 'react';
import FullHeader from '../src/Main';
import { storiesOf } from '@storybook/react';

storiesOf('FullHeader', module)
    .add('with title', () => <FullHeader title="TDD" />)
    .add('with title and subtitle', () => (
        <FullHeader title="TDD" subtitle="Curso de JS com TDD na prática" />
    ))
    .add('with title, subtitle, bgColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#3299BB"
        />
    ))
    .add('with title, subtitle, bgColor, textColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    ))
    .add('with title, subtitle, bgColor, textColor, font', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#3299BB"
            textColor="#FF9900"
            font="cursive"
        />
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgImg="https://www.cliqueiachei.com.br/logotipo-logomarca/250/logotipo-Adriano-29610.png"
        />
    ))
    .add('with title, subtitle, video', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática"
            bgColor="#EBE9EB"
            textColor="#3299BB"
            video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
        />
    ));
