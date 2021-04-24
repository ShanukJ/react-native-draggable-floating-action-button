import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Draggable from 'react-native-draggable';
import Tooltip from 'rn-tooltip';

export default class QcFloatingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floaterHeight: 130,
      draggable: false,
    };
    this.toolTipRef = React.createRef();
  }

  toggleMyToolTip() {
    if (this.toolTipRef && this.toolTipRef.current) {
      this.toolTipRef.current.toggleTooltip();
    }
  }

  render() {
    return (
      <Draggable
        x={300}
        y={500}
        renderColor="transparent"
        hideShadow={true}
        disabled={this.state.draggable}>
        <Tooltip
          ref={this.toolTipRef}
          height={250}
          width={250}
          containerStyle={{backgroundColor: 'transparent'}}
          pointerColor={'transparent'}
          overlayColor={'#98989880'}
          onOpen={() => {
            this.setState({draggable: true});
          }}
          onClose={() => {
            this.setState({draggable: false});
          }}
          popover={
            <View style={styles.topView}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.mainView}>
                  <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => {
                      this.toggleMyToolTip();
                    }}>
                    <Text>{'this.locals.wo_btn_txt'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginTop: 12}}
                    onPress={() => {
                      this.toggleMyToolTip();
                    }}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={styles.actionButtonIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.mainView}>
                  <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => {
                      this.toggleMyToolTip();
                    }}>
                    <Text>{'this.locals.qc_btn_txt'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginTop: 12}}
                    onPress={() => {
                      this.toggleMyToolTip();
                    }}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={styles.actionButtonIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.mainView}>
                  <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => {
                      this.toggleMyToolTip();
                    }}>
                    <Text>{'this.locals.qc_btn_txt'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginTop: 12}}
                    onPress={() => {
                      this.toggleMyToolTip();
                    }}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={styles.actionButtonIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.mainView}>
                  <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => {
                      this.toggleMyToolTip();
                    }}>
                    <Text>{'this.locals.qc_btn_txt'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginTop: 12}}
                    onPress={() => {
                      this.toggleMyToolTip();
                    }}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={styles.actionButtonIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }>
          <Image
            source={{
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
            style={styles.mainActionButtonIcon}
          />
        </Tooltip>
      </Draggable>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    height: 46,
    width: 46,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  touchableStyle: {
    marginTop: 12,
    height: 41,
    width: 190,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },
  mainActionButtonIcon: {
    height: 56,
    width: 56,
  },
  topView: {width: 250},
  mainView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  textContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 41,
    marginTop: -11,
    minWidth: 189,
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 14,
    lineHeight: 16,
    color: 'rgba(74,74,74,1)',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  const WOM = state.wom;
  const language = state.lang.current_lang;
  const dtv_qc = state.dtvQc;
  return {WOM, language, dtv_qc};
};