{
    const tasks = [
        {
            content:
        },
        {},
    ];
    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `
            <li>
                ${task.content}
            </li>
            `;
        }
        document.querySelector("js-tasks").innerHTML = htmlString;
    };
    
    const init = () => {
        reneder();
    };

    init();
}