function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
        element.style.zIndex = -1;
    }
    
    function moveWithArrowKeys(left, bottom,callback){
        let direction = null;
        let x = left;
        let y = bottom;
        //callback function isnt working. It says it hasnt been defined. Ive renamed to to the directionhandle but it still doesnt change direction//
        
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveCharacter(){
    if(direction === 'west') {
        x = x - 1
    }
    if(direction === 'north') {
        y = y + 1
    }
    if(direction === 'east') {
        x = x + 1
    }
    if(direction === 'south') {
        y = y -1
    }

    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}

setInterval(moveCharacter, 1)

document.addEventListener('keydown', function(e){
    if(e.repeat) return;
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
    callback(direction)
})

document.addEventListener('keyup', function(e){
    direction = null
    callback(direction)
})
//the error comes on line 57 - says callback is not defined. I realize im trying to call back a function so it might be out of scope- but ive tried renaming and making it global//


    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}