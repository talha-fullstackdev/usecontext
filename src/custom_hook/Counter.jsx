
import useCount from './useCount'
import useTitle from '../UseTitle'
import chalk from 'chalk'
const Counter = () => {
  let user = true;
    user ? console.log(chalk.green("present")):console.log(chalk.red("not prseent"))
    useTitle("counter")
    const[count, increment, decrement, reset] = useCount()
  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>inc</button>
        <button onClick={decrement}>dec</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter