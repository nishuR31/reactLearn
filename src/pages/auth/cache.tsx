import Button from "../../components/ui/Button";

export default function Cache() {
  const PREFIX = "reactLearn:/";

  const handleCache = () => {
    if (typeof globalThis === "undefined" || !globalThis.localStorage) return;

    const keys = Object.keys(localStorage || {});
    const toRemove = keys.filter((k) => k.startsWith(PREFIX));

    if (toRemove.length === 0) {
      alert("No cached keys found for this app.");
      return;
    }

    const ok = confirm(
      `Delete ${toRemove.length} localStorage item(s) starting with "${PREFIX}"?`,
    );
    if (!ok) return;

    toRemove.forEach((k) => localStorage.removeItem(k));
    console.table(toRemove);
    alert(`Removed ${toRemove.length} cached item(s).`);
  };

  return (
    <main>
      <header>
        <h1>Browser Cache Information</h1>
      </header>

      <section>
        <p>
          This page explains how browser cache works and how you can save or
          remove cached data for this site.
        </p>
      </section>

      <section>
        <h2>What cache stores</h2>
        <p>Browsers may store the following to improve loading speed:</p>
        <p>1. Images, scripts, and stylesheets</p>
        <p>2. Previously visited page resources</p>
        <p>3. Temporary session-related data</p>
      </section>

      <section>
        <h2>How to clear cache</h2>
        <p>To remove cached files in most browsers:</p>
        <p>1. Open browser settings</p>
        <p>2. Go to Privacy or History</p>
        <p>3. Choose Clear browsing data</p>
        <p>4. Select Cached images and files</p>
        <p>5. Confirm clear data</p>
      </section>

      <section>
        <h2>When to clear cache</h2>
        <p>Clear cache if:</p>
        <p>1. A page looks outdated after updates</p>
        <p>2. The site behaves unexpectedly</p>
        <p>3. You are troubleshooting loading issues</p>
      </section>
      <section>
        <Button
          icon="Trash"
          text="Delete Cache"
          variant="ghost"
          onClick={handleCache}
        />
      </section>
    </main>
  );
}
