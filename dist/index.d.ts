export as namespace Splitter;

interface SplitterProps {
    rule: "words" | "chars";
    eachClass: string;
    eachIdWithIndex:string;
    indexOption: "number" | string[];
    words:string
}

export { SplitterProps };