import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, StyleSheet } from 'react-native';
import GenericButton from '../GenericButton'; // eslint-disable-line import/no-unresolved
import { colors } from '../../styles/common';

const styles = StyleSheet.create({
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.primary,
		paddingVertical: 10,
		paddingHorizontal: 15,
		height: 40,
		borderRadius: 4
	}
});

/**
 * UI component that wraps GenericButton
 * which renders the appropiate UI elements for each platform (android & iOS)
 */

const Button = props => <GenericButton style={[styles.button, props.style]}>{props.children}</GenericButton>;

Button.propTypes = {
	/**
	 * Children components of the Button
	 * it can be a text node, an image, or an icon
	 * or an Array with a combination of them
	 */
	children: PropTypes.any,
	/**
	 * Styles to be applied to the Button
	 */
	style: ViewPropTypes.style
};

export default Button;