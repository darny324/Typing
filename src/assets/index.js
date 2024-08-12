export const paragraphs = [
  {
    id: 0,
    title: 'About Plant', 
    text: `A plant is one of the most important living things that develop on the earth and is made up of stems, leaves, roots, and so on.Parts of Plants: The part of the plantthat developed beneath the soil is referred to as root and the part that grows outside of the soil is known as shoot. The shoot consists of stems, branches, leaves, fruits, and flowers.Plants are made up of six main parts: roots, stems,leaves, flowers, fruits, and seeds.`,
  }, 
  {
    id: 1, 
    title: 'JK Rowling', 
    text: `My favourite author is J.K. Rowling, a British author and a fiction writer. She was born on 31st July of 1965 at Yate, United Kingdom.
I have read many interesting books but none of them were able to captivate me as much as her books. Her novels are beautifully written and 
engaging. Among the various books she has written, my favourite is "Harry Potter". It is a fantasy novel series consisting of seven books.
I read it about one year ago when my father gave me the Harry Potter books series as a gift. The story revolves around a boy named Harry Potter and
his friends who overcome various difficulities together. I like the story a lot because of its amazing plot, compelling characters and many other aspects.
She has written a total of 24 books, most of it are fantasy novels. She also published some of her works by the pen name Robert Galbraith. 
I always reread her books whenever i am bored. I just like her the way she is and will always be a fan of her.`, 
  }, 
  {
    id: 2, 
    title: 'Online Mart', 
    text: `Eiizi Mart is one of the many online markets that offer you a lot of choices. In EiiZi Mart, a lot of groceries such as frozen foods, 
dairy products and garden produce can be found. In addition, various kind of meat such as fresh sea food, beef and pork are also available. 
Furthermore, it can also offers you clothing and cosmetics, showcasing a wide range of fashions and styles. Electrical appliances 
are also available for different purposes. One more thing to note is Eiizi Mart is an online shop with 24 hour service which means you 
can buy things any time you like.`,
  }
];

export let typingTypes = 'accuracy';

let Setting = JSON.parse(localStorage.getItem('setting')) || {
  fontSize: 16, 
  theme: 'Light', 
  level: 'Easy'
};

export function saveSetting(set)
{
  Setting = set;
  localStorage.setItem('setting', JSON.stringify(Setting));
}

export function getSetting()
{
  return {...Setting};
}

export function setTypingTypes(types)
{
  typingTypes = types;
}

export function getTypingTypes()
{
  return typingTypes;
}


  
  