"use client"
import React from "react"
import { Suspense } from 'react';
import { Button, Link } from "@heroui/react"
import { ChevronDown, Menu } from "lucide-react"
import type { SidebarProps, MenuItem } from "../../../types/sidebar"
import Icon, { IconName } from "@/shared/components/citrica-ui/atoms/icon"
import Text from "../atoms/text"
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { getParamFromPath } from "@/shared/utils/general"
import { siteConfig } from "@/config/site";

const SUBLINK_SEARCH_PARAM = siteConfig.subItemSearchParam;

function AccordionItem({ item, isOpen, onToggle }: { item: MenuItem; isOpen: boolean; onToggle: () => void }) {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get(SUBLINK_SEARCH_PARAM) || "";
  return (
    <div>
      <Button
        className= {`w-full justify-between px-4 py-2 transition-colors hover:bg-gray-100`}
        variant="light"
        onPress={onToggle}
      >
        <span className="flex items-center gap-2">
          <Icon name={item.icon as IconName} size={20} />
          <Text variant="label">{item.title}</Text>
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </Button>
      {isOpen && item.subItems && (
        <div className="ml-6 mt-2 flex flex-col gap-2">
          {item.subItems.map((subItem) => (
            <Button
              key={subItem.title}
              as={Link}
              href={subItem.href}
              variant="light"
              className={`justify-start px-4 py-2 transition-colors hover:bg-gray-100 ${ getParamFromPath(subItem.href, SUBLINK_SEARCH_PARAM) === queryParam ? "bg-gray-100" : ""}`}
            >
            <Text variant="label">{subItem.title}</Text>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar({ items }: SidebarProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({})
  const pathname = usePathname();

  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  const NavItems = () => (
    <div className="h-[100svh] w-full overflow-y-auto px-2 py-4 bg-sidebar">
      {items.map((item) => (
        <div key={item.title} className="mb-2">
          {item.subItems ? (
            <Suspense fallback={<div>Cargando...</div>}>
              <AccordionItem
                item={item}
                isOpen={openItems[item.title] || item.href == pathname || false}
                onToggle={() => toggleItem(item.title)}
              />
            </Suspense>
          ) : (
            <Button
              as={Link}
              href={item.href || "#"}
              variant="light"
              className= {`w-full justify-start gap-2 px-4 py-2 transition-colors hover:bg-gray-100 ${item.href=== pathname ? "bg-gray-100" : ""}`}
            >
              <Icon name={item.icon as IconName} size={20} />
              <Text variant="label" color="on-primary">{item.title}</Text>
            </Button>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Mobile Drawer */}
      <Button className="md:hidden" isIconOnly variant="light" onPress={() => setIsOpen(true)}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-sidebar transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <h2 className="text-lg font-semibold">Navegación</h2>
          <Button isIconOnly variant="light" onPress={() => setIsOpen(false)}>
            <ChevronDown className="h-6 w-6 rotate-90" />
          </Button>
        </div>
        <NavItems />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden h-screen w-72 border-r bg-background md:block">
        <NavItems />
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}

