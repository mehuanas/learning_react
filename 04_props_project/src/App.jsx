import Card from "./components/Card";

const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://cdn.brandfetch.io/meta.com/logo",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 48,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.brandfetch.io/apple.com/logo",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 52,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.brandfetch.io/amazon.com/logo",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 62,
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://cdn.brandfetch.io/netflix.com/logo",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Data Analyst",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: 35,
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://cdn.brandfetch.io/google.com/logo",
    companyName: "Google",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 70,
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://cdn.brandfetch.io/microsoft.com/logo",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Support Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 55,
    location: "Dublin, Ireland"
  },
  {
    brandLogo: "https://cdn.brandfetch.io/tesla.com/logo",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Software QA Tester",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: 40,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://cdn.brandfetch.io/nvidia.com/logo",
    companyName: "NVIDIA",
    datePosted: "1 week ago",
    post: "AI Research Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: 30,
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.brandfetch.io/adobe.com/logo",
    companyName: "Adobe",
    datePosted: "10 weeks ago",
    post: "Product Manager",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 68,
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://cdn.brandfetch.io/intel.com/logo",
    companyName: "Intel",
    datePosted: "8 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 50,
    location: "Noida, India"
  }
];
  return (
    <div className="parent">
      {jobOpenings.map((e, index) => {
        return <div key={index}>
          <Card dets={e} />
        </div>
      })}
    </div>
  );
};

export default App;
