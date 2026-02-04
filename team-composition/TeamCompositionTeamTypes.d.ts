declare namespace UI {
    declare namespace TeamComposition {
        declare type TeamColor = "red" | "blue" | "yellow"
        declare type Controller = {
            frameList: import("svelte/store").Writable<string[]>
            selectedFrameIndex: import("svelte/store").Writable<number>
            getSelectedFrame: () => string
        }
    }
}
