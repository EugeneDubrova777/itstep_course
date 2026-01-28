// import Paragraph from "./Paragraph";
import Button from "./Button";
import Header from "./Header";
import Card from "./Card";
import Counter from "./Counter";
import TextInput from "./TextInput";
import Timer from "./Timer";
import LoginForm from "./LoginForm";

function App() {
  return (
    <>
    <Timer />
    <Header level="1" text="Header" />
    <Button label="Click!!" handleClick={() => console.log('Clicked!')} disabled />
    <Card title="About About" image={{src: "https://dettext.com/wp-content/uploads/2024/03/95243-dettext_com-vetka-kartinka-dlia-detei.jpg", alt: "image"}}>
      "About" functions primarily as a preposition denoting the subject or connection to something ("on the subject of") or as an adverb for approximation in time/number. It is also used in phrases like "be about to" for imminent future actions and in idiomatic expressions such as "see about" (arrange/deal with).
    </Card>
    <Counter start={0} />
    <TextInput id="abc" type="text" placeholder="enter smth" />
    <LoginForm />
    </>
  )
}

export default App;