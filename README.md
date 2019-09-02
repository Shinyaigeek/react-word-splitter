# React-Word-Splitter

This module is React/Next Component, which makes words splitted by word or char with span tag and specific attribute.

## Installation

This module is available as an npm package.

```Console
// with npm
npm install react-word-splitter

// with yarn
yarn add react-word-splitter
```

## Usage

Here is a quick example to get you started, it's all you need:

```JSX
import React from "react";

import Splitter from "react-word-splitter";

export default function(){
    return(
        <Splitter
            rule="chars"
            eachClass="testClass"
            eachIdWithIndex="testID"
            indexOption="number"
            words="あいうえお"
        /> // <span class='testClass' id='testID__1'>あ</span><span class='testClass' id='testID__2'>い</span><span class='testClass' id='testID__3'>う</span><span class='testClass' id='testID__4'>え</span><span class='testClass' id='testID__5'>お</span>
    )
}
```

If you want to know in detail, Please check API set below.

## API

| Property | type | detail |
|:--------:|:----:|:------:|
|rule|"words" \| "chars"| set split option|
|eachClass|string|set common class each element has|
|eachIdWithIndex|string|set ID each element has with Index|
|indexOption|"number" \| string[] |set option about index|
|words|string|words which you want to split|
