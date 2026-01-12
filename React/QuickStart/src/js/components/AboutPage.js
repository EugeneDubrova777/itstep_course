import Button from "./Button";

function AboutPage() {
  let content = {
    title: 'About',
    text: 'This is about our company page!',
    text2: 'How do you do?'
  }

  // let styles = {
  //   fontSize: '30px',
  //   color: 'red'
  // }

  return (
    <>
      <h2>{content.title}</h2>
      <p>{content.text}<br />{content.text2}</p>
      <Button />
    </>
  );
}

export default AboutPage;