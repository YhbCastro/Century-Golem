const merchantCardsBase = [
    {
        picture: "",
        isUsed: false,
        isPlayable(){
            if(!isUsed && isSpecificPlayable) {
                return true
            }
        }
    }
]
const tradeBaseCards = [
    {
        take: quantity + color,
        give: quatitiy + color,
        isSpecificPlayable(){
        },
        gems: 0
    }
]

const upgardeBasecards = [
    {
        
    }
]