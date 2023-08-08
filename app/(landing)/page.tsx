import LandingNavBar from "@/components/landing-navbar"
import HeroSection from "@/components/landing-hero"
import Timer from "@/components/Timer"
import Footer from "@/components/footer";

async function getData() {
  const res = await fetch('http://localhost:3000/api/events?search=active')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 
export default async function Home() {

  const event = await getData();
  console.log(event);

  return (
    <div className="h-full">
      <LandingNavBar  />
      <HeroSection id={event.id} title={event.title} date={event.dateFrom} />
      <Footer />
    </div>
  )
}

// export async function getServerSideProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('/api/events?search=active')
//   const event = await res.json()
 
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       event,
//     },
//   }
// }