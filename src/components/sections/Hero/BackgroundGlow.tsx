function BackgroundGlow() {
  return (
    <>
      <div className="absolute -top-40 left-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
    </>
  );
}

export default BackgroundGlow;