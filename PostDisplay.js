import React from "react";
import { View, Text, StyleSheet } from "react-native";

class PostDisplay extends React.Component {
  render() {
    const { post } = this.props;

    if (!post) {
      return null; // Return nothing if post is not provided
    }

    return (
      <View style={styles.postContainer}>
        <Text style={styles.postId}>Post ID: {post.id}</Text>
        <Text style={styles.postTitle}>Title: {post.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  postId: {
    fontSize: 18,
    fontWeight: "bold",
  },
  postTitle: {
    fontSize: 16,
    color: "#555",
  },
});

export default PostDisplay;