


const Stars = ({ rating }) => {
  const starIcons = [];
  for (let i = 0; i < 5; i++) {
    const className = i < rating ? 'fa fa-star active' : 'fa fa-star';
    starIcons.push(<span key={i} className={className}></span>);
  }
  return <div className="stars">{starIcons}</div>;
};

export default Stars;
