# react-native-image-placeholder

The image component that supports shows placeholderSource when load image network.
Shows placeholderSource if the main source can't be loaded or error.

## Installation

```bash
npm i --save react-native-image-placeholder
```

Please file an issue if you have any trouble!


## Usage

```jsx
import ImageLoad from 'react-native-image-placeholder';

....

<ImageLoad
    style={styles.imageStyles}
    source={{ uri: 'https://4.bp.blogspot.com/-lYq2CzKT12k/VVR_atacIWI/AAAAAAABiwk/ZDXJa9dhUh8/s0/Convict_Lake_Autumn_View_uhd.jpg' }}
/>
```
## Options
Supports all [Image](https://facebook.github.io/react-native/docs/images.html) properties.

option |default |Info
------ |---- |----
placeholderSource |require('./Images/empty-image.png') |Show `placeholderSource` if the `source` can't be loaded or error.

## License

ISC
