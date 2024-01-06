export function Die(props) {
  const styles = {
    backgroundColor: props.held ? "#59e391" : "white",
  };

  return (
    <div onClick={props.holdDice} style={styles} className="die-face">
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
