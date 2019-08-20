import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';


export default class HelloWorldApp extends Component {

	constructor(props) {
		super(props);
		console.log("yaha")
		this.state = { isLoading: true }
	}

	getMoviesFromApiAsync() {
		return fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => {
				console.log("received shit from backend ", responseJson)
				this.setState({
					isLoading: false,
					movies: responseJson.movies,
				}, function () {

				});

			})
			.catch((error) => {
				console.error(error);
			});
	}

	componentDidMount() {
		this.getMoviesFromApiAsync();
	}
	render() {
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, padding: 20 }}>
					<ActivityIndicator />
				</View>
			)
		}
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Hello, world!!!!!</Text>
				<FlatList
					data={this.state.movies}
					renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
					keyExtractor={({ id }, index) => id}
				/>
			</View>
		);
	}
}
