export default function Loader({ text = "Page" }) {
  return (
    <p className="animate-spin w-screen h-screen align-center text-error bg-success ">
      Loading {text}
    </p>
  );
}
