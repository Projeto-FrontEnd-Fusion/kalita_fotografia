export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className='bg-kalita-brown-medium text-kalita-background-light text-sm px-8 py-4 rounded-md cursor-pointer'
    >
      {children}
    </button>
  )
}