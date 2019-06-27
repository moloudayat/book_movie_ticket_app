import React, { PureComponent } from 'react';
import { View, Text, TouchableNativeFeedback, Modal } from 'react-native';
import styles from '../../styles/components/PopUp';

class PopUp extends PureComponent {
	setPosition() {
		const { position } = this.props;
		return position === 'bottom' ? styles.position_bottom : position === 'center' ? styles.position_center : null;
	}

	render() {
		const { height, width, shadeColor, boxStyle, children, close, show } = this.props;
		return (
			<Modal transparent visible={show} onRequestClose={close}>
				<View style={[styles.whole_container, this.setPosition()]}>
					<TouchableNativeFeedback onPress={close}>
						<View style={[styles.whole_container, { backgroundColor: shadeColor ? shadeColor : styles.shade_style.backgroundColor, position: 'absolute' }]} />
					</TouchableNativeFeedback>
					<View style={[boxStyle ? boxStyle : styles.view_container, { height, width }]}>
						{children}
					</View>
				</View>
			</Modal>
		);
	}
}

export default PopUp;
