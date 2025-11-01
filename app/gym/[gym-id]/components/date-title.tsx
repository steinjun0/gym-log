export const DateTitle = ({ date }: { date: Date }) => {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-12">
      {`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
    </h1>
  );
};
