"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-darkBlue text-silver flex flex-col justify-center items-center gap-2">
      <h2 className="font-bold text-xl">
        <code>{error.message}</code>
      </h2>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-lightBlue font-bold rounded-lg"
      >
        Try again
      </button>
    </div>
  );
}
