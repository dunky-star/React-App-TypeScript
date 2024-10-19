const Tested = () => {
  const clickHandler = (
    name: string,
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    console.log("Button is cliked!!!", name, e);
  };
  return (
    <div>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={(e) => clickHandler("MIU", e)}
      >
        Click me
      </button>
    </div>
  );
};
export default Tested;
