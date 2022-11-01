const parseStat = (stat) => {
  return parseInt(Math.floor(stat / 2))
}

function getStats(creature) {
  return {
    STR: parseStat(creature.stats.str),
    DEX: parseStat(creature.stats.dex),
    CON: parseStat(creature.stats.con),
    INT: parseStat(creature.stats.int),
    WIS: parseStat(creature.stats.wis),
    CHA: parseStat(creature.stats.cha),
    'SPELL-ATTACK':
      creature.spells && creature.spells.attack ? creature.spells.attack : 0,
  }
}

export default ({ app }, inject) => {
  inject('getStats', getStats)
}
