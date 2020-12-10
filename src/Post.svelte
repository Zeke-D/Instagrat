<script>
    import Icons from '../public/images/icons';
    import App from './App.svelte';
    import Icon from './Icon.svelte';
    import { onMount } from 'svelte';

    export let username; 
    export let imgSource;
    export let caption = "";
    export let likes = 0; 
    export let comments = [];
    export let isAd = false;
    export let isLiked = false;
    export let realitySource = "";
    export let realityCaption = "";
    export let style = "";

    const imgPrefix = "./images/";
    const fixImgPath = src => imgPrefix + src;
    let trueSource = fixImgPath(imgSource);
    let trueRealitySource = fixImgPath(realitySource);

    let oldCaption = caption;

    let crack = new Image();
    crack.src = "../images/crack1.png";

    function toggleLike() {
        likes = parseInt(likes) + 2 * (!isLiked - .5);
        isLiked = !isLiked;
    };

    function getMousePos(e) {            
        let rect = canvas.getBoundingClientRect(); 
        let x = e.clientX - rect.left; 
        let y = e.clientY - rect.top; 
        return [x, y];
    }

    function crackScreen(e) {
        let [x, y] = getMousePos(e);
        const width = 300;
        const height = 150;
        console.log(`X: ${x}, Y: ${y}, w: ${width}, h: ${height}`)
        let context = canvas.getContext("2d");
        context.drawImage(crack, x - width / 2, y - height / 2, width, height);

    }

    // bindings
    let canvas;
    let post;

    const setCanvasBG = url => {
        canvas.style.backgroundImage = `url('${url}')`;
    }

    const callback = entries => {
        if (entries[0].isIntersecting && realitySource != "") {
            setCanvasBG(trueRealitySource);
            if (realityCaption != "") {
                caption = realityCaption;
            }
            setTimeout(() => {
                setCanvasBG(trueSource);
                caption = oldCaption;
            }, 300);
        }
    };

    const options = {
        threshold: 1
    };

    onMount(() => {
        const observer = new IntersectionObserver(callback, options);
        observer.observe(post);
    })

</script>

<article bind:this={post} style={style}>
    <header>
        <div class="imgCont profilePic">
        </div>
        <b>{username}</b>
        <div class="spacer"></div>
        <button>...</button>
    </header>
    <canvas bind:this={canvas}
            style="background-image:url({trueSource})"
            width=400 
            height=300
            on:click={crackScreen}
            class="imgCont postImage">
            Your browser does not support canvas elements.
    </canvas>
    <footer>
        <Icon onclick={toggleLike} {...Icons.heart}/>
        <Icon {...Icons.comment}/>
        <div class="spacer"></div>
        <Icon {...Icons.bookmark}/>
    </footer>
    <div class="info">
        <b class="likes">
            {#if isAd}
               Everyone likes this. 
            {:else}
                {likes} {likes === 1 ? "like" : "likes"}
            {/if}
        </b>
        <p class="username caption">
            <b>{username}</b>
            {caption}
        </p>
        <div class="comments preview">
            {#if comments.length > 0}
                {#each comments as comment}
                <p class="username">
                    <b>{comment.username}</b>
                    {comment.text}
                </p>
                {/each}
            {:else}
                <p class="hint">Be the first to comment...</p>
            {/if}
        </div>
    </div>
</article>

<style>
    .spacer {
        flex-grow: 1;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    article {
        width: 400px;
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 5px 15px rgba(0,0,30,.3);
        padding-bottom: 20px;
        background-color: #fff;
    }

    article header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 5px;
    }

    article header .profilePic {
        width: 40px;
        height: 40px;
        margin: 10px;
        border-radius: 50%;
        border: 2px solid #ee50cc;
        background-color: #333;
    }

    b {
        font-weight: 600;
    }

    .caption {
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
    }

    button {
        background: none;
        border: none;
        color: #777;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }

    .postImage {
        height: 300px;
        background-repeat: no-repeat;
        object-fit: cover;
        background-position: center;
    }

    .center {
        text-align: center;
        width: 100%;
    }

    .likes {
        margin: 10px 0;
    }

    footer {
        display: flex;
        padding: 0 5px;
        flex-direction: row;
    }

    .blue {
        color: #3774ac; 
    }

    .info {
        margin: 0 17px;
    }

    .comments p {
        margin-bottom: 0;
        margin-top: 0;
    }

    .hint {
        font-weight: 300;
        color: #aaa;
    }

</style>