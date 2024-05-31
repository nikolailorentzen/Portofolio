const Chip = ({ text } : { text: string }) => (
    <div className="text-xs text-teal-800 font-bold tracking-tight bg-teal-300 py-1 px-2 rounded-full">
      {text}
    </div>
  );

export default Chip