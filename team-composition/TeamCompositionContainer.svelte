<script>
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props()
</script>

<div class="flex flex-col gap-4">
    {@render children?.()}
</div>
