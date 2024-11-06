export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex gap-2 justify-center items-center text-foreground h-fit dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-2 w-2 bg-background rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 bg-background rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 bg-background rounded-full animate-bounce"></div>
        </div>
        <h1 className="text-xl font-normal">Just a moment</h1>
      </div>
    </div>
  );
}
