import { Coin, CurrencyDollarSimple, Smiley } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { LinesType } from '../../@types'

interface PlinkoBetActions {
  onRunBet: (betValue: number) => void
  onChangeLines: (lines: LinesType) => void
  inGameBallsCount: number
}

export function BetActions({ inGameBallsCount }: PlinkoBetActions) {
  const [betValue, setBetValue] = useState(0)
  const maxLinesQnt = 16
  const linesOptions: number[] = []
  for (let i = 8; i <= maxLinesQnt; i++) {
    linesOptions.push(i)
  }
  function handleHalfBet() {
    const value = betValue / 2
    const newBetvalue = value <= 0 ? 0 : Math.floor(value)
    setBetValue(newBetvalue)
  }

  function handleDoubleBet() {
    const value = betValue * 2

    const newBetvalue = value <= 0 ? 0 : Math.floor(value)
    setBetValue(newBetvalue)
  }
  return (
    <div className="relative h-1/2 w-full flex-1 px-4 py-8">
      <span className="absolute left-4 top-0 mx-auto text-xs font-bold text-text md:text-base">
        *bolas em jogo {inGameBallsCount}/15
      </span>

      <div className="flex h-full flex-col gap-4 rounded-md bg-primary p-4 text-text md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-stretch gap-1 md:flex-col">
            <div className="w-full text-sm font-bold md:text-base">
              <div className="flex flex-1 items-stretch justify-between">
                <span>Valor da aposta</span>
                <div className="flex items-center gap-1">
                  <div className="rounded-full bg-purpleDark p-0.5">
                    <CurrencyDollarSimple weight="bold" />
                  </div>
                  <span>{betValue.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-stretch justify-center shadow-md">
                <button
                  onClick={handleHalfBet}
                  className="relative border-2 border-transparent bg-secondary p-2.5 px-3 transition-colors after:absolute after:right-0 after:top-[calc(50%_-_8px)] after:h-4 after:w-0.5 after:rounded-lg after:bg-background after:content-[''] hover:bg-secondary/80 focus:border-purple focus:outline-none md:p-2"
                >
                  ½
                </button>
                <button
                  onClick={handleDoubleBet}
                  className="relative border-2 border-transparent bg-secondary p-2.5 px-3 transition-colors after:absolute after:right-0 after:top-[calc(50%_-_8px)] after:h-4 after:w-0.5 after:rounded-lg after:bg-background after:content-[''] hover:bg-secondary/80 focus:border-purple focus:outline-none md:p-2"
                >
                  2x
                </button>
              </div>
            </div>
          </div>
          <select
            disabled={inGameBallsCount > 0}
            defaultValue={16}
            className="w-full rounded-md border-2 border-secondary bg-background px-4 py-2 font-bold transition-all placeholder:font-bold placeholder:text-text focus:border-purple focus:outline-none disabled:line-through disabled:opacity-80"
            id="lines"
          >
            {linesOptions.map(line => (
              <option key={line} value={line}>
                {line} Linhas
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center gap-4 text-sm font-bold text-text md:items-start lg:absolute lg:-bottom-20 lg:left-4">
          <span>
            Se se divertiu jogando e quiser ajudar de alguma forma,
            <span className="flex items-center gap-2">
              doe 1 real pra o desenvolvedor clicando abaixo.
              <Smiley weight="fill" />
            </span>
          </span>
          <Link
            to="/contribute"
            className="flex items-center gap-2 rounded-md bg-background p-2 font-bold transition-colors hover:bg-primary/50 lg:bg-primary"
          >
            DOAR 1 REAL <Coin />
          </Link>
        </div>
      </div>
    </div>
  )
}
