import React from 'react'
// import type { RootState } from '../../app/store'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { increment, decrement, incrementByAmount, selectCount } from './counterSlice'

export default function Counter() {
  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()

    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    // console.log('count', count)
    // console.log('selectCount', selectCount)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          // onClick={() => dispatch(increment())}
          onClick={() => dispatch(incrementByAmount(3 || 0))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}