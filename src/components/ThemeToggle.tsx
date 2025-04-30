
import { useTheme } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "rounded-full h-8 w-8 transition-colors",
            className,
            theme === "dark" 
              ? "bg-slate-700 hover:bg-slate-600" 
              : theme === "nicey"
              ? "bg-pink-200 hover:bg-pink-300"
              : "bg-white hover:bg-gray-100"
          )}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4 text-yellow-300" />
          ) : theme === "nicey" ? (
            <Sparkles className="h-4 w-4 text-pink-500" />
          ) : (
            <Sun className="h-4 w-4 text-slate-700" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("nicey")}>
          <Sparkles className="mr-2 h-4 w-4" />
          <span>Nicey</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
