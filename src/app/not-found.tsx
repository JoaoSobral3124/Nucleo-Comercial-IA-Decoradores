import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Página Não Encontrada</h2>
      <p>Infelizmente, não conseguimos encontrar o que você procura.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Voltar para a Página Inicial
      </Link>
    </div>
  )
}