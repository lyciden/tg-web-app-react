import { Gift } from 'phosphor-react'

export function Gifts() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-text">
      <Gift className="text-purple" weight="fill" size="80" />
      <span className="text-center text-lg font-bold">
        Eba!!! Temos um presente pra você!
      </span>
      <span className="text-center text-lg font-bold">
        Percebemos que você tem somente <br />
        Mas não se preocupe, nesta página você pode resgatar até{' '}
        <span className="text-purple">300</span> pontos
        <br /> cada vez que seu saldo estiver abaixo de{' '}
        <span className="text-purple">10 PPs</span> <br />
        basta clicar no botão abaixo e contar com a sorte. <br />
      </span>
    </div>
  )
}
