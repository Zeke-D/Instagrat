<script>
    import Icons from '../public/images/icons';
    import App from './App.svelte';
    import Icon from './Icon.svelte';
    export let user;    /* 
    User {
        username:String,
        firstName: String
        lastName: String,
        profilePicture:String,
        posts:[Int],
    }
    */
    export let source;  // String
    export let caption = "Look how much fun we are having without you!";
    export let likes = 0; // [User]
    export let comments = [];// [Comment]
    export let isAd = false;

    let heartFill = "none";

    let crack = new Image();
    crack.src = "../images/crack1.png";

    let eye = new Image();
    eye.src = "../images/eyeball.png";
    let face = new Image();
    face.src = "../images/face.png";
    let knot = new Image();
    knot.src = "../images/knot.png";

    function toggleLike() {
        heartFill = heartFill === "none" ? "red" : "none";
        console.log(heartFill);
    };

    function getMousePos(e) {            
        let canvas = e.target;
        let rect = canvas.getBoundingClientRect(); 
        let x = e.clientX - rect.left; 
        let y = e.clientY - rect.top; 
        return [x, y];
    }

    function crackScreen(e) {
        let canvas = e.target;
        let [x, y] = getMousePos(e);
        const width = 300;
        const height = 150;
        console.log(`X: ${x}, Y: ${y}, w: ${width}, h: ${height}`)
        let context = canvas.getContext("2d");
        context.drawImage(crack, x - width / 2, y - height / 2, width, height);

    }

    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    function eyeMove(e) {
        let canvas = e.target;
        let [x, y] = getMousePos(e);
        let distFromCenter = distance(x, y, canvas.width/2, canvas.height/2);
        const width = 400;
        const height = 300;
        let context = canvas.getContext("2d");
        context.drawImage(eye, x - width / 2, y - height / 2, width, height);
        context.drawImage(face, 0, 0, canvas.width, canvas.height);
        context.drawImage(knot, 0, 0, canvas.width, canvas.height);
    }

</script>

<article>
    <header>
        <div class="imgCont profilePic">
            <img src={user.profilePicture}/>
        </div>
        <a href={user.link}><b>{user.username}</b></a>
        <div class="spacer"></div>
        <button>...</button>
    </header>
    <canvas style="background-image:url({source})"
            width=400 
            height=300
            on:click={crackScreen}
            class="imgCont postImage">
            Your browser does not support canvas elements.
    </canvas>
    <footer>
        <Icon {...Icons.heart}/>
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
        <p class="username">
            <b>{user.username}</b>
            {caption}
        </p>
        <div class="comments preview">
        </div>
        <button on:click={toggleLike} class="blue center">Load more comments...</button>
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
    }

    b {
        font-weight: 600;
    }

    .caption {
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

</style>