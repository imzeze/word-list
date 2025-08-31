import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-15 shadow-sm">
      <div className="flex items-center justify-between w-full max-w-xl h-full m-auto px-5">
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/assets/icons/book-open.png"
            alt="logo"
            width={32}
            height={32}
          />
          <span className="text-xl/8 font-bold">단어집</span>
        </div>
        <div className="flex items-center justify-center bg-black text-white gap-1 pr-3 pl-2 py-1 rounded-md">
          <Image
            src="/assets/icons/plus-white.png"
            alt="logo"
            width={20}
            height={20}
          />
          <span className="font-medium">단어 추가하기</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
