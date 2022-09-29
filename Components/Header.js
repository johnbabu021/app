import Link from "next/link";
export default function Header({ currentUser }) {
  const links = [
    !currentUser && { label: "Sign in", href: "/auth/signin" },
    !currentUser && { label: "Sign up", href: "/auth/signup" },
    currentUser && { label: "Sign out", href: "/auth/signout" },
  ]
    .filter((context) => context)
    .map(({ label, href }, index) => (
      <>
        <Link key={index} href={href} style={{ color: "blue" }}>
          {label}
        </Link>
      </>
    ));

  console.log(links);
  return (
    <div className="header">
      <h1>GETEX</h1>
      {links}
      {/* {currentUser ? <button>SignOut</button> : <button>Singn in</button>} */}
      <style jsx>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 20px;
          }
        `}
      </style>
    </div>
  );
}
