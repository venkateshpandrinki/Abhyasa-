import Link from "next/link";

export function Navigationbar() {
  return (
    <>
      <div className=" h-20 bg-[#f5f5f5] text-black lg:hidden ">
        <Link href="/">Home</Link>
        <Link href="/">contact</Link>
        <Link href="/">About</Link>
        <Link href="/">Courses</Link>
      </div>
    </>
  );
}
