import plinkoLogo from '@images/logo.svg'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { useGameStore } from 'store/game'

export function Navbar() {
  const inGameBallsCount = useGameStore(state => state.gamesRunning)

  return (
    <nav className="sticky top-0 z-50 bg-primary px-4 shadow-lg">
      <div
        className={classNames(
          'mx-auto flex h-16 w-full max-w-[1400px] items-center'
        )}
      >
        <Link to={inGameBallsCount ? '#!' : '/'}>
          <img src={plinkoLogo} alt="" className="w-32 md:w-40" />
        </Link>
      </div>
    </nav>
  )
}
