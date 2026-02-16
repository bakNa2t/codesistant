export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="prose dark:prose-invert">
          <h1>Welcome to Codesistant</h1>
          <p>Here you can find the best code editor for your needs</p>
        </div>
      </main>
    </div>
  );
}
