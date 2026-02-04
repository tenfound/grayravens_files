<script lang="ts">
    interface Props {
        color?: UI.TeamComposition.TeamColor
        children?: import("svelte").Snippet
    }

    let { color = "blue", children }: Props = $props()
</script>

<div class="w-full rounded-md color-{color} border-2 p-4 text-justify team-composition-text">
    {@render children?.()}
</div>

<style lang="postcss">
    .color-blue {
        @apply border-team-blue;
    }
    .color-yellow {
        @apply border-team-yellow;
    }
    .color-red {
        @apply border-team-red;
    }
</style>
