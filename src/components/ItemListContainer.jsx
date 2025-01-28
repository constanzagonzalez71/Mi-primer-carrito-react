const ItemListContainer = ({greeting}) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;




  
