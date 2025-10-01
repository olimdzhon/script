(async function () {
  const excel = require("exceljs");
  const fs = require("fs");
  const workbook = new excel.Workbook();
  // use readFile for testing purpose
  // await workbook.xlsx.load(objDescExcel.buffer);
  const worksheet = workbook.addWorksheet("Sheet 3");
  worksheet.columns = [
    { header: "delegator_address", key: "delegator_address", width: 10 },
    { header: "amount", key: "amount", width: 10 },
  ];

  const txs = [
    {
      delegation: {
        delegator_address: "cosmos1qr22vsf8c9dawxqgacg8hswrpvj26t5ttvwy9k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51097489.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51097489",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qy7tgrq7wvd7etzv2h5axdla8tur7jfwdwja56",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1q2898je3udqg338znkv02v8rjh8lxsj6fzl75z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "68269469.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "68269469",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6n2sr6fj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1602311843.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1602311843",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qdj33jvvj67vyyhh454q6u7u8scplhvqfldy0t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246069242.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246069242",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qwf8zz98kzts5q34cvg98usgl6ava9tlkrwx8l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100750235.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100750235",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qsp85ghzfq5af43veaa6vm8xglun0fx5lewtws",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "36199999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "36199999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qsk978h60zhad3qrsc02lgp0v0jv72d6z9e825",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53670221.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53670221",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1q4c6fl2uczr7jvzn999rtpwq7fhedrcs4rhgg0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53670597.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53670597",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qesvevs2p7p8apr5murjjz20sk0jsvf95m50zn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53669190.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53669190",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1q7fe09ft8wj483hkwk4zr500jpdlq2hasgad6m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1q77pp2skywhf792avwnxjg2hw3zr030v2zek2q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qluz5u8nxmv6rw9lwxnjyvgm3scr6yz4phfmc5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "703000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "703000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pq0hgq9f5fs08kctgd74adyu7e5eph395c4lhu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pqsechewh3k430s2v8rngr7cehzq7ukpt8rltn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50000001.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50000001",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ppscx7eckh9hsftq8cgptg9d7cll2r9xu08c49",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53763048.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53763048",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ppnvhxz6aqw856uurrq0a0h27q5aa3fct7rfmp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "49999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "49999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pyfg4ztr8drzyja5uwm2z82waypp88wchxqrj5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53632002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53632002",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pt7h4dyfk05mlyywevzkyzz9jl4dqkm8fv45cn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "49999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "49999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pwpflqaa4jrjueyss55p0u7lyh6zr3hrylf33a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81434281.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81434281",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pwh69yww9h5dqkjtlfdcs8zqvktzngk58zcy4r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80105377.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80105377",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1p3n2f2q9tewmq2kl922z4tlqmgf9tjgdk0pn5w",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50009999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50009999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1p4304z6uxj5s6vwz8l6nd52tg0esemp3afek3j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60117674.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60117674",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pe8e0wd4cs2fj6lzt6u9ek3503qpmkm30ew7rd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101216748.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101216748",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1p6s3nqc8rr02j5n9qhtmt7zkf4ur2j0v80fxze",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "202041114.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "202041114",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pme8tquascj9t2kay0qxh42f688x5cmr33us5p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "158658414.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "158658414",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zq54z7d3qhc2fruy3sql9qesgunf47trqtqjxu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74170403.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74170403",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zyyht9qajphrdc8yef09fyd5647a5f4udnf72k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zxprgrhmf6zwkvrwmk08kgtlhu4ptk6sdygq4f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "500955361.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "500955361",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z8lc69ya865u2q054spewawp8f42glxjlr4q7h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42588656.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42588656",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zsf4lp9t3c8lu7p4qspmq9vefmkmppuwh3cvps",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74901964.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74901964",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z3h4mm4f6n9cswxf6p4y6r73hzjy5uexkke6nw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53922543.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53922543",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zj2vpvjp2cr2950r350zp67py5wsnn6e20rhm8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zj04hzjgvdeqt3rl3ym4phf999hh89uqz6rh97",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1znaj4lqyds2jsg9tpmwt59r0mxn85at48g3804",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "4999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "4999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z449svm08e9p0544grvq7skv4ltfev6hkgmzvp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53601993.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53601993",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zaxzzkleu5cn4gy4rr2p03mfsn7sr0ej73n4d2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67886420.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67886420",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zah9a5wx467syjz9frjhq9xhrq2fyugsuq7jph",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53860508.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53860508",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z7a6glgggrqhe8hzehc75lml3dz26mwdxxzhgj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53815792.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53815792",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rp88lsash8lg0ltfq7pum6seqvgl49mj5gulkr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53668919.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53668919",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rrqhq3xyqadt3nk236h8mv98jm99ee00n7spn4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42899228.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42899228",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rrykp3pf9q9k93tlrgmyvcav05467kzwchclt0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53580592.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53580592",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rys6plnkerr7fpsw20ks7kpn2xjkc405drml52",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "26200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "26200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ry3e3fvjn6e6276ym5kt8f0xr0padqtjnkm8jq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51872565.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51872565",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r93c20xuwtxadwgfkh9m2swkkvn49jdeeaxwyp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53829139.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53829139",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r9lglxgtxvuh8033mu7utazagm4l9jtsl2638r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53667427.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53667427",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rxqas2m8n3jjvulgzsmks0ekzqp32arvrar2m8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77710231.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77710231",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rfrfnkjc3t9zh9hn96p327cjyytk48fchav3xd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50332122.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50332122",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rfkgpv4qah9arlq4gkpzjpu2l6gd32guuf7cvf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15144001.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15144001",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rta9aa5dzsr3kvcf2x8x8zeycd0yw4stwwztuu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "749426368.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "749426368",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rd0cp2qfztcs5hp9wkt4u6mpr7ctz7p406empf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53682779.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53682779",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rd6lz9zajs92c7ya6n46zh9syjzpcrndzchvwx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rw2nsr4tkeqsymjtk88wd059k75m2crv93vwda",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75150888.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75150888",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rw6v0t6amwcz3dnur7szqvkl23qqgrw5neh4jg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "88670820.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "88670820",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r39vukxnda00vv4urhfmqpjvfzknr7jrl0xugs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "71177359.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "71177359",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rj4lwlzwhgka8ryuu9kagzw6wdg4j9896063g6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rnl8nvajwyv252ku5vyed4e30tlculla6hf6ra",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "71989999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "71989999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r4u745xf8q5d54qth3970qg5h8jzdwjaa56ae9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "36999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "36999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rkz3xqptzh2zurhmggtrup2mp0pncvhav96ezc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53547928.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53547928",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rhyz30vg0c6ed69rmz43h35wn92ucksrkls5mk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "14100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "14100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rc6zk2k0las34k4zn5msp4d48yuukg0jqhcgwl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52800000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52800000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rep644aj80wcv8nzhxmuhg2a5g2dzpvzrjawpe",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "20050284.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "20050284",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rmvy6zqfxgat2905wekyhm528vqhu989dz4tfw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53581674.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53581674",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r7sp8qf07jtj437tcz47jpthlqw3ffthhh7zyk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54590695.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54590695",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yq7n7f6ekn8rcxmlc033ea58kw5z0ly3q4pr3k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245983239.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245983239",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yp9qnmlhk5t5tghqq3hfq7j8h583wxcd83tvpq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42799920.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42799920",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yyxsxmf635pxvm0hlfucdegprh55xsxprcgalp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246069253.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246069253",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yxp72ytnak32kv4c4hpp74x4myf3u424m6p7c5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77601584.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77601584",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y2swuf9serylhpx8ydz2rm96rtqhmy99qs6k0m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53820547.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53820547",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ysthp74n2wxt4flmzyxrhza8rvxzr9mc3f9he5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115641226.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115641226",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ynyd20u2nu2nx7v8a83m9taqrse9jhx66almsh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "31000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yng27xvqv0z7uszrzvcfkggdpnxgartq2qft63",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "71014040.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "71014040",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y440lzheawd2hnxlw8xdavx0ad67ret3vmws3c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ykyk43nxapm48n60ft0sr8ndrg8deu9pydglqn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "884409999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "884409999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ycvqap8apkyd9u5j7hu9ukklzx34v6es02ycnl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "299183052.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "299183052",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y6h23fxgqvqdms62k04js0fa5kh79az7renjr5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53670384.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53670384",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ymwgg85shgthy4gsp7qf59jpf0pz4c3rnmvs6k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60564332.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60564332",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y7ysuyhsl30trd6qhss3qpc7mxta40gsw9ekqx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74241963.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74241963",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y798r0cg0s4nscwcs0aet5rmkzq9eel8eeuffe",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19pwr02eevx0ec8teh3u3sgcyw9hl6drxs8rmz2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "49990001.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "49990001",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19yk6wz0nszymsk76gnvm5w89gzeh69eq5f0nxm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53795817.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53795817",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19xuvslp4za626qlpg6vrqu20gvh6n9lj45dmmp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53608161.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53608161",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos198uernvg4gwrrgxm83fha4jywml0wr2jsl9m86",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53582474.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53582474",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19fhvy0js34xqcds9rvr4rgcwk2wznlfghx2e5v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "35200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "35200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19tzhedlpau94jvu5v585rv2t4wrlpem3dlfv29",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "40136349.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "40136349",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19wmlrdhyf85fly7mqhm4a0jr5qa4hlvqpregkl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77239530.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77239530",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos190wj3tp2m9r9u42grsfhdm7errkca3uwgnfqrz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60628391.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60628391",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos195uet0szm7hwaps2k99ywscsdl7hjcy8c7u720",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245989722.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245989722",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos194px257lyndy5sldjkqqr2evxljd9yme8hd2k8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "627697061.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "627697061",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1949rhj0kn0q9tz02720dgpxx8lz3l9yw624gv3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15080300.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15080300",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos194sg0pj6p5nk7dpnuh7wwm0evlwhw8zy7w8um4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245980968.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245980968",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19kwsexd87fd49srdw4k6ltsfxg8xlnhw70xq3x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "94877698.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "94877698",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19k650hvvlzxp09c2y7qz6ahz594ecqu7fa5q2l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53668201.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53668201",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19ehyjh58x66tqn3d4pwmxd0uzjvkmr36azcw9d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "49390700.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "49390700",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19eu8zmrzzt05l8yap70ur5t5fdzwgt9p353l9s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "27147095.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27147095",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19uga3gpvacvlyuv2mf027n4xqrv4tssegzdfsx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "202041515.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "202041515",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19u539q85fun7nax92w853gcqtl74kr0e0x6gvn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101099999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101099999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19ulh374fqcqquvanqg2fa2vl8ftck5l66halzq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "28610343.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "28610343",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos197djzpsht39797hkq7g3lfyk6pltmhzzevtquf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53860674.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53860674",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos197lc4ceg0xz4d874m87dhf2z0asugnukm93jpx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "110465461.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "110465461",
      },
    },
  ];
  let output = [];

  for (i = 0; i < txs.length; i++) {
    if (parseInt(txs[i].balance.amount) >= 50000000) {
      output.push({
        delegator_address: txs[i].delegation.delegator_address,
        amount: txs[i].balance.amount,
      });

      worksheet.addRow({
        delegator_address: txs[i].delegation.delegator_address,
        amount: txs[i].balance.amount,
      });
    }
  }

  workbook.xlsx
    .writeFile("./file4.xlsx")
    .then(() => console.log("File saved!"));

  console.log(output, output);
})();
