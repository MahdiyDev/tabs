function Tab({ children, onClick }) {
  return (
    <button onClick={onClick} className="tabs__btn">
      {children}
    </button>
  );
}

export default Tab;
