import { ProfileCard } from "./components/ProfileCard"

function App() {
  return (
    <>
      <ProfileCard
        name="Antonio"
        age={26}
        followers={2500}
      />
      <ProfileCard
        name="Juliana"
        age={18}
        followers={5670}
      />
    </>
  )
}

export default App