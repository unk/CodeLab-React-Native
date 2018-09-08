import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		width: 300,
		height: 40,
		paddingLeft: 12,
		paddingRight: 12,
		borderColor: '#e5e5e5',
		borderWidth: 1,
	},
	row: {
		flexDirection: 'row',
	},
	formGroup: {
		marginBottom: 8,
	},
});