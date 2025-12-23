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
        delegator_address: "celestia1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6nm6j2nl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1757100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1757100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1p9hsmt9z6pt008v9rdfq5vv3pkqvnkrlx7lhy7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10428476.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10428476",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1p34krywk2xt67yz0ju4c5dzz5u6lurs08y2xuy",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "185654390.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "185654390",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1pa56a9fg5jhxrduru275vn2y7fpkxmx6up9jhw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "432944976.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "432944976",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ztlf8vve6tn09ynr3qwm2jnq7grmwgn205uvpe",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "86750000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "86750000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1zwtv7pplzh7m3t4m2zel8c0q78qsyptvqpjctt",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "421388473.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "421388473",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1znaj4lqyds2jsg9tpmwt59r0mxn85at4kzqh4c",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1010000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1010000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1rhgsg2qedccgwrpws524tagm4v7rlpdrx9kz6h",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "17185000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "17185000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1yyvdwarlwt4sz6qslzs5sx5jlzu6guaj783tlx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "153400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "153400000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1y3lhsnzyrxfen69lrd4q9vqym4l9wwcxpgec6x",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "51185207.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "51185207",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1yclrw2qxzmyjxjry0fwusdurhkqgdag8dqn4n4",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10364699.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10364699",
      },
    },
    {
      delegation: {
        delegator_address: "celestia19g9flltdr2ahajrkefdqxc34h5uc532d2v9pc9",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "124100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "124100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia19svdw36vq0h6dqkafkmj7ny5qkefekucywj4a2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "51388185.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "51388185",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1xpavyl06wekueu4x4kg2424ex0dl9ww3eq5mdd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "4850000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "4850000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia188q0e9vyq60edst5drr03sxahlzre6yhcnqqh7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "334385470.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "334385470",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18gd7nsv2qrx9rv8n0gh37l0x8qmwnrhaj0wzrf",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "121000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "121000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18nf84jgwkqypaplz45xyf3yegpu4vvhzvrgllq",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "101000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "101000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1gfs3scxqhne0jg5eft55cplj4rlwfu458s7jc3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1000000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1000000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1g4lvl4hu5g7fluerrmfcks7cswfpv780fqe3t6",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "60470030.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "60470030",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ga4wavedkz3xrmhhtxgzxdrtysfpawnsn00lnz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1fuuuvgwsrrf3zy46azu22kzrskww9fte0ywzdg",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "5050000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "5050000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1t9dje4dfeu3af5rc2yxsvyeu5td0a2v63tqazn",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10542190.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10542190",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1t5wc346wst7s65un346mhsr6wzthrwdpwf2gxq",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15252042.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15252042",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1v9hnnh7qtv8x0sycn8ka064xqg4hw7jzatx97t",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "95357785.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "95357785",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1vkngvnelw4tgahyn20sr0kvk9jq8wrfekx6ank",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "358320000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "358320000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1df7k9lwv55u7tud340n568h0wekrddqd3k7fdx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "61014272.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "61014272",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1dsyujhxllacu2tfmwj4g65g2mredmd4zdhv4wj",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "51352610.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "51352610",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1dj254eq6f7xgwltre6jdns582a94phsjntw09n",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "3570000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "3570000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1duls39pg7uqze7vpz65n22re72nycvmrgkg4kr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2680673285.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2680673285",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wgdegtthkx0n5fmyt2l2xn9jchywffac8q9eea",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "101080000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "101080000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia10guvn4243qg2l8ey8gy9zwttz6v23232f0rvcr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "12675000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "12675000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1s6fd9nyr2n4dgcwa8elkq4j7fv0s5tn44ne59f",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "230000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "230000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1smq0qz39r8e8awga8zaxlquftkzxldr8asa0ad",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "340000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "340000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13zzlsjnauafxz764nvj6mgagrkt5vke3pcap23",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "158122334.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "158122334",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13hapz35dfzuf9ult9vw7qdsag83r99qzu3uczw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "282835299.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "282835299",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13uyv2mzgrc4r0c8aslsvkfy7dcmgflq00je7pw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "43900000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "43900000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jgpjmj0wlr34krplzhh7dywarfmkztuc6gz5wk",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "551264996.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "551264996",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jtustv4ghy997d6catge3mgklszkvve6rakrj0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "236280000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "236280000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jds77hxrwk3z8j7r25dg8wa6z9wa2ujff4dxdy",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "3000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "3000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1n9vw0aeaw5c52kdlaq2uxm5dhq8ltx50f83rn2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "53887655.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "53887655",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1nnh4thxglkdcp0h2kr7t53rqakrmlwvyemsgc0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "157621733.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "157621733",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1nnlvg9fcs7lfsfxgeaf69hg604nxag0ahhuyu0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "153205015.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "153205015",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1n5jj462cvekx8z0syz8u2gmpf46g2csx75khaw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "18851208.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "18851208",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15x84rgw68x6v42c7drsgwng0dzt8ylvfts08em",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10563979.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10563979",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1480j70ftswdfnc5uf50u7r4ksd5qgd42tr8wy4",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "26251939.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "26251939",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1kr67q8kjzpp7wkg5nnltpe0g0gvlhgdh98lyyx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "73464797.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "73464797",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1kw6mw70wafdxgp2n8s4lscx04du8ka6dvul6jy",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "6001581411.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "6001581411",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1hwqspsd2khgfynuapxqlk7lq0mjsauhnwy9wkm",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "11000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "11000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1h3j0wrf9kmthsp8rsrm72wcfptcy3qw3gvrlyp",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2960000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2960000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1huccmyeq5spmnsjlypn7z5z3rv27uwfq4edtzk",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "31300000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "31300000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1eypkhtdahph4y6kwguh4faqydl8clk420qu2t7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "55671000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "55671000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ehvppg4y9ar7dvnhjnqgjwxm2vd8yvsxpq6gre",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16vrpzr6hfqmmktqa9u2s0qm6qw0sd6pap4sdnw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "25144400.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "25144400",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1mx9l0l0jh4q3xhkqve298sejyh4tqu25fz5duq",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10300000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10300000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1mfje8fezn9mxc7dxnxzumr9kffhxtrn9e89l97",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1m20wyugxnse56q2lfmm9txyk2fx39s6fl9jxtk",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "103400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "103400000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1mu26reayvd7vwknxugmx3vw8fqmvladjcfhtv2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "690453032.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "690453032",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1uah45eeda8k5qwqdapslalxu8kgf9deqfuakr5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "102962670.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "102962670",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1aqcxtsz2u66fq92et6txlwywtetg467j8ggrp0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "234294121.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "234294121",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1a2l3cfqllu9qs6437mqkq59ygfx378p9f8h8rl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "36310254.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "36310254",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1a3858f250ve4t6rp9ef2svpr7sj20aax349dgr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "358280000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "358280000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia17er3w7ca3jxxm45r53vg5zcs86ulyks4y4l27a",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "18500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "18500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia177n4ptnw3utwjlrk8n28t4zf00afm379ej5k60",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "211651192.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "211651192",
      },
    },
    {
      delegation: {
        delegator_address: "celestia177h5g6har2ne9rhn5ekwlpgv7dtkjxp2765yfs",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "751883624.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "751883624",
      },
    },
  ];

  const txs1 = [
    {
      delegation: {
        delegator_address: "celestia1qz730hrlwfz5mt4u5xzxa98dh34yfnggtrpwf5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "184648472.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "184648472",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6nm6j2nl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1766900000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1766900000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1qe6q4wwjzse3rkv07czlevhngxn56susv386gz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2022110716.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2022110716",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1p9hsmt9z6pt008v9rdfq5vv3pkqvnkrlx7lhy7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10428476.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10428476",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1p8ja38qsekwfqh3967kj4u22c9gwh3zs2mgpfa",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "550000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "550000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1pduj08yt5w8thfp50lcvwhffrahpfpj5q06u4c",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "205142446.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "205142446",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1p34krywk2xt67yz0ju4c5dzz5u6lurs08y2xuy",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "186054390.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "186054390",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1pjmdtwxqevyr9u38ap4qchfejgyj93da0xjwgt",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "104000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "104000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1pa56a9fg5jhxrduru275vn2y7fpkxmx6up9jhw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "432944976.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "432944976",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1zpnfptuxfxsj3l77ghuh9hjntewzh0jg4t3qt3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "73100025.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "73100025",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ztlf8vve6tn09ynr3qwm2jnq7grmwgn205uvpe",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "86750000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "86750000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1zvn0400rgpyhvrse936p25mfkrnnr8elkjdzzt",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "107720000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "107720000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1zden6jx4czuy5c9825kxl7fpnjky3pqe8zrfhu",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2600000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2600000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1zwtv7pplzh7m3t4m2zel8c0q78qsyptvqpjctt",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "421388473.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "421388473",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1z3wu5uh60kmczccpxxlk469ue4muh63h8d9xte",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "100905000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "100905000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1znaj4lqyds2jsg9tpmwt59r0mxn85at4kzqh4c",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1010000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1010000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1zmruurfzccvmdgcuw2rv5rla6etk36k62a6w3m",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "105850000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "105850000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1r9jk8eg9myyamsvlsft2869zekj6raxhy6cwju",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15208117.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15208117",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1rslwntv3eturuepj8svx33j2tawr0zj0tz5958",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "59000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "59000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1r39vukxnda00vv4urhfmqpjvfzknr7jrw9hvja",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "66300000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "66300000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1r3sglnjc34q2l0nf2rl2dh6slum564mmk5249m",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "210456735.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "210456735",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1r4rcrlggecyhajgfvxqlu5pdnma64h6hudyj6s",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10290000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10290000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1rhgsg2qedccgwrpws524tagm4v7rlpdrx9kz6h",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "17185000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "17185000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1yq8ls6d9q6lnyctwnjjgw35u2grwad2kfjnq7r",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "31000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "31000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1yp542l3cwq8j0m9zkhcv8exrz2cp7l9quwrtys",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "108100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "108100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1yyvdwarlwt4sz6qslzs5sx5jlzu6guaj783tlx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "153400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "153400000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1yg8taewa9zr0huan0uskfc0xhafrywwr2l053f",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "54230000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "54230000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ytf6yu225p7yjy4cnfxmanj5f6xlu6wsk56xj0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "55429831.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "55429831",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1y3lhsnzyrxfen69lrd4q9vqym4l9wwcxpgec6x",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "51185207.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "51185207",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1yclrw2qxzmyjxjry0fwusdurhkqgdag8dqn4n4",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10364699.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10364699",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ymwgg85shgthy4gsp7qf59jpf0pz4c3rz3aqqm",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "271669888.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "271669888",
      },
    },
    {
      delegation: {
        delegator_address: "celestia19g9flltdr2ahajrkefdqxc34h5uc532d2v9pc9",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "124100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "124100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia19svdw36vq0h6dqkafkmj7ny5qkefekucywj4a2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "51388185.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "51388185",
      },
    },
    {
      delegation: {
        delegator_address: "celestia19kp9zuk4cgttflrhsa42r5manhncxzwctdvp82",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "56501694.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "56501694",
      },
    },
    {
      delegation: {
        delegator_address: "celestia19k707df99htdtcf3cmgmyxy54uafh0x8hc74d0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "350000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "350000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia19euwkdvzgrc0xe97cpyqdk9akaxu53lr27cwyv",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15119696.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15119696",
      },
    },
    {
      delegation: {
        delegator_address: "celestia19ulh374fqcqquvanqg2fa2vl8ftck5l6tav0cd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "16325436.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "16325436",
      },
    },
    {
      delegation: {
        delegator_address: "celestia197utzytjy06tp70sm88cxv6rxqk6g826ngd8z6",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "50148427.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "50148427",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1xpcl957yz4rvh2vwgn426lp6hqunqgq53w98l2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "71593000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "71593000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1xpavyl06wekueu4x4kg2424ex0dl9ww3eq5mdd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "4920000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "4920000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1xzq3z62dvsrlkpmsw8ju4unh95sr7svz8s7rjd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "204807186.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "204807186",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1x0esf3ex8lvpke6ej22ctszsng5njdpddn5rgu",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "74125041.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "74125041",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1xkhs27xj8tjd74lyfhcgw4g03krnpn9wqz6mh7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "276000306.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "276000306",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18qungayvsszpcrns9yaaku6kyg7jpqymry34lk",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "47660582.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "47660582",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18p392qtrvlvpl0hwe926405555phk3vms8e29e",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15123106.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15123106",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18x5c7z3jztq4fkska5xupkkxvxyjw7ycppgx2l",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "50205200.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "50205200",
      },
    },
    {
      delegation: {
        delegator_address: "celestia188q0e9vyq60edst5drr03sxahlzre6yhcnqqh7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "334385470.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "334385470",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18gd7nsv2qrx9rv8n0gh37l0x8qmwnrhaj0wzrf",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "121000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "121000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18nf84jgwkqypaplz45xyf3yegpu4vvhzvrgllq",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "101000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "101000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia184mdhx7jq5al582e6t3ssdev08ccghk5lm6awh",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "106500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "106500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18kvjxrrp935gss49xpuqkn285m64zs9vdtz7lw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "57620000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "57620000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18h6zq4n5knnpvnmgm5fjctuufgdvnwhqw02qrv",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "26820000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "26820000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1gfs3scxqhne0jg5eft55cplj4rlwfu458s7jc3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1000000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1000000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1gwh42aqnppx7d8lxuhkafh86ew6f0wrjtertnj",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "77795000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "77795000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1g4lvl4hu5g7fluerrmfcks7cswfpv780fqe3t6",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "60470030.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "60470030",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ga4wavedkz3xrmhhtxgzxdrtysfpawnsn00lnz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1fpwdgueuvyjewzvmqeu9sz6kzfgyt8f7qyr36d",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "16600000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "16600000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1fvtzwtmle3h0905narrm8ldqt7k4524kwn2u9m",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "13213859.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "13213859",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1f5atwteppk05dcqugyqjpjx35c06ut7pgtf2x8",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15158660.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15158660",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1fuuuvgwsrrf3zy46azu22kzrskww9fte0ywzdg",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "5050000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "5050000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia12sxx3f0knswnxh763kpddwaygt8qfy0jke96gl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "217200674.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "217200674",
      },
    },
    {
      delegation: {
        delegator_address: "celestia12jwjd7ustgvdwez22uyk8lgq363es3l9nvpgyz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "8000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "8000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1trt3c8u9vk7kemj4v5nclmvxwuw7l823am8jtd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10987698.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10987698",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1t9dje4dfeu3af5rc2yxsvyeu5td0a2v63tqazn",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10542190.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10542190",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1tgyqvzknt3l0qv6p98guu859mv8htpz6nmqvz0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "200095322.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "200095322",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1t3g44fggyhx2u9dxr34dtu6hxq3q72cjd6j5ku",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "56800000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "56800000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1t5wc346wst7s65un346mhsr6wzthrwdpwf2gxq",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15252042.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15252042",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1t44f9s68d3qmrzstg43kv2v0fdrjn7elu49zyz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15224307.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15224307",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1tce4ugvyx2y3y9aw9qen750pwf57dla8trfz5k",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "85637950.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "85637950",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1v9hnnh7qtv8x0sycn8ka064xqg4hw7jzatx97t",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "95357785.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "95357785",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1vndl2klmcfnp8vjm6ja4lu89t0l02n9kp0sy2q",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "81643901.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "81643901",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1v488uwnj9h6d8cmqqzv84makm30kl4p55jztrv",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "922508.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "922508",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1vkngvnelw4tgahyn20sr0kvk9jq8wrfekx6ank",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "358320000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "358320000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1dqtfsays94pktsj2dachaju37v2jxpjsgz2acz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "3011600000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "3011600000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1dzrd7jl72hq5n20l8vyr3sy8er3j93kuxtfqxs",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "296304.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "296304",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1dz40nul07jvf0fvl9yzu2wej34ach4rmk0rlgl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "50601306.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "50601306",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1df7k9lwv55u7tud340n568h0wekrddqd3k7fdx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "61014272.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "61014272",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1dsyujhxllacu2tfmwj4g65g2mredmd4zdhv4wj",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "51352610.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "51352610",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1dj254eq6f7xgwltre6jdns582a94phsjntw09n",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "3570000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "3570000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1duls39pg7uqze7vpz65n22re72nycvmrgkg4kr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2706517148.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2706517148",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1w90axmgz99vz9twceexyjspxquhyl0tq6m480v",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "86100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "86100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wg9mk36ggx7u6qfaatw5uwr9gdtztdmntj9dcq",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15165048.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15165048",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wgdegtthkx0n5fmyt2l2xn9jchywffac8q9eea",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "101080000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "101080000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1w2z74ln6kp08xac0smp2al35d7s7ju2rn5fuyj",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "114370000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "114370000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wdnc6mfpcfs8md2cvm3gyfdzw8v3mcx8p2s6ux",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "125844427.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "125844427",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wwf8fsyr3xj8a84k5qkf0tkmvq8gmhg3ks8fdm",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "154300000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "154300000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wj22xy7mahsxldh3pmph6n94xuq20nusukn8mz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "130000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "130000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia10pjj5ye6spe7vgqcph2exm2pcx4m5gv9r8lf65",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "71000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "71000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia10guvn4243qg2l8ey8gy9zwttz6v23232f0rvcr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "12675000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "12675000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia100ha9vhqvr7qrxxxhdq8hskrncjtlntk7casun",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "5231000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "5231000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia104wejkmu9zslxc2nvm3rqq6kvg2apvn8qr9nz2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "36120000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "36120000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia10essjpny6xp4xpf3q4qalv7wk5l6jprzalg597",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15158998.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15158998",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1sdhhsp2k2ktsgpc6xcknakeq559jl0vtel0kjd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "62000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "62000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1s6fd9nyr2n4dgcwa8elkq4j7fv0s5tn44ne59f",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "230000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "230000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1smq0qz39r8e8awga8zaxlquftkzxldr8asa0ad",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "340000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "340000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1sltq5xnhhh02zelpphpkqqfy48w7rg47000900",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "355500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "355500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13zzlsjnauafxz764nvj6mgagrkt5vke3pcap23",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "158122334.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "158122334",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1385yvpzcuv7gqukf4pztgk0jr3lde4dmaqte33",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "50127074.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "50127074",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13hapz35dfzuf9ult9vw7qdsag83r99qzu3uczw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "283735299.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "283735299",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13uyv2mzgrc4r0c8aslsvkfy7dcmgflq00je7pw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "44200000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "44200000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jqngaze35w4ds0rzpf0p2sy8j09gfa0k89nfx7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "5260000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "5260000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jr0e4le4kr7ewtsvujrqzcyjqn9r026sj9g8nz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "331543792.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "331543792",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1j9rgp25pup9gp3rr89vaxu2np8ncw5rnacceck",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "130000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "130000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jgpjmj0wlr34krplzhh7dywarfmkztuc6gz5wk",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "551264996.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "551264996",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jttdtq9ah54rawwtsapt225unp8fdped37w4n8",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "758617816.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "758617816",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jtustv4ghy997d6catge3mgklszkvve6rakrj0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "400280000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "400280000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jv4efvkq3pthd2scqa5xeew03w2e5unu055628",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jds77hxrwk3z8j7r25dg8wa6z9wa2ujff4dxdy",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "3000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "3000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1j0jy3w5t9z39wqyh5tx4qavzzrcmt7v8lv86ud",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "20000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "20000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jh6s6eumd7lldmeppzly7a3r36kxwza4z96c3r",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "9460000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "9460000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jlu7fqmtfkd7wj3nz53ta7yj4xtvhf4kwldkg2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "219660892.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "219660892",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1npurzcjvq9rd29k29atvxd90732z4lwmq5yuev",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "53600000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "53600000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1n9vw0aeaw5c52kdlaq2uxm5dhq8ltx50f83rn2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "53887655.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "53887655",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ngx7xxgfrnguwkrjyw3uecr95krl26spm0ta8n",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1590000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1590000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1nnh4thxglkdcp0h2kr7t53rqakrmlwvyemsgc0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "157621733.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "157621733",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1nnlvg9fcs7lfsfxgeaf69hg604nxag0ahhuyu0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "153205015.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "153205015",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1n5jj462cvekx8z0syz8u2gmpf46g2csx75khaw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "206445206.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "206445206",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1n5hmum0fpuswq4nerff9rrwqudlylxxvjfrn4e",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "121915212.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "121915212",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1n4xxz7ffgtltu04xlemc6980547afgllryl9xt",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "5000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "5000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15x84rgw68x6v42c7drsgwng0dzt8ylvfts08em",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "26163979.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "26163979",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15vwxwsex3ltadecjcxhg5zqkken63uvp2c7040",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "17000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "17000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15scds0jq9crvvphgmnkxuvnycj64xj9lu8hnzg",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "301052830.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "301052830",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15epp26pl7cxhq6ff882cluyfxacj8lv5h44300",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "80000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "80000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia157qu9jpq3pasuc9s50tpd4hwu3tm45lrg6nm2q",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "248600000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "248600000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia157juy0a8fcv36pkh4x6xum384ttdea9el2rfkc",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "80210000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "80210000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14r9q9ntn0zncx7gtkzarcasgfmvwh86qum4xle",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1480j70ftswdfnc5uf50u7r4ksd5qgd42tr8wy4",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "26251939.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "26251939",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14vcxgqgkj22khudrfdgegpjututt9vy0ufglgn",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10984173.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10984173",
      },
    },
    {
      delegation: {
        delegator_address: "celestia145d2lp3anw4v6apvz8ze8rw8kw8h9rtxvc957c",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "25000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "25000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14k5zmw7me6vlrxat9x953y4u023nvx53apdc7h",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "76510000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "76510000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14a8ecps4lm2admgxdcq007kmgt4l9cxye4jv3w",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "217000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "217000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1kr67q8kjzpp7wkg5nnltpe0g0gvlhgdh98lyyx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "73464797.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "73464797",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1kw6mw70wafdxgp2n8s4lscx04du8ka6dvul6jy",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "6001581411.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "6001581411",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ksez8429rjftqa8f9wxxyg4l80ey7cfws3k6mw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "292857866.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "292857866",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1keqn6wegxwx6e3tyd9jmpmqpp9fgj3gup7pcy5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "38753534.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "38753534",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1hy4s6pku897sq4s52mwd2wegvgd0llestm3ffm",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "218229919.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "218229919",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1h9t7ychjp8tssn624fx6twlges8gy8rwlmp9a9",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "6376589.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "6376589",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1hwqspsd2khgfynuapxqlk7lq0mjsauhnwy9wkm",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "11000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "11000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1h3j0wrf9kmthsp8rsrm72wcfptcy3qw3gvrlyp",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2975000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2975000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1hmhlm867zq2muaru2zq0u8t86mp2jpetu6vrt3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "55800000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "55800000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1huccmyeq5spmnsjlypn7z5z3rv27uwfq4edtzk",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "31300000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "31300000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1hlg6pcc98ecwy440kda40mmfmsnsn783t7q9xd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "6350000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "6350000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1cqjp63tugraf4wksanzh3xzaap9upz42ch07m2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "30100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "30100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1cpxcvc7e6k4c0mxz3vf7w4jd5szd6ynq362h3p",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "132000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "132000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1cyzcp7ejhuluca2rj3ew2r2h34vppjt3um73pj",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "20000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "20000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1cx04qcueeque9cpuv8p4h0zaykaxakql7al3re",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15178396.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15178396",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1c65g3f5ujul79f4tv39rnx4k3fp0nwvrp3w397",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2310500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2310500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1cay2udnvc6gxdll68rut62vns5ds76d0c74jps",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1450000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1450000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ep7cpq9wa0cuds253ucwywqtl4ewx2y29zksfr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "101940000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "101940000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1eypkhtdahph4y6kwguh4faqydl8clk420qu2t7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "55671000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "55671000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1eyawltgv5jfgfx34qa0lt8rzsp8jdyv3aq6205",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "30200000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "30200000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ege3jn6j509d7985jdefxtn7mcvngjp8qn9sk9",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "306583392.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "306583392",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ehvppg4y9ar7dvnhjnqgjwxm2vd8yvsxpq6gre",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "200200000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "200200000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1el7xf32qw3tyr2yc07483samz5qgvz6msfv7rc",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "31000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "31000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16z62k22z3xpq7x9sdhwums2lcks8wejc02rdw7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "200574218.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "200574218",
      },
    },
    {
      delegation: {
        delegator_address: "celestia169pkmuffdpwm8dfrefc2tcsvhyv74x8reqdgwe",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "40871960.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "40871960",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16vrpzr6hfqmmktqa9u2s0qm6qw0sd6pap4sdnw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "50444400.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "50444400",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16s74hsc93ergjec4yx6mdryk8lcgzvt858cdnm",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "50120342.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "50120342",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16e8eese68zg9yvsd9f8f4urywq9vt276k09l7l",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "212260000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "212260000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1mx9l0l0jh4q3xhkqve298sejyh4tqu25fz5duq",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10300000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10300000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1mfje8fezn9mxc7dxnxzumr9kffhxtrn9e89l97",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "300000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "300000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1m20wyugxnse56q2lfmm9txyk2fx39s6fl9jxtk",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "103400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "103400000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1mu26reayvd7vwknxugmx3vw8fqmvladjcfhtv2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "690453032.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "690453032",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1mud3fuxt5zw4kfysd9gjrn6fjj5rz9g6z5txff",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "5502853171.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "5502853171",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ux8zlvpsvmvnnrqxm0an2kff2rr7950cwa83v7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "333300000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "333300000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ujepumwuauf5dv4jjc686f6xj4u29rtp09yr70",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "160427187.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "160427187",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1uah45eeda8k5qwqdapslalxu8kgf9deqfuakr5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "102962670.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "102962670",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1u79zte6hvya37p8glwz94evd7m8cw93hy0sgx4",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "45840000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "45840000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1aqcxtsz2u66fq92et6txlwywtetg467j8ggrp0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "234294121.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "234294121",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1a2de4qm0ecg338cyqmww3fpv9a7et9fgcnj0uh",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "129000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "129000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1a2l3cfqllu9qs6437mqkq59ygfx378p9f8h8rl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "36310254.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "36310254",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1a088qecv94m3duxfgjfeqz45yanun0gedju648",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2200000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2200000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1a3858f250ve4t6rp9ef2svpr7sj20aax349dgr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "358280000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "358280000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ahrtkh2lkllzatcnage2klnd6x43gkjcfwfjgg",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "54390000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "54390000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1amcqvw3j6anwdhg49xuerj5eyh6pkpuvjkshvw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "21000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "21000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia17p3r5sd5a0hctry733y4f7f5etp9uxvk2g4snz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "505306363.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "505306363",
      },
    },
    {
      delegation: {
        delegator_address: "celestia17vyhq832pysqskh70288lsm5ndv0xz3mv47a4u",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "650000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "650000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia17er3w7ca3jxxm45r53vg5zcs86ulyks4y4l27a",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "18500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "18500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia17a8rvcgwzqp986rwxr9taqtyuxg9cdtsqjhnqj",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "13000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "13000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia17a2w9wgx3p76w4y5uj6pkt34l9z30cmvp095hx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "77876990.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "77876990",
      },
    },
    {
      delegation: {
        delegator_address: "celestia177n4ptnw3utwjlrk8n28t4zf00afm379ej5k60",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "211651192.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "211651192",
      },
    },
    {
      delegation: {
        delegator_address: "celestia177h5g6har2ne9rhn5ekwlpgv7dtkjxp2765yfs",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "751883624.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "751883624",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1lft50ldy04u3szywhg38cnfpxfg7r5488veny2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1114520412.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1114520412",
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
      parseInt(txs[i].balance.amount) >= 100000000 &&
      parseInt(txs[i].balance.amount) < 2000000000
    ) {
      output.push({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 2500000,
      });

      worksheet.addRow({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 2500000,
      });
    } else if (
      parseInt(txs[i].balance.amount) >= 2000000000 &&
      parseInt(txs[i].balance.amount) < 10000000000
    ) {
      output.push({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 6000000,
      });

      worksheet.addRow({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 6000000,
      });
    } else if (parseInt(txs[i].balance.amount) >= 10000000000) {
      output.push({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 15000000,
      });

      worksheet.addRow({
        delegator_address: txs[i].delegation.delegator_address,
        amount: 15000000,
      });
    }
  }

  workbook.xlsx
    .writeFile("./celestia.xlsx")
    .then(() => console.log("File saved!"));

  console.log(output, output);
})();
