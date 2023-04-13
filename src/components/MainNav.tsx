import { PageNavLink } from "./PageNavLink";


export const MainNav = () => (
  <nav className="navbar is-dark">
    <div className="navbar-brand">
      <PageNavLink to="/" text="Home" />
      <PageNavLink to="task1" text="Task1" />
      <PageNavLink to="task2" text="Task2" />
      <PageNavLink to="task3" text="Task3" />
      <PageNavLink to="task4" text="Task4" />
      <PageNavLink to="task5" text="Task5" />
    </div>
  </nav>
);
