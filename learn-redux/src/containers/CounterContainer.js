/*
  useSelector 
  - 상태조회 hook 
  - state redux의 현재 상태 

  useDispatch 
  - dispatch함수 사용할 수 있게해줌
*/
import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
    /*
    (left, right) => {
      return left.diff === right.diff && left.number === right.number;
    }
    */
  );
  /*
  // useSelector 최적화를 위해 분리함.
  // TODO 체크방법 작업자 도구 > Profiler 확인
  const number = useSelector((state) => state.counter.number);
  const diff = useSelector((state) => state.counter.diff);
  */
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
