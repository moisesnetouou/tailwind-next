import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/moisesnetouou.png"
        alt="my photo"
        className="size-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Moisés Neto</span>
        <span className="truncate text-sm text-zinc-500">moises@email.com</span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}
