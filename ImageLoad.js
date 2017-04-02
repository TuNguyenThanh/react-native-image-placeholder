import React from 'react';
import { Image, ActivityIndicator } from 'react-native';

class ImageLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isError: false
    };
  }

  onLoadEnd(){
    this.setState({
      isLoaded: true
    });
  }

  onError(){
    this.setState({
      isError: true
    });
  }

  render() {
    return(
      <Image
        onLoadEnd={this.onLoadEnd.bind(this)}
        onError={this.onError.bind(this)}
        style={[this.props.style, { alignItems: 'center' }]}
        source={this.props.source}
      >
        {
          this.state.isLoaded && !this.state.isError ? null :
          <Image
            style={styles.imagePlaceholderStyles}
            source={this.props.placeholderSource ? this.props.placeholderSource : require('./Images/empty-image.png')}
          >
            {
              this.props.children ? this.props.children :
              <ActivityIndicator
                size={this.props.loadingStyle ? this.props.loadingStyle.size : 'small'}
                color={this.props.loadingStyle ? this.props.loadingStyle.color : 'gray'}
              />
            }
          </Image>
        }
      </Image>
    );
  }
}

const styles = {
  imagePlaceholderStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  }
}

export default ImageLoad;
