export default function Navigation(){
    return `
<div id="navigation">
    <div class="container">
        <ul>
            <li><a href="Blog/">Blog Page!</a></li>
            <li>
                <a href="">Additional Thing!</a>
                <ul>
                    <li><a href="">Thing one!</a></li>
                    <li><a href="">Thing two!</a></li>
                    <li><a href="">Thing three!</a></li>
                </ul>
            </li>
            <li><a href="Contact/">Contact me!</a></li>
            <li>
                <a href="">Projects!</a>
                 <ul>
                    <li><a href="">first</a></li>
                    <li><a href="">second</a></li>
                    <li><a href="">third</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
    `;
}