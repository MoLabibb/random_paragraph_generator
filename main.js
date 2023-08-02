let text = [
    `Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. `,
    `Topic sentences, also known as “paragraph leaders,” introduce the main idea that the paragraph is about. They shouldn’t reveal too much on their own, but rather prepare the reader for the rest of the paragraph by stating clearly what topic will be discussed. `,
    `Most paragraphs contain between three and five sentences, but there are plenty of exceptions. Different types of paragraphs have different numbers of sentences, like those in narrative writing, in particular, where single-sentence paragraphs are common.`,
    `Likewise, the number of sentences in a paragraph can change based on the style of the writer. Some authors prefer longer, more descriptive paragraphs, while other authors prefer shorter, faster-paced paragraphs. 
When it comes to nonfiction writing, like research papers or reports, most paragraphs have at least three sentences: a topic sentence, a development/support sentence, and a conclusion sentence. `,
`Expository: Common in nonfiction and all types of essays, expository paragraphs revolve around explaining and discussing a single point or idea. 
Persuasive: Just like expository paragraphs, persuasive paragraphs focus on discussing a single point; however, they support opinions instead of facts. 
Narrative: When telling a story, a narrative paragraph explains an action or event. Each new sentence furthers or expands upon the action by providing new information. `,
`Rather than merely talk about paragraph structure, let’s look at some paragraph examples so you can see structure in action. 

The first paragraph example comes from Bertrand Russell in his essay “Icarus, or the Future of Science.” This excerpt uses the same paragraph structure often used in research papers, essays, and other nonfiction writing. The first sentence makes a claim, and the subsequent sentences defend that claim, ending in a strong conclusion that ties everything together. `,
`If men were rational in their conduct, that is to say, if they acted in the way most likely to bring about the ends that they deliberately desire, intelligence would be enough to make the world almost a paradise. In the main, what is in the long run advantageous to one man is also advantageous to another. But men are actuated by passions which distort their view; feeling an impulse to injure others, they persuade themselves that it is to their interest to do so. They will not, therefore, act in the way which is in fact to their own interest unless they are actuated by generous impulses which make them indifferent to their own interest. This is why the heart is as important as the head. By the “heart” I mean, for the moment, the sum-total of kindly impulses. Where they exist, science helps them to be effective; where they are absent, science only makes men more cleverly diabolic.`,
`Notice how all sentences in the paragraph relate to the same idea: That humans act emotionally more than rationally. However, each sentence makes its own unique point, and when taken together, they connect to the central topic. 

Another nonfiction paragraph example comes from Twelve Years a Slave, a memoir from freeborn African-American Solomon Northup who was kidnapped and forced into slavery for twelve years before friends and family intervened with the help of the law. `,
`I expected to die. Though there was little in the prospect before me worth living for, the near approach of death appalled me. I thought I could have been resigned to yield up my life in the bosom of my family, but to expire in the midst of strangers, under such circumstances, was a bitter reflection.`,
`His face was a strong—a very strong—aquiline, with high bridge of the thin nose and peculiarly arched nostrils; with lofty domed forehead, and hair growing scantily round the temples but profusely elsewhere. His eyebrows were very massive, almost meeting over the nose, and with bushy hair that seemed to curl in its own profusion. The mouth, so far as I could see it under the heavy moustache, was fixed and rather cruel-looking, with peculiarly sharp white teeth; these protruded over the lips, whose remarkable ruddiness showed astonishing vitality in a man of his years. For the rest, his ears were pale, and at the tops extremely pointed; the chin was broad and strong, and the cheeks firm though thin. The general effect was one of extraordinary pallor.`,

]

const form     = document.querySelector('.form'); 
const result   = document.querySelector('article'); 
const amount   = document.getElementById('amount'); 

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    const value =  parseInt( amount.value); 
    const random = Math.floor(Math.random() * text.length); 
    if(isNaN(value) || value <= 0 || value > 9){
        result.innerHTML  = text[random]; 
    }else{
        let arrayOfParagraphs = text.slice(0, value); 
        arrayOfParagraphs  = arrayOfParagraphs.map(function(paragraph){
        return `<p class = "p">${paragraph}</p>` ; 
     
        }).join('');
        result.innerHTML = arrayOfParagraphs ; 
       
    }
})