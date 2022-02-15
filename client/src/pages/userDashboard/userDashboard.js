import navbar from ''
import footer from ''


export const userDashboard = () => {
  if (session === !loggedIn) {
    return <router></router>;
  }
  return (
    <div>
      <h1>Welcome {user}</h1>
      <navbar />
      <assets />
      

    </div>
  );
};
