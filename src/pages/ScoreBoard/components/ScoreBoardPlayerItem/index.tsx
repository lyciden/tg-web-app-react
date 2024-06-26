import classNames from 'classnames'
import { User } from 'pages/ScoreBoard/@types/player'
import { Crown, FinnTheHuman } from 'phosphor-react'
import { formatPoints } from 'utils/currencyFormat'

interface ScoreBoardPlayerItemProps {
  player: User
  position: number
  onClick: () => void
}

export function ScoreBoardPlayerItem({
  player,
  position,
  onClick
}: ScoreBoardPlayerItemProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'group relative flex items-center justify-between gap-4 rounded-md p-1 px-2 hover:bg-secondary/80'
      )}
      key={player.uid + player.name}
    >
      {position <= 2 && (
        <Crown
          className={classNames(
            'absolute -right-1 bottom-0 transition-colors',
            {
              'text-yellow-400': position === 0,
              'text-gray-300': position === 1,
              'text-yellow-800': position === 2
            }
          )}
          weight="fill"
          size="20"
        />
      )}
      <div
        className={classNames(
          'flex max-w-full flex-1 items-center justify-between gap-4'
        )}
      >
        <p className=" max-w-[15ch] overflow-hidden truncate text-left group-hover:text-transparent lg:w-[15ch] lg:max-w-[15ch]"></p>
        <p className="absolute left-1/3 hidden animate-pulse text-text group-hover:block">
          Clique para ir ao perfil
        </p>
        <p
          className="text-right text-sm font-bold transition-colors group-hover:text-transparent lg:w-[50ch]  lg:max-w-[50ch] lg:text-lg"
          title={String(player.currentBalance)}
        >
          {formatPoints(player.currentBalance)}
        </p>
      </div>
      {player.profilePic ? (
        <img
          src={player.profilePic}
          referrerPolicy="no-referrer"
          alt={player.name + ' Avatar'}
          className="w-8 rounded-full group-hover:text-transparent"
        />
      ) : (
        <FinnTheHuman size="30" weight="fill" />
      )}
    </button>
  )
}
