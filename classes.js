import Teacher, { promote} from './teacher';
import React, { Component } from 'react';
// react is the default export from a module whereas {Component} is a named export


//Default -> import ... from '';
// Named -> import {...} from '';

const teacher = new Teacher("Srishti", "BTech");
teacher.teach();

