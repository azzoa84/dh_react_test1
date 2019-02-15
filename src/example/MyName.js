import React, { Component } from 'react';

class MyName extends Component {
	// 변수 기본값 설정 방법1
	static defaultProps = {
    	name: '기본이름'
  	}
  	render() {
	    return (
	      <div>
	        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
	        저는 {this.props.age} 입니다.
	      </div>
	    );
  }
}

// 변수 기본값 설정 방법 2
MyName.defaultProps = {
  age: '30살'
};

export default MyName;