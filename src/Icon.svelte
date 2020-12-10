<script>
    export let path;
    export let color = "none";
    export let outline = "#000";
    export let width = '40';
    export let height = '40';
    export let strokeWidth = "5";
    export let viewBox = "0 0 150 150";
    export let onclick = () => {};

    $: fill = "none";

    function toggleColor() {
        fill = fill === "none" ? color : "none";
        outline = fill === "none" ? "#000" : color;
    }

    function handleClicks() {
        onclick();
        toggleColor();
    }

</script>
<svg on:click={handleClicks} class="icon" width={width} height={height} fill={fill} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
    <path 
        stroke={outline}
        stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"
        d={path} />
</svg>
<style>
    .icon {
        position: relative;
        margin: 5px;
        display: inline-block;
        cursor: pointer;
    }
</style>