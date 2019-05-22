export default function(state){
    return `
        <div id="content">
        <div class="container">
            <form action="https://formspree.io/quinntessential@protonmail.com" method="POST">
                <label for="name">Name:</label>
                <input type="text" name="name" id="" required>
                <label for="email">Email:</label>
                <input type="email" name="email" id="" required>
                <label for="password">Password:</label>
                <input type="password" name="password" id="" required>
                <div>
                    <label for="intent">What do you want to talk about, friend?</label>
                    <div>
                        <input type="radio" name="intent" id="" value="option one" checked><span>Option one!</span>
                    </div>
                    <div>
                        <input type="radio" name="intent" id="" value="option two"><span>Option two!</span>
                    </div>
                    <div>
                        <input type="radio" name="intent" id="" value="option three"><span>Option three!</span>
                    </div>
                </div>
                <input type="submit" value="Submit to meee">
            </form>
        </div>
    </div>
    `;
}