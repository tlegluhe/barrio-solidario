import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';


export default class HelloWorldApp extends Component {

	constructor(props) {
		super(props);
		this.state = { isLoading: true }
	}

	getMoviesFromApiAsync() {
		return fetch('http://192.168.0.15:3000/v1/users.json')
			.then((response) => response.json())
			.then((responseJson) => {
				console.log("received from backend ", responseJson)
				this.setState({
					isLoading: false,
					users: responseJson.users,
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
				<Text>Hello, world !!</Text>
				<FlatList
					data={this.state.users}
					renderItem={({ item }) => <Text>{item.name}, {item.type}</Text>}
					keyExtractor={({ id }, index) => id}
				/>
			</View>
		);
	}
}
