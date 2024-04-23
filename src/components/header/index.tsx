"use client";
import s from "./styled.module.scss";
import Link from "next/link";
const Header = () => {
  return (
    <nav className={s.navbar}>
      <Link href={"/"}>Home</Link>
      <Link href={"/about-us"}>About</Link>
      <Link href={"/shop"}>Shop</Link>
    </nav>
  )
};

export default Header;
