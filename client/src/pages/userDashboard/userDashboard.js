export const userDashboard = () => {
  if (session === !loggedIn) {
    return <router></router>;
  }
  return (
    <div>
      <navbar />
    </div>
  );
};
