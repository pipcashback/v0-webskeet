"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumbs" className={`text-sm ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronLeft className="h-4 w-4 mx-1 text-gray-400" />}

              <Link
                href={item.href}
                className={
                  isLast ? "text-webskeet-blue font-medium" : "text-gray-600 hover:text-webskeet-blue transition-colors"
                }
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
