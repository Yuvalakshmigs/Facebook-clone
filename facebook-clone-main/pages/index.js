import { getSession } from "next-auth/react";
import Sidebar from "/components/Sidebar";
import Header from "/components/Header";
import Login from "../components/Login";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";
export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Header />
      <main className="flex  bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />
        {/*Feed ( Create Post and Posts) */}
        <Feed />
        {/*Right Sidebar */}
        <RightSidebar />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
