function onLoad() {

    let random1 = Math.random();
    let random2 = Math.random();
    let random3 = Math.random();

    let who = ['El gato', 'Mi hermana', 'Mi amigo Ramón', 'Mi novia'];
    let what = ['me ha tirado', 'me ha quemado', 'me ha robado', 'me ha perdido'];
    let when = ['ayer por la noche', 'hace un mes', 'justo cuando desperté', 'mientras estaba en la ducha', 'mientras alimentaba al pájaro'];
    let excusa = (who[Math.floor(random1 * who.length)] + ' ' + what[Math.floor(random2 * what.length)] + ' mis ejercicios ' + when[Math.floor(random3 * when.length)] + '.');

    return excusa;
}

console.log('hola!!!');
document.querySelector('#excusa').innerHTML = onLoad();