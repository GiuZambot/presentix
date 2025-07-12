async function getHello() {
  const base = process.env.NEXT_PUBLIC_BASE_URL!;
  console.log(base);

  const res = await fetch(`${base}/api/hello`, { cache: "no-store" });
  return res.json() as Promise<{ ok: boolean; now: string }>;
}

export default async function Home() {
  const data = await getHello();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Presentix monorepo 🚀</h1>
      <pre className="bg-zinc-900 text-white p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
