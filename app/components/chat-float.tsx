import Link from 'next/link';

export default function ChatFloat({onClick}) {
  return (
    <div onClick={onClick} className="contactus">
      <span>Contact us</span>
    </div>
  );
}
