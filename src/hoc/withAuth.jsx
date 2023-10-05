const withAuth = (WrappedComponent,isAuthenticated) => {
  return (props) => {
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <div>Please log in to view this content</div>;
    }
  };
};

export default withAuth;