
let menu = [
	{
		tab: 'Платежі',
		title: 'Ну де ще ви бачили безкоштовні перекази?',
		description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
		icon: 'payment'
	},
	{
		tab: 'Виписка',
		title: 'Усі ваші витрати на кінчиках пальців',
		description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
		icon: 'extract'
	},
	{
		tab: 'Налаштування картки',
		title: 'Забудьте все, що ви знали про банкінг',
		description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
		icon: 'settings'
	}
];

class Tabs {
    constructor(config) {
        this.config = config;
    }

    render() {
        let rendered = '<div class="tabs">';

        rendered += this.renderTabsButtons();
        rendered += this.renderTabsContent();

        rendered += '</div>';

        return rendered;
    }

    renderTabsButtons() {
        let rendered = '<div class="tabs__nav">';
            for (let item of this.config) {
                rendered +=  ` <button class="tabs__nav-btn " type="button" data-tab="#${item.icon}">${item.tab}</button> `
                   }
                   
        rendered += '</div>';

        return rendered;
    }

    renderTabsContent() {
        let rendered = '<div class="tabs__content">';

        for (let item of this.config) {
            rendered +=  ` 
            <div class="tabs__item  " id=${item.icon}>
                           <div class="circle" >
                           <img src="./img/icons/${item.icon}.svg" alt="${item.icon}">
                              </div>
                             <h2>${item.title}</h2>
                             <p>${item.description}</p>
                         </div>
            `
               }

        rendered += '</div>';

        return rendered;
    }
}

const tabs = new Tabs(menu);

document.querySelector(`body`).innerHTML += `${(tabs.render())}`;

// document.write(tabs.render()); 

const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}
document.querySelector('.tabs__nav-btn').click();







 
























