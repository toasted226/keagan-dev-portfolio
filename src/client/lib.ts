const animateText = (finishedText: string, timeBetweenCharacters: number, endChar: string, setText: React.Dispatch<React.SetStateAction<string>>) => {
    let progressingText = "";
    for (let i = 0; i < finishedText.length; i++) {

        setTimeout(() => {
            progressingText += finishedText[i];
            let useText = progressingText + endChar;
            setText(useText);
        }, i * timeBetweenCharacters);
    }
}

export default animateText;
