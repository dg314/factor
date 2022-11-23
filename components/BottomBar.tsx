import { FaHeart } from "react-icons/fa"

export default function BottomBar() {
  return (
    <div className="w-full flex justify-center items-center p-2 text-neutral-800 dark:text-neutral-300">
      <div className="text-sm flex gap-[0.35rem] items-center">
        <p>Made with</p>
        <FaHeart className="text-emerald-500" />
        <p>
          by{" "}
          <u><a href="https://dg314.com" target="_blank" rel="noopener noreferrer">David Grossman</a></u>{" "}
          &{" "}
          <u><a href="https://antonkoenig.com/" target="_blank" rel="noopener noreferrer">Anton Koenig</a></u>
        </p>
      </div>
    </div>
  )
}
