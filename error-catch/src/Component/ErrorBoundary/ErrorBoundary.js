/*
    class형 컴포넌트로 만들어줘야한다

    centry 설치하기 

    yarn build          // build 디렉토리 생성 
    npx serve ./build   // build 서버 생성 
    Serving! Local : http://localhost:5000
*/
import React, { Component } from 'react';
import * as Sentry from '@sentry/react';

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    // 첫번째 인자값 - error 정보
    // 두번째 인자값 - 어디서 error 발생했는지
    componentDidCatch(error, info) {
        console.log('에러가 발생했습니다');
        console.log({
            error,
            info
        });
        this.setState({
            error: true,
        })

        if (process.env.NODE_ENV === 'production') {
            Sentry.captureException(error, { extra: info});
        }
    }
    render() {
        if (this.state.error) {
            return <h1>에러 발생!</h1>
        }
        return this.props.children;
    } 
}

export default ErrorBoundary;