import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Scrolls to an element by ID with smooth behavior
 * @param elementId - The ID of the element to scroll to
 * @param block - The vertical alignment option (default: 'center')
 */
export function scrollToElement(
  elementId: string,
  block: ScrollLogicalPosition = 'center'
) {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: 'smooth',
    block
  });
}

/**
 * Scrolls to the waitlist section
 */
export function scrollToWaitlist() {
  scrollToElement('waitlist');
}
