export const Login = (name, email, password) => {
  <div>
    <form className="mb-3">
      <label for="emailBox" class="form-label">
        Email address
      </label>
      <input type={email} placeholder="email" id="emailBox"></input>
      <label for="passwordBox" class="form-label">
        Email address
      </label>
      <input type={password} placeholder="password" id="passwordBox"></input>
      <input classname="btn btn-secondary" type={submit}>
        Submit
      </input>
    </form>
  </div>;
};
