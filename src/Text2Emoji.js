class Text2Emoji {
  emojis;
  cache;
  baseNumber;
  index;

  constructor(props) {
    if (props.emojis.length < 1) {
      throw new Error("emojis shoud be more than 1")
    }
    this.emojis = props.emojis
    this.cache = new Map();
    this.baseNumber = props.emojis.length
    this.index = 0
  }

  convert(text) {
    const cached = this.cache.get(text)
    if (cached) {
      return cached
    }
    const emoji = this._num2Emoji(this.idx);
    this.idx += 1;
    this.cache.set(text, emoji);
    return emoji;
  }

  _num2Emoji(num) {
    const convertedNum = num.toString(this.baseNumber).split("");
    const key = convertedNum.map((el) => this.emojis[el]).join("");
    return key
  }
}

module.exports = {
  Text2Emoji
}
