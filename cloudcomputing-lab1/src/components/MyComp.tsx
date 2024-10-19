const MyComp = () => {
  const friends: string[] = ["Geoffrey Duncan Opiyo", "Gulu Hills", "Got Mola"];
  return (
    <div>
      <h3>My Cloud Computing Lab</h3>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
};
export default MyComp;
