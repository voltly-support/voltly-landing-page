import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToWaitlist() {
  document.getElementById('early-access')?.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}
