import Badge from "./Badge";

export default function BadgeList({ badgeList, retrieveTags }) {
  return (
    <>
      {badgeList.map((badge) => (
        <Badge key={badge} badge={badge} retrieveTags={retrieveTags} />
      ))}
    </>
  );
}
