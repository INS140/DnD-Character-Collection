import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()

  console.log(error)

  return <div>
    <h1>
      <p>Hmm...</p>
      <p>There seems to be an issue finding that page</p>
    </h1>
  </div>
}