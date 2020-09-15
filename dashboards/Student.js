import Video from "react-native-video";

<Video
  source={{ uri: "https://www.youtube.com/watch?v=JkCaT19JJCc" }} // Can be a URL or a local file.
  ref={(ref) => {
    this.player = ref;
  }} // Store reference
  onBuffer={this.onBuffer} // Callback when remote video is buffering
  onError={this.videoError} // Callback when video cannot be loaded
  style={styles.backgroundVideo}
/>;

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
