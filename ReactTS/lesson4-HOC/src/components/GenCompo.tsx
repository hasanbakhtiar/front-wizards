import { useState } from "react"

const GenCompo = (OrjinalCompo: any) => {
  const newCompo = () => {
    const [count, setCount] = useState<number>(0);
    return <OrjinalCompo incCount={() => setCount((count) => count + 1)} count={count} />
  }
  return newCompo;
}

export default GenCompo
