import Link from "next/link";

type FeedIdentityListItemProps = {
  text: string;
  amount: number;
};

const FeedIdentityListItem = (props: FeedIdentityListItemProps) => {
  const { text, amount } = props;
  return (
    <Link href="/">
      <div className="flex justify-between">
        <p className="text-sm font-bold text-slate-500">{text}</p>
        <p className="text-sm font-bold text-sky-500">{amount}</p>
      </div>
    </Link>
  );
};

export default FeedIdentityListItem;
