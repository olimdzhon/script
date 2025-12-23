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
        delegator_address: "osmo1qgs7r0t2djqzvf8u33mhcw7hqq2jfc5hyet0m9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "329020040.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "329020040",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6nzts2lq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "26719100000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "26719100000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1q0mzc997kps2w60uuv5vpmh5jqk4arrnnywra3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "205000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "205000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qhkzptmhwt78jpzx34hpljz6megz0gtjr6tn0j",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "301700000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "301700000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qe6q4wwjzse3rkv07czlevhngxn56sus4q96ya",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "8078973167.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "8078973167",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qm0q9ec5ylrgz2sz78j53xnrfcsse74av2j62z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1989898451.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1989898451",
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
        delegator_address: "osmo1pz0gys67zv6dl0g69dree3yees48plzu40f0eu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506343371.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506343371",
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
        shares: "58900766.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "58900766",
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
        delegator_address: "osmo1p34krywk2xt67yz0ju4c5dzz5u6lurs074gxsm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "277239411.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "277239411",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pme8tquascj9t2kay0qxh42f688x5cmre20qzn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10018600517.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10018600517",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pa56a9fg5jhxrduru275vn2y7fpkxmx69s8jm3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4847246927.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4847246927",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pls6ps584ymly39fmudhge0q9m4jmdx2r5jrgn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1002444001.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1002444001",
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
        delegator_address: "osmo1zsv6cvpd9y86hhxzatpgzu6ymxdeuc5n5lw6rk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506238711.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506238711",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1z692deslv3tgqcf7yjzu6l0x5p23jzw5fhl6v7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "326270000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "326270000",
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
        shares: "4066000055.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4066000055",
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
        shares: "516000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "516000000",
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
        shares: "309333871849.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "309333871849",
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
        delegator_address: "osmo1ysthp74n2wxt4flmzyxrhza8rvxzr9mcejk80x",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "606517388.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "606517388",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yn32acr8a3gnfshkftvmj35symffwywuvu2qdc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1057500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1057500000",
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
        delegator_address: "osmo1923utg7e27z6cztq7ky89hx5n5k0awkh0hqg59",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506181658.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506181658",
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
        delegator_address: "osmo193d2qsuk25e9mx0quan2msl2y9fqtt0ggpr3e0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "505982538.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "505982538",
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
        delegator_address: "osmo19e4l3hnkzp0wzz2zmngpkqtdwt49zlgpg738ew",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506211392.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506211392",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1xpcl957yz4rvh2vwgn426lp6hqunqgq5gl88n4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "841600000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "841600000",
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
        delegator_address: "osmo18ywwgc84luq0u8evna62hasdeyagzenat0m8mh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "105900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "105900000",
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
        delegator_address: "osmo18gxg34cp8r4gmsm5vgkaafg4fw4gzfurhaafcv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "328956200.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "328956200",
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
        shares: "502400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "502400000",
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
        delegator_address: "osmo18nf84jgwkqypaplz45xyf3yegpu4vvhz4j2lnl",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1730489740.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1730489740",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18kvjxrrp935gss49xpuqkn285m64zs9v56q7n3",
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
        delegator_address: "osmo1g238t79lec906hgnvpnyu4mywltl0kd6u8tj5z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "327784000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "327784000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gdplq3dvf80ld3yum3lytfamj73kfgu3cf3dgh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "12102530014.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12102530014",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1g06zqtasu0ca5k5yece6luqj3ke2w3659595wx",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "12863360456.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12863360456",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gmldc4msum7fer0mp3dq4u9k3wnemw8qjk69p7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506437356.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506437356",
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
        delegator_address: "osmo1fgngf5pka7m6u68zmdllds7gna7jttw0533wyg",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "327214000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "327214000",
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
        delegator_address: "osmo1fcygwdcfwdnt8gpuv0rr5j6llnexsw66j0az2z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506279508.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506279508",
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
        shares: "871021435.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "871021435",
      },
    },
    {
      delegation: {
        delegator_address: "osmo12dz0vh9gk50wsjc7jvefs7l8fafraalcctyhk4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "871004421.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "871004421",
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
        shares: "9858341197.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "9858341197",
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
        delegator_address: "osmo1tkvkxz9fqrcd45zp3pxhtz7fhzmxgm5v8wh33m",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "505871039.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "505871039",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1tkn55j239wfzcaqzff0dk00g3x8c7lnhdcmwlw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "301005348.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "301005348",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1th70a0kldrx9z7mchynthshr5rtxnru9eg2ds2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1068900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1068900000",
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
        delegator_address: "osmo1vkngvnelw4tgahyn20sr0kvk9jq8wrfe0hcalf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "628615047.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "628615047",
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
        delegator_address: "osmo1d93ggvd6t3qnna3w280ax9g6j9jzr69e4hjy9e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "307000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "307000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dxwkz5gd6ygfmthalupst7vkgcp0ehg2cwz8uy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1057500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1057500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ddg9tjkf0vmd3t2mdqpxk2pkk6zssvdu8vxfj6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506548080.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506548080",
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
        shares: "10531100000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10531100000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dkqem467z8l7vjktx7ldg93r82e056qsfq78k3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506140631.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506140631",
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
        shares: "14336324993.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "14336324993",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wqmkny5hu632yxv6u7ca634p3ewuxq0p39ker2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "328452000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "328452000",
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
        shares: "1118926562.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1118926562",
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
        delegator_address: "osmo1w64nk0hmjelradw68twzs8zngk253y3gv9lcsf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506108227.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506108227",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1wlg3r97try92fgvvt5puntmekacwqjepuzrw20",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506700000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506700000",
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
        delegator_address: "osmo10guvn4243qg2l8ey8gy9zwttz6v23232s7pv5u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "32259000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "32259000000",
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
        delegator_address: "osmo10lmt0uv4dk7tyspe8sqxem3pexvmhw6ygyyt6h",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "225891461.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "225891461",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1sj5zyq6pple07fsjfghy80wc0s38chrxnlr4e6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "905439921.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "905439921",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13zzlsjnauafxz764nvj6mgagrkt5vke3cflpxw",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "427973964.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "427973964",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13tddgrjnl30n46736e0pjrj8280rzsrgvv478r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "259500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "259500000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13hapz35dfzuf9ult9vw7qdsag83r99qz9q7cw3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "7743481887.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "7743481887",
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
        delegator_address: "osmo137tlv9g4dgm9jq9ucwcd5mpp7w4agtzutd62eq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10095537100.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10095537100",
      },
    },
    {
      delegation: {
        delegator_address: "osmo137hzsw2n0rklw78jxc92pyd86vg42zcn9uz6jt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "136215024.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "136215024",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jzw2yxmrmszhf288manm8fckql4979zyp8zwaq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "144740391.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "144740391",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jr0e4le4kr7ewtsvujrqzcyjqn9r026st528la",
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
        delegator_address: "osmo1jtustv4ghy997d6catge3mgklszkvve66v5r7s",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "742800000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "742800000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jdcxj8ufkmef83wd02jz4vzxmg4tut4p582nje",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "745382025.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "745382025",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jwcdyc7j0tjavkjn7628zq7dtzvc9fpv6wvzyd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "101700000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "101700000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jujullnrumr8mplckscuxzfnzkspfm6l0fu0pp",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506176005.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506176005",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ja9uell4cj7a564fzdm7w7733um2mhnvkg0cx9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1482732580.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1482732580",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ngr5pfhr04rumnzz8vk7cmueat0au88ynwfpcu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "505773485.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "505773485",
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
        shares: "10997361470.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10997361470",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1nf5f04rk9t56pzdwve6rhe5gvneq6gvk3thek5",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "870063634.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "870063634",
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
        delegator_address: "osmo1ntqjylqqzw4a22hhljxsmwd7vf3h4eq6nsl60a",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "505945201.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "505945201",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n3nk86e3xzv4flptpp8rvu6qrh5zrnr6g49ylt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3982000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3982000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1nnh4thxglkdcp0h2kr7t53rqakrmlwvyq2jg5s",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "588297153.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "588297153",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n5ycs4kv846zsku07xm29ltkyg2fs8xyhawncf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1082000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1082000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n5jj462cvekx8z0syz8u2gmpf46g2csx895h33",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1018952290.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1018952290",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1n6adng2ngpsyhxm37v9nr6c2elflunzkhtuwfv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1057500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1057500000",
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
        shares: "529262826.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "529262826",
      },
    },
    {
      delegation: {
        delegator_address: "osmo15jx0v767zutpsjvwx4lwk7z28n8mzvd0aup2wj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "328787000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "328787000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo15ud2mh8qj8kljer927c4q2tt82wqch553m39c8",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "127767611.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "127767611",
      },
    },
    {
      delegation: {
        delegator_address: "osmo15lnq0udq33dg3aghgagxtswdyvjluunawwqeue",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "861880000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "861880000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo14qc7f7nzae7kppwpxhymn54qwgx7tlcccde9f0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1949000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1949000000",
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
        shares: "5801783725.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5801783725",
      },
    },
    {
      delegation: {
        delegator_address: "osmo14wjel7svz58fhpzhfpdw2adl0wmk9vemzpmuju",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "326333000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "326333000",
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
        delegator_address: "osmo145hnlzs7xge77qmahfjevac0lzzvkwulrssy8u",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4632000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4632000000",
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
        shares: "110000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "110000000",
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
        delegator_address: "osmo1kq6e9zxg00zkezjwxl7u9685ud8pn87vrrdcja",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "331400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "331400000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1kgu07r6lhpr0v3dww9a4rldfny5v6fyk43jnl3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "12601017852.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12601017852",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1kvqxv4pgmteqrwrcfj8j3g3vwhcg0zmu8gwjnj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "327494300.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "327494300",
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
        delegator_address: "osmo1k3sgaankyf52zd2f4qfyxpj0kzv73e7ly3wn3m",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1027350935.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1027350935",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1kmtnee7hn2fxu4pw7crwk7dccf96dzq2qfpdgy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "126973763.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "126973763",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ka3w345dawr0quc4uac9unv8x43yvfzwyqnq0c",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "328910000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "328910000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1hx0875zj5x9p5wlzzxsvttwmmue6ftcl7y2xvv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "505825798.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "505825798",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1hv4rlv94dwwsj3z7l6muye6ndmup0hta7a4v3p",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4046442490.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4046442490",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1h033rs3na3faurz0n3qlmls52q04k4u462pyuz",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "505959590.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "505959590",
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
        delegator_address: "osmo1hkwgeez52gs20zx0sqwucs5qxauedf2a9fkwke",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5001006446.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5001006446",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1hk4tzw5nqc43zt4aukxn5za5fmgk7qqqkfnqnj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "505779805.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "505779805",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1hu5ugwjnttk2nw63pfe5l9547gdatklk6m3nm4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "13437000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "13437000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1h7kspslzx7xewtlmknqp6yy7rl82c9wv45lh7j",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1933976491.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1933976491",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1cqrky3t78np3a60kmdpylzyv594muagffwyf2x",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1023493380.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1023493380",
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
        shares: "545600000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "545600000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1c7r92jcmdqc7sxqtac97uapj5ptjggm96d6ge6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1059000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1059000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ege3jn6j509d7985jdefxtn7mcvngjp8ez8s66",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "514000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "514000000",
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
        delegator_address: "osmo1e3ukvtjmrqhmwje70dhmqnvvt3tjpkrkcp7smh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "31154020936.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "31154020936",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1e5jmcepmgr6wsmp4n3tlhmdcny2pw49cvvqydf",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3101661000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3101661000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1emqzfcz5hezpg3z6ueqkptadpyx5qfujqpn4g9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "673458040.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "673458040",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1eujlkkfsyjf28ey9vce3yp0s0mdd0l94y9s3le",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4000000000",
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
        delegator_address: "osmo16yzm6qjjheafnyvlcjxnkmhj3hullgplp8grxc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "871304362.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "871304362",
      },
    },
    {
      delegation: {
        delegator_address: "osmo169pkmuffdpwm8dfrefc2tcsvhyv74x8rq30gzx",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "282101734.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "282101734",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16tfjyefrgekf0l8zzccjy2c72nh2mscj2sgkxk",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "870894335.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "870894335",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16vrpzr6hfqmmktqa9u2s0qm6qw0sd6pacyjdl3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "161956440.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "161956440",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16jk3xk8y96xfwhu3z2u8jenn2shxm0u0jtnghc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "289611951.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "289611951",
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
        delegator_address: "osmo16kmc5esy37tu6jpywhmgts889ukewwy54hmq3d",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "505750123.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "505750123",
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
        shares: "1114254598.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1114254598",
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
        delegator_address: "osmo1u28uvarg9j5hxhhrsy8uuagvfe9qm5t3cv074k",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "132928976784.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "132928976784",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1u36qa4gluu2drp89jj0978c2g7d9j607ldv4vm",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "550140139.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "550140139",
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
        shares: "113061227.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "113061227",
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
        shares: "2000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1a3858f250ve4t6rp9ef2svpr7sj20aaxgy8dyu",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "630149542.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "630149542",
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
        delegator_address: "osmo17prz2ww2r89w8ds3nhjt32lf7rwu37enyv7uaj",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "506721636.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "506721636",
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
        shares: "13166676303.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "13166676303",
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
        shares: "1476603449.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1476603449",
      },
    },
    {
      delegation: {
        delegator_address: "osmo177n4ptnw3utwjlrk8n28t4zf00afm379qrkkks",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "205389510.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "205389510",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lx0my7kk7uy75y68r602ga62l7n8cwawqhglt6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2625427254.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2625427254",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lft50ldy04u3szywhg38cnfpxfg7r5487amng4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1219446998.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1219446998",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ldg6m46nw06gntnnxq6llju42ffw0cn94rwnwq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "252500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "252500000",
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
        shares: "54767079571.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "54767079571",
      },
    },
  ];

  const txs1 = [
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
        shares: "26776100000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "26776100000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1q0mzc997kps2w60uuv5vpmh5jqk4arrnnywra3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "215000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "215000000",
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
        shares: "10087973167.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10087973167",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1qm0q9ec5ylrgz2sz78j53xnrfcsse74av2j62z",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2546772799.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2546772799",
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
        shares: "59010766.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "59010766",
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
        shares: "277239411.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "277239411",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pme8tquascj9t2kay0qxh42f688x5cmre20qzn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "10018600517.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10018600517",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pa56a9fg5jhxrduru275vn2y7fpkxmx69s8jm3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4858704390.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4858704390",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1pls6ps584ymly39fmudhge0q9m4jmdx2r5jrgn",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1003537740.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1003537740",
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
        shares: "4066000055.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4066000055",
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
        shares: "516000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "516000000",
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
        shares: "606517388.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "606517388",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1yn32acr8a3gnfshkftvmj35symffwywuvu2qdc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1057500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1057500000",
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
        shares: "1022000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1022000000",
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
        shares: "502400000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "502400000",
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
        shares: "1730489740.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1730489740",
      },
    },
    {
      delegation: {
        delegator_address: "osmo18kvjxrrp935gss49xpuqkn285m64zs9v56q7n3",
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
        delegator_address: "osmo18crvw4qkw8ju6s9jqyw6w3wx5ghh3unvtpdlw7",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "2673636092.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2673636092",
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
        delegator_address: "osmo1gdplq3dvf80ld3yum3lytfamj73kfgu3cf3dgh",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "12102530014.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12102530014",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1gwh42aqnppx7d8lxuhkafh86ew6f0wrjjgptld",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "227000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "227000000",
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
        delegator_address: "osmo1fuuuvgwsrrf3zy46azu22kzrskww9ftek4vzph",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "55260000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "55260000",
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
        shares: "9211334834.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "9211334834",
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
        shares: "357081504.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "357081504",
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
        shares: "301005348.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "301005348",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1th70a0kldrx9z7mchynthshr5rtxnru9eg2ds2",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1068900000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1068900000",
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
        shares: "630698665.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "630698665",
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
        delegator_address: "osmo1d93ggvd6t3qnna3w280ax9g6j9jzr69e4hjy9e",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "307000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "307000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1dxwkz5gd6ygfmthalupst7vkgcp0ehg2cwz8uy",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1057500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1057500000",
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
        shares: "10601500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10601500000",
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
        shares: "14372153502.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "14372153502",
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
        shares: "32259000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "32259000000",
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
        delegator_address: "osmo10lmt0uv4dk7tyspe8sqxem3pexvmhw6ygyyt6h",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "225891461.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "225891461",
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
        shares: "921439921.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "921439921",
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
        shares: "428990307.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "428990307",
      },
    },
    {
      delegation: {
        delegator_address: "osmo13tddgrjnl30n46736e0pjrj8280rzsrgvv478r",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "259500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "259500000",
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
        shares: "7763550718.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "7763550718",
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
        shares: "200000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "200000000",
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
        shares: "10120676307.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "10120676307",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jzw2yxmrmszhf288manm8fckql4979zyp8zwaq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "144740391.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "144740391",
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
        delegator_address: "osmo1jtustv4ghy997d6catge3mgklszkvve66v5r7s",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "742800000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "742800000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1jwcdyc7j0tjavkjn7628zq7dtzvc9fpv6wvzyd",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "107800000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "107800000",
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
        shares: "1486314125.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1486314125",
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
        delegator_address: "osmo1ngx7xxgfrnguwkrjyw3uecr95krl26spz7fatv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "89100000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "89100000",
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
        delegator_address: "osmo1n3nk86e3xzv4flptpp8rvu6qrh5zrnr6g49ylt",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "3982000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3982000000",
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
        shares: "590322915.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "590322915",
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
        shares: "1087000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1087000000",
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
        shares: "1021041606.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1021041606",
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
        delegator_address: "osmo1n6adng2ngpsyhxm37v9nr6c2elflunzkhtuwfv",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1057500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1057500000",
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
        shares: "529262826.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "529262826",
      },
    },
    {
      delegation: {
        delegator_address: "osmo14qc7f7nzae7kppwpxhymn54qwgx7tlcccde9f0",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1949000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1949000000",
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
        shares: "1009279032.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1009279032",
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
        shares: "4632000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4632000000",
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
        shares: "12632396502.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "12632396502",
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
        shares: "4051685973.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4051685973",
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
        delegator_address: "osmo1hkwgeez52gs20zx0sqwucs5qxauedf2a9fkwke",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "5001006446.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "5001006446",
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
        shares: "13499350000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "13499350000",
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
        shares: "545600000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "545600000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1c65g3f5ujul79f4tv39rnx4k3fp0nwvrcqv3fp",
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
        delegator_address: "osmo1c7r92jcmdqc7sxqtac97uapj5ptjggm96d6ge6",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1059000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1059000000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ege3jn6j509d7985jdefxtn7mcvngjp8ez8s66",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1403647951.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1403647951",
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
        shares: "3109971000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "3109971000",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1emqzfcz5hezpg3z6ueqkptadpyx5qfujqpn4g9",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "673458040.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "673458040",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1eujlkkfsyjf28ey9vce3yp0s0mdd0l94y9s3le",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "4000000000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "4000000000",
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
        delegator_address: "osmo169pkmuffdpwm8dfrefc2tcsvhyv74x8rq30gzx",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "539424112.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "539424112",
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
        delegator_address: "osmo16vrpzr6hfqmmktqa9u2s0qm6qw0sd6pacyjdl3",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "161956440.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "161956440",
      },
    },
    {
      delegation: {
        delegator_address: "osmo16jk3xk8y96xfwhu3z2u8jenn2shxm0u0jtnghc",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "290060949.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "290060949",
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
        shares: "1116400628.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1116400628",
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
        shares: "550140139.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "550140139",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ujepumwuauf5dv4jjc686f6xj4u29rtpk5xrjs",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "636056606.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "636056606",
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
        shares: "113061227.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "113061227",
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
        shares: "632238259.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "632238259",
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
        shares: "13186676303.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "13186676303",
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
        shares: "1480803449.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1480803449",
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
        shares: "205389510.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "205389510",
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
        shares: "2669397756.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "2669397756",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1lft50ldy04u3szywhg38cnfpxfg7r5487amng4",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "1220696998.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "1220696998",
      },
    },
    {
      delegation: {
        delegator_address: "osmo1ldg6m46nw06gntnnxq6llju42ffw0cn94rwnwq",
        validator_address: "osmovaloper1lmxrexaxuc7ealq4wqdgzrczajhhrenrdlhxha",
        shares: "252500000.000000000000000000",
      },
      balance: {
        denom: "uosmo",
        amount: "252500000",
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

  let output = [];

  for (i = 0; i < txs.length; i++) {
    if (
      !txs1.some(
        (j) =>
          j.delegation.delegator_address === txs[i].delegation.delegator_address
      )
    ) {
      continue;
    }
    if (
      parseInt(txs[i].balance.amount) >= 500000000 &&
      parseInt(txs[i].balance.amount) < 5000000000
    ) {
      output.push({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 1000000,
      });

      worksheet.addRow({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 1000000,
      });
    } else if (
      parseInt(txs[i].balance.amount) >= 5000000000 &&
      parseInt(txs[i].balance.amount) < 10000000000
    ) {
      output.push({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 2000000,
      });

      worksheet.addRow({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 2000000,
      });
    } else if (
      parseInt(txs[i].balance.amount) >= 10000000000 &&
      parseInt(txs[i].balance.amount) < 30000000000
    ) {
      output.push({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 3000000,
      });

      worksheet.addRow({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 3000000,
      });
    } else if (parseInt(txs[i].balance.amount) >= 30000000000) {
      output.push({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 5000000,
      });

      worksheet.addRow({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 5000000,
      });
    }
  }

  workbook.xlsx
    .writeFile("./osmosis.xlsx")
    .then(() => console.log("File saved!"));

  console.log(output, output);
})();
