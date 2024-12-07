import chef from "../assets/chef.jpg"

export default function Header() {
  return (
    <header className="header">
        <img src={chef} alt="chef logo" />
        <h1>Chef Claude</h1>
    </header>
  )
}
