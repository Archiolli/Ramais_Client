


export default function Menu({ title, subtitle } : any) {
  return (
      <header className="absolute z-30 h-16 w-screen flex items-center justify-between box-border px-8 pb-2 col-span-2 bg-gradient-to-r from-BEE5FF to-186A9F">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex items-center text-white">
          <div className="flex flex-col items-end">
            <div className="text-md font-medium ">{title}</div>
            <div className="text-sm font-regular">{subtitle}</div>
          </div>
        </div>
      </header>
  );
}
