/*
    custom Hook 
    => use + 사용할 기능 을 이름으로 주로 쓴다 
    useState 상태관리
    useCallback 함수 재사용 
*/
import { useReducer, useCallback } from 'react';

// useReducer 로 상태관리  
function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            }
        case 'RESET':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {})
        default:
            throw new Error('unhandled action');
    }
} 

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(e => {
        const { name, value} = e.target;

        dispatch({
            type: 'CHANGE',
            name,
            value
        });
    }, []);

    // form 초기화 
    const reset = useCallback(() => dispatch({ type: 'RESET' }), []); 

    return [form, onChange, reset];
}

export default useInputs;

/*
// useState로 상태관리
import { useState, useCallback } from 'react';

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);

    // form 초기화 
    const reset = useCallback(() => setForm(initialForm), [initialForm]); 

    return [form, onChange, reset];
}

export default useInputs;
*/