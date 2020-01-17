import { isBrowser } from "../../utils/is-browser"

let isViewportScrollBlocked = false

if (isBrowser) {
    document.addEventListener(
        "touchmove",
        (event: TouchEvent) => {
            if (isViewportScrollBlocked) {
                event.preventDefault()
            }
        },
        { passive: false }
    )
}

export const blockViewportScroll = () => (isViewportScrollBlocked = true)
export const unblockViewportScroll = () => (isViewportScrollBlocked = false)
