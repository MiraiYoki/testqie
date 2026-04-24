// 游戏数据
const gameData = {
    scenes: {
        start: {
            speaker: "系统",
            text: "你醒来发现自己在一个陌生的房间里。房间里有一扇门和一扇窗户。",
            options: [
                {
                    text: "走向门",
                    nextScene: "door"
                },
                {
                    text: "走向窗户",
                    nextScene: "window"
                }
            ]
        },
        door: {
            speaker: "系统",
            text: "你走到门前，发现门是锁着的。旁边有一个密码锁。",
            options: [
                {
                    text: "尝试输入密码 1234",
                    nextScene: "password1"
                },
                {
                    text: "回到房间中央",
                    nextScene: "start"
                }
            ]
        },
        window: {
            speaker: "系统",
            text: "你走到窗户前，看到外面是一片森林。窗户是开着的。",
            options: [
                {
                    text: "从窗户出去",
                    nextScene: "forest"
                },
                {
                    text: "回到房间中央",
                    nextScene: "start"
                }
            ]
        },
        password1: {
            speaker: "系统",
            text: "密码正确！门开了。",
            options: [
                {
                    text: "出门",
                    nextScene: "outside"
                }
            ]
        },
        forest: {
            speaker: "系统",
            text: "你从窗户爬了出去，来到了森林里。你看到一条小路延伸向远方。",
            options: [
                {
                    text: "沿着小路走",
                    nextScene: "path"
                }
            ]
        },
        outside: {
            speaker: "系统",
            text: "你走出了房间，发现自己在一个小木屋前。周围是美丽的田园风光。",
            options: [
                {
                    text: "探索周围",
                    nextScene: "explore"
                }
            ]
        },
        path: {
            speaker: "系统",
            text: "你沿着小路走了一会儿，遇到了一个老人。",
            options: [
                {
                    text: "和老人交谈",
                    nextScene: "oldman"
                }
            ]
        },
        explore: {
            speaker: "系统",
            text: "你探索了周围的田园，发现了一片美丽的花田。",
            options: [
                {
                    text: "结束游戏",
                    nextScene: "end"
                }
            ]
        },
        oldman: {
            speaker: "老人",
            text: "年轻人，你看起来迷路了。欢迎来到我的森林。",
            options: [
                {
                    text: "感谢老人",
                    nextScene: "end"
                }
            ]
        },
        end: {
            speaker: "系统",
            text: "恭喜你完成了游戏！",
            options: [
                {
                    text: "重新开始",
                    nextScene: "start"
                }
            ]
        }
    }
};

// 游戏状态
let currentScene = "start";

// DOM元素
const characterName = document.getElementById("character-name");
const dialogueText = document.getElementById("dialogue-text");
const optionsList = document.getElementById("options-list");

// 显示场景
function showScene(sceneName) {
    const scene = gameData.scenes[sceneName];
    if (!scene) return;
    
    currentScene = sceneName;
    
    // 显示对话
    characterName.textContent = scene.speaker;
    dialogueText.textContent = scene.text;
    
    // 显示选项
    optionsList.innerHTML = "";
    scene.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.className = "option";
        optionElement.textContent = option.text;
        optionElement.addEventListener("click", () => {
            showScene(option.nextScene);
        });
        optionsList.appendChild(optionElement);
    });
}

// 初始化游戏
window.addEventListener("DOMContentLoaded", () => {
    showScene("start");
});