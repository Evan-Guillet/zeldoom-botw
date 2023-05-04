class Inventory {

    inventory = []

    createItem(pName, pSprite, pDamagePerSecond, pLevel){
        let item = {
            name: pName,
            sprite: pSprite,
            damagePerSecond : pDamagePerSecond,
            level: pLevel
        }

        this.inventory.push(item)
    }
}
