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
        delegator_address: "cosmos1qgy7pq9trkxkqakz8p9s9m23up36u7mxzeh4at",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101189878.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101189878",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qtk0k7wzlr62ul07auf4cz62jsrslxeewdqf9e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6n2sr6fj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2230611843.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2230611843",
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
        shares: "55442980.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55442980",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qnwky2737et89l4y9339gjkj4esz5ut3vvmqy0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "99990000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "99990000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1q4c6fl2uczr7jvzn999rtpwq7fhedrcs4rhgg0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55443368.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55443368",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qesvevs2p7p8apr5murjjz20sk0jsvf95m50zn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55441915.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55441915",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qm0q9ec5ylrgz2sz78j53xnrfcsse74ay3p2us",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "240506062.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "240506062",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1quun3k4usk4gyad8drug4j9rmsmng30a73pvjz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1q7x0hxpcjasvtv0cn7h0tqf47fp06ct2zr0uza",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50701231.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50701231",
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
        shares: "110306251.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "110306251",
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
        shares: "55523810.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55523810",
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
        shares: "55403499.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55403499",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pycauh020lezm2nhrw84dzu7jq98y29q3u7t28",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "372825423.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "372825423",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1p9hsmt9z6pt008v9rdfq5vv3pkqvnkrlh5w87n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "8099763.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "8099763",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pfycqdd9yacgcn7hqd890s3d5cgu0v5rfsxf9d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "179701242.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "179701242",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pfdr64xg3ak6mvx5g9cukpek57vr5mym6e5ywn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3500000",
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
        shares: "84147665.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "84147665",
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
        delegator_address: "cosmos1p34krywk2xt67yz0ju4c5dzz5u6lurs0kwmkxf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "166364221.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "166364221",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1p4304z6uxj5s6vwz8l6nd52tg0esemp3afek3j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62060795.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62060795",
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
        delegator_address: "cosmos1pedfdwdz4tnnpdwlxad576rnyr7hldzzequlas",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "517602859.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "517602859",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pemt63zctpxtmarevrjh0mwrv9mapnpyuwl6mn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "150000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "150000000",
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
        shares: "347550213.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "347550213",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pa56a9fg5jhxrduru275vn2y7fpkxmx6dt5zdr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "214351326.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "214351326",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zq5rkgsmaacw59ququcxfypftyukhn63e0ux4z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zq54z7d3qhc2fruy3sql9qesgunf47trqtqjxu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "76641764.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76641764",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zz2jzuzpvddertchc256nuny3xg5js9tam59jr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "116206334.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "116206334",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zza8552zc92yceaufpjnepdh2cu55xvj9xcpgl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "28000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "28000000",
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
        shares: "44066848.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "44066848",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zgs5nnwhpxg4sjyw7xerm4humluxua90hjprgf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "68000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "68000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z29j9acm70gs2ldrlre0fqlneaua2tz28t9t67",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "211142015.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "211142015",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z2cdy2u0v6h6fmvtr0h092rtevmku5v6wzr6sr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ztydpl2gges4u38rm7afs9rlmajk5sq64243dy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77622739.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77622739",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zsf4lp9t3c8lu7p4qspmq9vefmkmppuwh3cvps",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77397707.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77397707",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z3h4mm4f6n9cswxf6p4y6r73hzjy5uexkke6nw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55688535.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55688535",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zj2vpvjp2cr2950r350zp67py5wsnn6e20rhm8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zj04hzjgvdeqt3rl3ym4phf999hh89uqz6rh97",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "900920000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "900920000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zjldm3w2vynd5flrypty4hk7n9sypcqat4d4f6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1znaj4lqyds2jsg9tpmwt59r0mxn85at48g3804",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z449svm08e9p0544grvq7skv4ltfev6hkgmzvp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55372500.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55372500",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zuh63hdz94kf8nggjg2tsvpf6fu9du2fjck8em",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115200154.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115200154",
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
        delegator_address: "cosmos1za44ufavhsmhlfy0r5q8zz5pcsgvegrplx3kf4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60312880.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60312880",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zah9a5wx467syjz9frjhq9xhrq2fyugsuq7jph",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55639556.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55639556",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z7a6glgggrqhe8hzehc75lml3dz26mwdxxzhgj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55578282.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55578282",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zlmdnd2uem5kxx7rdmkfnq2wl5cvfjxuct0tx0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rp88lsash8lg0ltfq7pum6seqvgl49mj5gulkr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55441637.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55441637",
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
        shares: "55350392.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55350392",
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
        delegator_address: "cosmos1ry4e33rzh5rjdhyhrssdm0k5hp5vpy38p26m04",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r93c20xuwtxadwgfkh9m2swkkvn49jdeeaxwyp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55592069.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55592069",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r9lglxgtxvuh8033mu7utazagm4l9jtsl2638r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55440097.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55440097",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rxqas2m8n3jjvulgzsmks0ekzqp32arvrar2m8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80299536.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80299536",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rxwnxskx7w9jjecfzjve35juw3qxughstnj32x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1020999721.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1020999721",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rgj9uw4x5tf606yry7c3g8zeeqtrmamqznh9nh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "358959924.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "358959924",
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
        delegator_address: "cosmos1rfvtz0f7wkcj62t648s3k20ecjh7frn9pncrxh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51394718.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51394718",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rfkgpv4qah9arlq4gkpzjpu2l6gd32guuf7cvf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15542939.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15542939",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rtsce8m32ah3fnp9lu5ut9mjkczd7wl642mane",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "200000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "200000000",
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
        shares: "55440920.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55440920",
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
        shares: "77654897.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77654897",
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
        delegator_address: "cosmos1r0he8n9zq6quah9xnmahkr4yl8pdk5xja8mdtp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "89060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "89060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r39vukxnda00vv4urhfmqpjvfzknr7jrl0xugs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "73777359.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "73777359",
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
        shares: "55301654.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55301654",
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
        shares: "301829999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "301829999",
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
        delegator_address: "cosmos1r6knf70m2dlfljh9aqk87ldwvxshajj3mu45zr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54774870.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54774870",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rmtcl7m2pz63cgsvfxayuh54drk9sa9l858t6c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64225955.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64225955",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rmvy6zqfxgat2905wekyhm528vqhu989dz4tfw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55351513.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55351513",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ruphl50638rpc93vpr6nzaaw76ludcslzha672",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102837160.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102837160",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r7sp8qf07jtj437tcz47jpthlqw3ffthhh7zyk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102190695.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102190695",
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
        shares: "102966497.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102966497",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yzzxtvaus8kd0qhc7fvyuyrudnjqwzg4h7s6yw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "27799999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27799999",
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
        delegator_address: "cosmos1yyumvhxrvyyexvym7luctfxyfxpdthjtqmdtes",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "144290826.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "144290826",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yxp72ytnak32kv4c4hpp74x4myf3u424m6p7c5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80187275.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80187275",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y2swuf9serylhpx8ydz2rm96rtqhmy99qs6k0m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55583202.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55583202",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ytlw98tr8ujqcfq3um3sqputnvrl0tsq9c7e0m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1005980.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1005980",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ysthp74n2wxt4flmzyxrhza8rvxzr9mc3f9he5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "119341226.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "119341226",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y3lhsnzyrxfen69lrd4q9vqym4l9wwcxszggqt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25778875.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25778875",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yjpuqyt44u4wshvn00qdkvkflyzu3zqqt4tuev",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "104528986.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "104528986",
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
        shares: "113614040.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "113614040",
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
        shares: "887788276.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "887788276",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yk5lh5va8ugqpph9x83g5etadrktj9m07vt9tx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60159051.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60159051",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ycvqap8apkyd9u5j7hu9ukklzx34v6es02ycnl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "300383052.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "300383052",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yc3vdk0gatn20v55ezs0nef50vm8devqwea80f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "172973403.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "172973403",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yclrw2qxzmyjxjry0fwusdurhkqgdag8u2z9fc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10059579.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10059579",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ye3ku6ygpalzjd7q9585959fphapdwtt8l4l7z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "125000009.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "125000009",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y6h23fxgqvqdms62k04js0fa5kh79az7renjr5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55443158.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55443158",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ympylskct2ygutrmcxkrrc9g0rmuzu3r9n4579",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
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
        shares: "76715725.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76715725",
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
        delegator_address: "cosmos19r4ey2gg8k3v8mdya3h8wg2tm0xuuawk0tmkvm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19yk6wz0nszymsk76gnvm5w89gzeh69eq5f0nxm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55557666.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55557666",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19xuvslp4za626qlpg6vrqu20gvh6n9lj45dmmp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55378881.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55378881",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos198uernvg4gwrrgxm83fha4jywml0wr2jsl9m86",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55352344.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55352344",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19tzhedlpau94jvu5v585rv2t4wrlpem3dlfv29",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "41467066.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "41467066",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19dej9nex9sj3424eernwjs83pw75rt3ky5ttnh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "203000052.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "203000052",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19wmlrdhyf85fly7mqhm4a0jr5qa4hlvqpregkl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79813170.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79813170",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos190wj3tp2m9r9u42grsfhdm7errkca3uwgnfqrz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62008391.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62008391",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19svdw36vq0h6dqkafkmj7ny5qkefekuc4yr988",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25803985.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25803985",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos193d6vvajjxzjfvrlqd6dq8nq2hgxt09z68qtvm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19jhlpyjx3p4kqh347323azjuhnnew95rpag9uy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "198000001.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "198000001",
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
        shares: "15462899.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15462899",
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
        shares: "323281881.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "323281881",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19k650hvvlzxp09c2y7qz6ahz594ecqu7fa5q2l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55440904.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55440904",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19k707df99htdtcf3cmgmyxy54uafh0x8xj09hz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "18479999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "18479999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19ehyjh58x66tqn3d4pwmxd0uzjvkmr36azcw9d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52926937.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52926937",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19eu8zmrzzt05l8yap70ur5t5fdzwgt9p353l9s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "27463932.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27463932",
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
        shares: "55639735.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55639735",
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
    {
      delegation: {
        delegator_address: "cosmos19leyn03afswk92382pnlh6amnz5dhy4nl0kx5f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "107938411.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "107938411",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xpf42qf48tssgfu3crcq0eju4qfqe849hm74gu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "155000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "155000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xpcl957yz4rvh2vwgn426lp6hqunqgq5qy5h98",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "124534225.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "124534225",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xpavyl06wekueu4x4kg2424ex0dl9ww3g29thq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3780000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3780000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xzq3z62dvsrlkpmsw8ju4unh95sr7svzk60ngq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "970000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "970000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xzck3lmpwsh4d474d94tl94tfate4tmwzemfsd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55379367.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55379367",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xrwtgkzmedun54rw223z9q0r2jxcs3u43kqz63",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1001109901.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1001109901",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xycg5zhzegs3k933awjdx0y0uxs2cw0446k52n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "26056968.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "26056968",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xxhrv2gfsekmxtqh2hx6fh0yl0wtqr4j8hm54y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "149199999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "149199999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x2hj089n9e977xcgcesut9tsahly3a8cz8wcw6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "31200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xw4de7r3zfeqdnuxv4l563exhvu0ttzyrjnf2y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55374344.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55374344",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0nxx37t8c2ep23ljqkcnwv53nfvg4fk5ug26c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "133684719.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "133684719",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0esf3ex8lvpke6ej22ctszsng5njdpdue9nj3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "132410998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "132410998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0ehtkw9zmd4uyqtrquqm5ph309nygvg76n8t9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55639872.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55639872",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0uutankny38aqwq3ueyd99vm0ngzjkzk70ajz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xj38fh8lcchspxx7a228ntz6nzgx8alv9q3wg7",
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
        delegator_address: "cosmos1xjjp6t2d2zmd3wmzzsue9etpuaecze9kwxfprw",
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
        delegator_address: "cosmos1xnxzdpn8az87qfcafl92qtpsh5feapryx6hk08",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "172263141.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "172263141",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x48yahxz85fvmhma536vcqj7tmygfmktkg6h9q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "155300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "155300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x4tgtyq43vffha2tsywd9a9k0g56jny5qas02t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "12000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "12000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xeffrgx2c072xesgsrdknsvyxsd9e509d85j2v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xeat2nmddsmu3qhetz046grmdfmhmcurq7ys8j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "26100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "26100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x62wngd9tle8naxec2dr0s4c0ryz8g8cc0vpkj",
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
        delegator_address: "cosmos1x6lk0x27572prmys8xfyxqmj4vv95nar7fz37m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10201582.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10201582",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xmkmex07esul3lzx804tuxwcy0tguq00ld5rlg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55350758.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55350758",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xu698hpjatdq8qaxdd2h3lq9766558qqu37vp7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "59494599.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59494599",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18qn5q83vh6c5nnz7nlnrcgpxjac8plq8l3sge3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50120000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50120000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18p8s9qxhpyar5c9kktye5qvyymu477rhqhusn6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55439539.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55439539",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18zrr2q8kmvy99l5f0vm3tju6xlndfw3z4x5x2l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55365512.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55365512",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18rkzth7njet2h64w7fv4fmy0vaknsgpmfewj7n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55378449.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55378449",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos189thjxfd4wvgvdavc8anmn2356qe7a468m9yve",
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
        delegator_address: "cosmos18xwmppmpwatmynz5lhketu5pv5r33mq45pwy25",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "68698515.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "68698515",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos188q0e9vyq60edst5drr03sxahlzre6yhfe3sdn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "109896721.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "109896721",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos188s9vs5zhufhfjfdy8nl3xglqeelynsu8q5mys",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "451652393.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "451652393",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos188ky764whe6vd0546yn45gquhe4jmu90hv4vse",
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
        delegator_address: "cosmos18gn8ga2fvd2v9mvdpxm98zmd7lctmegnfr3lk4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "111607278.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111607278",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18txz592859njcw339805azqskahmn8zujqu7mg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51006999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51006999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18vuyucw6f7n0elmyh7ygg0v54s86e4d5ea7uq2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55436513.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55436513",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18v7gc8m6trnc9rr28pkfk5j3ax9wmpzyz4yjcu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55447232.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55447232",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18nf84jgwkqypaplz45xyf3yegpu4vvhzafe09d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102192579.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102192579",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos185fkw70ntyc0vlvrf30grsxurfw2d7cp3yaq0e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "232441347.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "232441347",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1850rdjq4sf488sad4qsj64sj2s8h53z0ehqekx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "696110006.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "696110006",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos184mdhx7jq5al582e6t3ssdev08ccghk5w3td56",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "112000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "112000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18kvjxrrp935gss49xpuqkn285m64zs9vupnw9r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18km2q4dndvukf0pjluq5t2rxyrpje2ju5tnw5n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67454765.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67454765",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18u24lfg5yx0yhy6gdejsjrtupd0k4teh50pu3h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78474902.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78474902",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18ank35aua8ftetpmvcsxwdqy4phelteelw7lu3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "619000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "619000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos187jy6cderlfwwttds33e6cdzntx0z0gh9qrhee",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "264159226.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "264159226",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18lg5ngs9z9sge5g2jqlfp8de3xxrd8egvm5a2m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55286474.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55286474",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18l3v435q04cmxn0ec45r3vwxdfl3har3atcfhj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "850010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "850010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gr2sqfe62mhkqf06cx8tkvl30xm727lnl2g5a7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "538745790.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "538745790",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gy43jhm7wxnvxkrremq6c7kwdsn96vxsrxugl6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "644850000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "644850000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g9pqhuxdzvg2m5vnsy2k2r7yq6tywunenw7qm8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "135329744.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "135329744",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gxa40yjrgrlt2ffqka8cgycxnhlq9kd284qz8u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495966519.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495966519",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g8c56wgcxlgy9aeq3hm82vs8t6zyw8cssssa8u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gvzt7u05m72gk0dq9hwaddn5m0m0rxw6p76vnh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66000002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66000002",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gdpqt5a6npdwzxjv7pvnpa9uucsdyfdf5eqm8q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55590048.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55590048",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gd6zzn5lnz4m2hmg7kaf9x54pzvyg08rqhw24p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55368042.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55368042",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gd6twrfw7p04797dznh0u98q9ykc7d24pqplv9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50749999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50749999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gwh42aqnppx7d8lxuhkafh86ew6f0wrj6njmfl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54283420.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54283420",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g3uz8nkzq9zrdemjj82wvl5w74u9e8yv6zcp2g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "6120000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "6120000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gn6w54uge5drhx0gskdgva4372d8guxhpwc9vt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1000000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1000000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gnasfq4qq9kuwphp7ytq50pg6f4pzqs4xqqe84",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302441376.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302441376",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g55lwffzeeg0flc4xakrdj0n2k8remryfy7e6u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "49990000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "49990000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g4ppjknr54sxx8s2swfhcskckkg4vm3uf70kry",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "289084396.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "289084396",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g4sc87hqwrpmq903r30qpqswwwgnxm2yhg9ag5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66114431.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66114431",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ghr4adcszv75aqdfj20ycse5qfqvxhn35e85rp",
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
        delegator_address: "cosmos1gcqdpgclyuk0slj9whf5vhjyyyx2hv6rhv7rlw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25799999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25799999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g6v9kur3xjkecn52m9fefz7982859fsn7chg8t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55384757.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55384757",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gml3fglpwc4hcc7hvfz286gj7za4w469cadlt8",
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
        delegator_address: "cosmos1gaq2c48c5glrxjfxlqusk44a0pv69jqwlufpfh",
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
        delegator_address: "cosmos1fqf4rzzd8wurwks7klgg588fm5gjt6tcvk6j55",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "26152554.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "26152554",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fqhg38uuxweyfm9r96t2ceynhr34khaq2q66mm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56437711.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56437711",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fzrjfj57qyzs70ly82yn5vypacdvw6zt7mmstu",
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
        delegator_address: "cosmos1fzkgju5ekp3tavmdhvdtvvpq0zswvuywp8dqm2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74393379.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74393379",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fz68xrzzw62ffvclylmhusdqakfxly07t3dnt3",
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
        delegator_address: "cosmos1fy53muehr0kwg4d0twhxg0kzavl4uev75t6ptf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100993699.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100993699",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1f9dge7nrtrlxg24qekrwk24nxzmzlappjwm88a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102495136.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102495136",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1f8qxs3n4pstp3ddfzt7773w9wl3c6c04ajzye4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "282341411.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "282341411",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1f8pd9jq02utcua50lendlmcg6gl46mwyfu2lka",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55630627.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55630627",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fdaz0u5x2nwnfp8ppdhryvkemzq8wxe4hnyv7t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55384617.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55384617",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fsxfvyc7j7mjrh37t2gycufsej6vcgeq2e7lys",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55892032.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55892032",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fs6k8ynuspsy7zgkfet52q0pcj4xd6s7w0xypf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55365397.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55365397",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fslf7vf649ys7vvszqtr6nzaqvjukv5fn9j3al",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "38489998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "38489998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fha8ltkqccqxquvhatceu2saqaksmzlsm0grdp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "27000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fc6l4hqkulm2lr254yuegt6xx9700q99mky3xr",
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
        delegator_address: "cosmos1f6gehrngp29zf7nstklu6732nrwdykaaugmu2u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "36110000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "36110000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fmm73hyuxnktvcdcjztgxxw3c0e4gdsrtyzvsj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55471952.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55471952",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fuuuvgwsrrf3zy46azu22kzrskww9fte7wljh9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "17320000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "17320000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1f7swvam7xedj20uz25hdpl30dktwtpguehh7t9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "14000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "14000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12rr0aqk475l2hpg7ud6ku8k96c4smdaurtu4ya",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "63723456.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63723456",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12r2jyx6uxuapn5p275p3qyqtl996r4swh9n46j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495120.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495120",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos129nekewj7wj36p6lwp5dhppyau0gfn57guzuwd",
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
        delegator_address: "cosmos128w8qtnpchawwqraymhnvc0ygg6ecwur3pyfke",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "73969225.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "73969225",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12grq435qhlpnzqk5mwaufe4d6f5x0g44g652au",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61176812.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61176812",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12gkhm2kxpe9w9452z0ry0qkf8peejvpva9atza",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "180627046.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "180627046",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12fx2fjmpw98nnwklxs5e57tdqtwssh69pj2mhw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12fxj3ursfc5dufl9nxfk0mwpmrzhr6arhwsmqy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55393973.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55393973",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12fswwevtghea9n8r92uh55e8en6yf9ff6e3sgv",
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
        delegator_address: "cosmos12fl3cfeev4gxc045hv7jjwuygxuks7cvsj8nla",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos122pxd9pqynfh2lrta9gqftct2hcp28aqc0k6j4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12trcwfd0e82g6904ntgka7y72efjp82hwr8gx6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "65054929.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65054929",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12w932cswf7lp9q2lfmwz2nuhjy4uawqw5vpzv9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "200100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "200100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12wsz2r6kfmn9j0wc40x3z7d3aqxkn0dlk2e3ue",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "7100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12wja79def98j3dxu3t2wuu2ns8wru8vvykef3t",
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
        delegator_address: "cosmos12046wpxqwxr2kexf4x445jhccdp2lum7g9jp8j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66491813.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66491813",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12shjzngyxxej4e8qrnlerxfkmq8p6760hx7pt8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55365520.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55365520",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12j44zpvg5xc76z8a65gy7mmx06s7g4jm40cy9p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1709583213.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1709583213",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos125q7z67vf0z5nnqnrx5qwpg5qnv36sw6cfshay",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55637465.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55637465",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos125g8ggctyw8d372u6nc9k94yml9exxkewdus3p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78106678.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78106678",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos125kygesdxfk2s4kgmqpyv7dhh04waurfdede8e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12hvsxy7kj3l8sgsrm6je3kr6fkwtjml4w2sysh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55639824.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55639824",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12el8k6fz3n80mv2czz6apdxplsnpxznaqsrcw8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "4000007375.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "4000007375",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12urcu3vazkqx2l7wg4p5vgcjces5xpmz09pag3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51597957.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51597957",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos127cyv62kgf0fejazqnm2tuxq0964rh3vyu07f0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "19018005.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "19018005",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tqyexpqefuzypkmvweyfggx6nd9wv62elk2jdn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1592938.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1592938",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tqxp20jajr2z3srp0spv4m5gtrx5qvppgsyyzl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55296749.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55296749",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tyu6854q0vlsqpmvaasr9043cwfrtmu4m9fhzh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "183000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "183000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t9qy3tz704mschxd7ne28k37lygpttkwzw0lvr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "107400000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "107400000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t9dje4dfeu3af5rc2yxsvyeu5td0a2v6qp3dc7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5060062.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5060062",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1txcejj0dgccxh2dml82pvch8nsgvsxc5kaxjhw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "127000076.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "127000076",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tfra3cjj9m7lhtkfsqer08ctp3gscyck2u6sgt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "35533399.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "35533399",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tf3xcpumsqtzq99pz5zy6udn3q9vwkd6h7su5x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "538073169.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "538073169",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t2vtt4qzhcgg04czu327vaxz0v5drg2wsd7m74",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51003212.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51003212",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ttae5hytup4h35e0e7c2zr3rakdmyknhhgzqqr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "148000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "148000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tvl8kh6002dn0gdzd0jkksrj5fk0wdk2x6jaun",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55442255.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55442255",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tdxgaxl006u6yxkxfc6mfzgu2hnslw4ahw6r9v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55683586.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55683586",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tsh8xchd80tey8s2ken8ham3ncrd7n79udsrta",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102720000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102720000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tnmw7fs50knzh5zaxv8e4kdpfmgs8sv75g9y9f",
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
        delegator_address: "cosmos1t4rmctyr0yz78uwyphxjyvy9z7e5n80mcptel3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "134517573.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "134517573",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t40rgwucyplzsxq5vusuam9kwwnzg3hhkrnqxf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "36240614.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "36240614",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tkpunuafvp336nsh6y7h5pxk4pzj9ue9x5x0sv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55654486.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55654486",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tk9ecdjc59ek3r3dsqe83026jxvtlr0k7td4u6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "282441389.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "282441389",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1th70a0kldrx9z7mchynthshr5rtxnru93neaxc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tce720rz62cp4zdqs7hmgas5m9wpytzsm54cft",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55366191.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55366191",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t6r7u6k754sve8j8tmrhnvh8kvh0r2x5ue2zda",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tm63vq4v82pjux6svmvcn73vff3ew6lj6fju98",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "13999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "13999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tufwp6sgrnh49dme3hs62dafvckmtfae8f4gd5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51000431.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51000431",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tamuh2ej8nz4ms7dsw4lyvsdq8wtvpxumxqy8t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2000073.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2000073",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t7ycpyxs0qlpdzfkpuj4z9x44xnakh7anr9g2r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "117950000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "117950000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t7gdzehwj5snn8hqg97dejuzj7eym42avechcp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246064319.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246064319",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tltyd0cq60zld3j3n3925gs2hez0htlutjpqud",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100331407.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100331407",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vryjyl6rmxsk86yl8uj2jzhaj2e5av8k9zrf7x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "109800000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "109800000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vyruk9jpqsvjghar52xmnlprc6wptmzr0hmcud",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "14329124.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "14329124",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v9hnnh7qtv8x0sycn8ka064xqg4hw7jzvph4yx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302284262.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302284262",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v8xyfc89k9wwzadhh0ktzsphnsgjwa2zxfjtmp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55463320.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55463320",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vfakz5sxes5ccxx24l8rwsvm5rnzl22jxwxaqd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vtvg878568vevn0vsupfxvca50eueycz66fu2s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "298537508.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "298537508",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vv82mgf9s2uvjre4449ugr3ljyfqdpzhypqf4n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vw9zdq0yxuazrsa5hsksd5apdsme2etvd840mj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246063987.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246063987",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vsjdp8j4047k0c9tdl93v7xn7wpfp4a70x3g9l",
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
        delegator_address: "cosmos1vjymkucluukngrzyp3ykkdrj6mr6h7y0ue4zpv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55970057.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55970057",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vjya059athc8fzpw9s8g4tl8gfde0tam95hevj",
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
        delegator_address: "cosmos1v5qkkfj0rf5ae24aj6w8wyqjskrjmagnadadf7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "76492724.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76492724",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v4pmzgjvymfv2vwncdg00zfpa7ttu9ywm62llh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51989600.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51989600",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vehlk38xvjwnw6k8ez0d9rhxr8eadrmhpvf5xy",
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
        delegator_address: "cosmos1vmqzksr4zqp2mjqm409rpq5ehdm5dtu7he6rcs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55369458.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55369458",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dqf5rg4kccq558f29qa02wurmcmrapch4663p3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "763557593.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "763557593",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dzrd7jl72hq5n20l8vyr3sy8er3j93kuhpcsua",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1450000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1450000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dzjkd8xq8vktnplrcqj7n5pajdsmrl027rd8qk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57882439.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57882439",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1drwkkq7awmrel2xgk3mnm9esuk769zc24wvm7y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55394997.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55394997",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dy7n48xwepw8jgyjrm78u2ftvmr3kygh5k63a5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67168621.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67168621",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d93ggvd6t3qnna3w280ax9g6j9jzr69eavp5nt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "205000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "205000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dx6r0dy0admj0lc35cukwdgjnr8z0wrzmdd8rp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "68600000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "68600000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dxlzv3nym93x72t6d5rtaqzre7skke3nc309cs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "253839683.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "253839683",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d85ley9gr82fjnvvw4pekumk5xz4dzrnmr3smk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "407423406.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "407423406",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1df7k9lwv55u7tud340n568h0wekrddqdqu0eht",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51470239.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51470239",
      },
    },
    {
      delegation: {
        delegator_address:
          "cosmos1d24cm9ralmrlwdg5j33ajsuk6ksyvupduj2dnr30cx73zw2r8cwsruhmm0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d27jtvp26d2ul4lwy6th9mqmwxvp68pjh4r9yj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "852050115.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "852050115",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ddrx4py2lx07vpm3nkhgnahsl52j6zd6m4ej6l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "125000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "125000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dd4nj8ygfx7yzszu4w94ct5uumw3mwx4r6p44n",
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
        delegator_address: "cosmos1d09uu4uu3j7ht2rqnpp7xyv564u87s9tl58279",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55369567.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55369567",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d076ek2e7m24jskmlgamv7kut7df892tks0c0a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "138169716.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "138169716",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dsyujhxllacu2tfmwj4g65g2mredmd4zuaa95l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25681278.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25681278",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d3ds5wtlgjh800c9lka68puxpey3x2delnvst6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1883956166.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1883956166",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1djssj3erkjh9c0ha6da7ap473kkneyc2amddl0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78449087.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78449087",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dnj49scrz50wg3r7lwjezl642a8f5f6w7mcmel",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30231272.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30231272",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dkm9cut6spwyg0e4e7r0mwf7p5cuezhpkyk4je",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "31447709.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31447709",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dcxt8x7emfmz44jtqz9ctlres38vqstzmvnk3w",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55486715.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55486715",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1deys4whsyhlrafa3l4czzv3a4su40mqh66g9g7",
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
        delegator_address: "cosmos1de88sp2h3955ktrjgnm0jkhy8dttsgdz4nqkxa",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "739551837.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "739551837",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d6q04mwukqvu06ldsy24qnnt7kcjxyq9q390s5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74565657.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74565657",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dultlt37nav8y6l96y5tzq3ghz7mfr3lr3zlvj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "104916269.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "104916269",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1duls39pg7uqze7vpz65n22re72nycvmreue9vw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3501354157.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3501354157",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1danvmprqfmhqspe0sc7cyzg9zmxfy3zs509cqp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55442336.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55442336",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1daaag7ntf0qd0u2juue5w4evf952fs68v8twz0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "87000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "87000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d7nuhps8rjl552dv2xg6p3tdk552344d0dxr0r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55365268.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55365268",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wpxr45kyyzzuaz6s8h7g33d0sjxu9d00j029sg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51050000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51050000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wzqdjudqgvu39tauqmm6nk4zy4aj3wqd2z9qgx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "23130000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "23130000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wrfdzjw8evlaxsfzc3s7c4hwh539340acclrkr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80369219.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80369219",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1w9gcxhaxj8f0rjlkwwu36e7elj9aqmj39x7shl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1w90axmgz99vz9twceexyjspxquhyl0tqt3yh4p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "65996898.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65996898",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wgdegtthkx0n5fmyt2l2xn9jchywffack25frs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10010818395.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10010818395",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wgjawtrsn27j0qsyfl408rf7w9gqlaz3sw807q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "38236630.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "38236630",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1w2dn3m3jdy2ww5rywjqw6n442u86v68la95zrk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78263513.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78263513",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wvrn346lgfsg4zcaacjfgkzq0wdsvds46h364g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wd0867jyazkkuepypfsupnunygv38cg8rnz3de",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "182041452.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "182041452",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wdnc6mfpcfs8md2cvm3gyfdzw8v3mcx8sqp2xt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wwg9r2s99ca9esdvugg6w03zlatv6kprujtvaj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1w0h6f8wc96kam6a8x2hp85ruesjvvlygkmplrg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "9999998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "9999998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wsnugpfldutvrtl9dnrg0ex2ggjkfvul6te34v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55441867.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55441867",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wjt0p3m62rrpugxug4szqgj4v5d3l8llp6qqn0",
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
        delegator_address: "cosmos1wnzehu6mhz925gscdetf4htg4j4w7pf35wmm5q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "97339897.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "97339897",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1w5jcyzsvx9ucdx6wlqqlzcjdjgkdckyhuqy9na",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "627708225.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "627708225",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wkep6k06rqh2vls8t5q2jjkdn4z803alj59d8v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "352483099.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "352483099",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wcv554d490tav2qgr56epg5pxmdykfslvknmp9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79993998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79993998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wmgnd36m2nd674jg245wu5m4dv04vtsr5dlqew",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "76606931.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76606931",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wl3xq2ktgeu0xxyf27axqvnpufft6vjzplgxna",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "229900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "229900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10q8z93hgpnl4h0fxjye58erz4gp66v3q3hflx4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302441391.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302441391",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10rx4suuy4qy7dx4wl4x7kwvsv6f5y6a3gprct7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "537000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "537000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10rhg8c8eagp2zad5vxm049vvncccmyvd9u39ta",
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
        delegator_address: "cosmos10yp8ey37pjt4y5cr6nl2dstqjyz9f5k9lnucsj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "161080377.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "161080377",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10ytvpz593vw0w2cny8wcj9nyqfc43gfstgxaac",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64380023.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64380023",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10xsp3mltnkdyl3n8xh2j8g5t6fzm32n8dx90q2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78289913.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78289913",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10gdnpv8n7h8zxr7pq2xf2hrlkpw35s8gcw9ut0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115790726.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115790726",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10gs39flfrp60yqj86qqezw85e6gngju5482n4r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10guvn4243qg2l8ey8gy9zwttz6v23232c9juzw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "6950500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "6950500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10t6r2xw3496d0r84lu9vprm547uww0szp5nd4c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "86728010.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86728010",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10tlfd8ssydsz3mjy4r2lkwran6shhcvkvv79lt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "105543387.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "105543387",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos100ha9vhqvr7qrxxxhdq8hskrncjtlntk0jvqx7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50370000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50370000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10kmlfy0fd0xxevckr4u36ms72q3wplxcnvqr5x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10uz3z6yr37n7rwp4wyq2sgeuadx8y45p280uft",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10uyrwwakpqt32y05gensh6vf0s9w9ccejls9yk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "76519333.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76519333",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10u7mu6yygadq4ak27wqgsexhjx0dstjrs2g9pe",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "237450000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "237450000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10ar5cuwtnjqrjdjuxx0fkl84uhgrfvsdhj6h88",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "76610056.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76610056",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos107veuh322w57zvwce96xjx48j9cmk4c2rwfxx3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "119899999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "119899999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10lmt0uv4dk7tyspe8sqxem3pexvmhw6yqlhmv9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74619367.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74619367",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sz2qs3npzu83f39ha9n7hv3fhwtxljx5q7z4f6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1009303.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1009303",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1szw5zdjh4jyq2yprdrn7shw6jv3my96sd80w0r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "133988205.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "133988205",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1srrk9qyuc3255u7h8zk78n5pvu3vatt95ewmqg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245984299.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245984299",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sffeftq20xz05lk2n2z4u80lmmtre855r8xt9a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55500372.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55500372",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sfdhlsdz9ecamff2jfntugkjcw5cyepnfq2nr2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "214957003.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "214957003",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1stvxat3uxuvw99gl8cek9faa2mt6ma5tcq0c5p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55542637.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55542637",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1swh4mvlen7hql48c2z4t2hd3ag3mv9le73f7fm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55641528.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55641528",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s0gjejeatng87y54dalpcx6qpegzvqknssrpga",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56008676.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56008676",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s0wltftrff7889rslyep8qvtqtsa33ps03vdu6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50742602.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50742602",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ssfj0wxp8mc60y38q20kkg7ysf98n5n2zdrcsq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52100367.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52100367",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s38e85lcx8q9mzqsdm53esnxrt6jr00z8w99yl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "522575227.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "522575227",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sj5zyq6pple07fsjfghy80wc0s38chrxmys90g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sn6mlfkzcvrhf7uj4w03xnh0dgleaq3vty8ese",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78248038.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78248038",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s5qj44ta4pelugjzujtjuqpa3t6ynh7qytwv7g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55369988.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55369988",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s4szs2h38m5g20c7cwg9nve6whww4e099vhzs6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246049233.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246049233",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1skestt06fksc8sfp2vcssuww32dzt5j4jmyxth",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "172980520.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "172980520",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1scsprmjaac6en9ukg89nqkuz6z2wgtyr3pgxgf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55392481.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55392481",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s6fd9nyr2n4dgcwa8elkq4j7fv0s5tn4yegyly",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70323439.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70323439",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s63zncrcargfau4xfmrpvzyn0hndg2n7nusj3t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "105098098.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "105098098",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1smq0qz39r8e8awga8zaxlquftkzxldr8v6vl8q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "157000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "157000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1smq5tgpst86x7aawvvw05up6jnmygw4p54jm8t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "59999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1su0p2tyhph4hv6ud22c057rz3f8gfvrs3ym3ju",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "205942880.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "205942880",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sljjz99j9ath2s3j0wsy5sut34lmyz3pttx0dt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "253139629.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "253139629",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13rsume3rulwc777eukg2vr8r9ewv9yng3m3hzg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "150484950.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "150484950",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13yydpnf6800m6y4mtgypm7hryqd4l9a0t4a5ce",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61595426.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61595426",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13yh4cn2r4t2zam8c600d7zakd869pxa9d0j8r7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77797034.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77797034",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13g2d2a3xnmmarukenpnlnklydsxre7wcnc9wkc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115024950.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115024950",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13wa6fnyfcxz6fhtuhdp22fux0zqzfmqcxn5q6g",
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
        delegator_address: "cosmos130umlsvuey3ss03p9pnmnww4mx3zta4sczpvpz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "712660544.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "712660544",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13sq2rq4azkcv5jx3hg6fkpjf8l3glntagk9dcv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70114945.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70114945",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13sdqfpxsal48xlmspyg2dzteyqu04dveg6kqc9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "252041574.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "252041574",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13swu954acp5xtn7l6f86xqanwfwen3m5522cn0",
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
        delegator_address: "cosmos13s4ek4t024p8unvp2vx484gfgkpv7xtxtk5j0f",
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
        delegator_address: "cosmos13jkhp3gp2enyhnp54txq8w5aw77aaqzyzpaf3u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246069263.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246069263",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13jungz72perqhfkzxhq77g37x3mavaw3ggrpnc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78878803.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78878803",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13n080myq5az7x2tffz4q0a5u2nnpk55m9nntcd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77285079.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77285079",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos135vz559nhcmvyta9y5juee8fs949nc8cskxejm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246069224.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246069224",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13hapz35dfzuf9ult9vw7qdsag83r99qzdmdgcr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "291665196.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "291665196",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13cvpryh3pvrjv00dlfsuzmzwytjd09gfpjudeq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "111595522.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111595522",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13cnywaqc8h882k8p29rlsajh2qgy74fyy2gp7y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55288653.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55288653",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos136gwx0qu3jlny8l6h306m58wprzacxrtavakvg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51479433.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51479433",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13uyv2mzgrc4r0c8aslsvkfy7dcmgflq07cgwmr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "20580000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "20580000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos137tlv9g4dgm9jq9ucwcd5mpp7w4agtzurkf60j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "658336078.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "658336078",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos137hzsw2n0rklw78jxc92pyd86vg42zcnd832ye",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "176000019.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "176000019",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jzw2yxmrmszhf288manm8fckql4979zyfu37tj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64923244.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64923244",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jr0e4le4kr7ewtsvujrqzcyjqn9r026sr0ehf0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "136000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "136000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1j9k9pjf9ytwy95zafcgxmr7mprqaqdz937tf3u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55237807.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55237807",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jxd29h6ra4taagzxp7k05f56u50h9r8zhk2q9m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "34900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "34900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jgpjmj0wlr34krplzhh7dywarfmkztuctzny5m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "114903490.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "114903490",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jgyty590k5ejhkrnmd8ez52a5nld0pefp7gkt7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "31341986.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31341986",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jfvwljhgmvpfya9pgepgqut7a9nt7llf358e7z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55394027.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55394027",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jfwp4d5mg93sapd67r4274f8y8tg4xn7583dw6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "103710408.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "103710408",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jtustv4ghy997d6catge3mgklszkvve6jh8ngz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "212000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "212000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jv49xjqrvwrma3z44pzgw9suh2f6xexkzgkuxq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "491215404.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "491215404",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jdgpl7lhhcy5mmj2et9uckm7q3x8yfahtdypgf",
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
        delegator_address: "cosmos1jwcdyc7j0tjavkjn7628zq7dtzvc9fpvj4ljjl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "105000087.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "105000087",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jsmqhawyu7sm2pquf2jyp4a3wu8jn5ml64gx5n",
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
        delegator_address: "cosmos1j3qv4khvemv2fgk9a6g238g3suyqatahgqy9mc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42399158.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42399158",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1j30zxzpxz2sdt3999f5c6rxx8pdpj5dgyynr7n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "89999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "89999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jjnj8mk074x2tngqc968d3tul7fhqegr2ev59a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1j5cephkjpxqt4dekw0pa0ly6y6pqv8wc4zv8qx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "41000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "41000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jkdqeuc55k3rzvsxksack6xhn0exgzh364t47l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1042065094.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1042065094",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jht42k4j2l3jyulqegvpz6s0t68r7tvzm55akj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42899999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42899999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jh6s6eumd7lldmeppzly7a3r36kxwza4n0tgtw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "19916719.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "19916719",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jcrrk8zv8eeda79z8huqucp2k9g5ee3lxd09v3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61158449.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61158449",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jm0kl0mkk32dsrrprvzepu95r2lg07jayhztcf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56454567.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56454567",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jmljljjerpvw8fh0gp6m2x70937qznl0tnpupc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1485013167.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1485013167",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jlu7fqmtfkd7wj3nz53ta7yj4xtvhf4kl4uxj8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1154413.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1154413",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1npurzcjvq9rd29k29atvxd90732z4lwm374vrp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "650000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "650000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1npu9lyaf0ve5hrr30xdc8r57jje98tu53j5fvj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302441376.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302441376",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1np7lw8vrztrasq3hrazmydsgud793gkmm6hkws",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55376049.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55376049",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nyxh6aatp9fzxjcnsxgl47a7ax39ajerkdk6yn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55288396.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55288396",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n99n5vw2frut3mauz3k5xet087h2chkkmupa06",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "9000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "9000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n9vw0aeaw5c52kdlaq2uxm5dhq8ltx50cdqnf8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25759514.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25759514",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nxaphw2f5yc2vczsheje065cvxq59uw7ep8epp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "43732561.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "43732561",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ngx7xxgfrnguwkrjyw3uecr95krl26sp296da7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ngms94pfxec8qvpc84pn0kecwz9x3xjy8a26uw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "151762525.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "151762525",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nfq4mqetxtgs630srlw4eu2pvf4u4346edvply",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "16508549.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "16508549",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nfz6y7zmcg063ljug8v3jv828vgq8g8pwv90nt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55639672.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55639672",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nv8ut6satvywz2crtajjtdrex4mx4tvt6ppnyf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66986800.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66986800",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nds9crp3dh8eh26jemlaryt3fjlm3vqnt908ue",
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
        delegator_address: "cosmos1ndh5f8vhywgqgc30fxwvsyzewlpe02tjghrll6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51463146.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51463146",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nwqalvvczx5z27e97m35ynmje5l8uc830p6ljv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "14776586.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "14776586",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n0hdmhp8n55dtcq3n0q3at7t9v3taxcjs3nv39",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55442192.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55442192",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nsqnul9j6qutnkre73warcpw6y4sx9wql8pxxf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "76435588.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76435588",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nswpdzhvvj7z3waul39ckgxjd2vtmdy9c6al8h",
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
        delegator_address: "cosmos1njqpx444qvmq9q9yewupn4nztmsfzvct73tek2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245987091.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245987091",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1njfdetrhv2kj4kl489hq7dm0mmxcmajnhv5xf9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100289725.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100289725",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nnh4thxglkdcp0h2kr7t53rqakrmlwvyg3pczz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "155732435.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "155732435",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nnaj09ssuey2jlsjsk7sdz5e6sregvud4prtvl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55442594.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55442594",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n5jj462cvekx8z0syz8u2gmpf46g2csx07888r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "150664664.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "150664664",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n5mufnd75st2ngxsl8xdh720larfvzkvfglhw8",
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
        delegator_address: "cosmos1n45t2sknp6gjj85f25sazprq7q8kyweqz4rlet",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "816625665.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "816625665",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nhu8uzk7qgjjf6nvn7clshzevz82a67nrq3mqe",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51568176.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51568176",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ncz2g0pw7jg80tkwhcjkktsw37n3k2qzwndxnk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1535543997.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1535543997",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nu8r3g0nckm79tpmlvl06lj6pacve6svqg3xwp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55261788.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55261788",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nuu72je3qqzcymux20c0g7qwc8y4dzs6w2679h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78328311.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78328311",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nuaefncm0legfws3w6efpjlm34scupyxjyk82r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67199581.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67199581",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nanyw77wedg4fzccxynuyqe6rchg00nzfcjhsj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55609925.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55609925",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n7uf0luy0ste3lnwcrjc5fssf6wxvtel8hpezj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55376436.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55376436",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nls090mftwcg65f4v8we74wgzjjat9ags6tr0v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "76116555.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76116555",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15p4z9ccspfkrahrn7670q5ej08q7fuc0w5nee5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55534271.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55534271",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15z8vvhha5pf7944hqugg4g5dfcf6ttj4yv9y5g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "459724578.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "459724578",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15rl694rynm8trfd65jsh6s00qgumrnxgu7ke20",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75166563.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75166563",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15yqm8mxj3lkwpy9xszl4lccm4rdwvuhd9k5xns",
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
        delegator_address: "cosmos15ypjfrnz4trstle6g3e0zklwj3f83pu2zjj553",
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
        delegator_address: "cosmos159f2g2zn00n8qmru8xzzlqeax3mft0mgme75cz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66957212.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66957212",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15x84rgw68x6v42c7drsgwng0dzt8ylvf667hrk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10107446.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10107446",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos152l67q44deyj7t956f2swkjza5rznm2qfs26ts",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "104000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "104000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15s3raw658c6glx5fe8hqxla3ntn0mmj00yru0m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51528473.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51528473",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15scds0jq9crvvphgmnkxuvnycj64xj9lddxrc9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "600154725.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "600154725",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15j7g66x5y99d9kjs0zvkvejgyhpgfael9jzg5j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "99000040.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "99000040",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15n9me5yykqtedf80zsnk46lckeu07eegl3gkzw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "538176635.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "538176635",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15kzcnht8p8hrqanc9fxeymkxm4pzhq967x6n9s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79508067.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79508067",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15e45phw0qlja4342nuarcu2fxmzfjlp6a7lar7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51769374.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51769374",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15m75ppwdksp3t72shnkjkh4avzxk4c2m2cpjlv",
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
        delegator_address: "cosmos15ud2mh8qj8kljer927c4q2tt82wqch55eqz4w4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "118000006.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118000006",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15aa4v29vlhkzdh5vmf7m55uz6sf9jqm2faak7k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos157qu9jpq3pasuc9s50tpd4hwu3tm45lresztsd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "449000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "449000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15l0r43dyh2gdt2ahcj322mc896jm9sh0ngzddh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56600000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56600000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14qr54afm6rwhh73w8pxq0nes3tw0w3cjk0zlue",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55299915.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55299915",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14qdehlskhtzmmek00fcse24s427xq7ucv932vu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55370430.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55370430",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14pf2zcep4vfng3aw0wvf45mz42a8mujwzf0p98",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "587410033.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "587410033",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14pt0uctuky6y8d22sw59we3qup57fu7pa50gnl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55286913.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55286913",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14pajcwcw95qqrdacjdaa0svr6076ku4e6hvl5h",
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
        delegator_address: "cosmos14r4ctezck8t046wmzldnam2c93jm0j6l6plw4q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55365825.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55365825",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos149y8c8zump39xe362zq4x2xu8a378tk7zy3mwr",
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
        delegator_address: "cosmos149x9l4aqpkcf0qvx50vey7tn326qzufp9m5r4h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "41401691.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "41401691",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14xcezyeyvxx384vnqhcxrs7qesfkkrkdqszejv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51024127.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51024127",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos148dcdgzacvumc8n9fgjrsaq6njeculn3q3c7mm",
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
        delegator_address: "cosmos1480j70ftswdfnc5uf50u7r4ksd5qgd426fk77c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "209750192.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "209750192",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14tr8kzvetkd9lqmts8m8wa9cuh64q3r0jgd93g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "83304590.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "83304590",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14wxtl6zj2qu7r4vmsrd3galut34zezaqfjm09z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74816450.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74816450",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14wwykmdd24auqjnn7t9tu6jwau8v8wcxs4a4cp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3435189754.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3435189754",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos140kq2fts8ed9m73a6dch7sgdap6hnp2pqqasx9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos145vs7fa0lxkr8dps5cfs47pty5j69g7w3402qp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "20000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "20000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos144h3z96330edgztn2svsv9rfqm9t9hp5qarcrx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14k5zmw7me6vlrxat9x953y4u023nvx53vtugy6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14hetr0vtd8q4xvaqr0f5ztw4xk6muehzkwjj52",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "626738105.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "626738105",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14cgvj8rvl5v2w8jllnf6jh9gdf2sgqgcnd8zxj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14md783p5t8c5mfjq2rrfrxz7g02p85jsf8s8hl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14uhjgwapsu54p6cn47p6sqjtjdzt8vgmrahkzx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55477816.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55477816",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14uutcxkwe0rws08j74v8vl9f9z0qz3kc2s8fd0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "87214000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "87214000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14ar55ug49hczxetej0v8ycqtrs8rrtqlskgzqg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75877365.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75877365",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14ahfzcwn40nw23yupzttlwzsc2lx92jsk3ydy8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "11890544.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "11890544",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos147vq8se2xg7nq566udrn6gz2pz9y88m7jl0t09",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "281896880.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "281896880",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos147dyp5wpjwd3sjkx0a5zg5rr89a3c2vzpvmcjs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57988477.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57988477",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kqwxlygl47mf2ec47kw384uqrrkr6f6tvv2qmm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kq6e9zxg00zkezjwxl7u9685ud8pn87vtc7gy0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "86800000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86800000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kzyz6wyvt6maafq3ajy30ed9gxv9etwqscsdy8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "182018610.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "182018610",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kzu9z69ccngf9gsrsmvhs34d33yy3qfszgsg63",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55478914.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55478914",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k9hzgl55ny6m8y2ueujvj0dul4q5th6zu8w3yc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "72000008.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "72000008",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kgs7m2j85239cqww9ygxm6zx75vdqn39cqgz03",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "4634593.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "4634593",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kgce2j9uepahgug8c8c6vmxevhmmux7s4lhmg5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246068102.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246068102",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kgu07r6lhpr0v3dww9a4rldfny5v6fyka2prfr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "605517177.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "605517177",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kfda4ujz0hxrr3unheysgfegj490kspwklr6tf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55209259.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55209259",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k2j44s7yr6v4mgsuknrgaus5kzun73rx7uhe2p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1002000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1002000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kvq4n4n4x3gqlyfr672pjyqn73c2hdkuh6r0t6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "590000004.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "590000004",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kvkxlckp7a7vg7kuazefv30w38qymanrdgf3xy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55386100.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55386100",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kva0nk0s428w2a6cec7a007mfc40wkpdx26q43",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50853444.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50853444",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kwd5tjclvevlsgpmas57pe6c6j46zens9a774f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1106428651.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1106428651",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kw6mw70wafdxgp2n8s4lscx04du8ka6dakw2gf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53272515.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53272515",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k022pkelzh0n6xefn474l8tj8f4y5zzy839urp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "12795590.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "12795590",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k35uzmcdpx05w0vsla2umr02cm99k9kx82smjr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "637693019.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "637693019",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kj42x9nv9kn3405rgklhs3wlk8vcx50nuyljsh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78711570.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78711570",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k59eurqq24fv6njd52dlpsxv3u6uyzq02vly72",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57216213.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57216213",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k4wwatjx8ht4raaaud97p6w6ll8m5u3unuvpkt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1027838268.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1027838268",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kkmxy4uyhh9jyxtz4cun076l5zcm63tkq46x0t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "4000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "4000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1keq866fhxnntymz56qk5gvwk8p452m7h0nl6vn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55600734.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55600734",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kmtnee7hn2fxu4pw7crwk7dccf96dzq2gjja7k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "114000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "114000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kmkzdzq4kmwnjyl907v5ccmt5z9mx7nh9mhynn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25800000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25800000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kal49er78r5urp2jha7qe6wwcqxjazddzd7dgv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55634064.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55634064",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1klw5g3x767p5u76dn4jnuy27rkzn8kkgms040m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60923000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60923000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hr7tz3qvyhlpghtyfxdlwrfkw5zcjkxnxd0l2p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50568576.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50568576",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hyfz8tq2c4339ky52kn53pvrdcvadk4zzttgqr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "88534558.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "88534558",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hydj6ry0jvcr2d787lk69klhw2eheqc96ysck0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55284529.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55284529",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hymvdmdwn9gv3e5mzqd8ev3f2xjec2jlw4gvn6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55637050.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55637050",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h90kldrzx85szvgzr08gk5m5h0mtgtgnkulrzf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67176935.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67176935",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h8yya9ylagdq4x02ms4lwlvw5y596as5c6k7jz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "11700000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "11700000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hv4rlv94dwwsj3z7l6muye6ndmup0htakxxu8n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1200242785.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1200242785",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h0wvvkyzzyw2sjc0pm7k86uv7v2f2cllpqtr0z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hsnv76wmlxu78kxfdhg85fzry9uvaunq5tk4zc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h3j0wrf9kmthsp8rsrm72wcfptcy3qw3exj07v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10160089.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10160089",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h5d0p4qrfvg82nhyjrm3gurxcq7axkp4936yu9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h4yklnnd3a9tas43y0ey8z3vg5zzwjs0x2hqd9",
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
        delegator_address: "cosmos1h4x2tx4679zjv77uet0x6e6v33dc8l82cgh967",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "282418587.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "282418587",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h4kgk9dy2u2ajxm0qmjlkfuq2z5su0clz0f26q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55587629.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55587629",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h4kc33lwqqqytu0224y8hw2exfjnkprlpnkcfu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61839000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61839000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hkzqc6fx8fxswes3uqr3ts788v3w67w702hp2j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61952840.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61952840",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hkwgeez52gs20zx0sqwucs5qxauedf2adj97qt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50299999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50299999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hcs653f4qrfm60wsevzdyalpkn0rmrhz4jh364",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101000009.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101000009",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hm0sf840euex5sc7t64kthksqgr4qh5mnhwwjd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55439662.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55439662",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hmhlm867zq2muaru2zq0u8t86mp2jpetdsan3u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "76799780.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76799780",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hu5ugwjnttk2nw63pfe5l9547gdatklkjqzrd8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1441450000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1441450000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hlqsmh35sc0zr9lmcrxfa585nc48u7cw7prtju",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "999800015.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "999800015",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hlfy3cmznkzu75208e7kgy4u6juk4v8yl689ep",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245980139.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245980139",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cps9txnk05lj9htyk5jeyvwxjt6e54fx0dhpgs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "76967969.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76967969",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cpjexca8tzxwqa4692x09n3sm9qsamhsx4ajwr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55478329.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55478329",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cyzcp7ejhuluca2rj3ew2r2h34vppjt3d30pml",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "59999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c99hwnrhwjsst585h8287pj8396xce4aeju3gz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "118687411.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118687411",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c9xa3dp0970yrp8gj8rrwgne7al7q0cv5ujhgz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52695700.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52695700",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c9cfhs300g23jkv2feqff3kke7cdklj2gmh4w9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55399247.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55399247",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cxxjs9eud72nmvufznt69q4ld2te8safe4ywnx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "225907357.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "225907357",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cx04qcueeque9cpuv8p4h0zaykaxakql0hwpe5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "34066181.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "34066181",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cgdty3246mz7jatqkg36h2aeqwnwf2m6yh8ep5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "649180000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "649180000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cgjqpqtr0zqdpfx7f390hxkc3985k8vy2r4gs2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55207945.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55207945",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c2gdsuq2n7avgwc7ev0puydzlk44uj5jc3nkc2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245986782.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245986782",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cthyr8req6svmza3euykd2sf5pzse6z2gkd2x6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302418938.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302418938",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cv37v5mwxjczl5kzqykxc2fy08ed2tk85jj2r8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55477877.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55477877",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cdtyy29mre322xxpt2yvmz75crs3pl5tw0pken",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "816191841.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "816191841",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cd7a87m7r6angn3wqdfaksxp68y0t6dznx3mld",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "34437670.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "34437670",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cszrktg52c4h4kqkzsyrrrw445fuzr6alqvxm5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55259092.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55259092",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cjnc8hlw4gt2p8wydxjdpckywlux327njcmfa7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "500965725.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "500965725",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ch6trgvvx4cvs2akhh82a6dvdrn57cqgclr0ex",
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
        delegator_address: "cosmos1cc9n326mgu9qkmg7fvmel7ax6ncg6vgsnhhhcm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51220951.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51220951",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cclvds6qkapm7d6m8akag2z2kqgqct5gmeyavg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "166054566.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "166054566",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ceml4szqpc58c7avacpd8uruzwuwt083y98flm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55209281.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55209281",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cm0gyl3maepxwmwqqy52nk369hwurjtk5m7mgk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cay2udnvc6gxdll68rut62vns5ds76d0f5yzma",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "17180000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "17180000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c7pn0kv2x784cujvthxh5km8xxuftf85nn5hag",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "256019383.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "256019383",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c7zknk324sjpph7mxmxquc0zq902gn64m2zwa9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1epglcal280uvjlzjav80reqe8jqa40lp5khy24",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56431301.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56431301",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ervw8n4wrn40urajsmd70dd8gwn7gnl82k7ymg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62001895.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62001895",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1eypkhtdahph4y6kwguh4faqydl8clk4272d63n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "63357999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63357999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e95zpspqjak3329s5y5ah6cf3w746a8p543sve",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55378115.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55378115",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e8g56hyrg67872r4duf4x2z33mayj2wxsjlnge",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "41013820.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "41013820",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1egrtu40tk6ux6d4cf9dhgur5zphems7t8nlavz",
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
        delegator_address: "cosmos1ege3jn6j509d7985jdefxtn7mcvngjp83e5qvg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "180327511.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "180327511",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1efk4hysyejfqmx9yqvu9w4a0xnyevuttlk3emv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2499499.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2499499",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e2tkndf8l82ad0cqcnupgzhzy98jjdzyg7mzcu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55396219.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55396219",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ewp0y9evs34dnujsvv3q3rfqw69pzwsma52ccc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "14056781.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "14056781",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1es5sskgfngfh6srkgv753l83emmc9j7qul998p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "224208547.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "224208547",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e36egnpzz7twy07kzm5ccjaxdwp5ld53dehwuv",
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
        delegator_address: "cosmos1ejwsyd4xvc8mu6mkn2wkfav4f9l9eeaq0lyzxl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ejskt8erpgnpzymf2js47rtnfxramr5aq290q7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ejk9upj3ryk056wrh9h62dsvj5szmhk24ux7mu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55590597.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55590597",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e5jmcepmgr6wsmp4n3tlhmdcny2pw49cyhn5mm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "142690000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "142690000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ekzawkkedhnlmxqcsp87aye5ne796jr4qlqy8a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64124999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64124999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ehvppg4y9ar7dvnhjnqgjwxm2vd8yvsxs2tce5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1euxglmt4e6k9yh0zzzkdaj58a2fwum95qjwa9x",
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
        delegator_address: "cosmos1euftp2xtgyhz42m7gv82elr9d2f5yll5x92cme",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "111620915.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111620915",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1eujlkkfsyjf28ey9vce3yp0s0mdd0l94v7rpft",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "501000002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "501000002",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e7ductrmw5hrqzjelakecgpsu7twl8z3h2v7kp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55602362.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55602362",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e70us402l65vea04df9dxhaagph5gkcpjr8uc3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "23379000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "23379000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1elphxtaaz2muszt2gc7rz9qq4nav203wnv35d8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55398786.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55398786",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1eljyvvy7gqy6qe4ck98762zxh9nlfzsezcmwxv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "95200151.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "95200151",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1elclpa4cpu3tshp9sd2r5v5gjnm6sn58uemm95",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "151498503.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "151498503",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16pyqdev493dszr786lp38d39mncf9ljrdyay24",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "9900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "9900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16r9zturmq0a52cpshw3pdpgxgn5qsk2a8j3psz",
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
        delegator_address: "cosmos16yanaa9gfmdytghzz3c5ep4kgmzjw00228zs8r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "85127741.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "85127741",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos169pkmuffdpwm8dfrefc2tcsvhyv74x8rg2uc55",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75157555.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75157555",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1698rcdde394kqj0vr7tyteqcjk60lq7kmud5vf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55443590.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55443590",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16xspvd538qahgjhukvhv0q7qermjzd2gvkrdk2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "116213103.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "116213103",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos168lrc09vv6cp2yckr2klhfutz8reu95c3z5k0p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56150288.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56150288",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1628l2qz5mgdf890wt5fksf3c8smw0k78lauhjd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50287010.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50287010",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16vrpzr6hfqmmktqa9u2s0qm6qw0sd6paslpafr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10102390.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10102390",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16dypkp53m6k6u3ruhhe0rxghlsmwd6grsuscqd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50099998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50099998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16wpn0gwepdalz0fnlq5nfy645wmwej2c9q8tje",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "256874938.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "256874938",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1602cse30jdmctgque3j8lc78w2frxzhnxafuz7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "130110708.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "130110708",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16ssqymtz3vpd4y7tcqw0t23p4he9407c25yl9n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62939921.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62939921",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16jk3xk8y96xfwhu3z2u8jenn2shxm0u06sqcp2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "125757978.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "125757978",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1658d9u7c87uqcj8er5u420efrskez0p0xnl94j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "122388899.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "122388899",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos165s3zw3vaytnjvfv390f9f876u79zv49p2yy44",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100092789.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100092789",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos165nqrnqep5e487wzgmydw7fjz6haq4v3w244w0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "241100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "241100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16k3e075ym6e82d9yuvkyg43zgk9c4tmdr8x9xp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30499999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30499999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16k79ew02a88430k3vvwpzdntnhlapf8r6h5z46",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "201299999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "201299999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16e8eese68zg9yvsd9f8f4urywq9vt2768950yj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "965018.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "965018",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16em73383guqr03t7fmtz0qtg4fstk7meuvafwq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "106733621.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "106733621",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos166sljdvtfuld5cvpl0rtrjw0w5vvc328aea73l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "610498152.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "610498152",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16u4985jq2pcp9gj9l5zauuamsr9rap9pmnqjjh",
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
        delegator_address: "cosmos1675kjxe5a9lzjgu3wmgkn5rp9zta6wh80y6rqt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "106243410.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "106243410",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16lunq2wx572f0f6g3kygc3ul4v0gcd7jnxptv6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15999998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15999998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mq9759sngcmtvcdq4h7fd0fnc8xtuqnkds8vhv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "180000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "180000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mqnrchhd6as3jakrpkd6ua7qhcpze69juvmylm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55250105.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55250105",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1myrthlzxd3vl35d0ah5g3nsrdavkmtqxszp3th",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "118423590.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118423590",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m9993hmae9fl4pm2chuyyq8hqm2fg4pqs777wu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100382151.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100382151",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m9mvafe7vazjtzllv22sq930samndk3frv5val",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55476569.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55476569",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mxu70gtcjfvr9xtk0pptep9r8y9s462n8awcxy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55640677.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55640677",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m846wav7usstl6upmj377k8q9zmvk3jwvhqy07",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245984133.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245984133",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mfq9n8ghfxga047m97wuvzp5t8t7ujxr4ujf5m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302399900.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302399900",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mfje8fezn9mxc7dxnxzumr9kffhxtrn9gd50ln",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m2el84v9ttrafe8s90wmskav032vaxvumpgkzv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55582054.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55582054",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mvd8wt3qtlr6ygh4k4wt9fyrxyj3vc7jkdf76p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55730895.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55730895",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mdtghsad95ryh2ufpl5pmufht3gwzx5luutn49",
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
        delegator_address: "cosmos1mwmapvdzrc9hezq8r8lfmpzqu4zmsj2y6anpnv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "182309492.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "182309492",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mw7m6jeg9ppcyp4jxs095fxpz2k5rcyfnr6yde",
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
        delegator_address: "cosmos1mjvyay0pmr629x6nqj8vagnpcfrv3pt7vw422k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mjd974cadz3spd2n4jr6mxh4s883tzr6773nxc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mjnpe7g82p2yztq9y6n6lyn0jhpy56vwx8nt25",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15497000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15497000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mnvlt9e4pxqhup6z9xzva58rt2ka3cnghf37uf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "85424403.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "85424403",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m5nftdd9fejyd84e9w3t5swgcgvmlzwwktr6fd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "850879999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "850879999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mkk7xd9tll96rt2j8e8tamggu5agzwq7xlwnhh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mhz30u7fmq6g39qvgca4t0tmf9fjwrl6u8fa6a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55563913.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55563913",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mhkuzfws4xgcpkq252nv22vtdk93j3xd2jhd38",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "195000091.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "195000091",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mckaflrkp3ud7wmeufr5xd79eynjxf8xa72dcp",
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
        delegator_address: "cosmos1mesug0vfx0tyt6fzfue748nwk5ehlcz5gw0je4",
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
        delegator_address: "cosmos1m67qg30l7arqpu65zexn3ufdcyzg5am63nqmfd",
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
        delegator_address: "cosmos1mm0cvf4dkmst7rl0z2xgt4l3h8j4fq544nk5yh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61738923.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61738923",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mu26reayvd7vwknxugmx3vw8fqmvladjfrxmk8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "269492997.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "269492997",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uq24j4qc90pztvyn65uv8h4zrhqa85szujk5fz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "27463867.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27463867",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1up8pe9zptex7hs4k4z6gu2rz8m54yjm8zngz3z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "610520093.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "610520093",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uznr6lmlyx66er4dvw54c7e25pyr0qg3ntk8vx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "910736091.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "910736091",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uzk58wnt3e8ewfzmcf09k66f8k2az7g2fvyn8j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55351204.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55351204",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u832ltjexq2r4e4tvhu64krrw4d3cspr02yuwh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82495399.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82495399",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u8jt9y42ccevljfc7tqj87lnp0htvcjs8lj06p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78670797.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78670797",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ut2wmfvchccthclwq7jmjd2kvsdm09l5ar045v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "109970000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "109970000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uvfwsp3nyx4rlzjcscmxlk2mh3twhwwtawn8x9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82281064.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82281064",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uwrdtnk62tm78xk7jsc0s9gaue29h7v8e0hyty",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78249504.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78249504",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ustq2uykree7798pxtlx3urmgqudzdxpdkdug0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55539855.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55539855",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u36qa4gluu2drp89jj0978c2g7d9j607hkl96f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "540895761.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "540895761",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1un5xvp9f0ynu6rv76lmr0y8spkx4nh4yq6xgff",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "72092060.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "72092060",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uhz32nd9trwqxe25v3xqux9pvcpw7nncs3h6z6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52487560.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52487560",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uhmj2m8vzq428d2axj5x0pkktt9ysanszpkgmx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81088255.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81088255",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ucnzn86zszgjg8umz7ujzqvrcryxu46wumdxl0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "189000001.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "189000001",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uey077ygnn8zz78ce9g05vkzetf32er4zgggp2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "13286672.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "13286672",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uavz6gkj7j75ek0sxd7cue6v8vkzzjtlz4yu4e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245983144.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245983144",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uah45eeda8k5qwqdapslalxu8kgf9deqckvxee",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "407344438.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "407344438",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1aqpeat77rg0t3l3vqjpcynl2jt7ss0vpse9w4a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78014080.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78014080",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a9nwzp942pfftgpapwwy9sztnuv8ctj76xmtwd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55396564.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55396564",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a9c6yemjxwvtpeat8n82233fqp6g8z4j6drq0t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75497000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75497000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a9u8yv5v0wu5atynlh33hm04l67y9e6xz6427p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ax0txrjr7ngcxxxzyunmg89ufk3wtadjv6skzs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55398652.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55398652",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a8eq7pu270j38273ujpqxwadn8vkrm6jge8jes",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "26100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "26100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1agqxzl2r9rn6xhpjlsn3g0xf55ap687vn0rvep",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "201744042.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "201744042",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1af52kptwx7uhl774l7m95pv5r0q2fvxnsc5zcc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1afk79j2s90uq96wd9z6evyyc460fe0sxt96ak6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "13018939.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "13018939",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a2l3cfqllu9qs6437mqkq59ygfx378p9cdxhej",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81593499.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81593499",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1atggu5xm7hzhdps93vxkumdedngvkulqp3cmzk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101917569.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101917569",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1at2aa07247avq2xuzeeswje5pxswr8a58r2wss",
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
        delegator_address: "cosmos1awrzp3jg9g4cevjnkas4zq46q0m8jcj35yw7pt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115619578.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115619578",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a088qecv94m3duxfgjfeqz45yanun0geucd202",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1asz7p9evqgwjvuvew4ad8jj82w35k9z8zjnpp5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100157102.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100157102",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ajlwfce7r6ydj2738v0hdsaqydrurhgrprws0c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1an4jnulwqm9pv46qqsqdj63zhjq29vnw7r760n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "199960004.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "199960004",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a59ss427zm593lkm48p5f6jav6hwz65jn88eyq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "68032425.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "68032425",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ah0y0s9tvagcw9l5228q0r25c9l0exp8lnpzur",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74440443.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74440443",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ac0jgy46wa3axh9yjgxgkqn48feqtkenhrxzll",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "627731844.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "627731844",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1aekfgc6cqx07m0z0www4nlt0c5072yknfrycfv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1am3tsx69ndthlcnnc66a7s2m208rdg0kl280ty",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "22099421.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "22099421",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1amcqvw3j6anwdhg49xuerj5eyh6pkpuvrup8kr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "20797917.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "20797917",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1au9w4gvcqmzkwy6jc4zg80c04n4x3fpnkat0s3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55396099.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55396099",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1au4sax26ge2wy07lx83mm8dzwg8cnvv8zt9k09",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "38010982.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "38010982",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1al72cd0uhn6p4pwmv88sm3kre4w2wpjc9dl8ry",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17qssz5p4dfgezhvek0q98gjmdgwx0txgpgjd05",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17q587uzc50qjvegc4zq4qkqxgjqypd46g7cpes",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17yf8hsgezzhtl58gp3sqe7dcsj2wpqtz3annq0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "313000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "313000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17y39fgzyxumghy9hd0tusjdqlp4y3rfu6cmpgc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos179d7pduhu6u0dv8dnn98eyyz2jzgmw0au3q5u3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "446000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "446000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos178n4m7j5hlu5evjqpyg773zje2dra5rh2cd9ds",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "92380000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "92380000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17fskx42xz5wze8mqssu89up6asf3nmrvyycaxd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "123083136.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "123083136",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos172vz7u2mcxyl3ckja0j5u79mkrdzcnh89uvamm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "95990999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "95990999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17vyhq832pysqskh70288lsm5ndv0xz3mal0d03",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17drlfxlkjpn066c65rfqfqglfzrjf9v3uwtdcs",
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
        delegator_address: "cosmos17dndad55zly50aj8lzzklxusevdz0r0gyenx42",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "241250000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "241250000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17070ugefje3vvp09gvywgxn6flfv5qzgagw79e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55205569.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55205569",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos175tzfgw2t20k4grlex0rtahv5t72vjfjret6zm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos176e47zlleye0xm7n45qdayff55f06lw26w4ujc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51280276.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51280276",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17md0czsjq69m0ff6vcmne5cxs5djkc6qruedmk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "108000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "108000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17a8rvcgwzqp986rwxr9taqtyuxg9cdts3cxr6l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "130853826.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "130853826",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17l2c3ac2k4dql09k5fuca2026l6952rzlmpp78",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "33767639.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "33767639",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lqdmx9z7e59d38amagcycqlccuecp8p84swaf9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "6100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "6100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lrpa5ldy9mqrgls0e3786vxq35j5atd2nkpd8z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "120478032.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "120478032",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lr4d7aywejzc4tlfu7j32s3cjf5uvnv3jpads5",
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
        delegator_address: "cosmos1lx2zuc7ls0rw0jf89y9366fg7w5l9clgj7fcyf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "282396659.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "282396659",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lx0my7kk7uy75y68r602ga62l7n8cwawgvm0ag",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "516000084.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "516000084",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lfavkyvj7wl3ef5jzk6ywqrs0gcrec8txzrw88",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42811080.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42811080",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ltcwnf2r04cyry55nq2vhalmhezaudg6e8jphx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77368672.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77368672",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ldg6m46nw06gntnnxq6llju42ffw0cn9acarcj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62500099.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62500099",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1l30rsjewaemnpsxcdv68r2eje2lqk0ch72km68",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "59999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lj7p0js6864d6dl532du62xk0rjrjj30er4jfs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55671732.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55671732",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lnvz5ldj6g8z0aaa4puz8aq5s8ntzw4tsza93n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79043412.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79043412",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lkppdsx0hh0h9smu0f5uud2uq3ntd6kayekf37",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "121575681.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "121575681",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lksjm72u2fjsjdh7jas8meuzpznsuyjcz0hg4s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "323511746.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "323511746",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lhsdcsklzvs7ek3kp59m36zq3739q3wavmyt6n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "124449999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "124449999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lcrtsnhrjv0emxd7nanywswfm0dh93emsnxh0d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "85727397.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "85727397",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1leae7fx997hkfg88dsl0zshr9f64jcaasp5aq6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55701573.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55701573",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lmhf4ynnhhchj03r5qgnkhp3qgeqnauu83h626",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55399487.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55399487",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lul42lw2p4mv2mlte89cf4qnfg2jfduuv9vr2m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "257320748.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "257320748",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1l7mux9t0d36myza2n4d352jrcxz606c384378e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
  ];

  const txs1 = [
    {
      delegation: {
        delegator_address: "cosmos1qqa0ujjakhq4846m90zhn2ksjd0z3vav7ku2sm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25058000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25058000",
      },
    },
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
        delegator_address: "cosmos1qgy7pq9trkxkqakz8p9s9m23up36u7mxzeh4at",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101189878.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101189878",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qfl9rqp6gg2k0ey648wlq36fd6d0xh3xnhru85",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93810000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93810000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qtk0k7wzlr62ul07auf4cz62jsrslxeewdqf9e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qv3d5s5vrtydenza0j734f295er8d2dnvpq38y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74125171.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74125171",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6n2sr6fj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2266411843.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2266411843",
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
        shares: "56083481.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56083481",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qnwky2737et89l4y9339gjkj4esz5ut3vvmqy0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "99990000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "99990000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1q4c6fl2uczr7jvzn999rtpwq7fhedrcs4rhgg0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56083873.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56083873",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qesvevs2p7p8apr5murjjz20sk0jsvf95m50zn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56082402.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56082402",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qm0q9ec5ylrgz2sz78j53xnrfcsse74ay3p2us",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "258240200.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "258240200",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1quun3k4usk4gyad8drug4j9rmsmng30a73pvjz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qadyc3er4sm4473wqyhrtl982vm2fyp27h75qc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25022200.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25022200",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1q7x0hxpcjasvtv0cn7h0tqf47fp06ct2zr0uza",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50701231.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50701231",
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
        shares: "110306251.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "110306251",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qluz5u8nxmv6rw9lwxnjyvgm3scr6yz4phfmc5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "816000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "816000000",
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
        shares: "56165243.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56165243",
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
        shares: "56043544.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56043544",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pycauh020lezm2nhrw84dzu7jq98y29q3u7t28",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "372825423.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "372825423",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1p9hsmt9z6pt008v9rdfq5vv3pkqvnkrlh5w87n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "8099763.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "8099763",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pfycqdd9yacgcn7hqd890s3d5cgu0v5rfsxf9d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "179701242.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "179701242",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pfdr64xg3ak6mvx5g9cukpek57vr5mym6e5ywn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3500000",
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
        delegator_address: "cosmos1pv8dv88w6cpjjanep0389lzen4r8xdgr4svgh3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50615000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50615000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pduj08yt5w8thfp50lcvwhffrahpfpj539tv04",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "103549999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "103549999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pwpflqaa4jrjueyss55p0u7lyh6zr3hrylf33a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "85189631.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "85189631",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pwylpkyh06tralrrwnpnf0ws4mtezceaa7s06a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10070000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10070000",
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
        delegator_address: "cosmos1p34krywk2xt67yz0ju4c5dzz5u6lurs0kwmkxf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "167764221.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "167764221",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pjmdtwxqevyr9u38ap4qchfejgyj93da7vr7jx",
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
        delegator_address: "cosmos1p4304z6uxj5s6vwz8l6nd52tg0esemp3afek3j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62572560.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62572560",
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
        delegator_address: "cosmos1pedfdwdz4tnnpdwlxad576rnyr7hldzzequlas",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "546502859.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "546502859",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pemt63zctpxtmarevrjh0mwrv9mapnpyuwl6mn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "150000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "150000000",
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
        shares: "347550213.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "347550213",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pa56a9fg5jhxrduru275vn2y7fpkxmx6dt5zdr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "216947413.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "216947413",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zq5rkgsmaacw59ququcxfypftyukhn63e0ux4z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zq54z7d3qhc2fruy3sql9qesgunf47trqtqjxu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77590788.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77590788",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zp9v7ys5t2kddp6tuy290fakzfl3dyqrhcms8r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25033000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25033000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zpnfptuxfxsj3l77ghuh9hjntewzh0jgypqs3u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "43000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "43000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zz2jzuzpvddertchc256nuny3xg5js9tam59jr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "116206334.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "116206334",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zzhjgtx92jxrpwxxcrmesjmz9m0q6ednuw6rs2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15269411.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15269411",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zza8552zc92yceaufpjnepdh2cu55xvj9xcpgl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "28450844.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "28450844",
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
        shares: "44612212.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "44612212",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zgs5nnwhpxg4sjyw7xerm4humluxua90hjprgf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z29j9acm70gs2ldrlre0fqlneaua2tz28t9t67",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "252692015.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "252692015",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z2cdy2u0v6h6fmvtr0h092rtevmku5v6wzr6sr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ztydpl2gges4u38rm7afs9rlmajk5sq64243dy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77622739.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77622739",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ztgk3hcdl4vwxdqnmkkyzgxt0ud6yw7lk2l5x6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50700000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50700000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zvx5dw4sx9qzp3l2xugjmd8pw68gmjqnma2zh4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25051000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25051000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zv5gpleefrt689c46ls7zs5wspk3q5st85t6ck",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25081400.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25081400",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zw65ylqsmgh3npnfx8cja6z5yhx8ve30mwk4k6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25050000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25050000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zsf4lp9t3c8lu7p4qspmq9vefmkmppuwh3cvps",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78356095.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78356095",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z38jg3lcs72m6njpq44dydrl6sq40awqswx74s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15205280.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15205280",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z3h4mm4f6n9cswxf6p4y6r73hzjy5uexkke6nw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56331873.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56331873",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zj2vpvjp2cr2950r350zp67py5wsnn6e20rhm8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zj04hzjgvdeqt3rl3ym4phf999hh89uqz6rh97",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "900920000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "900920000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zjldm3w2vynd5flrypty4hk7n9sypcqat4d4f6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1znaj4lqyds2jsg9tpmwt59r0mxn85at48g3804",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z449svm08e9p0544grvq7skv4ltfev6hkgmzvp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56012187.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56012187",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zuh63hdz94kf8nggjg2tsvpf6fu9du2fjck8em",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115200154.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115200154",
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
        delegator_address: "cosmos1za44ufavhsmhlfy0r5q8zz5pcsgvegrplx3kf4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60312880.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60312880",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zah9a5wx467syjz9frjhq9xhrq2fyugsuq7jph",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56282328.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56282328",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z7a6glgggrqhe8hzehc75lml3dz26mwdxxzhgj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56220346.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56220346",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zlmdnd2uem5kxx7rdmkfnq2wl5cvfjxuct0tx0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rp9dkx7qumlqwm3hwjj7mrn2tfr22cymxq5a3t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rp88lsash8lg0ltfq7pum6seqvgl49mj5gulkr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56082119.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56082119",
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
        shares: "55989820.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55989820",
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
        delegator_address: "cosmos1ry4e33rzh5rjdhyhrssdm0k5hp5vpy38p26m04",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r93c20xuwtxadwgfkh9m2swkkvn49jdeeaxwyp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56234290.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56234290",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r9lglxgtxvuh8033mu7utazagm4l9jtsl2638r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56080567.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56080567",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rxqas2m8n3jjvulgzsmks0ekzqp32arvrar2m8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81293853.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81293853",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rxwnxskx7w9jjecfzjve35juw3qxughstnj32x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1020999721.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1020999721",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rgj9uw4x5tf606yry7c3g8zeeqtrmamqznh9nh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "358959924.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "358959924",
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
        delegator_address: "cosmos1rfvtz0f7wkcj62t648s3k20ecjh7frn9pncrxh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51836315.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51836315",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rfkgpv4qah9arlq4gkpzjpu2l6gd32guuf7cvf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15542939.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15542939",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rtsce8m32ah3fnp9lu5ut9mjkczd7wl642mane",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "200000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "200000000",
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
        delegator_address: "cosmos1rvpfa67nwzjuhzeun6nddjgyu7nz3v7uqc5szt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rd0cp2qfztcs5hp9wkt4u6mpr7ctz7p406empf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56081397.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56081397",
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
        shares: "78616467.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78616467",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rw6v0t6amwcz3dnur7szqvkl23qqgrw5neh4jg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "92019405.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "92019405",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r0he8n9zq6quah9xnmahkr4yl8pdk5xja8mdtp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "98620000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "98620000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rslwntv3eturuepj8svx33j2tawr0zj06g94w2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67000999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67000999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r39vukxnda00vv4urhfmqpjvfzknr7jrl0xugs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "73777359.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "73777359",
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
        delegator_address: "cosmos1rkp99zqnf4tlme3a5rfwh6ljgyymcjlygf23qy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93710000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93710000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rkz3xqptzh2zurhmggtrup2mp0pncvhav96ezc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55940523.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55940523",
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
        shares: "302179999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302179999",
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
        delegator_address: "cosmos1r6knf70m2dlfljh9aqk87ldwvxshajj3mu45zr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58844870.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58844870",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rmtcl7m2pz63cgsvfxayuh54drk9sa9l858t6c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64225955.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64225955",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rmvy6zqfxgat2905wekyhm528vqhu989dz4tfw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55990959.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55990959",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rmktgzwmqyq3rj3dsec32j4plrrsk6wdjryunw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25039870.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25039870",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ruphl50638rpc93vpr6nzaaw76ludcslzha672",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102837160.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102837160",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r7sp8qf07jtj437tcz47jpthlqw3ffthhh7zyk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102190695.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102190695",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yqpe555u94er8gwtuztxp8ke6r8dwag8rptfhv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yq8ls6d9q6lnyctwnjjgw35u2grwad2kcczsyw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "69928980.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "69928980",
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
        shares: "104466497.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "104466497",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yzzxtvaus8kd0qhc7fvyuyrudnjqwzg4h7s6yw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "28330503.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "28330503",
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
        delegator_address: "cosmos1yyumvhxrvyyexvym7luctfxyfxpdthjtqmdtes",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "144290826.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "144290826",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yxp72ytnak32kv4c4hpp74x4myf3u424m6p7c5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81180205.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81180205",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yfvdfn44vxjgpk80jdajjtjrqp9r6gxsx6aw7c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y2swuf9serylhpx8ydz2rm96rtqhmy99qs6k0m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56225325.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56225325",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ytlw98tr8ujqcfq3um3sqputnvrl0tsq9c7e0m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1008057.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1008057",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ysthp74n2wxt4flmzyxrhza8rvxzr9mc3f9he5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "119341226.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "119341226",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y3lhsnzyrxfen69lrd4q9vqym4l9wwcxszggqt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25778875.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25778875",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yjpuqyt44u4wshvn00qdkvkflyzu3zqqt4tuev",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "104528986.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "104528986",
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
        shares: "113614040.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "113614040",
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
        delegator_address: "cosmos1ykqpluuf7mxrsfxc66pw9044eacwq6uac0f4fn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70502361.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70502361",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ykyk43nxapm48n60ft0sr8ndrg8deu9pydglqn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "887788276.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "887788276",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yk5lh5va8ugqpph9x83g5etadrktj9m07vt9tx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60159051.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60159051",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ycvqap8apkyd9u5j7hu9ukklzx34v6es02ycnl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "300383052.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "300383052",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yc3vdk0gatn20v55ezs0nef50vm8devqwea80f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "172973403.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "172973403",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yclrw2qxzmyjxjry0fwusdurhkqgdag8u2z9fc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10059579.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10059579",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ye0ascv5scjf534cy98wpl2gge992ruvwv83js",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "257000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "257000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ye3ku6ygpalzjd7q9585959fphapdwtt8l4l7z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "125000009.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "125000009",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y6h23fxgqvqdms62k04js0fa5kh79az7renjr5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56083664.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56083664",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ympylskct2ygutrmcxkrrc9g0rmuzu3r9n4579",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ymwgg85shgthy4gsp7qf59jpf0pz4c3rnmvs6k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "65564332.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65564332",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1y7ysuyhsl30trd6qhss3qpc7mxta40gsw9ekqx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77665667.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77665667",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19qr4snrf00laf3k3w6f5p2za38lq5mymgfype3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50810000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50810000",
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
        delegator_address: "cosmos19r4ey2gg8k3v8mdya3h8wg2tm0xuuawk0tmkvm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19yk6wz0nszymsk76gnvm5w89gzeh69eq5f0nxm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56199494.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56199494",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19xuvslp4za626qlpg6vrqu20gvh6n9lj45dmmp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56018643.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56018643",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos198tu6srltcq85n05mtvfd0pxztfajs2uq3hqax",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50910000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50910000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos198uernvg4gwrrgxm83fha4jywml0wr2jsl9m86",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55991800.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55991800",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos192lxclzf8lqd4u8dhpn8gcjpkvlwcj6a6z70zl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19tzhedlpau94jvu5v585rv2t4wrlpem3dlfv29",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "41774815.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "41774815",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19dej9nex9sj3424eernwjs83pw75rt3ky5ttnh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "205000052.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "205000052",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19wmlrdhyf85fly7mqhm4a0jr5qa4hlvqpregkl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80801473.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80801473",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos190wj3tp2m9r9u42grsfhdm7errkca3uwgnfqrz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "63008391.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63008391",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos190n39d4qtu9e3hhtd5el54tcwv6qcmyt3tusd3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25052200.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25052200",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19svdw36vq0h6dqkafkmj7ny5qkefekuc4yr988",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25803985.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25803985",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos193d6vvajjxzjfvrlqd6dq8nq2hgxt09z68qtvm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19jhlpyjx3p4kqh347323azjuhnnew95rpag9uy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "200300048.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "200300048",
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
        delegator_address: "cosmos194r7queh98l3x0gglua73kpx7d3dwyucmznma4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1949rhj0kn0q9tz02720dgpxx8lz3l9yw624gv3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15462899.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15462899",
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
        delegator_address: "cosmos19kp9zuk4cgttflrhsa42r5manhncxzwc68a3a8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "63071198.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63071198",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19kwsexd87fd49srdw4k6ltsfxg8xlnhw70xq3x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "795281881.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "795281881",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19k650hvvlzxp09c2y7qz6ahz594ecqu7fa5q2l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56081382.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56081382",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19k707df99htdtcf3cmgmyxy54uafh0x8xj09hz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "18479999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "18479999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19ehyjh58x66tqn3d4pwmxd0uzjvkmr36azcw9d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53538321.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53538321",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19eu8zmrzzt05l8yap70ur5t5fdzwgt9p353l9s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "27463932.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27463932",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19m32annwp29998d76pk4msvwkjh6c3p47y9rgt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15232319.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15232319",
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
        shares: "30540343.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30540343",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos197djzpsht39797hkq7g3lfyk6pltmhzzevtquf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56282513.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56282513",
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
    {
      delegation: {
        delegator_address: "cosmos19leyn03afswk92382pnlh6amnz5dhy4nl0kx5f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "109245362.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "109245362",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xpf42qf48tssgfu3crcq0eju4qfqe849hm74gu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "155000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "155000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xpcl957yz4rvh2vwgn426lp6hqunqgq5qy5h98",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "124534225.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "124534225",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xpavyl06wekueu4x4kg2424ex0dl9ww3g29thq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5380000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5380000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xzq3z62dvsrlkpmsw8ju4unh95sr7svzk60ngq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "114528060.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "114528060",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xzck3lmpwsh4d474d94tl94tfate4tmwzemfsd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56019134.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56019134",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xrwtgkzmedun54rw223z9q0r2jxcs3u43kqz63",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1001109901.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1001109901",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xycg5zhzegs3k933awjdx0y0uxs2cw0446k52n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "26056968.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "26056968",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xya75w4kqftqqp3dexj83lq39fcdh87xfamdtn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10050000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10050000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xxhrv2gfsekmxtqh2hx6fh0yl0wtqr4j8hm54y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "149199999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "149199999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xx6hp82d3rj2vuwf7xahq0hl39ymrdp2cm9xpt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5362037552.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5362037552",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x83kvuzf46lxcn539jvcf96z0gruz85rqu39xm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25070000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25070000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xfldjl4afha988uaaqry96r364mhff2yej9pru",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93810000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93810000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x2hj089n9e977xcgcesut9tsahly3a8cz8wcw6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "31200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xvecfph28wxp8sqyvss5udmtfr37ppf0fhptjx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xw4de7r3zfeqdnuxv4l563exhvu0ttzyrjnf2y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56014055.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56014055",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0nxx37t8c2ep23ljqkcnwv53nfvg4fk5ug26c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "133684719.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "133684719",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0esf3ex8lvpke6ej22ctszsng5njdpdue9nj3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "134440312.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "134440312",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0ehtkw9zmd4uyqtrquqm5ph309nygvg76n8t9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56282650.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56282650",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0uutankny38aqwq3ueyd99vm0ngzjkzk70ajz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x3sfh304h4vfxtnachyh0wfqd9yxn2uwgy8pjq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93810000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93810000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xj38fh8lcchspxx7a228ntz6nzgx8alv9q3wg7",
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
        delegator_address: "cosmos1xjjp6t2d2zmd3wmzzsue9etpuaecze9kwxfprw",
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
        delegator_address: "cosmos1xj5geh7cekcqlhqz8d5dvdssdzl3sf8kp4eraq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50400000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50400000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xnxzdpn8az87qfcafl92qtpsh5feapryx6hk08",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "172263141.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "172263141",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x5nuzxwxgtc5nhkxnd2sp4easxv2w9hh4mcqsl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x48yahxz85fvmhma536vcqj7tmygfmktkg6h9q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "155300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "155300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x4tgtyq43vffha2tsywd9a9k0g56jny5qas02t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "12000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "12000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xkhs27xj8tjd74lyfhcgw4g03krnpn9w3gttdn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62467930.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62467930",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xh632k0qptlffmmdzx3hwmuzqp5stev6y9jaye",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25032000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25032000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xeffrgx2c072xesgsrdknsvyxsd9e509d85j2v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x62wngd9tle8naxec2dr0s4c0ryz8g8cc0vpkj",
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
        delegator_address: "cosmos1x6lk0x27572prmys8xfyxqmj4vv95nar7fz37m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10301926.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10301926",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xmkmex07esul3lzx804tuxwcy0tguq00ld5rlg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55990196.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55990196",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xmesgp2lff49wdgk8eznaq349edsfnafjqlg0t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25061470.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25061470",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xu698hpjatdq8qaxdd2h3lq9766558qqu37vp7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "59494599.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59494599",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xulzjt7evfc0cjxxcfasn345kgm5q2ednrx9p6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xarnf65hj3g5ypzrp3z7edw5emxjkmk6zt6uaz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18qn5q83vh6c5nnz7nlnrcgpxjac8plq8l3sge3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50120000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50120000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18p8s9qxhpyar5c9kktye5qvyymu477rhqhusn6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56080005.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56080005",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18zrr2q8kmvy99l5f0vm3tju6xlndfw3z4x5x2l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56005121.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56005121",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18rkzth7njet2h64w7fv4fmy0vaknsgpmfewj7n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56018207.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56018207",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos189thjxfd4wvgvdavc8anmn2356qe7a468m9yve",
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
        delegator_address: "cosmos18xwmppmpwatmynz5lhketu5pv5r33mq45pwy25",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "69568515.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "69568515",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos188q0e9vyq60edst5drr03sxahlzre6yhfe3sdn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "109896721.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "109896721",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos188s9vs5zhufhfjfdy8nl3xglqeelynsu8q5mys",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "454652393.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "454652393",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos188ky764whe6vd0546yn45gquhe4jmu90hv4vse",
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
        delegator_address: "cosmos18gn8ga2fvd2v9mvdpxm98zmd7lctmegnfr3lk4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "111607278.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111607278",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18txz592859njcw339805azqskahmn8zujqu7mg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51106999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51106999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18vuyucw6f7n0elmyh7ygg0v54s86e4d5ea7uq2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56076944.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56076944",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18v7gc8m6trnc9rr28pkfk5j3ax9wmpzyz4yjcu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56087786.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56087786",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18wxxjpkyy5nzhxaca79fnrsl666qh24u2r8j0s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos180uktr7qtz08hawxn2kw46a940hn74e9phsls8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos183fk2u38mt2yxqvt8axcgaumlrufjmmg0he6c0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93910000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93910000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18jlns2u0u7gaq4jy307fczege84sdgw238pxrw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18nf84jgwkqypaplz45xyf3yegpu4vvhzafe09d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102192579.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102192579",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos185fkw70ntyc0vlvrf30grsxurfw2d7cp3yaq0e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "232441347.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "232441347",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1850rdjq4sf488sad4qsj64sj2s8h53z0ehqekx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "696110006.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "696110006",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos184mdhx7jq5al582e6t3ssdev08ccghk5w3td56",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "112000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "112000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18kvjxrrp935gss49xpuqkn285m64zs9vupnw9r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "160000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "160000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18km2q4dndvukf0pjluq5t2rxyrpje2ju5tnw5n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "68594107.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "68594107",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos186m704l3djuwt0uv4fltz0wdf2ehgxcudz9qqp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18u24lfg5yx0yhy6gdejsjrtupd0k4teh50pu3h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79446632.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79446632",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18ank35aua8ftetpmvcsxwdqy4phelteelw7lu3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "619000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "619000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos187jy6cderlfwwttds33e6cdzntx0z0gh9qrhee",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "267358653.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "267358653",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18lg5ngs9z9sge5g2jqlfp8de3xxrd8egvm5a2m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55925171.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55925171",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18l3v435q04cmxn0ec45r3vwxdfl3har3atcfhj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "850010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "850010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gr2sqfe62mhkqf06cx8tkvl30xm727lnl2g5a7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "538745790.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "538745790",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gy43jhm7wxnvxkrremq6c7kwdsn96vxsrxugl6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "369850000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "369850000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g9pqhuxdzvg2m5vnsy2k2r7yq6tywunenw7qm8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "147329744.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "147329744",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gxa40yjrgrlt2ffqka8cgycxnhlq9kd284qz8u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495966519.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495966519",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g8qlz0fygr2c6smpkvwqphfywa7sxv5n8gwvhz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10041000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10041000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g8c56wgcxlgy9aeq3hm82vs8t6zyw8cssssa8u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g2qg8uujk0276ns25q9lrnvknp67sclk85sx09",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "242500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "242500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gvzt7u05m72gk0dq9hwaddn5m0m0rxw6p76vnh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "72500002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "72500002",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gdpqt5a6npdwzxjv7pvnpa9uucsdyfdf5eqm8q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56232253.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56232253",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gd6zzn5lnz4m2hmg7kaf9x54pzvyg08rqhw24p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56007683.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56007683",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gd6twrfw7p04797dznh0u98q9ykc7d24pqplv9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51389999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51389999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gwh42aqnppx7d8lxuhkafh86ew6f0wrj6njmfl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "105321373.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "105321373",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gs7mj73uvyvae7zvt0creqfc0h9c7gwc4h7wzs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g3uz8nkzq9zrdemjj82wvl5w74u9e8yv6zcp2g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "6930000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "6930000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gnnsdgxuff5zy99qltcv9uf0d6quggw574xyt4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gn6w54uge5drhx0gskdgva4372d8guxhpwc9vt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1000000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1000000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gnasfq4qq9kuwphp7ytq50pg6f4pzqs4xqqe84",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302441376.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302441376",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g55lwffzeeg0flc4xakrdj0n2k8remryfy7e6u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "49990000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "49990000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g4ppjknr54sxx8s2swfhcskckkg4vm3uf70kry",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "289084396.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "289084396",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g4sc87hqwrpmq903r30qpqswwwgnxm2yhg9ag5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66114431.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66114431",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ghr4adcszv75aqdfj20ycse5qfqvxhn35e85rp",
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
        delegator_address: "cosmos1gcqdpgclyuk0slj9whf5vhjyyyx2hv6rhv7rlw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25799999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25799999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g6v9kur3xjkecn52m9fefz7982859fsn7chg8t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56024589.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56024589",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gml3fglpwc4hcc7hvfz286gj7za4w469cadlt8",
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
        delegator_address: "cosmos1gu93auhganrcsfsfrj8gpwtzjjmf2zlcmxu9gv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gaq2c48c5glrxjfxlqusk44a0pv69jqwlufpfh",
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
        delegator_address: "cosmos1gak6hmdmp6ycktca0y8f63vv4qpe3fpxkvcsjm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fqydaajtycl55hvazm7um3jj9evm5qawmpr8hz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50810000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50810000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fqf4rzzd8wurwks7klgg588fm5gjt6tcvk6j55",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "26152554.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "26152554",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fqhg38uuxweyfm9r96t2ceynhr34khaq2q66mm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57984163.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57984163",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fpweaf4wygzrfhtlf742qw0qafdphru8lcaut2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25075000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25075000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fzrjfj57qyzs70ly82yn5vypacdvw6zt7mmstu",
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
        delegator_address: "cosmos1fzkgju5ekp3tavmdhvdtvvpq0zswvuywp8dqm2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74393379.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74393379",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fz68xrzzw62ffvclylmhusdqakfxly07t3dnt3",
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
        delegator_address: "cosmos1fy53muehr0kwg4d0twhxg0kzavl4uev75t6ptf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100993699.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100993699",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1f9dge7nrtrlxg24qekrwk24nxzmzlappjwm88a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102495136.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102495136",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fxkns4hu64q4g6lxj6yckze5jl4pz4xgehkku4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10996700.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10996700",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1f8qxs3n4pstp3ddfzt7773w9wl3c6c04ajzye4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "282341411.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "282341411",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1f8pd9jq02utcua50lendlmcg6gl46mwyfu2lka",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56273302.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56273302",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fdaz0u5x2nwnfp8ppdhryvkemzq8wxe4hnyv7t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56024447.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56024447",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1f0zes7xuh65kwtynw46lf977ff7xd67tajkes8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25041000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25041000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fs6k8ynuspsy7zgkfet52q0pcj4xd6s7w0xypf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56005008.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56005008",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fsacnsrdljx3ulcd82amand8knt3kn25qrmhh3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50800000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50800000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fslf7vf649ys7vvszqtr6nzaqvjukv5fn9j3al",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "38489998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "38489998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fha8ltkqccqxquvhatceu2saqaksmzlsm0grdp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "27000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fc6l4hqkulm2lr254yuegt6xx9700q99mky3xr",
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
        delegator_address: "cosmos1f6gehrngp29zf7nstklu6732nrwdykaaugmu2u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "36110000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "36110000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fmw2jj7ejay2c95s2amphx26vjhc3hjwmgstfu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fmm73hyuxnktvcdcjztgxxw3c0e4gdsrtyzvsj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56112794.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56112794",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fuuuvgwsrrf3zy46azu22kzrskww9fte7wljh9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "28320000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "28320000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1f7swvam7xedj20uz25hdpl30dktwtpguehh7t9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "14000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "14000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1f7lwsnj9tkx5zgtcdsh3q5mlqym9ng8kuas8hv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12rr0aqk475l2hpg7ud6ku8k96c4smdaurtu4ya",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "63723456.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63723456",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12r2jyx6uxuapn5p275p3qyqtl996r4swh9n46j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495120.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495120",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos129nekewj7wj36p6lwp5dhppyau0gfn57guzuwd",
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
        delegator_address: "cosmos128w8qtnpchawwqraymhnvc0ygg6ecwur3pyfke",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "73969225.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "73969225",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12grq435qhlpnzqk5mwaufe4d6f5x0g44g652au",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61176812.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61176812",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12gkhm2kxpe9w9452z0ry0qkf8peejvpva9atza",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "183697046.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "183697046",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12fx2fjmpw98nnwklxs5e57tdqtwssh69pj2mhw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12fxj3ursfc5dufl9nxfk0mwpmrzhr6arhwsmqy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56033914.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56033914",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12fswwevtghea9n8r92uh55e8en6yf9ff6e3sgv",
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
        delegator_address: "cosmos12fl3cfeev4gxc045hv7jjwuygxuks7cvsj8nla",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos122pxd9pqynfh2lrta9gqftct2hcp28aqc0k6j4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12trcwfd0e82g6904ntgka7y72efjp82hwr8gx6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "65054929.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65054929",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12vdtkhzsp4fdc0crax85qrwhck8qcy3388wh0r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12dmhexy2lm8rsdsl0yclyjpuep6q2w5pa225tw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93950000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93950000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12w932cswf7lp9q2lfmwz2nuhjy4uawqw5vpzv9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "200100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "200100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12wsz2r6kfmn9j0wc40x3z7d3aqxkn0dlk2e3ue",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "7100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12wja79def98j3dxu3t2wuu2ns8wru8vvykef3t",
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
        delegator_address: "cosmos120s8u8s6v2we2qvddjjx2du74fe2ln8q4t2kjc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12046wpxqwxr2kexf4x445jhccdp2lum7g9jp8j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66491813.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66491813",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12shjzngyxxej4e8qrnlerxfkmq8p6760hx7pt8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56005133.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56005133",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12j44zpvg5xc76z8a65gy7mmx06s7g4jm40cy9p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2029792526.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2029792526",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12j7wups86wfl3swckypdvq58q4vch6g5nr6lr9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25033990.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25033990",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos125q7z67vf0z5nnqnrx5qwpg5qnv36sw6cfshay",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56280217.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56280217",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos125g8ggctyw8d372u6nc9k94yml9exxkewdus3p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79073862.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79073862",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos125kygesdxfk2s4kgmqpyv7dhh04waurfdede8e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12ktmraj5ftn8d7q302ea2g9cr0rl2a0sqr7vw4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15228935.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15228935",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12hvsxy7kj3l8sgsrm6je3kr6fkwtjml4w2sysh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56282605.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56282605",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12ceahzk9tmsdtldq4n84m9xslu9audls76m2qg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25058700.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25058700",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12e6uk8wxal4af8ng9apfs97ytxyddrem44xcsx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93910000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93910000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12el8k6fz3n80mv2czz6apdxplsnpxznaqsrcw8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "4000007375.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "4000007375",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos126ndqms04ayly8wzpa0wkmnde7ppup2ucxapek",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25051000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25051000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12urcu3vazkqx2l7wg4p5vgcjces5xpmz09pag3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51597957.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51597957",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos127cyv62kgf0fejazqnm2tuxq0964rh3vyu07f0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "19018005.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "19018005",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tqyexpqefuzypkmvweyfggx6nd9wv62elk2jdn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1592938.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1592938",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tqxp20jajr2z3srp0spv4m5gtrx5qvppgsyyzl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55935561.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55935561",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tqnuh5zk9e8f9gnrk9jjz5trfusexnew50pu6g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25041000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25041000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tyu6854q0vlsqpmvaasr9043cwfrtmu4m9fhzh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "183000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "183000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t9qy3tz704mschxd7ne28k37lygpttkwzw0lvr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "376457063.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "376457063",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t9dje4dfeu3af5rc2yxsvyeu5td0a2v6qp3dc7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5060062.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5060062",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1txcejj0dgccxh2dml82pvch8nsgvsxc5kaxjhw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "127000076.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "127000076",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tgyqvzknt3l0qv6p98guu859mv8htpz6z33ucz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50478437.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50478437",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tfra3cjj9m7lhtkfsqer08ctp3gscyck2u6sgt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "35533399.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "35533399",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tf3xcpumsqtzq99pz5zy6udn3q9vwkd6h7su5x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "538073169.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "538073169",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t2vtt4qzhcgg04czu327vaxz0v5drg2wsd7m74",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51003212.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51003212",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ttae5hytup4h35e0e7c2zr3rakdmyknhhgzqqr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "148000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "148000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tvl8kh6002dn0gdzd0jkksrj5fk0wdk2x6jaun",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56082744.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56082744",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tdxgaxl006u6yxkxfc6mfzgu2hnslw4ahw6r9v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56326860.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56326860",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tsh8xchd80tey8s2ken8ham3ncrd7n79udsrta",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102720000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102720000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tscpg9f9gxfazg0eq4zztx4hgst5uz2u00qcqh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50600000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50600000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t3g44fggyhx2u9dxr34dtu6hxq3q72cjusryv3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "152623468.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "152623468",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tnmw7fs50knzh5zaxv8e4kdpfmgs8sv75g9y9f",
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
        delegator_address: "cosmos1t4rmctyr0yz78uwyphxjyvy9z7e5n80mcptel3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "134517573.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "134517573",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t40rgwucyplzsxq5vusuam9kwwnzg3hhkrnqxf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "36240614.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "36240614",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t4ka0x9wzauf4eznmwnfys0fdwxww26qhajnkp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tkpunuafvp336nsh6y7h5pxk4pzj9ue9x5x0sv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56297428.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56297428",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tk9ecdjc59ek3r3dsqe83026jxvtlr0k7td4u6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "282441389.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "282441389",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1th70a0kldrx9z7mchynthshr5rtxnru93neaxc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tce720rz62cp4zdqs7hmgas5m9wpytzsm54cft",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56005798.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56005798",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t6r7u6k754sve8j8tmrhnvh8kvh0r2x5ue2zda",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t62c9n4ctdawhespk9042za7t73lwzxm2kw7ky",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50400000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50400000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tm63vq4v82pjux6svmvcn73vff3ew6lj6fju98",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "13999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "13999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tufwp6sgrnh49dme3hs62dafvckmtfae8f4gd5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51000431.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51000431",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tad96jc4608praayujdw957szd9krjg3t5zae8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93910000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93910000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tamuh2ej8nz4ms7dsw4lyvsdq8wtvpxumxqy8t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2050073.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2050073",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t7ycpyxs0qlpdzfkpuj4z9x44xnakh7anr9g2r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "117950000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "117950000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t7gdzehwj5snn8hqg97dejuzj7eym42avechcp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246064319.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246064319",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tltyd0cq60zld3j3n3925gs2hez0htlutjpqud",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100331407.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100331407",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vryjyl6rmxsk86yl8uj2jzhaj2e5av8k9zrf7x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "109800000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "109800000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vyruk9jpqsvjghar52xmnlprc6wptmzr0hmcud",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "14329124.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "14329124",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v9hnnh7qtv8x0sycn8ka064xqg4hw7jzvph4yx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "607691829.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "607691829",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vx4aavlcvpd3uu4jsrhghqahu0ug897t8re9sm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v8xyfc89k9wwzadhh0ktzsphnsgjwa2zxfjtmp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56104050.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56104050",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v8fwk5d36pr0zruc5p8fr872jauvgcup4pss2f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v8v8pt2yf6k8ad3mkj7atg9nv8tz9fhn0xv583",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "97000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "97000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vfakz5sxes5ccxx24l8rwsvm5rnzl22jxwxaqd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v2qks7tyl3dt6z9zj2frhcm59tfstwgr5th4n4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25072100.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25072100",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vtvg878568vevn0vsupfxvca50eueycz66fu2s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302153308.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302153308",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vv82mgf9s2uvjre4449ugr3ljyfqdpzhypqf4n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vvtwhcksz2ewm75ynfp2vxkaswp6q3zdtf7vag",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vw9zdq0yxuazrsa5hsksd5apdsme2etvd840mj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246063987.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246063987",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vsjdp8j4047k0c9tdl93v7xn7wpfp4a70x3g9l",
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
        delegator_address: "cosmos1vjymkucluukngrzyp3ykkdrj6mr6h7y0ue4zpv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56616601.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56616601",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vjya059athc8fzpw9s8g4tl8gfde0tam95hevj",
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
        delegator_address: "cosmos1v5qkkfj0rf5ae24aj6w8wyqjskrjmagnadadf7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77439920.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77439920",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v4pmzgjvymfv2vwncdg00zfpa7ttu9ywm62llh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51989600.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51989600",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vehlk38xvjwnw6k8ez0d9rhxr8eadrmhpvf5xy",
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
        delegator_address: "cosmos1vmqzksr4zqp2mjqm409rpq5ehdm5dtu7he6rcs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56009114.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56009114",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vmp9kmfsz88kpknttpmrtt2htmr3h7m8g9tfrq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dqf5rg4kccq558f29qa02wurmcmrapch4663p3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "763557593.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "763557593",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dpudyhk8ak74s830z4ewgxdk504laufqwejqf2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "348000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "348000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dzrd7jl72hq5n20l8vyr3sy8er3j93kuhpcsua",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1450000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1450000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dzjkd8xq8vktnplrcqj7n5pajdsmrl027rd8qk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58551119.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58551119",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1drwkkq7awmrel2xgk3mnm9esuk769zc24wvm7y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56034942.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56034942",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dy7n48xwepw8jgyjrm78u2ftvmr3kygh5k63a5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67168621.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67168621",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d93ggvd6t3qnna3w280ax9g6j9jzr69eavp5nt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "207000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "207000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dx5r00q3znnua5h83hwg0v70jy26jgrcwupxls",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "19750000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "19750000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dx6r0dy0admj0lc35cukwdgjnr8z0wrzmdd8rp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "68600000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "68600000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dxlzv3nym93x72t6d5rtaqzre7skke3nc309cs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "253839683.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "253839683",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d85ley9gr82fjnvvw4pekumk5xz4dzrnmr3smk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "407423406.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "407423406",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1df7k9lwv55u7tud340n568h0wekrddqdqu0eht",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51470239.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51470239",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d27jtvp26d2ul4lwy6th9mqmwxvp68pjh4r9yj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "852050115.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "852050115",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dtd5wc903mfgsw9sl7cr6x8h0xc73afn3h3p6u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ddrx4py2lx07vpm3nkhgnahsl52j6zd6m4ej6l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "125000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "125000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dd4nj8ygfx7yzszu4w94ct5uumw3mwx4r6p44n",
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
        delegator_address: "cosmos1dd7sej48zj7z75avsfarsqr3yvlc6zv6j3yq99",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d09uu4uu3j7ht2rqnpp7xyv564u87s9tl58279",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56009215.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56009215",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d076ek2e7m24jskmlgamv7kut7df892tks0c0a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "138169716.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "138169716",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dsyujhxllacu2tfmwj4g65g2mredmd4zuaa95l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25681278.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25681278",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dj254eq6f7xgwltre6jdns582a94phsjzplll7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "7540000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7540000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1djssj3erkjh9c0ha6da7ap473kkneyc2amddl0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79420509.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79420509",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dnj49scrz50wg3r7lwjezl642a8f5f6w7mcmel",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30231272.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30231272",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dkm9cut6spwyg0e4e7r0mwf7p5cuezhpkyk4je",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "31447709.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31447709",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dcxt8x7emfmz44jtqz9ctlres38vqstzmvnk3w",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56127719.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56127719",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dcg3gsrzzwtxdurl20vpwg8fj4658kfunmr82r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25051000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25051000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dcjfjkpzwcazpeanpfzl9lhvtguluqnq5qyj08",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1deys4whsyhlrafa3l4czzv3a4su40mqh66g9g7",
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
        delegator_address: "cosmos1de88sp2h3955ktrjgnm0jkhy8dttsgdz4nqkxa",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "739551837.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "739551837",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d6q04mwukqvu06ldsy24qnnt7kcjxyq9q390s5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75386313.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75386313",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dultlt37nav8y6l96y5tzq3ghz7mfr3lr3zlvj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "106186630.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "106186630",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1duls39pg7uqze7vpz65n22re72nycvmreue9vw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3543170171.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3543170171",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1danvmprqfmhqspe0sc7cyzg9zmxfy3zs509cqp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56082827.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56082827",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1daaag7ntf0qd0u2juue5w4evf952fs68v8twz0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "87000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "87000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d7nuhps8rjl552dv2xg6p3tdk552344d0dxr0r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56004872.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56004872",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d7ma5ezs6tszc5285kwnf5k4cv6cj2v6wgz9z0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25050000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25050000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wzqdjudqgvu39tauqmm6nk4zy4aj3wqd2z9qgx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "23130000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "23130000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wrrzrz5xnxnjqlehk3hz9yma8yh2lwnywlg8xf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102381823.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102381823",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wrfdzjw8evlaxsfzc3s7c4hwh539340acclrkr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81364416.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81364416",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1w9gcxhaxj8f0rjlkwwu36e7elj9aqmj39x7shl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1w90axmgz99vz9twceexyjspxquhyl0tqt3yh4p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "65996898.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65996898",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wgdegtthkx0n5fmyt2l2xn9jchywffack25frs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10010818395.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10010818395",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wgjawtrsn27j0qsyfl408rf7w9gqlaz3sw807q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "38236630.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "38236630",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1w2dn3m3jdy2ww5rywjqw6n442u86v68la95zrk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78263513.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78263513",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wvrn346lgfsg4zcaacjfgkzq0wdsvds46h364g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wd0867jyazkkuepypfsupnunygv38cg8rnz3de",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "182041452.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "182041452",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wdnc6mfpcfs8md2cvm3gyfdzw8v3mcx8sqp2xt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wwg9r2s99ca9esdvugg6w03zlatv6kprujtvaj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1w0h6f8wc96kam6a8x2hp85ruesjvvlygkmplrg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "9999998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "9999998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wsnugpfldutvrtl9dnrg0ex2ggjkfvul6te34v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56082356.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56082356",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wjt0p3m62rrpugxug4szqgj4v5d3l8llp6qqn0",
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
        delegator_address: "cosmos1wnzehu6mhz925gscdetf4htg4j4w7pf35wmm5q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "98536135.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "98536135",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1w5jcyzsvx9ucdx6wlqqlzcjdjgkdckyhuqy9na",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "627708225.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "627708225",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wkep6k06rqh2vls8t5q2jjkdn4z803alj59d8v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "352483099.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "352483099",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wcv554d490tav2qgr56epg5pxmdykfslvknmp9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79993998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79993998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wmgnd36m2nd674jg245wu5m4dv04vtsr5dlqew",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77555544.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77555544",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wl3xq2ktgeu0xxyf27axqvnpufft6vjzplgxna",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "229900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "229900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10q8z93hgpnl4h0fxjye58erz4gp66v3q3hflx4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302441391.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302441391",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10pjj5ye6spe7vgqcph2exm2pcx4m5gv9jdweqe",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10rx4suuy4qy7dx4wl4x7kwvsv6f5y6a3gprct7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "537000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "537000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10rhg8c8eagp2zad5vxm049vvncccmyvd9u39ta",
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
        delegator_address: "cosmos10yp8ey37pjt4y5cr6nl2dstqjyz9f5k9lnucsj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "161080377.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "161080377",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10ytvpz593vw0w2cny8wcj9nyqfc43gfstgxaac",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64380023.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64380023",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10xsp3mltnkdyl3n8xh2j8g5t6fzm32n8dx90q2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "87708014.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "87708014",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10gdnpv8n7h8zxr7pq2xf2hrlkpw35s8gcw9ut0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115790726.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115790726",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10gs39flfrp60yqj86qqezw85e6gngju5482n4r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10guvn4243qg2l8ey8gy9zwttz6v23232c9juzw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "6950500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "6950500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos102e69ktrs4exjy6u67wk35x63m527ncyvfcfej",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10t6r2xw3496d0r84lu9vprm547uww0szp5nd4c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "86728010.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86728010",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10tlfd8ssydsz3mjy4r2lkwran6shhcvkvv79lt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "105543387.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "105543387",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10v4sdkmuadltyzdpxg0wpf2p50anuwxcw9ngra",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos100ha9vhqvr7qrxxxhdq8hskrncjtlntk0jvqx7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53670000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53670000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10je00ny5m5mt6f3vr4nuzf6dtysq0vfym29v5e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25047800.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25047800",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10kmlfy0fd0xxevckr4u36ms72q3wplxcnvqr5x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos106g06rmkl2cd9xdmxdl5vnjh4fgh7gzr323qxj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10uz3z6yr37n7rwp4wyq2sgeuadx8y45p280uft",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10uyrwwakpqt32y05gensh6vf0s9w9ccejls9yk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77466861.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77466861",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10u7mu6yygadq4ak27wqgsexhjx0dstjrs2g9pe",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "237450000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "237450000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10ar5cuwtnjqrjdjuxx0fkl84uhgrfvsdhj6h88",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77242279.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77242279",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10aluh0enen5f3eserq5gy2z5273dlanlykrpwg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10070000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10070000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos107veuh322w57zvwce96xjx48j9cmk4c2rwfxx3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "119899999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "119899999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10lmt0uv4dk7tyspe8sqxem3pexvmhw6yqlhmv9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74619367.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74619367",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sp32p0rr0rg89hjv40vksdwwquag60yfp4qq5h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50710000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50710000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sz2qs3npzu83f39ha9n7hv3fhwtxljx5q7z4f6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1009303.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1009303",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1szw5zdjh4jyq2yprdrn7shw6jv3my96sd80w0r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "133988205.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "133988205",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1srrk9qyuc3255u7h8zk78n5pvu3vatt95ewmqg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245984299.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245984299",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s992sjtqhu4yljez9kv2xd5ze97arcfkufrals",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10070000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10070000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sffeftq20xz05lk2n2z4u80lmmtre855r8xt9a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56141534.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56141534",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sfdhlsdz9ecamff2jfntugkjcw5cyepnfq2nr2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "214957003.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "214957003",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1stvxat3uxuvw99gl8cek9faa2mt6ma5tcq0c5p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56184284.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56184284",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sdf4z2y8rjekmtsgsy7zy56f4yhg33hu5xqtq8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sdhhsp2k2ktsgpc6xcknakeq559jl0vtg47xgq",
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
        delegator_address: "cosmos1swh4mvlen7hql48c2z4t2hd3ag3mv9le73f7fm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56284323.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56284323",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s0gjejeatng87y54dalpcx6qpegzvqknssrpga",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56008676.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56008676",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s0wltftrff7889rslyep8qvtqtsa33ps03vdu6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62742602.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62742602",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ssfj0wxp8mc60y38q20kkg7ysf98n5n2zdrcsq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52516082.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52516082",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s38e85lcx8q9mzqsdm53esnxrt6jr00z8w99yl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "529215449.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "529215449",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sj5zyq6pple07fsjfghy80wc0s38chrxmys90g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sjkz08a2u9sgxwakapnlceusxj6qxwfy7kw9f9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "7000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sn6mlfkzcvrhf7uj4w03xnh0dgleaq3vty8ese",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79216973.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79216973",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s5qj44ta4pelugjzujtjuqpa3t6ynh7qytwv7g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56009644.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56009644",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s4szs2h38m5g20c7cwg9nve6whww4e099vhzs6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246049233.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246049233",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1skestt06fksc8sfp2vcssuww32dzt5j4jmyxth",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "172980520.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "172980520",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1shgmg4zeksmf4pkf06dlx4wt6vp44f0mv7qyuv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1scsprmjaac6en9ukg89nqkuz6z2wgtyr3pgxgf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56032400.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56032400",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s6fd9nyr2n4dgcwa8elkq4j7fv0s5tn4yegyly",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70323439.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70323439",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s63zncrcargfau4xfmrpvzyn0hndg2n7nusj3t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "105098098.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "105098098",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1smq0qz39r8e8awga8zaxlquftkzxldr8v6vl8q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "157000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "157000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1smq5tgpst86x7aawvvw05up6jnmygw4p54jm8t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "59999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1su0p2tyhph4hv6ud22c057rz3f8gfvrs3ym3ju",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "208437266.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "208437266",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1suefadvapegrdl53yud6vct9ermfr026l4pmvm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25048200.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25048200",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1su77v9hgekq3ck2jw44gu0fpns2vq45vxh2ctu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "19690000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "19690000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s7ldf2t35lwwq60v395wuthqh2nsmmuvyw7pm8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25061000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25061000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sltq5xnhhh02zelpphpkqqfy48w7rg4779744z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "155500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "155500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sljjz99j9ath2s3j0wsy5sut34lmyz3pttx0dt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "253139629.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "253139629",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13z8knsvdjh3mcyxy8n9d4ccc4wsu2vdn5a2zqx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25071000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25071000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13rge5v0u9vvee6we2teyk2vam6lq6ft43qct8n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13rsume3rulwc777eukg2vr8r9ewv9yng3m3hzg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "150484950.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "150484950",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13yydpnf6800m6y4mtgypm7hryqd4l9a0t4a5ce",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61595426.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61595426",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13yh4cn2r4t2zam8c600d7zakd869pxa9d0j8r7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78760380.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78760380",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13g2d2a3xnmmarukenpnlnklydsxre7wcnc9wkc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115024950.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115024950",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13g3rxhmsp9dwjmjda6nzdjcg3at644uluvj5dn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10070000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10070000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13wa6fnyfcxz6fhtuhdp22fux0zqzfmqcxn5q6g",
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
        delegator_address: "cosmos130umlsvuey3ss03p9pnmnww4mx3zta4sczpvpz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "712660544.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "712660544",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13sq2rq4azkcv5jx3hg6fkpjf8l3glntagk9dcv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70114945.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70114945",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13sdqfpxsal48xlmspyg2dzteyqu04dveg6kqc9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "252041574.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "252041574",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13swu954acp5xtn7l6f86xqanwfwen3m5522cn0",
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
        delegator_address: "cosmos13s4ek4t024p8unvp2vx484gfgkpv7xtxtk5j0f",
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
        delegator_address: "cosmos13jkhp3gp2enyhnp54txq8w5aw77aaqzyzpaf3u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246069263.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246069263",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13jungz72perqhfkzxhq77g37x3mavaw3ggrpnc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79855549.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79855549",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13n080myq5az7x2tffz4q0a5u2nnpk55m9nntcd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78242090.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78242090",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos135vz559nhcmvyta9y5juee8fs949nc8cskxejm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246069224.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246069224",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13kx5ldwmphx6m00mxa3azdxu8rhmwe370ckrpu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50400000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50400000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13hmcqxvz2uxgxjg9en9rck6agwv2zxr87kffe4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13hapz35dfzuf9ult9vw7qdsag83r99qzdmdgcr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "295037333.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "295037333",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13cvpryh3pvrjv00dlfsuzmzwytjd09gfpjudeq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "113095522.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "113095522",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13cnywaqc8h882k8p29rlsajh2qgy74fyy2gp7y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55927371.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55927371",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos136gwx0qu3jlny8l6h306m58wprzacxrtavakvg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51479433.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51479433",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13uyv2mzgrc4r0c8aslsvkfy7dcmgflq07cgwmr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "45800000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "45800000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13atdnhurhy87dycp9t442wgqej79esvhnaszk2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos137tlv9g4dgm9jq9ucwcd5mpp7w4agtzurkf60j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "666129142.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "666129142",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos137hzsw2n0rklw78jxc92pyd86vg42zcnd832ye",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "178061265.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "178061265",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos137l09ps2nc7exf5cjcmmrsutgyws4d6e8lrcad",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "69942248.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "69942248",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jzw2yxmrmszhf288manm8fckql4979zyfu37tj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66123244.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66123244",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jr0e4le4kr7ewtsvujrqzcyjqn9r026sr0ehf0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "274987149.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "274987149",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1j9k9pjf9ytwy95zafcgxmr7mprqaqdz937tf3u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55875937.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55875937",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jxd29h6ra4taagzxp7k05f56u50h9r8zhk2q9m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "34900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "34900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jgpjmj0wlr34krplzhh7dywarfmkztuctzny5m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "116300337.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "116300337",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jgyty590k5ejhkrnmd8ez52a5nld0pefp7gkt7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "31755547.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31755547",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jfvwljhgmvpfya9pgepgqut7a9nt7llf358e7z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56033966.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56033966",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jfwp4d5mg93sapd67r4274f8y8tg4xn7583dw6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "104509379.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "104509379",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jttdtq9ah54rawwtsapt225unp8fdpedq5l9f2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "663893863.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "663893863",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jtustv4ghy997d6catge3mgklszkvve6jh8ngz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "212000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "212000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jv49xjqrvwrma3z44pzgw9suh2f6xexkzgkuxq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "491215404.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "491215404",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jdgpl7lhhcy5mmj2et9uckm7q3x8yfahtdypgf",
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
        delegator_address: "cosmos1jdcxj8ufkmef83wd02jz4vzxmg4tut4puueryt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "250220000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "250220000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jwcdyc7j0tjavkjn7628zq7dtzvc9fpvj4ljjl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "105000087.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "105000087",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jsmqhawyu7sm2pquf2jyp4a3wu8jn5ml64gx5n",
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
        delegator_address: "cosmos1j3qv4khvemv2fgk9a6g238g3suyqatahgqy9mc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42923806.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42923806",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1j3dnzz4txx43egz2ctvulypx882tdx0pssh6x0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1j30zxzpxz2sdt3999f5c6rxx8pdpj5dgyynr7n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "89999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "89999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jjnj8mk074x2tngqc968d3tul7fhqegr2ev59a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1j5cephkjpxqt4dekw0pa0ly6y6pqv8wc4zv8qx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "41000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "41000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jkdqeuc55k3rzvsxksack6xhn0exgzh364t47l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1057645077.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1057645077",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jht42k4j2l3jyulqegvpz6s0t68r7tvzm55akj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42899999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42899999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jh6s6eumd7lldmeppzly7a3r36kxwza4n0tgtw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "21116719.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "21116719",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jcrrk8zv8eeda79z8huqucp2k9g5ee3lxd09v3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62008449.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62008449",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jcwlvmkce9xq6ur33qmqxm3zprq7kp96am4yd7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25070000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25070000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jm0kl0mkk32dsrrprvzepu95r2lg07jayhztcf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57106754.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57106754",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jmhcs3ujhksycus65ncf2m0nglw379lnvafmcy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "94000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "94000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jmljljjerpvw8fh0gp6m2x70937qznl0tnpupc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1502592444.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1502592444",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jazrl3rywt8v9zdk7075shd6qc7rwmn4e5gu0v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jlu7fqmtfkd7wj3nz53ta7yj4xtvhf4kl4uxj8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115046705.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115046705",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1npurzcjvq9rd29k29atvxd90732z4lwm374vrp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "650000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "650000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1npu9lyaf0ve5hrr30xdc8r57jje98tu53j5fvj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302441376.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302441376",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1np7lw8vrztrasq3hrazmydsgud793gkmm6hkws",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56015779.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56015779",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nyxh6aatp9fzxjcnsxgl47a7ax39ajerkdk6yn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55927110.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55927110",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n99n5vw2frut3mauz3k5xet087h2chkkmupa06",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "9000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "9000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n9vw0aeaw5c52kdlaq2uxm5dhq8ltx50cdqnf8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25759514.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25759514",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nxaphw2f5yc2vczsheje065cvxq59uw7ep8epp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "44732561.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "44732561",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ngx7xxgfrnguwkrjyw3uecr95krl26sp296da7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61940000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61940000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ngms94pfxec8qvpc84pn0kecwz9x3xjy8a26uw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "156762525.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "156762525",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nfq4mqetxtgs630srlw4eu2pvf4u4346edvply",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "16508549.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "16508549",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nfz6y7zmcg063ljug8v3jv828vgq8g8pwv90nt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56282448.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56282448",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nv8ut6satvywz2crtajjtdrex4mx4tvt6ppnyf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "118986800.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118986800",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nds9crp3dh8eh26jemlaryt3fjlm3vqnt908ue",
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
        delegator_address: "cosmos1ndh5f8vhywgqgc30fxwvsyzewlpe02tjghrll6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51463146.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51463146",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nwqalvvczx5z27e97m35ynmje5l8uc830p6ljv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "14776586.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "14776586",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nw4k90ys6tkye2lphmmgqtrhedw9uzxxqagavc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n0hdmhp8n55dtcq3n0q3at7t9v3taxcjs3nv39",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56082683.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56082683",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nsqnul9j6qutnkre73warcpw6y4sx9wql8pxxf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77382079.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77382079",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nswpdzhvvj7z3waul39ckgxjd2vtmdy9c6al8h",
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
        delegator_address: "cosmos1njqpx444qvmq9q9yewupn4nztmsfzvct73tek2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245987091.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245987091",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1njfgqzasl8vsf4p6vh2p3pgs84cr8062duc4sm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50700000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50700000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1njfdetrhv2kj4kl489hq7dm0mmxcmajnhv5xf9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100289725.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100289725",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nnh4thxglkdcp0h2kr7t53rqakrmlwvyg3pczz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "157661326.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "157661326",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nneyqezp6ykcq5ha9xh3wde679dkxescqyuaj0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50710000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50710000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nnaj09ssuey2jlsjsk7sdz5e6sregvud4prtvl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56083094.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56083094",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nn7mdme6uaquplaed4cm9a764wavcdpk25d5s4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n5wwqjn24tu4e37xp9c5urwegk547ytcp0ehck",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50800000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50800000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n5jj462cvekx8z0syz8u2gmpf46g2csx07888r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "154541479.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "154541479",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n5mufnd75st2ngxsl8xdh720larfvzkvfglhw8",
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
        delegator_address: "cosmos1n4geujltm73xeqwznjyyeh8n3gz2hxjd3n0pc7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n45t2sknp6gjj85f25sazprq7q8kyweqz4rlet",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "816625665.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "816625665",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nhu8uzk7qgjjf6nvn7clshzevz82a67nrq3mqe",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51568176.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51568176",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ncz2g0pw7jg80tkwhcjkktsw37n3k2qzwndxnk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1554759895.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1554759895",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nee5p6sn7fx4w3usljz8quugmjxp7uemlhvkac",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "371687532.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "371687532",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nu8r3g0nckm79tpmlvl06lj6pacve6svqg3xwp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55900198.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55900198",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nuu72je3qqzcymux20c0g7qwc8y4dzs6w2679h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79298242.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79298242",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nuaefncm0legfws3w6efpjlm34scupyxjyk82r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67976056.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67976056",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nanyw77wedg4fzccxynuyqe6rchg00nzfcjhsj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56252356.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56252356",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n7uf0luy0ste3lnwcrjc5fssf6wxvtel8hpezj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56016173.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56016173",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nls090mftwcg65f4v8we74wgzjjat9ags6tr0v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77059095.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77059095",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15p4z9ccspfkrahrn7670q5ej08q7fuc0w5nee5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56175826.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56175826",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15z8vvhha5pf7944hqugg4g5dfcf6ttj4yv9y5g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "459724578.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "459724578",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15zsu9yalwlfslx6gk0898zj04n22tl8lgnna9f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25051700.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25051700",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15rl694rynm8trfd65jsh6s00qgumrnxgu7ke20",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75993842.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75993842",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15yqm8mxj3lkwpy9xszl4lccm4rdwvuhd9k5xns",
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
        delegator_address: "cosmos15ypjfrnz4trstle6g3e0zklwj3f83pu2zjj553",
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
        delegator_address: "cosmos159f2g2zn00n8qmru8xzzlqeax3mft0mgme75cz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67171470.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67171470",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15x84rgw68x6v42c7drsgwng0dzt8ylvf667hrk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10107446.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10107446",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos158zds07hnzlrtu0a3xm603ncyeqarvwl4nnlg0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "32996699.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "32996699",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos152l67q44deyj7t956f2swkjza5rznm2qfs26ts",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "104000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "104000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15s3raw658c6glx5fe8hqxla3ntn0mmj00yru0m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51528473.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51528473",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15scds0jq9crvvphgmnkxuvnycj64xj9lddxrc9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "606904725.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "606904725",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15jc6xllnflytxke8uktcwu58uhmz6rplvrek68",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15j7g66x5y99d9kjs0zvkvejgyhpgfael9jzg5j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "99000040.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "99000040",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15n9me5yykqtedf80zsnk46lckeu07eegl3gkzw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "544547444.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "544547444",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15n2uxczde8frc4n8m3ctu9dh6fd2ln0g2w4jgd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10050000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10050000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15kzcnht8p8hrqanc9fxeymkxm4pzhq967x6n9s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80492607.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80492607",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15epp26pl7cxhq6ff882cluyfxacj8lv5xlyp4z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "500000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "500000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15e45phw0qlja4342nuarcu2fxmzfjlp6a7lar7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54969374.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54969374",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15m75ppwdksp3t72shnkjkh4avzxk4c2m2cpjlv",
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
        delegator_address: "cosmos15ud2mh8qj8kljer927c4q2tt82wqch55eqz4w4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "119300871.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "119300871",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15aa4v29vlhkzdh5vmf7m55uz6sf9jqm2faak7k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos157qu9jpq3pasuc9s50tpd4hwu3tm45lresztsd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "449000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "449000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos157juy0a8fcv36pkh4x6xum384ttdea9ewqjev4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "19400000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "19400000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15l0r43dyh2gdt2ahcj322mc896jm9sh0ngzddh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56600000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56600000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14qr54afm6rwhh73w8pxq0nes3tw0w3cjk0zlue",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55938765.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55938765",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14qdehlskhtzmmek00fcse24s427xq7ucv932vu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56010098.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56010098",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14pqmwmkmktc4myk4qfaqypddr84u3g60npedx9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93820000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93820000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14pf2zcep4vfng3aw0wvf45mz42a8mujwzf0p98",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "587410033.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "587410033",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14pt0uctuky6y8d22sw59we3qup57fu7pa50gnl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55925613.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55925613",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14pajcwcw95qqrdacjdaa0svr6076ku4e6hvl5h",
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
        delegator_address: "cosmos14r4ctezck8t046wmzldnam2c93jm0j6l6plw4q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56005437.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56005437",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos149y8c8zump39xe362zq4x2xu8a378tk7zy3mwr",
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
        delegator_address: "cosmos149x9l4aqpkcf0qvx50vey7tn326qzufp9m5r4h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "41708962.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "41708962",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14xcezyeyvxx384vnqhcxrs7qesfkkrkdqszejv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51024127.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51024127",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos148dcdgzacvumc8n9fgjrsaq6njeculn3q3c7mm",
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
        delegator_address: "cosmos1480j70ftswdfnc5uf50u7r4ksd5qgd426fk77c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "212290749.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "212290749",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14tr8kzvetkd9lqmts8m8wa9cuh64q3r0jgd93g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "84336146.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "84336146",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14wxtl6zj2qu7r4vmsrd3galut34zezaqfjm09z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75639880.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75639880",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14wwykmdd24auqjnn7t9tu6jwau8v8wcxs4a4cp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3435189754.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3435189754",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos140kq2fts8ed9m73a6dch7sgdap6hnp2pqqasx9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14ntctrlgjctes3pa82f0ry67ver5cvwjvuaks8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93810000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93810000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos145vs7fa0lxkr8dps5cfs47pty5j69g7w3402qp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "20000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "20000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos144h3z96330edgztn2svsv9rfqm9t9hp5qarcrx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14k5zmw7me6vlrxat9x953y4u023nvx53vtugy6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14h058h0qve70gpymjq7p6uhp0v5cag8zyztzuj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25044100.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25044100",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14hetr0vtd8q4xvaqr0f5ztw4xk6muehzkwjj52",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "626738105.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "626738105",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14cgvj8rvl5v2w8jllnf6jh9gdf2sgqgcnd8zxj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14edzsrwnua7vhzp4j62sk8t206lvxpzxpammwv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25071400.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25071400",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14md783p5t8c5mfjq2rrfrxz7g02p85jsf8s8hl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14uhjgwapsu54p6cn47p6sqjtjdzt8vgmrahkzx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56118726.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56118726",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14uutcxkwe0rws08j74v8vl9f9z0qz3kc2s8fd0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "87214000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "87214000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14aqym9fc7s80du995g7tstze772g89lr5250ut",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "26760846.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "26760846",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14ar55ug49hczxetej0v8ycqtrs8rrtqlskgzqg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75877365.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75877365",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14ahfzcwn40nw23yupzttlwzsc2lx92jsk3ydy8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "11890544.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "11890544",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos147vq8se2xg7nq566udrn6gz2pz9y88m7jl0t09",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "281896880.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "281896880",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos147dyp5wpjwd3sjkx0a5zg5rr89a3c2vzpvmcjs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57988477.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57988477",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kqwxlygl47mf2ec47kw384uqrrkr6f6tvv2qmm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kq6e9zxg00zkezjwxl7u9685ud8pn87vtc7gy0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "90600000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "90600000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kzyz6wyvt6maafq3ajy30ed9gxv9etwqscsdy8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "182018610.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "182018610",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kzu9z69ccngf9gsrsmvhs34d33yy3qfszgsg63",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56119834.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56119834",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k9hzgl55ny6m8y2ueujvj0dul4q5th6zu8w3yc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101000008.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101000008",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kgs7m2j85239cqww9ygxm6zx75vdqn39cqgz03",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "4634593.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "4634593",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kg5chx398g0p09tc4hemm2fwxj6cwt9wq7wzgt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "9000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "9000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kgce2j9uepahgug8c8c6vmxevhmmux7s4lhmg5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246068102.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246068102",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kgu07r6lhpr0v3dww9a4rldfny5v6fyka2prfr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "612685239.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "612685239",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kfda4ujz0hxrr3unheysgfegj490kspwklr6tf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55847061.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55847061",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k2j44s7yr6v4mgsuknrgaus5kzun73rx7uhe2p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1002000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1002000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kvq4n4n4x3gqlyfr672pjyqn73c2hdkuh6r0t6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "594000004.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "594000004",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kvkxlckp7a7vg7kuazefv30w38qymanrdgf3xy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56025947.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56025947",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kva0nk0s428w2a6cec7a007mfc40wkpdx26q43",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50853444.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50853444",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kwd5tjclvevlsgpmas57pe6c6j46zens9a774f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1119526603.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1119526603",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kw6mw70wafdxgp2n8s4lscx04du8ka6dakw2gf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53272515.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53272515",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k022pkelzh0n6xefn474l8tj8f4y5zzy839urp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "12795590.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "12795590",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ksez8429rjftqa8f9wxxyg4l80ey7cfwpm82pr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "119251677.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "119251677",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kslqux8kdfra2us0v8dunjsm93a67ewxynz6ls",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k3sgaankyf52zd2f4qfyxpj0kzv73e7lv2ar8f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102637376.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102637376",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k35uzmcdpx05w0vsla2umr02cm99k9kx82smjr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "637693019.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "637693019",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kj42x9nv9kn3405rgklhs3wlk8vcx50nuyljsh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79686248.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79686248",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kn4jjr4akh2h98udxg9k3u95gmj5fls5hv72hp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50137464.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50137464",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k59eurqq24fv6njd52dlpsxv3u6uyzq02vly72",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57987525.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57987525",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k4taas5rcpt6lc9479e86807y2ld7spheqrr0h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "112034913.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "112034913",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1k4wwatjx8ht4raaaud97p6w6ll8m5u3unuvpkt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1040005862.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1040005862",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kkmxy4uyhh9jyxtz4cun076l5zcm63tkq46x0t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "4000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "4000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1keq866fhxnntymz56qk5gvwk8p452m7h0nl6vn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56243059.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56243059",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kmqy9dtxn00qdh8mrrt5cnvkzhurt2vnp3an6k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kmtnee7hn2fxu4pw7crwk7dccf96dzq2gjja7k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115256893.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115256893",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kal49er78r5urp2jha7qe6wwcqxjazddzd7dgv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56276778.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56276778",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1klwsmvg6d0u0znn0rfrhc787y9vazc0yhyxfts",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1klw5g3x767p5u76dn4jnuy27rkzn8kkgms040m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "63005494.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63005494",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hr7tz3qvyhlpghtyfxdlwrfkw5zcjkxnxd0l2p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50568576.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50568576",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hyfz8tq2c4339ky52kn53pvrdcvadk4zzttgqr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "88534558.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "88534558",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hydj6ry0jvcr2d787lk69klhw2eheqc96ysck0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55284529.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55284529",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hymvdmdwn9gv3e5mzqd8ev3f2xjec2jlw4gvn6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56279794.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56279794",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h90kldrzx85szvgzr08gk5m5h0mtgtgnkulrzf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67176935.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67176935",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h8yya9ylagdq4x02ms4lwlvw5y596as5c6k7jz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "11700000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "11700000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hv4rlv94dwwsj3z7l6muye6ndmup0htakxxu8n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1200242785.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1200242785",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h0wvvkyzzyw2sjc0pm7k86uv7v2f2cllpqtr0z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hsnv76wmlxu78kxfdhg85fzry9uvaunq5tk4zc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h3j0wrf9kmthsp8rsrm72wcfptcy3qw3exj07v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "31900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h5d0p4qrfvg82nhyjrm3gurxcq7axkp4936yu9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h4yklnnd3a9tas43y0ey8z3vg5zzwjs0x2hqd9",
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
        delegator_address: "cosmos1h4x2tx4679zjv77uet0x6e6v33dc8l82cgh967",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "282418587.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "282418587",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h4kgk9dy2u2ajxm0qmjlkfuq2z5su0clz0f26q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56229809.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56229809",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h4kc33lwqqqytu0224y8hw2exfjnkprlpnkcfu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61839000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61839000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hkzqc6fx8fxswes3uqr3ts788v3w67w702hp2j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62463732.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62463732",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hkwgeez52gs20zx0sqwucs5qxauedf2adj97qt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50299999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50299999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hcs653f4qrfm60wsevzdyalpkn0rmrhz4jh364",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101000009.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101000009",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hm0sf840euex5sc7t64kthksqgr4qh5mnhwwjd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56080121.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56080121",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hmhlm867zq2muaru2zq0u8t86mp2jpetdsan3u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78799780.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78799780",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hu5ugwjnttk2nw63pfe5l9547gdatklkjqzrd8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "92449999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "92449999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hlqsmh35sc0zr9lmcrxfa585nc48u7cw7prtju",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "999800015.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "999800015",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hlg6pcc98ecwy440kda40mmfmsnsn7836534uq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hlfy3cmznkzu75208e7kgy4u6juk4v8yl689ep",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245980139.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245980139",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cqjp63tugraf4wksanzh3xzaap9upz42fa7wp8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cps9txnk05lj9htyk5jeyvwxjt6e54fx0dhpgs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77921062.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77921062",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cpjexca8tzxwqa4692x09n3sm9qsamhsx4ajwr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56119239.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56119239",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cz72h7thxsq92a26l8j3xkjx9jtlnuua942p0f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "4545194.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "4545194",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cyzcp7ejhuluca2rj3ew2r2h34vppjt3d30pml",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "59999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c99hwnrhwjsst585h8287pj8396xce4aeju3gz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "118687411.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118687411",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c9xa3dp0970yrp8gj8rrwgne7al7q0cv5ujhgz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52695700.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52695700",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c9cfhs300g23jkv2feqff3kke7cdklj2gmh4w9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56039245.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56039245",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cxxjs9eud72nmvufznt69q4ld2te8safe4ywnx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "225907357.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "225907357",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cxt9q4f43qhl7vnz73sqxnk65ux2lw9hsp9wtj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cx04qcueeque9cpuv8p4h0zaykaxakql0hwpe5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "36066181.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "36066181",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cgdty3246mz7jatqkg36h2aeqwnwf2m6yh8ep5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "649180000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "649180000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cgjqpqtr0zqdpfx7f390hxkc3985k8vy2r4gs2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55845732.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55845732",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c2gdsuq2n7avgwc7ev0puydzlk44uj5jc3nkc2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245986782.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245986782",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cthyr8req6svmza3euykd2sf5pzse6z2gkd2x6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302418938.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302418938",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cv37v5mwxjczl5kzqykxc2fy08ed2tk85jj2r8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56118775.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56118775",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cdtyy29mre322xxpt2yvmz75crs3pl5tw0pken",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "816191841.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "816191841",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cd7a87m7r6angn3wqdfaksxp68y0t6dznx3mld",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "34750028.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "34750028",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cszrktg52c4h4kqkzsyrrrw445fuzr6alqvxm5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55897472.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55897472",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cjnc8hlw4gt2p8wydxjdpckywlux327njcmfa7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "500965725.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "500965725",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ch6trgvvx4cvs2akhh82a6dvdrn57cqgclr0ex",
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
        delegator_address: "cosmos1cc9n326mgu9qkmg7fvmel7ax6ncg6vgsnhhhcm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51408048.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51408048",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cclvds6qkapm7d6m8akag2z2kqgqct5gmeyavg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "166054566.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "166054566",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ceml4szqpc58c7avacpd8uruzwuwt083y98flm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55847087.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55847087",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c65g3f5ujul79f4tv39rnx4k3fp0nwvrsmlpln",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "281500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "281500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cm0gyl3maepxwmwqqy52nk369hwurjtk5m7mgk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cay2udnvc6gxdll68rut62vns5ds76d0f5yzma",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "21340000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "21340000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c7pn0kv2x784cujvthxh5km8xxuftf85nn5hag",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "256019383.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "256019383",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c7zknk324sjpph7mxmxquc0zq902gn64m2zwa9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c78d8wwp6stq2cpfpw9u8aq6qwmswpp29yj5pv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2000000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2000000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1epglcal280uvjlzjav80reqe8jqa40lp5khy24",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57083216.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57083216",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ervw8n4wrn40urajsmd70dd8gwn7gnl82k7ymg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62513189.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62513189",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1eypkhtdahph4y6kwguh4faqydl8clk4272d63n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "63357999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63357999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1eyawltgv5jfgfx34qa0lt8rzsp8jdyv3v2t64e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "11100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "11100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e9gnaqpgmcx69zftepulh43sxyj56jldjygk06",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15132237.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15132237",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e95zpspqjak3329s5y5ah6cf3w746a8p543sve",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56017869.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56017869",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e8g56hyrg67872r4duf4x2z33mayj2wxsjlnge",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "41013820.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "41013820",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1egrtu40tk6ux6d4cf9dhgur5zphems7t8nlavz",
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
        delegator_address: "cosmos1ege3jn6j509d7985jdefxtn7mcvngjp83e5qvg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "188027511.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "188027511",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1efk4hysyejfqmx9yqvu9w4a0xnyevuttlk3emv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2499499.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2499499",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e2fkqtjvpe67rdw0jc73etnkleddpe6sazta3p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25055500.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25055500",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e22h52lmkr05x6t69azs6kc3ffr9ralk5kwxqu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25050000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25050000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e2tkndf8l82ad0cqcnupgzhzy98jjdzyg7mzcu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56036183.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56036183",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ewp0y9evs34dnujsvv3q3rfqw69pzwsma52ccc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "14056781.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "14056781",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e0evscn6mj7r8jaa3425frh86l5yqxzc3lhjj6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1es5sskgfngfh6srkgv753l83emmc9j7qul998p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "224208547.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "224208547",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e36egnpzz7twy07kzm5ccjaxdwp5ld53dehwuv",
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
        delegator_address: "cosmos1ejwsyd4xvc8mu6mkn2wkfav4f9l9eeaq0lyzxl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ejskt8erpgnpzymf2js47rtnfxramr5aq290q7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ejk9upj3ryk056wrh9h62dsvj5szmhk24ux7mu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56232805.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56232805",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e5jmcepmgr6wsmp4n3tlhmdcny2pw49cyhn5mm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "155493448.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "155493448",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ekzawkkedhnlmxqcsp87aye5ne796jr4qlqy8a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64124999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64124999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ek9sgapp3luy9szgy0ffqc2qk2387hn3q75lul",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25039870.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25039870",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ehvppg4y9ar7dvnhjnqgjwxm2vd8yvsxs2tce5",
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
        delegator_address: "cosmos1eev90xt54g28zyhtdd792zxc3l9szd3w5wqd6k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25057000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25057000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1euxglmt4e6k9yh0zzzkdaj58a2fwum95qjwa9x",
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
        delegator_address: "cosmos1euftp2xtgyhz42m7gv82elr9d2f5yll5x92cme",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "111620915.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111620915",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1eujlkkfsyjf28ey9vce3yp0s0mdd0l94v7rpft",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "512000002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "512000002",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e7ductrmw5hrqzjelakecgpsu7twl8z3h2v7kp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56244705.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56244705",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e70us402l65vea04df9dxhaagph5gkcpjr8uc3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64379000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64379000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1elphxtaaz2muszt2gc7rz9qq4nav203wnv35d8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56038780.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56038780",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1el8vjd3j7rwt5dr76hqkneez69csul50pzy87n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93700000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93700000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1eljyvvy7gqy6qe4ck98762zxh9nlfzsezcmwxv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "96700151.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "96700151",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1elclpa4cpu3tshp9sd2r5v5gjnm6sn58uemm95",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "151498503.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "151498503",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1el7xf32qw3tyr2yc07483samz5qgvz6mprawe4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "69958992.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "69958992",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16pyqdev493dszr786lp38d39mncf9ljrdyay24",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "9900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "9900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16z62k22z3xpq7x9sdhwums2lcks8wejc7qja5n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "105560849.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "105560849",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16r9zturmq0a52cpshw3pdpgxgn5qsk2a8j3psz",
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
        delegator_address: "cosmos16yanaa9gfmdytghzz3c5ep4kgmzjw00228zs8r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "85127741.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "85127741",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos169pkmuffdpwm8dfrefc2tcsvhyv74x8rg2uc55",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75617398.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75617398",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1698rcdde394kqj0vr7tyteqcjk60lq7kmud5vf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56084098.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56084098",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16xspvd538qahgjhukvhv0q7qermjzd2gvkrdk2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "116213103.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "116213103",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos168lrc09vv6cp2yckr2klhfutz8reu95c3z5k0p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "30458612.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "30458612",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1628l2qz5mgdf890wt5fksf3c8smw0k78lauhjd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50287010.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50287010",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos162um8tckdsm90a7r3dp044akk9twfhvg67k25h",
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
        delegator_address: "cosmos16vp5vpa48tyyje8c3nwuuk822s4sprjchln97f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25038500.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25038500",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16vrpzr6hfqmmktqa9u2s0qm6qw0sd6paslpafr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10102390.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10102390",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16dypkp53m6k6u3ruhhe0rxghlsmwd6grsuscqd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50099998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50099998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16wpn0gwepdalz0fnlq5nfy645wmwej2c9q8tje",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "256874938.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "256874938",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1602cse30jdmctgque3j8lc78w2frxzhnxafuz7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "130110708.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "130110708",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16ssqymtz3vpd4y7tcqw0t23p4he9407c25yl9n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62939921.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62939921",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16j9m4s9hvz2ns2z6fk2s35egca5l6rw9djqxdl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "11000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "11000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16jk3xk8y96xfwhu3z2u8jenn2shxm0u06sqcp2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "126908607.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "126908607",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16jugww08u4grzug8mmecq4htvfcsqjpj4x5qx7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1658d9u7c87uqcj8er5u420efrskez0p0xnl94j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "122388899.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "122388899",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos165s3zw3vaytnjvfv390f9f876u79zv49p2yy44",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "120092789.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "120092789",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos165nqrnqep5e487wzgmydw7fjz6haq4v3w244w0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "241100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "241100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16k3e075ym6e82d9yuvkyg43zgk9c4tmdr8x9xp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50499997.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50499997",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16k79ew02a88430k3vvwpzdntnhlapf8r6h5z46",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "201299999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "201299999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16hluyceg94xs34asmch5672ffgcjcmn7k6zxju",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16e8eese68zg9yvsd9f8f4urywq9vt2768950yj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "114295018.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "114295018",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16em73383guqr03t7fmtz0qtg4fstk7meuvafwq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "106733621.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "106733621",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos166sljdvtfuld5cvpl0rtrjw0w5vvc328aea73l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "610498152.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "610498152",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16u4985jq2pcp9gj9l5zauuamsr9rap9pmnqjjh",
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
        delegator_address: "cosmos16ukp2nyns63r9kj3sucpxf3szqmteu03r63faq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93914000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93914000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1675kjxe5a9lzjgu3wmgkn5rp9zta6wh80y6rqt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "107529905.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "107529905",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16lunq2wx572f0f6g3kygc3ul4v0gcd7jnxptv6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "28919998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "28919998",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mq9759sngcmtvcdq4h7fd0fnc8xtuqnkds8vhv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "213000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "213000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mqnrchhd6as3jakrpkd6ua7qhcpze69juvmylm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55888378.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55888378",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mr3lhlk3ytkc432e9plsq634rhawjzwu7lac7w",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1myrthlzxd3vl35d0ah5g3nsrdavkmtqxszp3th",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "118423590.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118423590",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m9993hmae9fl4pm2chuyyq8hqm2fg4pqs777wu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100709001.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100709001",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m9mvafe7vazjtzllv22sq930samndk3frv5val",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56117459.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56117459",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mxu70gtcjfvr9xtk0pptep9r8y9s462n8awcxy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56283466.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56283466",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m846wav7usstl6upmj377k8q9zmvk3jwvhqy07",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245984133.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245984133",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mgmure9jdugacnfz2nxrngznw75acy458furs8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25050000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25050000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mfq9n8ghfxga047m97wuvzp5t8t7ujxr4ujf5m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "302399900.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302399900",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mfje8fezn9mxc7dxnxzumr9kffhxtrn9gd50ln",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mfnw9skcj7crespne7fp30ljhy2cxhzv40usjj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m2el84v9ttrafe8s90wmskav032vaxvumpgkzv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56224166.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56224166",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mvd8wt3qtlr6ygh4k4wt9fyrxyj3vc7jkdf76p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56374721.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56374721",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mdtghsad95ryh2ufpl5pmufht3gwzx5luutn49",
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
        delegator_address: "cosmos1mwmapvdzrc9hezq8r8lfmpzqu4zmsj2y6anpnv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "184517442.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "184517442",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mw7m6jeg9ppcyp4jxs095fxpz2k5rcyfnr6yde",
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
        delegator_address: "cosmos1m0sfj4qs7udzkxqqf2qc8dx68wq2azwwumpyc7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25050000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25050000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mjvyay0pmr629x6nqj8vagnpcfrv3pt7vw422k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mjd974cadz3spd2n4jr6mxh4s883tzr6773nxc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "750000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "750000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mjnpe7g82p2yztq9y6n6lyn0jhpy56vwx8nt25",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15497000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15497000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mnvlt9e4pxqhup6z9xzva58rt2ka3cnghf37uf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "85424403.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "85424403",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m5nftdd9fejyd84e9w3t5swgcgvmlzwwktr6fd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "850879999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "850879999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mk4r7gngs4pw3vgnp4stllyfs22jneslup7yqt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50710000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50710000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mkk7xd9tll96rt2j8e8tamggu5agzwq7xlwnhh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mhz30u7fmq6g39qvgca4t0tmf9fjwrl6u8fa6a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56205814.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56205814",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mhkuzfws4xgcpkq252nv22vtdk93j3xd2jhd38",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "195000091.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "195000091",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mckaflrkp3ud7wmeufr5xd79eynjxf8xa72dcp",
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
        delegator_address: "cosmos1mesug0vfx0tyt6fzfue748nwk5ehlcz5gw0je4",
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
        delegator_address: "cosmos1m67qg30l7arqpu65zexn3ufdcyzg5am63nqmfd",
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
        delegator_address: "cosmos1mm0cvf4dkmst7rl0z2xgt4l3h8j4fq544nk5yh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "62238923.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62238923",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mmk6d3y2jtux3ku22038rcf5zpk2ql3aw3g5f8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "34895917.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "34895917",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mu26reayvd7vwknxugmx3vw8fqmvladjfrxmk8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "269492997.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "269492997",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m7k766qj4lx70jm0kx787r0ffnxtrghhelg0zt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15998499.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15998499",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uq24j4qc90pztvyn65uv8h4zrhqa85szujk5fz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "27463867.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27463867",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1up8pe9zptex7hs4k4z6gu2rz8m54yjm8zngz3z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "610520093.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "610520093",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uznr6lmlyx66er4dvw54c7e25pyr0qg3ntk8vx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "910736091.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "910736091",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uzk58wnt3e8ewfzmcf09k66f8k2az7g2fvyn8j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55990647.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55990647",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u96uszryc79d4vppl3sy2e9ha9h8cc7fchy9wn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "94010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "94010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u832ltjexq2r4e4tvhu64krrw4d3cspr02yuwh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82495399.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82495399",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u8jt9y42ccevljfc7tqj87lnp0htvcjs8lj06p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79644975.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79644975",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ut2wmfvchccthclwq7jmjd2kvsdm09l5ar045v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "162910000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "162910000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uvfwsp3nyx4rlzjcscmxlk2mh3twhwwtawn8x9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "83299945.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "83299945",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uwrdtnk62tm78xk7jsc0s9gaue29h7v8e0hyty",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79218468.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79218468",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u0g320rzxwewk6xnjzv0r79dkzkvmq5nedxecv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ustq2uykree7798pxtlx3urmgqudzdxpdkdug0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56181479.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56181479",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u36qa4gluu2drp89jj0978c2g7d9j607hkl96f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "540895761.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "540895761",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ujepumwuauf5dv4jjc686f6xj4u29rtp704nyz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "113409664.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "113409664",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1un5xvp9f0ynu6rv76lmr0y8spkx4nh4yq6xgff",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "73247624.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "73247624",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uhz32nd9trwqxe25v3xqux9pvcpw7nncs3h6z6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52487560.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52487560",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uhmj2m8vzq428d2axj5x0pkktt9ysanszpkgmx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82092372.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82092372",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ucnzn86zszgjg8umz7ujzqvrcryxu46wumdxl0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "189000001.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "189000001",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uey077ygnn8zz78ce9g05vkzetf32er4zgggp2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "13286672.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "13286672",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uavz6gkj7j75ek0sxd7cue6v8vkzzjtlz4yu4e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245983144.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245983144",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uah45eeda8k5qwqdapslalxu8kgf9deqckvxee",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "407344438.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "407344438",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u79zte6hvya37p8glwz94evd7m8cw93h49pcuc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100895102.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100895102",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ulk52wjzwvsrpam05yvm5qt2l48694vvctjuwt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25045000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25045000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1aqpeat77rg0t3l3vqjpcynl2jt7ss0vpse9w4a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78980132.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78980132",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1aplq4faxase9v7a5e46suxmzwp9y38ckaegx7f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a9nwzp942pfftgpapwwy9sztnuv8ctj76xmtwd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56036533.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56036533",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a9c6yemjxwvtpeat8n82233fqp6g8z4j6drq0t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75497000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75497000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a9u8yv5v0wu5atynlh33hm04l67y9e6xz6427p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a9lvqm84m87naq5vauh8fdump3u0evw82cqnwk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25070000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25070000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ax0txrjr7ngcxxxzyunmg89ufk3wtadjv6skzs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56038645.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56038645",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1agqxzl2r9rn6xhpjlsn3g0xf55ap687vn0rvep",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "201744042.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "201744042",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ag5cgyzgk2xzyrw3xkxk7rjz4lxwssgnk6fagn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50310000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50310000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1af52kptwx7uhl774l7m95pv5r0q2fvxnsc5zcc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1afk79j2s90uq96wd9z6evyyc460fe0sxt96ak6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "13018939.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "13018939",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1afek0mn89jj9ma6mgsfwsvxcmpja602qeztsvl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a2l3cfqllu9qs6437mqkq59ygfx378p9cdxhej",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81593499.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81593499",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1atggu5xm7hzhdps93vxkumdedngvkulqp3cmzk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101917569.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101917569",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1at2aa07247avq2xuzeeswje5pxswr8a58r2wss",
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
        delegator_address: "cosmos1atasr6jurjqc9gjpy2cm0rvrwculkcqrgu46uj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25721646.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25721646",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1awrzp3jg9g4cevjnkas4zq46q0m8jcj35yw7pt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115619578.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115619578",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a088qecv94m3duxfgjfeqz45yanun0geucd202",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1asz7p9evqgwjvuvew4ad8jj82w35k9z8zjnpp5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100157102.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100157102",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1aj6l9q7njsu4nta5d69ya0dgjdf7yugt3rqc0n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25050000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25050000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ajlwfce7r6ydj2738v0hdsaqydrurhgrprws0c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1an4jnulwqm9pv46qqsqdj63zhjq29vnw7r760n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "199960004.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "199960004",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a59ss427zm593lkm48p5f6jav6hwz65jn88eyq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "68032425.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "68032425",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ah0y0s9tvagcw9l5228q0r25c9l0exp8lnpzur",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75259741.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75259741",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ac0jgy46wa3axh9yjgxgkqn48feqtkenhrxzll",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "627731844.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "627731844",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1aekfgc6cqx07m0z0www4nlt0c5072yknfrycfv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1am3tsx69ndthlcnnc66a7s2m208rdg0kl280ty",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "22099421.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "22099421",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1amcqvw3j6anwdhg49xuerj5eyh6pkpuvrup8kr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "20797917.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "20797917",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1au9w4gvcqmzkwy6jc4zg80c04n4x3fpnkat0s3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56036062.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56036062",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1au4sax26ge2wy07lx83mm8dzwg8cnvv8zt9k09",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "38010982.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "38010982",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a72rvartn02suadtwvnx70vvc4eurralp0wgrq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10060000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10060000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1al72cd0uhn6p4pwmv88sm3kre4w2wpjc9dl8ry",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17qssz5p4dfgezhvek0q98gjmdgwx0txgpgjd05",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17q587uzc50qjvegc4zq4qkqxgjqypd46g7cpes",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17yf8hsgezzhtl58gp3sqe7dcsj2wpqtz3annq0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "313000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "313000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17y39fgzyxumghy9hd0tusjdqlp4y3rfu6cmpgc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos179qawzj2ncf9uknfjw6z3zxpvc33cylq3qh2g4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93950000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93950000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos179d7pduhu6u0dv8dnn98eyyz2jzgmw0au3q5u3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "446000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "446000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos178n4m7j5hlu5evjqpyg773zje2dra5rh2cd9ds",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "92380000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "92380000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17gpavkp6jlxjp2vtezley2layakm2yqzm9qq42",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17fw72vu4h5kcl5jrtwpry5yj47qh0lhnfe9x04",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17fskx42xz5wze8mqssu89up6asf3nmrvyycaxd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "123083136.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "123083136",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos172vz7u2mcxyl3ckja0j5u79mkrdzcnh89uvamm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "95990999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "95990999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17vyhq832pysqskh70288lsm5ndv0xz3mal0d03",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17drlfxlkjpn066c65rfqfqglfzrjf9v3uwtdcs",
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
        delegator_address: "cosmos17dndad55zly50aj8lzzklxusevdz0r0gyenx42",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "241250000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "241250000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17070ugefje3vvp09gvywgxn6flfv5qzgagw79e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55843329.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55843329",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17kwrcdx5gzx7p8pg5y3cpe3jgph6hygv3cvx2r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10070000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10070000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos176csrl54fys3cd0gmhkpmwns2gtngfca0drq2h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50710000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50710000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos176e47zlleye0xm7n45qdayff55f06lw26w4ujc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51280276.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51280276",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17md0czsjq69m0ff6vcmne5cxs5djkc6qruedmk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "108000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "108000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17a8rvcgwzqp986rwxr9taqtyuxg9cdts3cxr6l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "130853826.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "130853826",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17l2c3ac2k4dql09k5fuca2026l6952rzlmpp78",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "34176062.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "34176062",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17l35th3e3ah8txk99fyyyeaaqftpxrtkp29c8j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10040000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10040000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lqdmx9z7e59d38amagcycqlccuecp8p84swaf9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lrpa5ldy9mqrgls0e3786vxq35j5atd2nkpd8z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "121853063.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "121853063",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lr4d7aywejzc4tlfu7j32s3cjf5uvnv3jpads5",
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
        delegator_address: "cosmos1lx2zuc7ls0rw0jf89y9366fg7w5l9clgj7fcyf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "282396659.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "282396659",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lxtwpxd3veex3f4w99zhj7f9u4jl75qappra3f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93700000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93700000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lx0my7kk7uy75y68r602ga62l7n8cwawgvm0ag",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "535000084.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "535000084",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lfavkyvj7wl3ef5jzk6ywqrs0gcrec8txzrw88",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "43095292.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "43095292",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ltcwnf2r04cyry55nq2vhalmhezaudg6e8jphx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78326731.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78326731",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lv50rpq9uuvr37fq9l5p7nyct9ww39ycwhn0nl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10080000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10080000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ldg6m46nw06gntnnxq6llju42ffw0cn9acarcj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "120500198.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "120500198",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ld60xxe3y9zee2jkmexlaj05yer7ujefpeh2x3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70037756.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70037756",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1l3dr30jzea6rac93eea34urypdgumrefkty6yg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "93910000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "93910000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1l30rsjewaemnpsxcdv68r2eje2lqk0ch72km68",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "59999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lj7p0js6864d6dl532du62xk0rjrjj30er4jfs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56314877.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56314877",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lnvz5ldj6g8z0aaa4puz8aq5s8ntzw4tsza93n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80022211.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80022211",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lkppdsx0hh0h9smu0f5uud2uq3ntd6kayekf37",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "121575681.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "121575681",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lksjm72u2fjsjdh7jas8meuzpznsuyjcz0hg4s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "327430255.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "327430255",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lhsdcsklzvs7ek3kp59m36zq3739q3wavmyt6n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "124449999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "124449999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lcrtsnhrjv0emxd7nanywswfm0dh93emsnxh0d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "86788955.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86788955",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lc897n6duckxrcyphr6sdfmmdn6q92rth2yhdy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "25049900.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "25049900",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1leae7fx997hkfg88dsl0zshr9f64jcaasp5aq6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "55701573.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55701573",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lmhf4ynnhhchj03r5qgnkhp3qgeqnauu83h626",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "56039493.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56039493",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lul42lw2p4mv2mlte89cf4qnfg2jfduuv9vr2m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "257320748.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "257320748",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1l7mux9t0d36myza2n4d352jrcxz606c384378e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
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

  workbook.xlsx.writeFile("./atom.xlsx").then(() => console.log("File saved!"));

  console.log(output, output);
})();
