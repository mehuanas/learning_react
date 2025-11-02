import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
      intro:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque asperiores explicabo laboriosam libero odit?",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque asperiores explicabo laboriosam libero odit?",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque asperiores explicabo laboriosam libero odit?",
      tag: "Underbanked",
    },
  ];

  return (
    <div className="h-screen w-full">
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
