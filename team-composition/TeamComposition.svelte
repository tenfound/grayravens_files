<script context="module" lang="ts">
    export function TeamCompositionController(frame: string | string[]) {
        const frameList = writable<string[]>(Array.isArray(frame) ? frame : [frame])
        const selectedFrameIndex = writable<number>(0)

        return {
            frameList,
            selectedFrameIndex,
            getSelectedFrame: () => {
                return get(frameList)[get(selectedFrameIndex)]
            },
        }
    }
</script>

<script lang="ts">
    import { setContext } from "svelte"
    import TeamCompositionCharacter from "./TeamCompositionCharacter.svelte"
    import TeamCompositionText from "./TeamCompositionText.svelte"
    import { get, writable } from "svelte/store"
    export let color: UI.TeamComposition.TeamColor
    export let leader = false
    export let frame: string | string[]
    export let frameName: string = Array.isArray(frame) ? frame[0] : frame

    const controller = TeamCompositionController(frame)
    setContext("team-composition", controller)
    const selectedIndex = controller.selectedFrameIndex
</script>

<div class="flex gap-4 flex-col md:flex-row items-center justify-center">
    <TeamCompositionCharacter {color} frame={Array.isArray(frame) ? frame[0] : frame} text={frameName} {leader} />
    <TeamCompositionText {color}>
        <!--slot method-->
        {#if Array.isArray(frame)}
            {#if $selectedIndex == 0}
                <slot name="1" />
            {:else if $selectedIndex == 1}
                <slot name="2" />
            {:else if $selectedIndex == 2}
                <slot name="3" />
            {:else if $selectedIndex == 3}
                <slot name="4" />
            {:else if $selectedIndex == 4}
                <slot name="5" />
            {:else if $selectedIndex == 5}
                <slot name="6" />
            {/if}
        {/if}
        <slot />
    </TeamCompositionText>
    <!--<TeamCompositionCharacter {color} {frame} text={frameName} {leader} framelist={[frame, "scire"]}/>
    <TeamCompositionText {color}>
        <slot />
    </TeamCompositionText>
    -->
</div>
