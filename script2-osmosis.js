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
        delegator_address: "osmo1qfl9rqp6gg2k0ey648wlq36fd6d0xh3xmvsv3x",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5081000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5081000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6nzts2lq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "26965100000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "26965100000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1q0mzc997kps2w60uuv5vpmh5jqk4arrnnywra3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "237000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "237000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qhkzptmhwt78jpzx34hpljz6megz0gtjr6tn0j",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "314700000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "314700000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qe6q4wwjzse3rkv07czlevhngxn56sus4q96ya",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10176473167.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10176473167",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qm0q9ec5ylrgz2sz78j53xnrfcsse74av2j62z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2914012225.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2914012225",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1q7x0hxpcjasvtv0cn7h0tqf47fp06ct22cuv50",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "19500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "19500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1przkvlx2f8cxxg4mpj95layg9u8mlmywmv88l7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "677783402.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "677783402",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p9q6p4zmdlz74vglnf20q3arf8lpxf8czhmtkz",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "59210766.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "59210766",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p9hsmt9z6pt008v9rdfq5vv3pkqvnkrll0ahgp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "107000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "107000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p8s69zlv2xmtykv7y9eyp8f5hmd95ph853paxu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "46445744.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "46445744",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pfdr64xg3ak6mvx5g9cukpek57vr5mymjz85cp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "11091984.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "11091984",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pvp8emynjnkeamettmydn9s2q3fevgrvc9m5z0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1012050000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1012050000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pv8dv88w6cpjjanep0389lzen4r8xdgratlcpr",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pduj08yt5w8thfp50lcvwhffrahpfpj5e7cue8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "121105304.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "121105304",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p34krywk2xt67yz0ju4c5dzz5u6lurs074gxsm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "280339411.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "280339411",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pme8tquascj9t2kay0qxh42f688x5cmre20qzn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10039600517.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10039600517",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pa56a9fg5jhxrduru275vn2y7fpkxmx69s8jm3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4884519682.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4884519682",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pls6ps584ymly39fmudhge0q9m4jmdx2r5jrgn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1006609159.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1006609159",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1zpnfptuxfxsj3l77ghuh9hjntewzh0jgv6nq8w",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "342450986.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "342450986",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1z29j9acm70gs2ldrlre0fqlneaua2tz20skmvv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "153000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "153000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ztydpl2gges4u38rm7afs9rlmajk5sq6a3xpmk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "461000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "461000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ztgk3hcdl4vwxdqnmkkyzgxt0ud6yw7l73vysg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1z3dd7dhpgppnh3gls6us64wecypu2s4vcxt9d4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "7500908.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "7500908",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1znaj4lqyds2jsg9tpmwt59r0mxn85at40nzhe8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "64006.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "64006",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1za2uuu8w5h79rq78tvd9hj4gqyg9lsqm5fvqxg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1466999086.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1466999086",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ry3e3fvjn6e6276ym5kt8f0xr0padqtjmdghyj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1600618122.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1600618122",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rxwnxskx7w9jjecfzjve35juw3qxughsrgppu5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5193000055.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5193000055",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rggkyl94me53kkekqe8njlukdr8dqnfs2yudrv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "101000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "101000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1r0vf3l0yn57unvhz7wecyyu9vvtgyh3xrmztew",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "599583964.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "599583964",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rslwntv3eturuepj8svx33j2tawr0zj0jnk9cc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "122000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "122000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rnht2un7dhe9x0450tkd9uezs3ts43sltg3vse",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "28460786.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "28460786",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rkp99zqnf4tlme3a5rfwh6ljgyymcjlyqjepkk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5085000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5085000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rhgsg2qedccgwrpws524tagm4v7rlpdrl55zkg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "11000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "11000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rcv6x4e0pddxulx7525uf468ttk9pedmh74ffm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3282339578.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3282339578",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rc6zk2k0las34k4zn5msp4d48yuukg0jgvtccd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "614000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "614000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1r7sp8qf07jtj437tcz47jpthlqw3ffthlvdjjy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "569000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "569000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yp9qnmlhk5t5tghqq3hfq7j8h583wxcd02cuhj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "417650697.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "417650697",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yp542l3cwq8j0m9zkhcv8exrz2cp7l9q9lptg0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "59333871849.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "59333871849",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yyvdwarlwt4sz6qslzs5sx5jlzu6guaj8kntne",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1100000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1100000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yg8taewa9zr0huan0uskfc0xhafrywwrnwd5ak",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "108596167.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "108596167",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ysthp74n2wxt4flmzyxrhza8rvxzr9mcejk80x",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1009917388.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1009917388",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yn32acr8a3gnfshkftvmj35symffwywuvu2qdc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1088500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1088500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yclrw2qxzmyjxjry0fwusdurhkqgdag85334l2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "105460589.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "105460589",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ymwgg85shgthy4gsp7qf59jpf0pz4c3rmqlqvy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "578914369.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "578914369",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19qr4snrf00laf3k3w6f5p2za38lq5mymqjh30r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo198tu6srltcq85n05mtvfd0pxztfajs2ug2yst5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001200000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001200000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19g9flltdr2ahajrkefdqxc34h5uc532dna8p56",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo192lxclzf8lqd4u8dhpn8gcjpkvlwcj6ajedl5d",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5084000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5084000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo190afz896pj6c4wpk6tt93qt757vkjyvwj9dnax",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo193c97ha4a5t40fyyxq29dtpcqz4ddduanx9yxj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "23097802.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "23097802",
      },
    },
    {
      delegation: {
        delegator_address: "osmo194r7queh98l3x0gglua73kpx7d3dwyucneqtt8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19k707df99htdtcf3cmgmyxy54uafh0x8wfu4ps",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19uch0afju3c4uvxvlsd08xwjs5v3xxxvskkqkk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xpcl957yz4rvh2vwgn426lp6hqunqgq5gl88n4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1030400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1030400000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xzq3z62dvsrlkpmsw8ju4unh95sr7svz7pur7j",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "119928522.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "119928522",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x886j0sdzphknkn2j7tpvkph6sxcxrc7g2rxh8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "173730479.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "173730479",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xfldjl4afha988uaaqry96r364mhff2y3fk34w",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5082000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5082000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xvecfph28wxp8sqyvss5udmtfr37ppf0pvjmy5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x0esf3ex8lvpke6ej22ctszsng5njdpd5zkryr",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "412515975.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "412515975",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x3xqdgpcc075wpr2h6zpcywewjl8pjl6vzhha4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2599287481.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2599287481",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x3sfh304h4vfxtnachyh0wfqd9yxn2uwql53yj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5085000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5085000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xj5geh7cekcqlhqz8d5dvdssdzl3sf8kfw2ntj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xarnf65hj3g5ypzrp3z7edw5emxjkmk62sfvts",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18xfkdv9j6shecq0pjdwwpyk5f4encktmzvc82h",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "589905867.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "589905867",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18gd7nsv2qrx9rv8n0gh37l0x8qmwnrhat7vz0k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "6000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "6000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18gn8ga2fvd2v9mvdpxm98zmd7lctmegnpcz0q8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "502900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "502900000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18g7jfkn3ftmy79f7fy4qmxrg56t9m0v3hmdmua",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18t980er03tr8rzv24xswufqzldrf69t3jhssly",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "218907681.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "218907681",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18dp9dvrvawfmwuvqshsk36lmv23adlq0fv09h9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "168208816.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "168208816",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18de9s7zsvwczqndwtnt6kljwa94xecp4sa8y83",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "300401693.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "300401693",
      },
    },
    {
      delegation: {
        delegator_address: "osmo183fk2u38mt2yxqvt8axcgaumlrufjmmg8v22wa",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5090000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5090000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18nf84jgwkqypaplz45xyf3yegpu4vvhz4j2lnl",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2750489740.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2750489740",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18kvjxrrp935gss49xpuqkn285m64zs9v56q7n3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1092000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1092000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18crvw4qkw8ju6s9jqyw6w3wx5ghh3unvtpdlw7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2682436092.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2682436092",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18ank35aua8ftetpmvcsxwdqy4phelteeh4d02r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "351000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "351000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1g26dnrc6snu2lccm5rhglveks39ujfz2fgty66",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "101448920.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "101448920",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gwh42aqnppx7d8lxuhkafh86ew6f0wrjjgptld",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "229000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "229000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gn6w54uge5drhx0gskdgva4372d8guxhf4t46e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "30000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "30000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1g4026u8h7z3xc39r9uu9unuf26m77xdc0rjju3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "137482077.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "137482077",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gu6dyquykt6hwx90hxctnq7v28vf3eap2l6su2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "180000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "180000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1glsn2ly7cgku5qgxt9aaepfydq9xlsaa96gc9m",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "420350000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "420350000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1fqydaajtycl55hvazm7um3jj9evm5qawn6shps",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1frdg5m52d9vmnrm5e9n99zyp9qzq3l8u2hr4qs",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ffe8yjw4tqf6lqwmv58adm52q2dzyt2ppkgud5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5147000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5147000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1fsacnsrdljx3ulcd82amand8knt3kn25gcg8pr",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1f44qd2yw4f007dqddltptaqyqly9qs054uk6u3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "276307353.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "276307353",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1fuuuvgwsrrf3zy46azu22kzrskww9ftek4vzph",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "102800000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "102800000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo128w8qtnpchawwqraymhnvc0ygg6ecwure6heqt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1630000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1630000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12gruedvrv0h9r0zz87z5jg70xly0rthr2zqclf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1023635676.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1023635676",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12fl3cfeev4gxc045hv7jjwuygxuks7cvcf5rf0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "7999433.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "7999433",
      },
    },
    {
      delegation: {
        delegator_address: "osmo122xq6xe80jk5zkhul6zzh80n2k69yr2e326qtl",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12v736nuytn9rjl5dpqtfxzdg40vtlwqqgrfahd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1024005229.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1024005229",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12dz0vh9gk50wsjc7jvefs7l8fafraalcctyhk4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1023961168.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1023961168",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12dmhexy2lm8rsdsl0yclyjpuep6q2w5p43eyau",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5085000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5085000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12w932cswf7lp9q2lfmwz2nuhjy4uawqwuhjj6h",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1350000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1350000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12wsz2r6kfmn9j0wc40x3z7d3aqxkn0dl732p2t",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2400000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo120s8u8s6v2we2qvddjjx2du74fe2ln8qasexy2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12e6uk8wxal4af8ng9apfs97ytxyddremaw4gx5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5091000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5091000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12el8k6fz3n80mv2czz6apdxplsnpxznagtsgc4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "859590585.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "859590585",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tqyexpqefuzypkmvweyfggx6nd9wv62ehdezmp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4900000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tzgr3pyhtpzuw2he9hf2a64xtmcntq608cgflw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "110000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "110000000",
      },
    },
    {
      delegation: {
        delegator_address:
          "osmo1trpqkzdzprkregdez3xs5mf9w3me76gyu83dnhc2fjxuy9g70unqs5v62q",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10066530415.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10066530415",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tyu6854q0vlsqpmvaasr9043cwfrtmu4n76859",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1t9qy3tz704mschxd7ne28k37lygpttkw24u063",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "358307598.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "358307598",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1t9dje4dfeu3af5rc2yxsvyeu5td0a2v6g6zawv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "12000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tgyqvzknt3l0qv6p98guu859mv8htpz622zvws",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1t2vtt4qzhcgg04czu327vaxz0v5drg2wckdtg8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1001684368.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1001684368",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ttyy7fz35e8m83ypdujvlhrr39h2eesy8xfjp8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1041859457.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1041859457",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ts2d2her66jjxmuj4klksmdvq4l3res5sj0kx4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "248000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "248000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tscpg9f9gxfazg0eq4zztx4hgst5uz2u85ngk9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tkn55j239wfzcaqzff0dk00g3x8c7lnhdcmwlw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "303050376.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "303050376",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1th70a0kldrx9z7mchynthshr5rtxnru9eg2ds2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1089900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1089900000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1t62c9n4ctdawhespk9042za7t73lwzxmzdawqk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tad96jc4608praayujdw957szd9krjg3r03d04",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5083000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5083000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vpjruh4nrczquguhqw9s4cc0pn69mw292lwcjh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1730101495.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1730101495",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1v8fwk5d36pr0zruc5p8fr872jauvgcupa6rqum",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vgggf4a2twgvzapxgv665j4xeeyatwzk8ryfwk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "154000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "154000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vvtwhcksz2ewm75ynfp2vxkaswp6q3zdrjdut6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vkngvnelw4tgahyn20sr0kvk9jq8wrfe0hcalf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "635758226.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "635758226",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dzz0hlf8uznvxwmgdd4su4euk8tmpys2cx2uw2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "20343000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "20343000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dzrd7jl72hq5n20l8vyr3sy8er3j93kul6tq20",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dyr59r2r7ecfn80668rstm9j9mv85xdtdv7tm9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "20000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "20000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1d93ggvd6t3qnna3w280ax9g6j9jzr69e4hjy9e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "309000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "309000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dxwkz5gd6ygfmthalupst7vkgcp0ehg2cwz8uy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1088500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1088500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1d076ek2e7m24jskmlgamv7kut7df892t7tuge0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1d3ds5wtlgjh800c9lka68puxpey3x2dehglqag",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2126600000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2126600000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1de88sp2h3955ktrjgnm0jkhy8dttsgdzagnxs0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4233759694.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4233759694",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1duls39pg7uqze7vpz65n22re72nycvmr38246u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "14416006965.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "14416006965",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wqjagmsh5tyv4eztpypqgklyq23aepxfg3kn4e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3096494037.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3096494037",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wxv8jnx4tnr5rr5uwnx05g3s74tcpzajfpts3n",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1142831365.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1142831365",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wxhgzdwmek4duaevg2zwzguev8tnm4nctj4ast",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "700123981.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "700123981",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wgdegtthkx0n5fmyt2l2xn9jchywffac738e4z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "12077766287.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12077766287",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wdnc6mfpcfs8md2cvm3gyfdzw8v3mcx8cmj6se",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1634926562.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1634926562",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wjt0p3m62rrpugxug4szqgj4v5d3l8llfpns9a",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1523629267.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1523629267",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wl3xq2ktgeu0xxyf27axqvnpufft6vjzfymk90",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2054000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2054000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10pjj5ye6spe7vgqcph2exm2pcx4m5gv96kafkt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "224500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "224500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10guvn4243qg2l8ey8gy9zwttz6v23232s7pv5u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "32509000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "32509000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1067hlq4yd4yls7zahffnq573xw9a3jcxjvyyms",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10u7mu6yygadq4ak27wqgsexhjx0dstjrc3m4ht",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2042500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2042500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sp32p0rr0rg89hjv40vksdwwquag60yffwnsz9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2000100000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2000100000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sdf4z2y8rjekmtsgsy7zy56f4yhg33huuanmk4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sj5zyq6pple07fsjfghy80wc0s38chrxnlr4e6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1005939921.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1005939921",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sk9urdv9x8zttkz2r9ysfl3dnlapv0ugd9ftp8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1shgmg4zeksmf4pkf06dlx4wt6vp44f0my9n527",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1s63zncrcargfau4xfmrpvzyn0hndg2n7m8rz8e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1442000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1442000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sltq5xnhhh02zelpphpkqqfy48w7rg47k7d9rs",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1555500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1555500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13zzlsjnauafxz764nvj6mgagrkt5vke3cflpxw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "533993898.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "533993898",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13tddgrjnl30n46736e0pjrj8280rzsrgvv478r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "263900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "263900000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13kx5ldwmphx6m00mxa3azdxu8rhmwe378r9nhw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13hapz35dfzuf9ult9vw7qdsag83r99qz9q7cw3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "7804870234.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "7804870234",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13cvpryh3pvrjv00dlfsuzmzwytjd09gfff0a0j",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "106500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "106500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo136fhkg5l592vvvncd5e604upsd9qkzwmvka55r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "68297426.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "68297426",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13uyv2mzgrc4r0c8aslsvkfy7dcmgflq0krm7d3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "203500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "203500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13atdnhurhy87dycp9t442wgqej79esvhmxrjqc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo137tlv9g4dgm9jq9ucwcd5mpp7w4agtzutd62eq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10171828410.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10171828410",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jzw2yxmrmszhf288manm8fckql4979zyp8zwaq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "145940391.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "145940391",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jr0e4le4kr7ewtsvujrqzcyjqn9r026st528la",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2529894903.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2529894903",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jttdtq9ah54rawwtsapt225unp8fdpedg0v4lc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "659748911.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "659748911",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jtustv4ghy997d6catge3mgklszkvve66v5r7s",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1851300000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1851300000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jwcdyc7j0tjavkjn7628zq7dtzvc9fpv6wvzyd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "114300000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "114300000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jmhcs3ujhksycus65ncf2m0nglw379lnyx6twk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5084000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5084000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jazrl3rywt8v9zdk7075shd6qc7rwmn430mve7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ja9uell4cj7a564fzdm7w7733um2mhnvkg0cx9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1494814125.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1494814125",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jlu7fqmtfkd7wj3nz53ta7yj4xtvhf4khw0ky4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "174000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "174000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1nre3qg4qeytzuaj9v639newdzs8x4d09vpjm0m",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "300000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "300000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ngx7xxgfrnguwkrjyw3uecr95krl26spz7fatv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "115680000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "115680000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ngn9h6hglm69wm22jsvf9fmd9pv0x4pm07402u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "108221110.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "108221110",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ngms94pfxec8qvpc84pn0kecwz9x3xjy0xe22u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "11118361470.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "11118361470",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1nf5f04rk9t56pzdwve6rhe5gvneq6gvk3thek5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1024045245.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1024045245",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n2wwtmmkgmsyfqyekkg5qakmrtf4s6xhqxpzy2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "553500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "553500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1nvegcf23cru5v586m4zdqqr6msg9p6ldc5qy3x",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "111448885.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "111448885",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n3nk86e3xzv4flptpp8rvu6qrh5zrnr6g49ylt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4050000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4050000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1njfgqzasl8vsf4p6vh2p3pgs84cr806298t9xf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1nnh4thxglkdcp0h2kr7t53rqakrmlwvyq2jg5s",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "593395792.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "593395792",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1nneyqezp6ykcq5ha9xh3wde679dkxescgl0dya",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n5ycs4kv846zsku07xm29ltkyg2fs8xyhawncf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1100000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1100000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n5wwqjn24tu4e37xp9c5urwegk547ytcf528wy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n5jj462cvekx8z0syz8u2gmpf46g2csx895h33",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1026231848.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1026231848",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n4geujltm73xeqwznjyyeh8n3gz2hxjdegu3wv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1nee5p6sn7fx4w3usljz8quugmjxp7uemhvlxt2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "785723457.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "785723457",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n6adng2ngpsyhxm37v9nr6c2elflunzkhtuwfv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1088500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1088500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo15x84rgw68x6v42c7drsgwng0dzt8ylvfjpd84y",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "200369768.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "200369768",
      },
    },
    {
      delegation: {
        delegator_address: "osmo152l67q44deyj7t956f2swkjza5rznm2qpte2az",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "747831031.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "747831031",
      },
    },
    {
      delegation: {
        delegator_address: "osmo150navenu77udu6ndme5943ge3tua6583r7prwz",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "256500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "256500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo15scds0jq9crvvphgmnkxuvnycj64xj9l9k4nwh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "535949281.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "535949281",
      },
    },
    {
      delegation: {
        delegator_address: "osmo15j7g66x5y99d9kjs0zvkvejgyhpgfaeldf3czq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "363199008.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "363199008",
      },
    },
    {
      delegation: {
        delegator_address: "osmo14qc7f7nzae7kppwpxhymn54qwgx7tlcccde9f0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1985000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1985000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo14pqmwmkmktc4myk4qfaqypddr84u3g60m62ash",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5081000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5081000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo14r9q9ntn0zncx7gtkzarcasgfmvwh86q92hxnx",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "501000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "501000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1480j70ftswdfnc5uf50u7r4ksd5qgd42jj9wg2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1013526378.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1013526378",
      },
    },
    {
      delegation: {
        delegator_address: "osmo14328esrtv9hltfk23m5f72kvdekckmf6jkwfpw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "280494038.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "280494038",
      },
    },
    {
      delegation: {
        delegator_address: "osmo14ntctrlgjctes3pa82f0ry67ver5cvwjy8wxx4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5085000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5085000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo145hnlzs7xge77qmahfjevac0lzzvkwulrssy8u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4910000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4910000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1460x6xw5kgtyltgsxwezsw7yw9j2wgsdc53yxz",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "212411415.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "212411415",
      },
    },
    {
      delegation: {
        delegator_address: "osmo14md783p5t8c5mfjq2rrfrxz7g02p85jspurhpd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "129000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "129000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo14urmyd6fn962l0h6qnleqgzejf6zs3xsvpgcjv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1026473552.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1026473552",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1476qsc899206arz7s4g7uu7p73r2ue8udz3c8d",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "200000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "200000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1kq6e9zxg00zkezjwxl7u9685ud8pn87vrrdcja",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "332200000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "332200000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1kgu07r6lhpr0v3dww9a4rldfny5v6fyk43jnl3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "16110362803.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "16110362803",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1kvq4n4n4x3gqlyfr672pjyqn73c2hdkulpslag",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "20000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "20000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1kv8344qazq7lvvh3xsutnshf0lsutkhu0guj4a",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "100288150.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "100288150",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1k500mc4lva0a95fd2e06emh3thk2aff5vq2tkl",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1573513869.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1573513869",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1keqn6wegxwx6e3tyd9jmpmqpp9fgj3guc0rcgt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "267965674.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "267965674",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1kmqy9dtxn00qdh8mrrt5cnvkzhurt2vnf2wrvy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1hv4rlv94dwwsj3z7l6muye6ndmup0hta7a4v3p",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4060556898.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4060556898",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1hsh0kaj3uvxlv78j9kge5qgv5s8ds8f9p84l6e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "616584402.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "616584402",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1h3j0wrf9kmthsp8rsrm72wcfptcy3qw33aplg7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "25500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "25500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1h3l6dyvhg0zsh403q6v5c9xpne8ucl8j399d7q",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1hmhlm867zq2muaru2zq0u8t86mp2jpet9twr8w",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "192000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "192000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cqrky3t78np3a60kmdpylzyv594muagffwyf2x",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1024273380.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1024273380",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cqjp63tugraf4wksanzh3xzaap9upz42pxd7h4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cyzcp7ejhuluca2rj3ew2r2h34vppjt392u3dd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "182000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "182000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cxt9q4f43qhl7vnz73sqxnk65ux2lw9hc6k7aq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5083000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5083000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1c0k6p340st8egc7jcfndfm4jmly4na6ceq2f3u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1250000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1250000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cs0ysv4l5rk6h3tayrza4x9lphk8dpjvmez4yy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "101000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "101000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1c4skq47cqsyteg8kfjf6v3ehhza000ph7p5yxt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3936368100.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3936368100",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cc9n326mgu9qkmg7fvmel7ax6ncg6vgsmvy8wf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "541772971.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "541772971",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cclvds6qkapm7d6m8akag2z2kqgqct5gnzhd66",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "546600000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "546600000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1c7r92jcmdqc7sxqtac97uapj5ptjggm96d6ge6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1088000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1088000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1era3cnmp4hahctgqyhlc6evsj63ueahw39aze8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2300000646.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2300000646",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ege3jn6j509d7985jdefxtn7mcvngjp8ez8s66",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1631347951.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1631347951",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e0awhdyuzszse5xdde3nrwpg2jzhwu4f8ptz8j",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3193361786.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3193361786",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1esysgy90dkyk5kuhhl3mzv4wq55t3ks05wkylw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "290000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "290000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1es4gclnpjjlqppjvn5e4hknehm6sm4945h5hty",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "88510333.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "88510333",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e3ukvtjmrqhmwje70dhmqnvvt3tjpkrkcp7smh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "37622020936.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "37622020936",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e5jmcepmgr6wsmp4n3tlhmdcny2pw49cvvqydf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3128361000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3128361000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ec8gcke3uc8qavull6cm0wtf3dl08qdejjw8uj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1emqzfcz5hezpg3z6ueqkptadpyx5qfujqpn4g9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "675599383.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "675599383",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1eujlkkfsyjf28ey9vce3yp0s0mdd0l94y9s3le",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e70us402l65vea04df9dxhaagph5gkcp6c5vwr",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "157720000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "157720000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e7hqwdqjtr428ynukkmfx524v24mgqznyqk7d8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1035000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1035000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1el8vjd3j7rwt5dr76hqkneez69csul50fehhgp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5071000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5071000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16yzm6qjjheafnyvlcjxnkmhj3hullgplp8grxc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1024085367.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1024085367",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16yanaa9gfmdytghzz3c5ep4kgmzjw002zu3q33",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "103000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "103000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo169pkmuffdpwm8dfrefc2tcsvhyv74x8rq30gzx",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "541690180.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "541690180",
      },
    },
    {
      delegation: {
        delegator_address: "osmo162um8tckdsm90a7r3dp044akk9twfhvgj996z9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16tfjyefrgekf0l8zzccjy2c72nh2mscj2sgkxk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1023765257.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1023765257",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16vrpzr6hfqmmktqa9u2s0qm6qw0sd6pacyjdl3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "162967767.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "162967767",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16jk3xk8y96xfwhu3z2u8jenn2shxm0u0jtnghc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "291302695.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "291302695",
      },
    },
    {
      delegation: {
        delegator_address: "osmo165nqrnqep5e487wzgmydw7fjz6haq4v3x3x9ca",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2058000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2058000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16ukp2nyns63r9kj3sucpxf3szqmteu03tpzetj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5082000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5082000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16a52udff9qu2u3ue26aecp6vy9pfnj5gjzcp3e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "20000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "20000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mfnw9skcj7crespne7fp30ljhy2cxhzva50qyq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5041000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5041000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1m20wyugxnse56q2lfmm9txyk2fx39s6fx5sx8f",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "700000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "700000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mwmapvdzrc9hezq8r8lfmpzqu4zmsj2yjxq397",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1121814317.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1121814317",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mjnpe7g82p2yztq9y6n6lyn0jhpy56vwwuqmux",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "236000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "236000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mk4r7gngs4pw3vgnp4stllyfs22jnesl56d5ke",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mkk7xd9tll96rt2j8e8tamggu5agzwq7wyarp9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3700000032.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3700000032",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mcd2e8dg88jn0ede67q25c9m062dmqwnh02dk9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "79825584.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "79825584",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mud3fuxt5zw4kfysd9gjrn6fjj5rz9g6m9fx9k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "18271000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "18271000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1m7k766qj4lx70jm0kx787r0ffnxtrghh3yml5e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "110000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "110000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mlngv32gknshsrny2f8cw52r552836se3qrcfk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1011419250.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1011419250",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1u96uszryc79d4vppl3sy2e9ha9h8cc7fsvh4cp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5081000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5081000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1u28uvarg9j5hxhhrsy8uuagvfe9qm5t3cv074k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "80000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "80000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1u36qa4gluu2drp89jj0978c2g7d9j607ldv4vm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "563140139.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "563140139",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ujepumwuauf5dv4jjc686f6xj4u29rtpk5xrjs",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "638093742.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "638093742",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ukv0u57kpgjc8ft7hk842dr8gxryjftyh0w25w",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "11000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "11000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1uce35h46uzq8jdaxmg44lktjtu2euehrknvy8q",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "178725508.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "178725508",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ayy0y3lex3wkhcp7y5y6s439nv3k78egrujyw0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1269200000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1269200000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a9u8yv5v0wu5atynlh33hm04l67y9e6x2px6gn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ag5cgyzgk2xzyrw3xkxk7rjz4lxwssgn7p6d7p",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1afk79j2s90uq96wd9z6evyyc460fe0sxr7fdqg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2200000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2200000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a2l3cfqllu9qs6437mqkq59ygfx378p9sk480q",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1041000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1041000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a088qecv94m3duxfgjfeqz45yanun0ge5r76ec",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a3858f250ve4t6rp9ef2svpr7sj20aaxgy8dyu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "637305404.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "637305404",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a59ss427zm593lkm48p5f6jav6hwz65jmu5fjj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "91000002.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "91000002",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1amcqvw3j6anwdhg49xuerj5eyh6pkpuvt8jhq3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "190000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "190000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17q587uzc50qjvegc4zq4qkqxgjqypd46q9t30z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2800000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2800000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17yf8hsgezzhtl58gp3sqe7dcsj2wpqtzexqrka",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "11111000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "11111000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo179qawzj2ncf9uknfjw6z3zxpvc33cylqemy678",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5081000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5081000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo178n4m7j5hlu5evjqpyg773zje2dra5rhzr74mz",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "561019431.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "561019431",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17t908frmwcuqd83nsx3ydsxx6gfy6dzlrsdygy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "676303.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "676303",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17vyhq832pysqskh70288lsm5ndv0xz3m4yuaer",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "8466508.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "8466508",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17dndad55zly50aj8lzzklxusevdz0r0gvzqkrc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2049000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2049000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17hr0kwjgklazhufht4sdpllmvm6047wdupdds7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1482303449.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1482303449",
      },
    },
    {
      delegation: {
        delegator_address: "osmo176csrl54fys3cd0gmhkpmwns2gtngfca8kssu9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo177n4ptnw3utwjlrk8n28t4zf00afm379qrkkks",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3397902970.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3397902970",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lr05m9s3plgnp64jvzfa70qnxf3l7z454hh795",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2050000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2050000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lxtwpxd3veex3f4w99zhj7f9u4jl75qaf6sd8m",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5081000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5081000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lx0my7kk7uy75y68r602ga62l7n8cwawqhglt6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2780739026.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2780739026",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ldg6m46nw06gntnnxq6llju42ffw0cn94rwnwq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "262500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "262500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1l3dr30jzea6rac93eea34urypdgumref7sh2j6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5091000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5091000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lerh07fgshw98r3w3drvkjcykpp54p62grylzn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "120000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "120000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1led37kx2jrjjn9mxvtukngwk3cmpauzurcakrw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "379873308.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "379873308",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lmxrexaxuc7ealq4wqdgzrczajhhrenrhgl9q6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lul42lw2p4mv2mlte89cf4qnfg2jfduuy7lnuf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "54902064764.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "54902064764",
      },
    },
  ];

  const txs1 = [
    {
      delegation: {
        delegator_address: "osmo1qqpc3udj2uxzvpzvt283w20n39hskq7pw2jfwx",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1104000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1104000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qqlw32u0c32g7nelttmj03q3lgwcdfn8pkt5e7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qrqu4g25un2ceu0tykv0h9us3kg2wud6c2c9c5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "227155253.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "227155253",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qgu227rkd8qwq92mdr0l0cp4e5n6y4yrnxas32",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "268000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "268000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qfl9rqp6gg2k0ey648wlq36fd6d0xh3xmvsv3x",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5081000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5081000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1q2833t82zthataz0v6zracejyu7xfqh7a898wl",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "195128627.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "195128627",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6nzts2lq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "35329100000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "35329100000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1q0mzc997kps2w60uuv5vpmh5jqk4arrnnywra3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "242000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "242000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qjxfq62d2wt3s3elra9v9zqxtjztk0qrptj8u3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1446108000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1446108000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qhkzptmhwt78jpzx34hpljz6megz0gtjr6tn0j",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3476980000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3476980000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qc0qad7w57zlr3zmzjmq776hxe9nw3fnu269lw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "301300000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "301300000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qe6q4wwjzse3rkv07czlevhngxn56sus4q96ya",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "11735473167.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "11735473167",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qm0q9ec5ylrgz2sz78j53xnrfcsse74av2j62z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2925238825.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2925238825",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qur9grvh29plr6pcyzl8rav7j95xghtlujxgzu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1050000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1050000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1quun3k4usk4gyad8drug4j9rmsmng30ak2juys",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "500000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "500000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1q7x0hxpcjasvtv0cn7h0tqf47fp06ct22cuv50",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "19500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "19500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1q7vw7h2c5gg0lw2u3xsqxgvwf8kf945tkwv0g8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2004000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2004000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1przkvlx2f8cxxg4mpj95layg9u8mlmywmv88l7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "677783402.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "677783402",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p9q6p4zmdlz74vglnf20q3arf8lpxf8czhmtkz",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "60250766.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "60250766",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p9hsmt9z6pt008v9rdfq5vv3pkqvnkrll0ahgp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "107000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "107000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p8s69zlv2xmtykv7y9eyp8f5hmd95ph853paxu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "46445744.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "46445744",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pfdr64xg3ak6mvx5g9cukpek57vr5mymjz85cp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "11091984.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "11091984",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pvp8emynjnkeamettmydn9s2q3fevgrvc9m5z0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1012050000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1012050000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pv8dv88w6cpjjanep0389lzen4r8xdgratlcpr",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pduj08yt5w8thfp50lcvwhffrahpfpj5e7cue8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "121105304.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "121105304",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pwnnwahl2t4udk56mtlme3z88vcz696d8qvalx",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "355223080.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "355223080",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p34krywk2xt67yz0ju4c5dzz5u6lurs074gxsm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "281439411.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "281439411",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pjjhccuwtkky7fc9y8yuc3qf4l2lefshwcpvkj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2268884369.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2268884369",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pnc97f6vyvgagq7za0u62ln48akk2nxm0gweeu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1029262763.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1029262763",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p5esmskdq2vsh4yn5xxul2m3gkg3pmarhl46p9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1033921058.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1033921058",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p5e65khv540a2v7747nfktgxe5u78eelsrxe0k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1035000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1035000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ph402ry55q8ravgl2a9z4zctvrcmz00vdft0hf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "164110341.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "164110341",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pe8e0wd4cs2fj6lzt6u9ek3503qpmkm38zaw4l",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "306260000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "306260000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1p69wkfuxavnxwkdh27c5uxvx70m3j3j2ngnknu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "559140954.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "559140954",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pme8tquascj9t2kay0qxh42f688x5cmre20qzn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10064600517.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10064600517",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pa56a9fg5jhxrduru275vn2y7fpkxmx69s8jm3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4904033982.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4904033982",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pls6ps584ymly39fmudhge0q9m4jmdx2r5jrgn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1060773592.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1060773592",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1plu2t2yxqww2s3c5xm5t5xzvylttj3ggn4dnk2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1zpnfptuxfxsj3l77ghuh9hjntewzh0jgv6nq8w",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "622150986.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "622150986",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1zrp5twm964c890qatcgxz3ml5kszjgajw7lhwz",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1600000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1600000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1zg7pg9ndzhu75qk3rl7y6q622t904rm2mp27aa",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1z29j9acm70gs2ldrlre0fqlneaua2tz20skmvv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "153000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "153000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ztydpl2gges4u38rm7afs9rlmajk5sq6a3xpmk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "461000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "461000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ztgk3hcdl4vwxdqnmkkyzgxt0ud6yw7l73vysg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1zv2au307gg6uc2028p3rvqdt7kfr2h343le6pk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1526822619.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1526822619",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1zwmwfxzwvvrjgyw8kw0ge6a9ea8cx587l6qyjk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "306697600.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "306697600",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1z38jg3lcs72m6njpq44dydrl6sq40awqc44wrz",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "101440532.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "101440532",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1z3dd7dhpgppnh3gls6us64wecypu2s4vcxt9d4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "7500908.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "7500908",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1zj2vpvjp2cr2950r350zp67py5wsnn6ez5s8d4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1znaj4lqyds2jsg9tpmwt59r0mxn85at40nzhe8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "64006.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "64006",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1z5lz2upl0hfq7hrcng5l4lu2zhk9l0j4rtlt2q",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1700000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1700000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1zmsrtemy9tde35rlxzd855626welrqmhtpn56y",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850495000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850495000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1za2uuu8w5h79rq78tvd9hj4gqyg9lsqm5fvqxg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2027688188.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2027688188",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ry3e3fvjn6e6276ym5kt8f0xr0padqtjmdghyj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1600618122.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1600618122",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rxwnxskx7w9jjecfzjve35juw3qxughsrgppu5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "6660000055.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "6660000055",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1r8ttshkn7rvz9st0knwzksakrucx2ufxksymg7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "122034338.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "122034338",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rggkyl94me53kkekqe8njlukdr8dqnfs2yudrv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "101000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "101000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1r2aslrtp8x0ffl83ty5z56mnqtlgj92a06xnk7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "201000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "201000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1r0vf3l0yn57unvhz7wecyyu9vvtgyh3xrmztew",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "599583964.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "599583964",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rslwntv3eturuepj8svx33j2tawr0zj0jnk9cc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "122000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "122000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rnht2un7dhe9x0450tkd9uezs3ts43sltg3vse",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "28460786.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "28460786",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rkp99zqnf4tlme3a5rfwh6ljgyymcjlyqjepkk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5085000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5085000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rk8f8ye8rjl43aktg8g2m3u36vp2kmwha7yetq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "772255358.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "772255358",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rhgsg2qedccgwrpws524tagm4v7rlpdrl55zkg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "11000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "11000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rcv6x4e0pddxulx7525uf468ttk9pedmh74ffm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3294979017.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3294979017",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1rc6zk2k0las34k4zn5msp4d48yuukg0jgvtccd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2514000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2514000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1r6knf70m2dlfljh9aqk87ldwvxshajj3n8xy53",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2076159748.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2076159748",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1r7sp8qf07jtj437tcz47jpthlqw3ffthlvdjjy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "575500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "575500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yp9qnmlhk5t5tghqq3hfq7j8h583wxcd02cuhj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "421650697.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "421650697",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yp542l3cwq8j0m9zkhcv8exrz2cp7l9q9lptg0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "559333871849.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "559333871849",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yyvdwarlwt4sz6qslzs5sx5jlzu6guaj8kntne",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1100000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1100000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ygx9nmd2fqdyxqm4f5s38elx4l4ftzg0xs33ds",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "103177020.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "103177020",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yg8taewa9zr0huan0uskfc0xhafrywwrnwd5ak",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "108596167.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "108596167",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ygs9jd60jj3dcjnj0rts09pk5w4er5cw2yujnc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "121480384.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "121480384",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ysq5uaxz46zq8hwtmpmnrulcc3yzagwtc898ze",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1180000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1180000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ysthp74n2wxt4flmzyxrhza8rvxzr9mcejk80x",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1013988167.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1013988167",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1y3p6n9lry5ywmy62an8t2dcyst4fa33f3rgtqj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ynyd20u2nu2nx7v8a83m9taqrse9jhx6jxvtx9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1142853147.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1142853147",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yn32acr8a3gnfshkftvmj35symffwywuvu2qdc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1088500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1088500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ykqpluuf7mxrsfxc66pw9044eacwq6uas569lp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "600000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "600000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yclrw2qxzmyjxjry0fwusdurhkqgdag85334l2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "105460589.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "105460589",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1y6q4rqaq07qsvspwlr73caxku5fyw23pfvgk4u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1955552918.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1955552918",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1y6xcaft5v7996wpqk0n2ur9zdj0c4cxsvuulh6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "142158622.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "142158622",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1y6av8ltc87nk8e6h6qp70zuyk3vg5fkt8cta43",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "654595625.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "654595625",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ymwgg85shgthy4gsp7qf59jpf0pz4c3rmqlqvy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "578914369.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "578914369",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yld7rslk3432vrt83u073nc78lmvpzkrfgtdma",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "132050000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "132050000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19qr4snrf00laf3k3w6f5p2za38lq5mymqjh30r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo198tu6srltcq85n05mtvfd0pxztfajs2ug2yst5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001200000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001200000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1986l8p29pefqnz78v2jher8669cdzzylkeah40",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "147429464.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "147429464",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19gqhtd3zexuqtn86tg0pfesqjaa50x39rcja2x",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2161600000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2161600000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19g9flltdr2ahajrkefdqxc34h5uc532dna8p56",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo192lxclzf8lqd4u8dhpn8gcjpkvlwcj6ajedl5d",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5084000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5084000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19tvj9de94rqjd4mvj3zhm6t357my99qg7r03x8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19tw3zrukv7d5wxf82sxs9aq0qh4aekfpz9jmv3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19dej9nex9sj3424eernwjs83pw75rt3kv0cm99",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "153000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "153000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19wheec06zqlpk87vtxh3dd9c72v7uf9s8cq40q",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "23949715749.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "23949715749",
      },
    },
    {
      delegation: {
        delegator_address: "osmo190afz896pj6c4wpk6tt93qt757vkjyvwj9dnax",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo193c97ha4a5t40fyyxq29dtpcqz4ddduanx9yxj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "23097802.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "23097802",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19jhlpyjx3p4kqh347323azjuhnnew95rfxm42k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "175395020.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "175395020",
      },
    },
    {
      delegation: {
        delegator_address: "osmo195ddquuyrlfvc6z5wzpqpp5vx50gyarrvrlt8p",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1525236027.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1525236027",
      },
    },
    {
      delegation: {
        delegator_address: "osmo194r7queh98l3x0gglua73kpx7d3dwyucneqtt8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1949rhj0kn0q9tz02720dgpxx8lz3l9ywj3xc6r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "168980404.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "168980404",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19k707df99htdtcf3cmgmyxy54uafh0x8wfu4ps",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19h5jagvx6nkjwfu4r47gn2upnysl7kjnm2ms6t",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850245000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850245000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19c7qkjrazkz753tvqk8r6sqn80pu6nupp4j80d",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "544645191.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "544645191",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19m32annwp29998d76pk4msvwkjh6c3p4klkn7e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "105650000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "105650000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo19uch0afju3c4uvxvlsd08xwjs5v3xxxvskkqkk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xqaw4rer0862l8qxsrlx8tt4pux0r7622hfc0d",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "57257095.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "57257095",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xpcl957yz4rvh2vwgn426lp6hqunqgq5gl88n4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1030400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1030400000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xzq3z62dvsrlkpmsw8ju4unh95sr7svz7pur7j",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "119928522.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "119928522",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x9palzvrkk442cz67642dpr0gx8n5klntj0g95",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2783205857.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2783205857",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x886j0sdzphknkn2j7tpvkph6sxcxrc7g2rxh8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "174736510.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "174736510",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xftra46tnjp8f2ys4f0tswu92alzd8xufhlf9n",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "107500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "107500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xfldjl4afha988uaaqry96r364mhff2y3fk34w",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5082000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5082000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x2hj089n9e977xcgcesut9tsahly3a8c2uagcg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2040000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2040000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xvecfph28wxp8sqyvss5udmtfr37ppf0pvjmy5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xdfa534gu4pv8zqzcrkdk50729s26c6h3chepg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "655948093.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "655948093",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x0esf3ex8lvpke6ej22ctszsng5njdpd5zkryr",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "418348889.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "418348889",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xsvm6ta76z77ydws4d0dcrrcm3syhf5fhwfheq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1037561267.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1037561267",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x3xqdgpcc075wpr2h6zpcywewjl8pjl6vzhha4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2599287481.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2599287481",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x3sfh304h4vfxtnachyh0wfqd9yxn2uwql53yj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5085000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5085000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1x3ng69njky7lhqyxdzdx8yt7wfet8s4638ptmm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2480000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2480000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xj5geh7cekcqlhqz8d5dvdssdzl3sf8kfw2ntj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xnyw2wgzjjmzux6rvjn0pvp7am5zmlaqa8kwt3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "142926833.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "142926833",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xarnf65hj3g5ypzrp3z7edw5emxjkmk62sfvts",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18pufarkjcntaw0y8wtr5dar5cxhlaud9xhcxw2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "604800000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "604800000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18xfkdv9j6shecq0pjdwwpyk5f4encktmzvc82h",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "596786052.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "596786052",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18gd7nsv2qrx9rv8n0gh37l0x8qmwnrhat7vz0k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "6000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "6000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18gn8ga2fvd2v9mvdpxm98zmd7lctmegnpcz0q8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1540400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1540400000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18gcjgqkzxwatrnrhhykcr8k7emjcwjauxns7un",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "6058625985.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "6058625985",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18g7jfkn3ftmy79f7fy4qmxrg56t9m0v3hmdmua",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18fltum8llunux5lyqrcr9l37def82cpznc0d64",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "608701531.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "608701531",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18t980er03tr8rzv24xswufqzldrf69t3jhssly",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "218907681.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "218907681",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18dp9dvrvawfmwuvqshsk36lmv23adlq0fv09h9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "169209288.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "169209288",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18dcnk7s6ahh339rz233sevx0zelttsqt89avte",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850480000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850480000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18de9s7zsvwczqndwtnt6kljwa94xecp4sa8y83",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "300401693.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "300401693",
      },
    },
    {
      delegation: {
        delegator_address: "osmo183fk2u38mt2yxqvt8axcgaumlrufjmmg8v22wa",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5090000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5090000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18nf84jgwkqypaplz45xyf3yegpu4vvhz4j2lnl",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2750489740.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2750489740",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18kvjxrrp935gss49xpuqkn285m64zs9v56q7n3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1220300000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1220300000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18crvw4qkw8ju6s9jqyw6w3wx5ghh3unvtpdlw7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3446436092.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3446436092",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18ank35aua8ftetpmvcsxwdqy4phelteeh4d02r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "351000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "351000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo187sl6w2tqajqlefda9ntl7h2985yjnuuvw2xqt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "351500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "351500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gqcsp5u2j3uew074en3jv8ekcn9y0xsswrk2w5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "694603022.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "694603022",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ggc7e86k34h5kl4wnnt4yu8sx40v6cq35lfjlj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850470000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850470000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1g26dnrc6snu2lccm5rhglveks39ujfz2fgty66",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "101448920.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "101448920",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gwh42aqnppx7d8lxuhkafh86ew6f0wrjjgptld",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "231000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "231000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gn6w54uge5drhx0gskdgva4372d8guxhf4t46e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1g4ppjknr54sxx8s2swfhcskckkg4vm3up9ux4k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "359787684.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "359787684",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1g4026u8h7z3xc39r9uu9unuf26m77xdc0rjju3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "137482077.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "137482077",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gcc4xgcwxga4msrz40rufhrukaah22wmg2ktlc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "102200000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "102200000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gmug9pdss6hwjjh992d8r90q87h05k27jz0z3z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "405900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "405900000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gu6dyquykt6hwx90hxctnq7v28vf3eap2l6su2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "180000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "180000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1glsn2ly7cgku5qgxt9aaepfydq9xlsaa96gc9m",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "424850000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "424850000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1fqydaajtycl55hvazm7um3jj9evm5qawn6shps",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1fqs3j0ern6f9plms4cv329a4w5uwtsccmzps8n",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "160000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "160000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1frdg5m52d9vmnrm5e9n99zyp9qzq3l8u2hr4qs",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1f9prqtau9dcxqzudmgqrzr8kxhddhaxwl4xlnm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "106548830.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "106548830",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ffw7zc4r3rah62k42m6stanj5e49deaqpme8gk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ffe8yjw4tqf6lqwmv58adm52q2dzyt2ppkgud5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5237000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5237000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1fvepcut3kj6jxc54gts0zt4fp5fy97j3lk5cns",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "101462997.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "101462997",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1f0ae68z7ekzed2q2e2vx5nfdxw2jrkpylajkvm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1322128025.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1322128025",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1fsacnsrdljx3ulcd82amand8knt3kn25gcg8pr",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1fn2z86seu0xwj7vvgyvpyffav0p565jkrwutad",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "320000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "320000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1f44qd2yw4f007dqddltptaqyqly9qs054uk6u3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "276307353.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "276307353",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1fhcjl9tz3f8rafsgeryxnlwhyvfn4emvd3n4yh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "9140735874.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "9140735874",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1fuuuvgwsrrf3zy46azu22kzrskww9ftek4vzph",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "103170000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "103170000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo128w8qtnpchawwqraymhnvc0ygg6ecwure6heqt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1630000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1630000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12gruedvrv0h9r0zz87z5jg70xly0rthr2zqclf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1023635676.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1023635676",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12fl3cfeev4gxc045hv7jjwuygxuks7cvcf5rf0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "7999433.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "7999433",
      },
    },
    {
      delegation: {
        delegator_address: "osmo122xq6xe80jk5zkhul6zzh80n2k69yr2e326qtl",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12trcwfd0e82g6904ntgka7y72efjp82hxc5csg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "496226291.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "496226291",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12tdud9qmqzu0vhu5r7t0thvcmjtnx0j3rezlrs",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1024377826.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1024377826",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12v736nuytn9rjl5dpqtfxzdg40vtlwqqgrfahd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1028248361.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1028248361",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12dz0vh9gk50wsjc7jvefs7l8fafraalcctyhk4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1028344318.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1028344318",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12dmhexy2lm8rsdsl0yclyjpuep6q2w5p43eyau",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5085000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5085000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12w932cswf7lp9q2lfmwz2nuhjy4uawqwuhjj6h",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1350000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1350000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12wsz2r6kfmn9j0wc40x3z7d3aqxkn0dl732p2t",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2400000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo120s8u8s6v2we2qvddjjx2du74fe2ln8qasexy2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12j56a8qv6pq5zy80lcgqyv6ydmx9rdqehhtnd4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "500000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "500000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12e6uk8wxal4af8ng9apfs97ytxyddremaw4gx5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5091000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5091000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12el8k6fz3n80mv2czz6apdxplsnpxznagtsgc4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "859590585.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "859590585",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12m5s4t0q76w2kjrt7j56tyhr0389s768khrvly",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "110808567.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "110808567",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tqpheaqprdqk8az6eql4eulhzkdjmfuhkty7xq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2095000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2095000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tqyexpqefuzypkmvweyfggx6nd9wv62ehdezmp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4900000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tzgr3pyhtpzuw2he9hf2a64xtmcntq608cgflw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "110000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "110000000",
      },
    },
    {
      delegation: {
        delegator_address:
          "osmo1trpqkzdzprkregdez3xs5mf9w3me76gyu83dnhc2fjxuy9g70unqs5v62q",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "8245513171.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "8245513171",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tyu6854q0vlsqpmvaasr9043cwfrtmu4n76859",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1321000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1321000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1t9qy3tz704mschxd7ne28k37lygpttkw24u063",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "358307598.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "358307598",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1t9dje4dfeu3af5rc2yxsvyeu5td0a2v6g6zawv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "12000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tgyqvzknt3l0qv6p98guu859mv8htpz622zvws",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1036147495.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1036147495",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1t2vtt4qzhcgg04czu327vaxz0v5drg2wckdtg8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1001684368.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1001684368",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ttyy7fz35e8m83ypdujvlhrr39h2eesy8xfjp8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1041859457.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1041859457",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ts2d2her66jjxmuj4klksmdvq4l3res5sj0kx4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "248000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "248000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tscpg9f9gxfazg0eq4zztx4hgst5uz2u85ngk9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1t40rgwucyplzsxq5vusuam9kwwnzg3hh7cqssm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "333146488.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "333146488",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tkn55j239wfzcaqzff0dk00g3x8c7lnhdcmwlw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "304075675.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "304075675",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1th70a0kldrx9z7mchynthshr5rtxnru9eg2ds2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1089900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1089900000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1t62c9n4ctdawhespk9042za7t73lwzxmzdawqk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tm06t7fztvs7hxk3pan88r0xegazelvdd4cqfe",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "105548818.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "105548818",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tad96jc4608praayujdw957szd9krjg3r03d04",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5083000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5083000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vpjruh4nrczquguhqw9s4cc0pn69mw292lwcjh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1730101495.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1730101495",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vrds9xndfma377a6sguk9ehqxuylxnx8vwmn25",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "105600000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "105600000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vyruk9jpqsvjghar52xmnlprc6wptmzr8vgg2l",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "167121619.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "167121619",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1v8fwk5d36pr0zruc5p8fr872jauvgcupa6rqum",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vgggf4a2twgvzapxgv665j4xeeyatwzk8ryfwk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "154000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "154000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vvtwhcksz2ewm75ynfp2vxkaswp6q3zdrjdut6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vd3004eewf2cu66j2hz7qvdfj3pyera0zmrxep",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "423058705.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "423058705",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vwr4nwkhf03rpky5nz9c7ukff48xu6hsgcml7n",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "121577581.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "121577581",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1v4pmzgjvymfv2vwncdg00zfpa7ttu9ywnpe0f9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "55000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "55000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vkngvnelw4tgahyn20sr0kvk9jq8wrfe0hcalf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "637869807.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "637869807",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1vhpq7gmysjasngv28r0z3uxvy5s269jkured90",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "562021663.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "562021663",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dqtfsays94pktsj2dachaju37v2jxpjs3nga5a",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "366400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "366400000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dpudyhk8ak74s830z4ewgxdk504laufqxzpslc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1003503021.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1003503021",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dzz0hlf8uznvxwmgdd4su4euk8tmpys2cx2uw2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "20343000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "20343000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dzrd7jl72hq5n20l8vyr3sy8er3j93kul6tq20",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dzt25s57ww2g6q2q8nqhruvmah4vfx5q22rrrh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "105000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "105000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dyr59r2r7ecfn80668rstm9j9mv85xdtdv7tm9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "675300000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "675300000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dy78v47vxscxxs97lqcexyuzxwqggna0e7vcga",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "415614669.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "415614669",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1d999ka93mmuk5285k5k35c6g9x96m6cvectmn7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "164163737.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "164163737",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1d93ggvd6t3qnna3w280ax9g6j9jzr69e4hjy9e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "311000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "311000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dxwkz5gd6ygfmthalupst7vkgcp0ehg2cwz8uy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1088500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1088500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dv4vg6g0v9fzveglufx03a2fkd3k0pur5dl6xe",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "352247336.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "352247336",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dwmn29l4ww5lz0raegzgqjn0trp2xrdmjqs3kp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1d076ek2e7m24jskmlgamv7kut7df892t7tuge0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1d3ds5wtlgjh800c9lka68puxpey3x2dehglqag",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10685900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10685900000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dnj49scrz50wg3r7lwjezl642a8f5f6wkqtt0d",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "20100000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "20100000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dnnqxk5exffk75pg82trz5ueu08v34d0cn2wjg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "559868979.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "559868979",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dkeqd3v9r2aqvu44c3af9n0qm4lvjdeyxsd34d",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "6299778932.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "6299778932",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1de88sp2h3955ktrjgnm0jkhy8dttsgdzagnxs0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4233759694.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4233759694",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1duls39pg7uqze7vpz65n22re72nycvmr38246u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "14416006965.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "14416006965",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wqjagmsh5tyv4eztpypqgklyq23aepxfg3kn4e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3105545141.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3105545141",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1w9gcxhaxj8f0rjlkwwu36e7elj9aqmj3dadqpd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "500010000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "500010000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wxv8jnx4tnr5rr5uwnx05g3s74tcpzajfpts3n",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1150331607.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1150331607",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wxjp56q8nsxnlzehk7xeq549hcmhs0cskrnje0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "133270000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "133270000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wxhgzdwmek4duaevg2zwzguev8tnm4nctj4ast",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "700123981.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "700123981",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wg9mk36ggx7u6qfaatw5uwr9gdtztdmnjr8d5l",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "104600000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "104600000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wgdegtthkx0n5fmyt2l2xn9jchywffac738e4z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "12077766287.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12077766287",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wwmk2mn63l7cuypx3gzjs4ht7f0u5p8cg43xyn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "53551014.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "53551014",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wjt0p3m62rrpugxug4szqgj4v5d3l8llfpns9a",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1523629267.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1523629267",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wnfzsj6dmnwhk3g7qglw32989jm730ylndqupj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "200300000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "200300000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1w4dpmczjzttwvxzpt268j72huffe6dgmpzj6n9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2250257364.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2250257364",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1w6nxcdpwuswj7mh7dh02asxtqr0q2q4gyun7g8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "726134067.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "726134067",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wufdlvx84qkdlznll005a0f0czrzx2t5exdrfx",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850495000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850495000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wl3xq2ktgeu0xxyf27axqvnpufft6vjzfymk90",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2054000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2054000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10qrv69dmvw7rkxsjp5keggp0wjwskta5ny8syp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "142453611.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "142453611",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10pjj5ye6spe7vgqcph2exm2pcx4m5gv96kafkt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "224500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "224500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10p43mvh9hukrt4lh75rce390vqv9vp8r7844tj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1525349448.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1525349448",
      },
    },
    {
      delegation: {
        delegator_address: "osmo109yj0f9un9s7t6rg8snylv0uddpu69qy72jk27",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1233101988.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1233101988",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10gdnpv8n7h8zxr7pq2xf2hrlkpw35s8gs4kvaa",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "327646285.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "327646285",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10guvn4243qg2l8ey8gy9zwttz6v23232s7pv5u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "32509000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "32509000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10vyjpuljwfpd45mh6yhrezx7x6h238485xnnvg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo103k96n2zsjxel0a6er98luz6mprvtefk9x4hyk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "170000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "170000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo105h0ls8cl5wm0h7y2j6j6qpnu4vhzefy0x3tlr",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "250000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "250000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10hm8wmpkn7qhp4cd2d784r5t4lvnwy0s79xtzl",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1034783293.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1034783293",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1067hlq4yd4yls7zahffnq573xw9a3jcxjvyyms",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10mxudmq0ymwd86k3vtxj0zlv4u5rd2d7xet6h3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "521000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "521000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo10u7mu6yygadq4ak27wqgsexhjx0dstjrc3m4ht",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2042500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2042500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sp32p0rr0rg89hjv40vksdwwquag60yffwnsz9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2000100000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2000100000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sr603679vzkd896wveuay3aft82h0kqwwc0fcy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2328607484.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2328607484",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1s903uu4sqwrlyuutggylrl38thkt2s95x7s8h2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "166656776.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "166656776",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sxv3cq7nha8sl8mx5qq85hxtm4aycpzw0sfwwv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "800000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "800000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sg02g4hrgwdh5c6dyft6xfntpcs67kuhlaz80m",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1100000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1100000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sdf4z2y8rjekmtsgsy7zy56f4yhg33huuanmk4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1swkpnruvzkrv7dm2psz4r5a6k6pvdxxyds2m4g",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "702010000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "702010000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ss9728e8xm5xvrvzurl7ln365hlyaud4pv54uu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "167124672.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "167124672",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sj5zyq6pple07fsjfghy80wc0s38chrxnlr4e6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1007939921.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1007939921",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1s4rw28ywn2a9w96qk8xyaeuqvhant2y0j0j4q5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "444000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "444000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sk9urdv9x8zttkz2r9ysfl3dnlapv0ugd9ftp8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1shgmg4zeksmf4pkf06dlx4wt6vp44f0my9n527",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1s685wh6f53e29zd3e77yw0z4spd2zrvftm2ftu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "140909075.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "140909075",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1s62urg5e67u0ygz9pqsfe56f9n6xg9456jxhun",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "218958270.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "218958270",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1s63zncrcargfau4xfmrpvzyn0hndg2n7m8rz8e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1442000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1442000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1su0p2tyhph4hv6ud22c057rz3f8gfvrselgpyw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "139295746.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "139295746",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sacanvpapnxj2h7xs2jzzg2ypv7qh6rf97vwqh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "673902066.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "673902066",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sl88223whcq7wxzkxe3h0wj70httklgkqxff09",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1525330013.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1525330013",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sltq5xnhhh02zelpphpkqqfy48w7rg47k7d9rs",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1555500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1555500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13zzlsjnauafxz764nvj6mgagrkt5vke3cflpxw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "536049059.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "536049059",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13y9pz2s0yckrfzkazq4wkzp3dfa0dw502hex9d",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850490000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850490000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo139hlyt3l36ftp7xm7rgz60kdmlhcn7wcsnkx4z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo138wcf8w6ppfhnxp7xms0zl3lq7j3x94jryq884",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13tddgrjnl30n46736e0pjrj8280rzsrgvv478r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "263900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "263900000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13vzrgd8x6ceznsnqy342d2qnekvaxfh75qj82r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1034683991.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1034683991",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1330m7nfyf82pv79cvg6fzxe0gdng4k4nvz68v5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "296200000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "296200000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13jxac6y5axj3naj66l5crkfjsz3ms5r2973736",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3706752008.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3706752008",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13kx5ldwmphx6m00mxa3azdxu8rhmwe378r9nhw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13hapz35dfzuf9ult9vw7qdsag83r99qz9q7cw3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "7835001163.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "7835001163",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13cvpryh3pvrjv00dlfsuzmzwytjd09gfff0a0j",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "106500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "106500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13ee0yyvm7qhqsvqe2qprk3me60zlr642kcwvwj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "438842961.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "438842961",
      },
    },
    {
      delegation: {
        delegator_address: "osmo136fhkg5l592vvvncd5e604upsd9qkzwmvka55r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "68297426.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "68297426",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13mgzkkqnvv4jw8gxl45hwcmmrsgjr0dlvdj7lr",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "54100000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "54100000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13uyv2mzgrc4r0c8aslsvkfy7dcmgflq0krm7d3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "203900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "203900000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13atdnhurhy87dycp9t442wgqej79esvhmxrjqc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo137tlv9g4dgm9jq9ucwcd5mpp7w4agtzutd62eq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "17494951081.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "17494951081",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jpu0a8dkzw5k3rggtlrgaparnpedar77fhjpk2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "509000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "509000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jzw2yxmrmszhf288manm8fckql4979zyp8zwaq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "145940391.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "145940391",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jry556e99k6dzqhpemajr4rc2kjg7ry6aq3mut",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "12087862.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12087862",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jr0e4le4kr7ewtsvujrqzcyjqn9r026st528la",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2529894903.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2529894903",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jr6dhz3873yy0kv475f67hfdyes65979ccgy49",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "710680661.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "710680661",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jttdtq9ah54rawwtsapt225unp8fdpedg0v4lc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "661835469.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "661835469",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jt0mnl2233u7na838pm7jpxjmu4sz3z5553evh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1hmhlm867zq2muaru2zq0u8t86mp2jpet9twr8w",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "192000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "192000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1hu5ugwjnttk2nw63pfe5l9547gdatklk6m3nm4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "13603350000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "13603350000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1h7wpe943s6tsvxun6ahnxkzshr7r0xaclfv4t8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "969449856.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "969449856",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cqrky3t78np3a60kmdpylzyv594muagffwyf2x",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1025073380.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1025073380",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cqjp63tugraf4wksanzh3xzaap9upz42pxd7h4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cqahcult0svc84t6dwlqkfn8jfn857dfmkndga",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "190842193.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "190842193",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cyzcp7ejhuluca2rj3ew2r2h34vppjt392u3dd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "182000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "182000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cyvgmfa394pvkm6jvwzm8lyx3vr00wqw0u5g9g",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "394300000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "394300000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1c92h8l2jn68pc56a4t76les0jvp93jf4dzucwt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4172101774.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4172101774",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cxt9q4f43qhl7vnz73sqxnk65ux2lw9hc6k7aq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5083000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5083000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cgdty3246mz7jatqkg36h2aeqwnwf2m6vv5fhx",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000010000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000010000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cdu9je4hm97yygcw89684sxptpsrrg7sq9rruc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1034161369.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1034161369",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1c0k6p340st8egc7jcfndfm4jmly4na6ceq2f3u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1250000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1250000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1csph2ml0vgz9vfr563znp6kqpfu75a604y6ldh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cs0ysv4l5rk6h3tayrza4x9lphk8dpjvmez4yy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "111000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "111000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cn2z25cm82ymeu60mcjcuvq90332qucqekk4mm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1547101147.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1547101147",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1c4skq47cqsyteg8kfjf6v3ehhza000ph7p5yxt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3936368100.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3936368100",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1chylwe0n6540u0pque8tje9257yp6ywqwrm7l3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "44000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "44000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ccy0709lrhjfu7cg7xtyvp009d70y3zxwr2yn0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1908670000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1908670000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cc9n326mgu9qkmg7fvmel7ax6ncg6vgsmvy8wf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "541772971.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "541772971",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cclvds6qkapm7d6m8akag2z2kqgqct5gnzhd66",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "548200000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "548200000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cay2udnvc6gxdll68rut62vns5ds76d0p0hjd0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "24000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "24000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1c7r92jcmdqc7sxqtac97uapj5ptjggm96d6ge6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1088000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1088000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1c7xwj5g9d98505cw0ehmha2e6sfrawjyuwe6xv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1065000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1065000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ep5837969j7sm4chu99kuuzgp8yksc5g8rvnzm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "36000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "36000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ezgrtr9xg5thqxst6chnfsa2w8p5sqe479cawt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "106500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "106500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1era3cnmp4hahctgqyhlc6evsj63ueahw39aze8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2300000646.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2300000646",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ege3jn6j509d7985jdefxtn7mcvngjp8ez8s66",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1749951516.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1749951516",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1efsj9hrsuhcu6lmamm544n7syfn58kd68d30k4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "11000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "11000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e2qur2pmzn5jtderg3p7hwck53ert72tv9uk2p",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "166676528.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "166676528",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ederrc8k69v6mrt44knxz3jh9xgarcwqxmj8xp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1525468810.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1525468810",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e0awhdyuzszse5xdde3nrwpg2jzhwu4f8ptz8j",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3206515383.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3206515383",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1esysgy90dkyk5kuhhl3mzv4wq55t3ks05wkylw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "290000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "290000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e30m8udhpkvfz6dyzwef97ax6yfn48y963e6dg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e3ukvtjmrqhmwje70dhmqnvvt3tjpkrkcp7smh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "37622020936.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "37622020936",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ejskt8erpgnpzymf2js47rtnfxramr5ag3klkv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e5jmcepmgr6wsmp4n3tlhmdcny2pw49cvvqydf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3133401000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3133401000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1eh6zuf745vp7yqk0dcet7fexexaty4xerg57c4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ec8gcke3uc8qavull6cm0wtf3dl08qdejjw8uj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1eefw4wh9xjdlc5fuuy26vz2xlp3cutfmjhuzm9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1600000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1600000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e6q4f22dacchpvhhujtcuqkvgnnsx9twqu8pwk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "427326443.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "427326443",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1emqzfcz5hezpg3z6ueqkptadpyx5qfujqpn4g9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "675599383.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "675599383",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1eujlkkfsyjf28ey9vce3yp0s0mdd0l94y9s3le",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10085000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10085000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ea7qldw3v8tz9jk2g5uxn5xwnfcvh9d9z5wq62",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850495000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850495000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e70us402l65vea04df9dxhaagph5gkcp6c5vwr",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "157720000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "157720000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e7hqwdqjtr428ynukkmfx524v24mgqznyqk7d8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1035000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1035000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1el8vjd3j7rwt5dr76hqkneez69csul50fehhgp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5071000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5071000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16zcx76g489ehz3vk4jvpn7wdmv9p07f0qxmvlg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "744000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "744000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16yzm6qjjheafnyvlcjxnkmhj3hullgplp8grxc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1028459223.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1028459223",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16y4xqz6d936c9agqmjc8reedttux25crxlyn3p",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "184295545.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "184295545",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16yanaa9gfmdytghzz3c5ep4kgmzjw002zu3q33",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "103000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "103000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo169pkmuffdpwm8dfrefc2tcsvhyv74x8rq30gzx",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "541690180.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "541690180",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16xvd0j4cgnkydxwyfuryrjtw24hqgc2kqhpx8k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1462500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1462500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo162um8tckdsm90a7r3dp044akk9twfhvgj996z9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16tfjyefrgekf0l8zzccjy2c72nh2mscj2sgkxk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1028238034.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1028238034",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16vrpzr6hfqmmktqa9u2s0qm6qw0sd6pacyjdl3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "162967767.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "162967767",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16varhe68wy4g0pf7kps3v4uvkeqg43g8rstgl0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "130280440.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "130280440",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16jk3xk8y96xfwhu3z2u8jenn2shxm0u0jtnghc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "294944255.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "294944255",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16n03drdk0at2cnfzuvdfspah254ey37fucmf3e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "105650000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "105650000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo165s3zw3vaytnjvfv390f9f876u79zv49f3h5r8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "500000971.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "500000971",
      },
    },
    {
      delegation: {
        delegator_address: "osmo165nqrnqep5e487wzgmydw7fjz6haq4v3x3x9ca",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2058000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2058000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16kx7z3s7axcsw8vyjdep09ffzujteulc0wre4q",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "7905000096.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "7905000096",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16ukp2nyns63r9kj3sucpxf3szqmteu03tpzetj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5082000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5082000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16a52udff9qu2u3ue26aecp6vy9pfnj5gjzcp3e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "20000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "20000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mpleg6x7spdn90sevxl3cwjrtqtasss5tv8twp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mgqy445jkky8vf55usrs9a0urc03sl46zp7jjg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mfnw9skcj7crespne7fp30ljhy2cxhzva50qyq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5041000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5041000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1m20wyugxnse56q2lfmm9txyk2fx39s6fx5sx8f",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "700000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "700000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mwmapvdzrc9hezq8r8lfmpzqu4zmsj2yjxq397",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1127120724.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1127120724",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mjnpe7g82p2yztq9y6n6lyn0jhpy56vwwuqmux",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "236000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "236000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mk4r7gngs4pw3vgnp4stllyfs22jnesl56d5ke",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mkk7xd9tll96rt2j8e8tamggu5agzwq7wyarp9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3711000032.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3711000032",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mhkuzfws4xgcpkq252nv22vtdk93j3xdzfya84",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "754000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "754000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mcd2e8dg88jn0ede67q25c9m062dmqwnh02dk9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "79825584.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "79825584",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mud3fuxt5zw4kfysd9gjrn6fjj5rz9g6m9fx9k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "18271000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "18271000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1m7k766qj4lx70jm0kx787r0ffnxtrghh3yml5e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "110000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "110000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mlngv32gknshsrny2f8cw52r552836se3qrcfk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1011419250.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1011419250",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1mluw658ctehwuqugnsg6vzmktsxknrnh4anmu6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1u96uszryc79d4vppl3sy2e9ha9h8cc7fsvh4cp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5081000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5081000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ugyrcngz6ghnudmu4ecm0gdhfaq2hup2plxxzd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3003000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3003000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1u28uvarg9j5hxhhrsy8uuagvfe9qm5t3cv074k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "80000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "80000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1utq7kkw8s86jckcxsw2km06cn4jegde56ju4pu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4138000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4138000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1uthj8wf9ts5a4p0durwccl4pj5jmwll4kru76s",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "106648818.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "106648818",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1udttcchkwdz7tm7030vhcjdpgs20vq8djedxf4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "137680259.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "137680259",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1uw6xa8dd5tttqj7xmpywx62ntpxgs677cqka9m",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1525363418.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1525363418",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1u36qa4gluu2drp89jj0978c2g7d9j607ldv4vm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "563140139.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "563140139",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ujepumwuauf5dv4jjc686f6xj4u29rtpk5xrjs",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "640190716.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "640190716",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1uk8urpp9s3nj9ld39wvffxhq0penumygfpupzt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ukv0u57kpgjc8ft7hk842dr8gxryjftyh0w25w",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "12000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1uhs5q3xsl6krx5xus3p5df60lqyurnsl33fcj0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "756400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "756400000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ucnzn86zszgjg8umz7ujzqvrcryxu46w5q7kfa",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "751000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "751000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1uce35h46uzq8jdaxmg44lktjtu2euehrknvy8q",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "178725508.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "178725508",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ue7qw7mu7mnu62fh7j94pvhhfq8tajutagdq4w",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "344928973.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "344928973",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1umdjr3j2lcm69ly4tgy80ecs9qdpylhu88j930",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "780067428.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "780067428",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1umlu2yf82hnhffc7urhq8znc9y9s85rc04sq8n",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "768400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "768400000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ap0wsf2nyfkhht0ymqv6rmsm0ylj7vqhy9puy4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1050000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1050000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ayy0y3lex3wkhcp7y5y6s439nv3k78egrujyw0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1269200000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1269200000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a9u8yv5v0wu5atynlh33hm04l67y9e6x2px6gn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3000000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ag5cgyzgk2xzyrw3xkxk7rjz4lxwssgn7p6d7p",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2001000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2001000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1af52kptwx7uhl774l7m95pv5r0q2fvxncr8jw2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "62878258.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "62878258",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1afk79j2s90uq96wd9z6evyyc460fe0sxr7fdqg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2200000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2200000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a2l3cfqllu9qs6437mqkq59ygfx378p9sk480q",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1041000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1041000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1at2aa07247avq2xuzeeswje5pxswr8a50ce7xz",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1040000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1040000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a088qecv94m3duxfgjfeqz45yanun0ge5r76ec",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a3858f250ve4t6rp9ef2svpr7sj20aaxgy8dyu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "639425543.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "639425543",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ajxlta2dhdqxfuyj78wvae9e3jhmpuxphmqa4g",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "850500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "850500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ajselrqcxpzwzmhhv5jvqmv6z2qzmg34zs2zvp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1525559164.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1525559164",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1an4jnulwqm9pv46qqsqdj63zhjq29vnwkcd2ep",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "97500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "97500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a59ss427zm593lkm48p5f6jav6hwz65jmu5fjj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "91000002.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "91000002",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ak4esahs6h2yjaslj5vnas9g2tg7xdf62kv5pt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "493788008.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "493788008",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1aec78y5kpyxhf28g642xm6vcql86gcpwjw6x2m",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "131000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "131000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1amcqvw3j6anwdhg49xuerj5eyh6pkpuvt8jhq3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "190000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "190000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17q587uzc50qjvegc4zq4qkqxgjqypd46q9t30z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2800000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2800000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17yf8hsgezzhtl58gp3sqe7dcsj2wpqtzexqrka",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "11936074954.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "11936074954",
      },
    },
    {
      delegation: {
        delegator_address: "osmo179qawzj2ncf9uknfjw6z3zxpvc33cylqemy678",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5081000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5081000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17xtyc4duvhrgnp57f75rl7rem4kyt4cycfwnld",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1111606240.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1111606240",
      },
    },
    {
      delegation: {
        delegator_address: "osmo178n4m7j5hlu5evjqpyg773zje2dra5rhzr74mz",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "561019431.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "561019431",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17fskx42xz5wze8mqssu89up6asf3nmrvvltdsl",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2439000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2439000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17t9dewr27wjuqls283km4zf9ht0mh99f7kk4zd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "70000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "70000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17t908frmwcuqd83nsx3ydsxx6gfy6dzlrsdygy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "129676303.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "129676303",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17vyhq832pysqskh70288lsm5ndv0xz3m4yuaer",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "8466508.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "8466508",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17vv33gl7esrnulrhz943rrchs623g0aas3gwzg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "44246796843.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "44246796843",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17dndad55zly50aj8lzzklxusevdz0r0gvzqkrc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2049000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2049000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17w007ye3uy8x8d8ng7vguynzcxgea53deaug7h",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1700000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1700000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17samrhxsy85s0md6wk2m9w3ryq934z8m7chza8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "690069256.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "690069256",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17k54fpptqpdzknlxdy759rrc8elcnx3rz4c3av",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "142399479.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "142399479",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17hr0kwjgklazhufht4sdpllmvm6047wdupdds7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1483303449.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1483303449",
      },
    },
    {
      delegation: {
        delegator_address: "osmo176csrl54fys3cd0gmhkpmwns2gtngfca8kssu9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2002000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2002000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo17a8rvcgwzqp986rwxr9taqtyuxg9cdtser4nvd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2643511245.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2643511245",
      },
    },
    {
      delegation: {
        delegator_address: "osmo177n4ptnw3utwjlrk8n28t4zf00afm379qrkkks",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3410107746.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3410107746",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lqnmymgw9pmhvf4nec26ykdfh0ccmdnzalm9fv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1034823304.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1034823304",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lr05m9s3plgnp64jvzfa70qnxf3l7z454hh795",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2050000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2050000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lxtwpxd3veex3f4w99zhj7f9u4jl75qaf6sd8m",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5081000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5081000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lx0my7kk7uy75y68r602ga62l7n8cwawqhglt6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2790000026.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2790000026",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1l8amy5gr8yr8jz5s34ta50qhadxak6zdulrnqv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1303333334.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1303333334",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ldg6m46nw06gntnnxq6llju42ffw0cn94rwnwq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "351300000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "351300000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1l3dr30jzea6rac93eea34urypdgumref7sh2j6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5091000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5091000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lerh07fgshw98r3w3drvkjcykpp54p62grylzn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "120000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "120000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1led37kx2jrjjn9mxvtukngwk3cmpauzurcakrw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "379873308.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "379873308",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lmxrexaxuc7ealq4wqdgzrczajhhrenrhgl9q6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lus294t8z0v8ncwxv7g4lm47whyzzmsgt63069",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "510000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "510000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lul42lw2p4mv2mlte89cf4qnfg2jfduuy7lnuf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "54902064764.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "54902064764",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1l72hadw9wg67r950qf0dqhssmf7t7p8rrjl2fk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "63000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "63000000",
      },
    },
  ];

  let output = [];

  for (i = 0; i < txs.length; i++) {
    if (
      !txs1.some(
        (j) =>
          j.delegation.delegator_address ===
          txs[i].delegation.delegator_address,
      )
    ) {
      continue;
    }
    if (parseInt(txs[i].balance.amount) >= 500000000) {
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
    .writeFile("./osmosis.xlsx")
    .then(() => console.log("File saved!"));

  console.log(output, output);
})();
