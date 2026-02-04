<script lang="ts">
    import { getContext } from "svelte"

    interface Props {
        frame: string
        children?: import("svelte").Snippet
    }

    let { frame, children }: Props = $props()

    let controller: UI.TeamComposition.Controller = getContext<UI.TeamComposition.Controller>("team-composition")

    let val = $state()
    $effect(() => {
        val = controller.getSelectedFrame()
    })
    controller.selectedFrameIndex.subscribe(() => {
        val = controller.getSelectedFrame()
    })
</script>

{#if val == frame}
    {@render children?.()}
{/if}
