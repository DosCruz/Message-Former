const form = document.querySelector("#form form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const client = form.client.value;
    const reach = parseFloat(form.reach.value);
    const reachPlan = form.reachPlan.value;
    const subs = parseFloat(form.subs.value);
    const subsPlan = form.subsPlan.value;
    const revenue = parseFloat(form.revenue.value);
    const revenuePlan = form.revenuePlan.value;
    const bestX1 = form.bestX1.value;
    const bestX1Comment = form.bestXComment1.value;
    const bestX2 = form.bestX2.value;
    const bestX2Comment = form.bestXComment2.value;
    const bestX3 = form.bestX3.value;
    const bestX3Comment = form.bestXComment3.value;
    const xSummary = form.xSummary.value;
    const bestIg1 = form.bestIg1.value;
    const bestIg1Comment = form.bestIgComment1.value;
    const bestIg2 = form.bestIg2.value;
    const bestIg2Comment = form.bestIgComment2.value;
    const bestIg3 = form.bestIg3.value;
    const bestIg3Comment = form.bestIgComment3.value;
    const igSummary = form.igSummary.value;
    const bestReddit1 = form.bestReddit1.value;
    const bestReddit1Comment = form.bestRedditComment1.value;
    const bestReddit2 = form.bestReddit2.value;
    const bestReddit2Comment = form.bestRedditComment2.value;
    const bestReddit3 = form.bestReddit3.value;
    const bestReddit3Comment = form.bestRedditComment3.value;
    const redditSummary = form.redditSummary.value;
    const bestYT1 = form.bestYT1.value;
    const bestYT1Comment = form.bestYTComment1.value;
    const bestYT2 = form.bestYT2.value;
    const bestYT2Comment = form.bestYTComment2.value;
    const bestYT3 = form.bestYT3.value;
    const bestYT3Comment = form.bestYTComment3.value;
    const ytSummary = form.ytSummary.value;
    const lastComment = form.lastComment.value;

    let reachMessage = "";
    if (reach > 99) {
        reachMessage = `📈 The target for reach this month was surpassed by ${reach}% which indicates good audience/visitors on your account.`;
    } else {
        reachMessage = `📉 The reach was ${reach}% of the goal this month.`;
    }

    let subsMessage = "";
    if (subs > 99) {
        subsMessage = `📈 The target for subs this month was surpassed by ${subs}% which indicates good conversion/fan growth on your account.`
    } else {
        subsMessage = `📉 The subs was ${subs}% of this month's goal.`
    }

    let revenueMessage = "";
    if (revenue > 99) {
        revenueMessage = `📈 The target for revenue this month was surpassed by ${revenue}%.`
    } else {
        revenueMessage = `📉 The revenue was ${revenue}% of our goal.`
    }

    let messageParts = [];

    messageParts.push(`Hey ${client}!`);
    messageParts.push(`We've reviewed your account and looked into the general performance. I wanted to share the status update:`);

    messageParts.push(`${reachMessage} ${reachPlan}`);
    messageParts.push(`${subsMessage} ${subsPlan}`);
    messageParts.push(`${revenueMessage} ${revenuePlan}`);

    if (bestX1 || bestX2 || bestX3) {
        messageParts.push(`\nTWITTER/X:\nYour best performing content:`);
        [ [bestX1, bestX1Comment], [bestX2, bestX2Comment], [bestX3, bestX3Comment] ].forEach(([link, comment]) => {
            if (link) messageParts.push(`${link}\n${comment}`);
        });
    }

    if (xSummary) {
        messageParts.push(`${xSummary}`);
    }

    if (bestIg1 || bestIg2 || bestIg3) {
        messageParts.push(`\nINSTAGRAM:\nYour best performing content:`);
        [ [bestIg1, bestIg1Comment], [bestIg2, bestIg2Comment], [bestIg3, bestIg3Comment] ].forEach(([link, comment]) => {
            if (link) messageParts.push(`${link}\n${comment}`);
        });
    }

    if (igSummary) {
        messageParts.push(`${igSummary}`);
    }

    if (bestReddit1 || bestReddit2 || bestReddit3) {
        messageParts.push(`\nREDDIT:\nYour best performing content:`);
        [ [bestReddit1, bestReddit1Comment], [bestReddit2, bestReddit2Comment], [bestReddit3, bestReddit3Comment] ].forEach(([link, comment]) => {
            if (link) messageParts.push(`${link}\n${comment}`);
        });
    }

    if (redditSummary) {
        messageParts.push(`${redditSummary}`);
    }

    if (bestYT1 || bestYT2 || bestYT3) {
        messageParts.push(`\nYOUTUBE:\nYour best performing content:`);
        [ [bestYT1, bestYT1Comment], [bestYT2, bestYT2Comment], [bestYT3, bestYT3Comment] ].forEach(([link, comment]) => {
            if (link) messageParts.push(`${link}\n${comment}`);
        });
    }

    if (ytSummary) {
        messageParts.push(`\n${ytSummary}`);
    }

    if (lastComment) messageParts.push(lastComment);

    const finalMessage = messageParts.join("\n\n");

    document.getElementById("resultContents").innerText = finalMessage;

    const copyButton = document.getElementById("copyButton");
    copyButton.style.display = "block";

    copyButton.onclick = () => {
        navigator.clipboard.writeText(finalMessage)
            .then(() => {
                copyButton.innerText = "Copied! ✅";
                setTimeout(() => copyButton.innerText = "Copy Message", 2000);
            })
            .catch(() => {
                copyButton.innerText = "Failed ❌"
            });
    };
});

const clientInput = document.getElementById("client");
const clientList = document.getElementById("clients");

clientInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const value = clientInput.value.toLowerCase();
        const options = Array.from(clientList.options);
        const firstMatch = options.find(opt => opt.value.toLowerCase().startsWith(value));

        if (firstMatch) {
            e.preventDefault();
            clientInput.value = firstMatch.value;
        }
    }
});

const allOptions = Array.from(clientList.options).map(opt => opt.value);

clientInput.addEventListener("input", () => {
    const value = clientInput.value.toLowerCase();
    const filtered = allOptions.filter(name =>
        name.toLowerCase().startsWith(value)
    );

    clientList.innerHTML = "";
    filtered.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        clientList.appendChild(option);
    });
});