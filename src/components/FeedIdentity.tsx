import FeedIdentityListItem from "./FeedIdentityListItem";

const links = [
  { text: "Profilbesokare", amount: 42 },
  { text: "Visningar av inlagg", amount: 21 },
];

const FeedIdentity = () => {
  return (
    <div className="flex flex-col rounded border px-4 py-5 text-center md:w-56">
      <div className="mb-5 flex h-16 w-16 self-center rounded-full bg-red-500" />
      <h4 className="mb-2">Jesper Anneback</h4>
      <p className="detailed">Senior Frontend Developer, Biolit</p>
      <div className="my-4 border-b border-slate-300" />
      {links.map((link) => (
        <FeedIdentityListItem
          key={link.text}
          text={link.text}
          amount={link.amount}
        />
      ))}
    </div>
  );
};

export default FeedIdentity;
