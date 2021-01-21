const list = {
  contents: ['机を片付ける', '牛乳を買う', '散歩する'],
  genres: ['掃除', '買い物', '運動']
}
const displayText = `現在持っているタスク一覧\n`;

function listDisplay() {
  console.log(displayText);
  for (let i = 0; i < list.contents.length; i++) {
    console.log(`${i}:[内容]${list.contents[i]}、[ジャンル]${list.genres[i]}`);
  }
}
listDisplay()

function listAddTask(task) {
  list.contents.push(task);
}

function listAddGenre(genre) {
  list.genres.push(genre);
}

let i = 2;
listDisplay();
while (true) {
  i++;
  const task = prompt('タスクを入力してください')
  listAddTask(task);
  const genre = prompt('ジャンルを入力してください')
  listAddGenre(genre);
  console.log(`${i}:[内容]${list.contents[i]}、[ジャンル]${list.genres[i]}`);
  const text = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
  if (text === '確認') {
    listDisplay();
  } else if (text === '追加') {
    list.contents.push(text);
    list.genres.push(text);
  } else if (text === "削除") {
    list.contents.splice(2);
    list.genres.splice(2);
  } else if (text === "終了") {
    break;
  } else {
    alert('エラーです')
  }
}