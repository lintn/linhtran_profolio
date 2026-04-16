import { Link, useLocation } from 'react-router-dom'

type NavItem = { label: string; to: string }

const navItems: NavItem[] = [
  { label: 'About', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

type Props = {
  className?: string
}

export function HeaderNav({ className }: Props) {
  const location = useLocation()

  return (
    <nav className={className}>
      <div className="rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8">
        <div className="flex items-center gap-3 text-[10px] sm:gap-6 sm:text-xs md:gap-12 md:text-sm lg:gap-14">
          {navItems.map((item) => {
            const isActive =
              item.to !== '/' ? location.pathname.startsWith(item.to) : location.pathname === '/'

            return (
              <Link
                key={item.label}
                to={item.to}
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                className={[
                  'transition-colors hover:!text-[#E1E0CC]',
                  isActive ? '!text-[#E1E0CC]' : '',
                ].join(' ')}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

