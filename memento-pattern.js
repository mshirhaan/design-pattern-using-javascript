class Editor {
    constructor() {
        this.content = "";
    }

    setContent(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    createState() {
        return new EditorState(this.content);
    }

    restore(history) {
        this.setContent(history.pop().content);
    }

}

class EditorState {
    constructor(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }
}

class History {
    constructor() {
        this.states = [];
    }

    push(state) {
        this.states.push(state);
    }

    pop() {
        return this.states.pop();
    }
}

let editor = new Editor();
let history = new History();
editor.setContent('shirhaan');

history.push(editor.createState());
editor.setContent('shiraan');

history.push(editor.createState());
editor.setContent('sirhaan');

editor.restore(history);
