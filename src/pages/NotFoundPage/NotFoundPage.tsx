import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-2">
      404 - Page Not Found
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
