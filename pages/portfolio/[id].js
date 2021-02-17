import { useRouter } from 'next/router'


const PortfolioDetail = () => {

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>I am detail portfolio page with id: {id}</h1>
    </div>
  )
}

export default PortfolioDetail
