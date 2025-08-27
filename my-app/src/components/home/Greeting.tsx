interface GreetingProps {
  nameOne: string;
  nameTwo: string;
};

export default function Greeting({ nameOne, nameTwo }: GreetingProps) {
  return (
    <div className="greeting-container">
      <h1>Welcome to NuraSpace, {nameOne} {nameTwo}!</h1>
      <h2>Welcome to NuraSpace, but really… you've entered Aby's headspace</h2>
      <h3>Population: clean code and bad puns 👨‍💻.</h3>
    </div>
  )
}
