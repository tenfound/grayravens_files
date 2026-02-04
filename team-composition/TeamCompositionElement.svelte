<script lang="ts">
    import HeaderNotch from "../headers/HeaderNotch.svelte"

    interface Props {
        element: string
    }

    let { element }: Props = $props()
</script>

<div class="relative">
    <HeaderNotch>
        <h2>{element} Teams</h2>
    </HeaderNotch>
</div>
