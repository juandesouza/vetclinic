import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Thank you!</h1>
        <p className="text-slate-600 mt-2">
          Your message has been sent. We will contact you shortly.
        </p>
        <Link href="/" className="text-blue-700 underline mt-4 inline-block">Go back home</Link>
      </div>
    </div>
  );
}


