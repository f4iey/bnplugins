import { storage } from "@vendetta/plugin"
import patchActionSheet from "./patches/ActionSheet"
import patchCommands from "./patches/Commands"
import Settings from "./settings"

export const settings: {
    source?: string
    target?: string
} = storage

settings.target ??= "EN"

let patches = []

export default {
    onLoad: () => patches = [
        patchActionSheet(),
        patchCommands()
    ],
    onUnload: () => { for (const unpatch of patches) unpatch() },
    settings: Settings
}