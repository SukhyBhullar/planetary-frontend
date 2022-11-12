import type { NextPage } from "next";
import MainLayout from "../components/layout/mainLayout";
import { useUser } from '@auth0/nextjs-auth0';
import Link from "next/link";
const Home: NextPage = () => {
  const { user, isLoading, error} = useUser();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) return <div>{error.message}</div>;
  
  return (
    <MainLayout>
      {!user && (
        <div className="m-9">
          <span>Welcome to planetary, log in to start playing</span>
        </div>
      )}
      {user && (
        <div className="m-9">
          <Link href="/game/createGame"><button className="btn btn-primary">Create Game</button></Link>
          <Link href="/game/loadGame"><button className="btn btn-primary">Load Game</button></Link>
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
