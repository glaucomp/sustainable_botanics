import React, {Component} from 'react';
import {Animated, View} from 'react-native';

class ImageLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
      isLoaded: false,
    };

    this.onLoad = this.onLoad.bind(this);
  }

  onLoad() {
    const {opacity} = this.state;
    const {duration} = this.props;
    const {delay} = this.props;

    Animated.timing(opacity, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
      delay: delay,
    }).start(() => {
      this.setState({isLoaded: true});
    });
  }

  render() {
    const {opacity, isLoaded} = this.state;
    const {style, ...restProps} = this.props;

    return (
      <View style={{opacity: isLoaded ? 1 : 0}}>
        <Animated.Image
          onLoad={this.onLoad}
          {...restProps}
          style={[
            {
              transform: [
                {
                  scale: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                  }),
                },
              ],
            },
            style,
          ]}
        />
      </View>
    );
  }
}

export default ImageLoader;
