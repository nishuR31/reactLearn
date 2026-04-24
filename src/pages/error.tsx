import Button from "../components/ui/Button";

export default function Error() {
  return (
    <>
      <h1>Galat page mae aagaye hai aap kindly wapis chalein jayein</h1>
      <Button
        text="Go Back"
        variant="ghost"
        onClick={() => globalThis.history.back()}
        name="Goback"
      />
      <Button
        text="Home"
        icon="House"
        variant="ghost"
        onClick={() => (globalThis.location.href = "/")}
        name="Home"
      />
    </>
  );
}
