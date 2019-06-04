export default function(state){
    return `
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
                <input type="radio" name="intent" id="option-one" value="option one" checked><label for="option-one">Option one!</label>
            </div>
            <div>
                <input type="radio" name="intent" id="option-two" value="option two"><label for="option-two">Option two!</label>
            </div>
            <div>
                <input type="radio" name="intent" id="option-three" value="option three"><label for="option-three">Option three!</label>
            </div>
        </div>
        <input type="submit" value="Submit to meee">
    </form>
    `;
}
