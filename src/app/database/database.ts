import { Question } from './models';


export const QUESTIONS: Question[] =
    [
        {
            index: 1,
            question: 'Czy ::before w CSS?',
            answerOne: 'Tworzy pseudoelement, który staje się pierwszym dzieckiem danego elementu.',
            answerTwo: 'Tworzy pseudoelement, który staje się ostatnim dzieckiem danego elementu.',
            answerThree: 'Przekazuje właściwości styli również poprzedniemu elementowi.',
            answerFour: 'Przekazuje właściwości styli wszystkim poprzedzającym elementom.',
            rightAnswer: 1
        },
        {
            index: 2,
            question: 'Jaka jest różnica między funkcją synchroniczną a asynchroniczną?',
            answerOne: 'Funcja synchroniczna zwraca tylko jedną wartość, a asynchroniczna kilka.',
            answerTwo: 'Funkcja synchroniczna, jest pierwszą uruchamianą funkcją.',
            answerThree: 'Synchroniczny kod przechodzi linijka po linijce wykonując po kolei instrukcje które się w nich znajdują, natomiast w przypadku funkcji asynchronicznej może być inicjowanych kilka działań na raz, dzięki czemu jedne operacje nie muszą czekać aż zakończą się inne. ',
            answerFour: 'Funkcje asynchroniczne nie są wykorzystywane w języku JavaScript. ',
            rightAnswer: 3
        },
        {
            index: 3,
            question: 'Co to jest promis',
            answerOne: 'Jednostka miary wykorzystywana w CSS.',
            answerTwo: 'Część funkcji, która może zostać wykonana lub nie.',
            answerThree: 'Część kodu, która wykonuje się tylko wtedy jeśli zostaną spełnione pewne warunki.',
            answerFour: 'Obiekty typu Promise "obiecują" wykonanie pewnej czynności i następnie zwrócenie rezultatu lub wyrzucenie błędu.',
            rightAnswer: 4
        },
        {
            index: 4,
            question: 'Jakie są dwa dominujące paradygmaty programowania w JavaScrip?',
            answerOne: 'Programowanie wielowątkowe oraz singletonowe.',
            answerTwo: 'Programowanie funkcyjne i obiektowe.',
            answerThree: 'Programowanie synchroniczne i asynchroniczne.',
            answerFour: 'Programowanie obiektowe i użytkowe.',
            rightAnswer: 2
        },
        {
            index: 5,
            question: 'Przedstawiona wartość const x = { value: 1 }; ,to typ?',
            answerOne: 'Prymitywny',
            answerTwo: 'Pierwotny',
            answerThree: 'Referencyjny',
            answerFour: 'Undefine',
            rightAnswer: 3
        },
    ];


