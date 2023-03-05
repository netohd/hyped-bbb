interface ProfileCardProps {
  name: string
  age: number
  followers: number
}

export function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="bg-gray-300 w-44 h-80 text-zinc-800 rounded m-2 flex items-center justify-center text-center">
      {props.name} <br />
      {props.age} <br />
      {props.followers}
    </div>
  )
}