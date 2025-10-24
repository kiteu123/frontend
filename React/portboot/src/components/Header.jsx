import React from "react";

export default function Header() {
  return (
    <header class="text-center py-5 header" style={{ marginTop: 56 }}>
      <div class="container-fluid">
        <h1 class="display-4">Company</h1>
        <p class="lead">We specialize in blablabla</p>
      </div>
      <form class="d-flex justify-content-center mt-4" action="">
        <div class="input-group input-group-lg w-50">
          <input
            type="email"
            class="form-control"
            placeholder="Email address"
            aria-label="Email Address"
            required
          />
          <button class="btn btn-danger" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </header>
  );
}
