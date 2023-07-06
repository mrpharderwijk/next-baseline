import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex justify-between border-t border-b-gray-300">
      <Link href="/">Baseline</Link>

      <ul className="flex flex-row items-center">
        <li>
          <Link href="/page-1">Page 1</Link>
        </li>
        <li>
          <Link href="/page-2">Page 2</Link>
        </li>
        <li>
          <Link href="/page-2">Page 3</Link>
        </li>
      </ul>
    </div>
  )
}
