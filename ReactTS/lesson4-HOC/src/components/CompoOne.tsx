import { useState } from "react"
import GenCompo from "./GenCompo"

const CompoOne = (props: any) => {
  const { count, incCount } = props;
  return (
    <div>
      CompoOne {count}
      <button onClick={incCount}>+</button>
    </div>
  )
}

export default GenCompo(CompoOne)
