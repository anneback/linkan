import FeedIdentity from "@/components/FeedIdentity";
import GlobalNav from "@/components/GlobalNav";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-end-12">
        <GlobalNav />
        <main>
          <FeedIdentity />
        </main>
      </div>
    </div>
  );
}
