"use client";
const Navbar = () => {
  const navbar = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <nav className="flex justify-between container mx-auto">
      <div className="">
        <h2 className="text-2xl font-medium">Learn NextJs</h2>
      </div>
      <div className="">
        <ul className="flex gap-8">
          {navbar.map((item) => (
            <li key={item.title}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
