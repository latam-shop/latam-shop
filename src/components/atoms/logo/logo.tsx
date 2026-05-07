import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="LatamShop Logo"
        width={150}
        height={40}
        className="h-8 w-auto sm:h-10"
        priority
      />
    </Link>
  );
};
