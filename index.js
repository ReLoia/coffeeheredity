/*
My first sprig game! I wanted to make an interactive game that I would play at school ahah
So I choose to make a game where you are an old Neapolitan Mastiff that has to work each day making coffee and receiving tips!


@title: coffeeheredity
@author: reloia
@tags: []
@addedOn: 2024-00-00
*/

const player = "p",
  selector = "s",
  title1 = "C",
  title2 = "O",
  title3 = "F",
  title4 = "E",

  title5 = "H",
  title6 = "R",
  title7 = "D",
  title8 = "T"


  setLegend(
    [player, bitmap`
..1LL......LL1..
.LHL1LL11LL1LHL.
.181LL1111L1C81.
..1L1L0110LLL1..
...C203113021...
...L1L111111L...
...L111LL11LL...
..CF11L22L111C..
..C111203L11FC..
..C1F113311LFC..
.LLCLCC33CFLCLL.
L11CC117311CC11L
1L1111117111L111
11LFFF1111423L11
1111L111011L1111
111LL111111LL11L`],
    // selector, moved using the left menu
    [selector, bitmap`
..LLLLL111111...
.L...........1L.
.1.............L
1..............L
1..............L
1..............L
1..............L
1..............1
1..............1
1..............1
L..............1
L..............1
L..............1
L.............1.
.L1...........L.
...1111111LLLL..`],

    // main menu items
    [title1, bitmap`
................
................
...CCCCCC......C
..CCCCCCCC.....C
.CCCCLC.LCC...CC
.C0L.....CC...CL
CCLC..........CC
CCC...........CC
CCL...........CC
CCL...........CC
CCCL......LC..CC
CCC0L....LCC..CL
.CCC0LLCCCCC..CL
.CCCCCCCCCC....C
...CCCCCCC.....C
................`],
    [title2, bitmap`
................
................
CCCCC......CCCCC
CC0FCC....CCCCC.
CC0LCC....CC00..
CL0CCC...CCCL...
C0FCCCC..CCL..CC
C0LCCCC..CCLCCCC
L0CCCCC..CCCCC0.
C0CCCCC..CCC0...
CL0CCCC..CCL....
CL0LCC...CC0....
CC0CCC...CCC....
CCC0CC...CCCC...
CCCCC.....CCC...
................`],
    [title3, bitmap`
................
................
C....CCCCC....CC
....CCCCC....CCC
....CC00.....CC0
...CCCL.....CCCL
C..CCL..CC..CCL.
C..CCLCCCC..CCLC
...CCCCC0...CCCC
...CCC0.....CCC.
...CCL......CC..
...CC0......CCL.
...CCC......CCCL
...CCCC.....CCCC
....CCC......CCC
................`],
    [title4, bitmap`
................
................
CCC.....CCCCCC..
CC.....CCCCCC...
.......CC0C.....
......CCCL......
......CCL.......
CCC...CCLCCCC...
C.....CCCCC.....
......CCC.......
......CC........
......CCL.......
..CC..CCCL...CC.
CCC...CCCCCCCC..
CC.....CCCCCC...
................`],

    [title5, bitmap`
................
..LL....LL.....L
.LLL...LL....LLL
LLL....LL...LLLL
LL0...LLL...LLL1
LL....1L....LL..
LL1..LLL....L0..
LL1LL1LL....LL0L
LLLLLLLL....LLLL
LLLLLLLL....0LL.
L0L..0LL....0L0.
L0...1LL....0LL0
LLL...LL....0LLL
LL0...LLL....0LL
.LLL...LL......L
................`],
    [title6, bitmap`
................
................
LLL......LLLLL..
LLLL....LLLLLLL.
2.LL...LLLLLLLL.
.......LLL.11LL.
.......LL0..1LL.
LL.....L0....LL.
LLL...LLL0..LLL.
......LLL00LLL..
......LLLLLLLL..
.......LLLLLLLL.
LLL....0LL0LLLLL
LLLL....0LL.0LLL
LL......0LLL..LL
................`],
    [title7, bitmap`
................
................
...LLLLL.....0LL
..LLLLLLL...LLLL
..LLL1.LL..0LLLL
.LLL.......LLLL.
.LL0.......LL...
.LLL0LL....LL...
.LLLLLLL...LL...
.0LL.......LL...
.0LL0......LL0..
..0LL0.....0L0..
..0LLLLLL..0LL0L
...0LLLLL..0LLLL
......LL....0LLL
................`],
    [title8, bitmap`
................
................
...LLLLL.....0LL
..LLLLLLL...LLLL
..LLL1.LL..0LLLL
.LLL.......LLLL.
.LL0.......LL...
.LLL0LL....LL...
.LLLLLLL...LL...
.0LL.......LL...
.0LL0......LL0..
..0LL0.....0L0..
..0LLLLLL..0LL0L
...0LLLLL..0LLLL
......LL....0LLL
................`],



    // background items
  )

setSolids([])

let level = 0
const levels = [
  map`
.......
.COFE..
..HRD..
.......
.......`
]

setMap(levels[level])

setPushables({
  [player]: []
})

afterInput(() => {

})
