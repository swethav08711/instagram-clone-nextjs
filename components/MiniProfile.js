export default function MiniProfile() {
  return (
    <div className=" flex items-center justify-between mt-14 ml-10">
      <img className=" h-16 rounded-full border p-[2px]" src="https://media.licdn.com/dms/image/C5603AQHiMXhE7rjG3w/profile-displayphoto-shrink_800_800/0/1639831458203?e=2147483647&v=beta&t=K0NdNkIl3YXikzvTJjSamcFoaT-aAaZD06As5EXspo4" />
      <div className="flex-1 ml-4">
        <h2 className=" font-bold">codewithswetha</h2>
        <h3 className=" text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className=" font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
