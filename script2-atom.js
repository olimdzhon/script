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
        shares: "2363711843.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2363711843",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qdj33jvvj67vyyhh454q6u7u8scplhvqfldy0t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496048242.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496048242",
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
        shares: "57362075.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57362075",
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
        shares: "57362478.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57362478",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qesvevs2p7p8apr5murjjz20sk0jsvf95m50zn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57360974.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57360974",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qm0q9ec5ylrgz2sz78j53xnrfcsse74ay3p2us",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "300250559.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "300250559",
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
        shares: "904000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "904000000",
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
        shares: "57445705.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57445705",
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
        shares: "57321230.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57321230",
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
        shares: "87037365.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "87037365",
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
        shares: "172064221.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "172064221",
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
        shares: "560052859.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "560052859",
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
        shares: "276382120.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "276382120",
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
        shares: "79273704.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79273704",
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
        shares: "29266872.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "29266872",
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
        shares: "45592120.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "45592120",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zgs5nnwhpxg4sjyw7xerm4humluxua90hjprgf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z29j9acm70gs2ldrlre0fqlneaua2tz28t9t67",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "255952015.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "255952015",
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
        shares: "80055612.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80055612",
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
        shares: "57616136.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57616136",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zj2vpvjp2cr2950r350zp67py5wsnn6e20rhm8",
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
        delegator_address: "cosmos1z449svm08e9p0544grvq7skv4ltfev6hkgmzvp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57289160.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57289160",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zeqvfv3sd20jjltcv2gvnfwt7lcqcs0d04hgz4",
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
        shares: "57565464.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57565464",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z7a6glgggrqhe8hzehc75lml3dz26mwdxxzhgj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57502065.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57502065",
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
        shares: "57360685.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57360685",
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
        shares: "57266284.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57266284",
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
        shares: "145000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "145000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r93c20xuwtxadwgfkh9m2swkkvn49jdeeaxwyp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57516327.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57516327",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r9lglxgtxvuh8033mu7utazagm4l9jtsl2638r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57359098.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57359098",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rxqas2m8n3jjvulgzsmks0ekzqp32arvrar2m8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "83057092.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "83057092",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rxwnxskx7w9jjecfzjve35juw3qxughstnj32x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1022999721.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1022999721",
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
        shares: "52483063.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52483063",
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
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rta9aa5dzsr3kvcf2x8x8zeycd0yw4stwwztuu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "831789538.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "831789538",
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
        shares: "57359950.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57359950",
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
        shares: "80321636.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80321636",
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
        shares: "106165179.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "106165179",
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
        shares: "76577359.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76577359",
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
        shares: "78989999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78989999",
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
        shares: "57215856.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57215856",
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
        shares: "302379999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302379999",
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
        shares: "60517809.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60517809",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rmtcl7m2pz63cgsvfxayuh54drk9sa9l858t6c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66335955.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66335955",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rmvy6zqfxgat2905wekyhm528vqhu989dz4tfw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57267444.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57267444",
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
        shares: "103690695.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "103690695",
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
        shares: "495962239.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495962239",
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
        shares: "29144511.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "29144511",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yyxsxmf635pxvm0hlfucdegprh55xsxprcgalp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496048253.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496048253",
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
        shares: "82940991.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82940991",
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
        shares: "57507160.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57507160",
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
        delegator_address: "cosmos1ydk98d7j5awa8azhxx0r42zw8lmf5ka6j3jn0n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "169088865.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "169088865",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ysthp74n2wxt4flmzyxrhza8rvxzr9mc3f9he5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "121641226.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "121641226",
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
        shares: "95502361.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "95502361",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ykyk43nxapm48n60ft0sr8ndrg8deu9pydglqn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1417803362.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1417803362",
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
        shares: "302883052.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302883052",
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
        shares: "264313919.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "264313919",
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
        shares: "57362274.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57362274",
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
        shares: "79350219.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79350219",
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
        shares: "57480742.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57480742",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19xuvslp4za626qlpg6vrqu20gvh6n9lj45dmmp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57295772.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57295772",
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
        shares: "57268315.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57268315",
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
        shares: "82554041.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82554041",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos190wj3tp2m9r9u42grsfhdm7errkca3uwgnfqrz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64008391.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64008391",
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
        shares: "201000048.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "201000048",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos195uet0szm7hwaps2k99ywscsdl7hjcy8c7u720",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495969722.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495969722",
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
        shares: "495960968.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495960968",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19kp9zuk4cgttflrhsa42r5manhncxzwc68a3a8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64071198.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64071198",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19kwsexd87fd49srdw4k6ltsfxg8xlnhw70xq3x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "808281881.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "808281881",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19k650hvvlzxp09c2y7qz6ahz594ecqu7fa5q2l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57359937.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57359937",
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
        shares: "54759332.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54759332",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19eu8zmrzzt05l8yap70ur5t5fdzwgt9p353l9s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "28419982.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "28419982",
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
        shares: "57565654.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57565654",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos197lc4ceg0xz4d874m87dhf2z0asugnukm93jpx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "114065461.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "114065461",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19leyn03afswk92382pnlh6amnz5dhy4nl0kx5f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "111616943.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111616943",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xqs5fhw6xecqvcs29j2w4y0p4438qk5j32608v",
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
        shares: "128174225.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "128174225",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xpavyl06wekueu4x4kg2424ex0dl9ww3g29thq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5490000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5490000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xzq3z62dvsrlkpmsw8ju4unh95sr7svzk60ngq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115428060.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115428060",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xzck3lmpwsh4d474d94tl94tfate4tmwzemfsd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57296271.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57296271",
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
        shares: "150949999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "150949999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xx6hp82d3rj2vuwf7xahq0hl39ymrdp2cm9xpt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "6716004310.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "6716004310",
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
        delegator_address: "cosmos1x2p8ux0rqcc00n5qngddhhxvutpv0v3halpfvh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "122000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "122000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x2hj089n9e977xcgcesut9tsahly3a8cz8wcw6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42200000",
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
        delegator_address: "cosmos1xwjl2gt3eut6p7n9panyt8vjmn39paee5wyjpa",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "84693043.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "84693043",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xw4de7r3zfeqdnuxv4l563exhvu0ttzyrjnf2y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57291076.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57291076",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0nxx37t8c2ep23ljqkcnwv53nfvg4fk5ug26c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "140484719.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "140484719",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0esf3ex8lvpke6ej22ctszsng5njdpdue9nj3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "137496652.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "137496652",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0ehtkw9zmd4uyqtrquqm5ph309nygvg76n8t9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57565795.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57565795",
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
        delegator_address: "cosmos1x3xqdgpcc075wpr2h6zpcywewjl8pjl6yey8t8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "286416505.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "286416505",
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
        shares: "10402114.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10402114",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xmkmex07esul3lzx804tuxwcy0tguq00ld5rlg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57266668.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57266668",
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
        shares: "57358529.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57358529",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18zrr2q8kmvy99l5f0vm3tju6xlndfw3z4x5x2l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57281938.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57281938",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18rkzth7njet2h64w7fv4fmy0vaknsgpmfewj7n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57310426.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57310426",
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
        shares: "70718515.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70718515",
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
        shares: "466652393.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "466652393",
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
        shares: "112807278.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "112807278",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18t9j003umyplqsmglrxn6jxcwyqc86j3xuv447",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "113000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "113000000",
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
        shares: "57355400.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57355400",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18v7gc8m6trnc9rr28pkfk5j3ax9wmpzyz4yjcu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57366486.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57366486",
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
        shares: "778473197.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "778473197",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos184mdhx7jq5al582e6t3ssdev08ccghk5w3td56",
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
        delegator_address: "cosmos18kvjxrrp935gss49xpuqkn285m64zs9vupnw9r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "262360000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "262360000",
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
        shares: "81169821.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81169821",
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
        delegator_address: "cosmos18lg5ngs9z9sge5g2jqlfp8de3xxrd8egvm5a2m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57200165.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57200165",
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
        shares: "248725393.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "248725393",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gvzt7u05m72gk0dq9hwaddn5m0m0rxw6p76vnh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74000002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74000002",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gdpqt5a6npdwzxjv7pvnpa9uucsdyfdf5eqm8q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57514244.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57514244",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gd6zzn5lnz4m2hmg7kaf9x54pzvyg08rqhw24p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57284557.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57284557",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gd6twrfw7p04797dznh0u98q9ykc7d24pqplv9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52369999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52369999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gwh42aqnppx7d8lxuhkafh86ew6f0wrj6njmfl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "109121373.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "109121373",
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
        shares: "7090000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7090000",
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
        shares: "382441376.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382441376",
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
        shares: "57301849.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57301849",
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
        shares: "59238020.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59238020",
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
        shares: "57556270.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57556270",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fdaz0u5x2nwnfp8ppdhryvkemzq8wxe4hnyv7t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57301708.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57301708",
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
        shares: "57281819.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57281819",
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
        shares: "27374852.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27374852",
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
        shares: "50310000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50310000",
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
        shares: "57392059.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57392059",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fuuuvgwsrrf3zy46azu22kzrskww9fte7wljh9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "34430000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "34430000",
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
        shares: "66423456.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66423456",
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
        shares: "63876812.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63876812",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12gkhm2kxpe9w9452z0ry0qkf8peejvpva9atza",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "186697046.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "186697046",
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
        shares: "57311388.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57311388",
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
        shares: "62500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62500000",
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
        shares: "57281944.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57281944",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12j44zpvg5xc76z8a65gy7mmx06s7g4jm40cy9p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2157665192.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2157665192",
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
        shares: "57563304.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57563304",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos125g8ggctyw8d372u6nc9k94yml9exxkewdus3p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80788978.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80788978",
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
        shares: "57565737.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57565737",
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
        shares: "57210789.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57210789",
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
        shares: "382109822.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382109822",
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
        shares: "130000076.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "130000076",
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
        shares: "156000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "156000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tvl8kh6002dn0gdzd0jkksrj5fk0wdk2x6jaun",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57361328.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57361328",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tdxgaxl006u6yxkxfc6mfzgu2hnslw4ahw6r9v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57610999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57610999",
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
        delegator_address: "cosmos1tn96ndz26sftmhhtk87dy9h9909zm7msjfeuxl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51288894.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51288894",
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
        shares: "57580906.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57580906",
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
        shares: "65200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tce720rz62cp4zdqs7hmgas5m9wpytzsm54cft",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57282620.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57282620",
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
        shares: "2085073.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2085073",
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
        shares: "496044318.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496044318",
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
        shares: "124800000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "124800000",
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
        shares: "618296069.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "618296069",
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
        shares: "57383110.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57383110",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v88rt2ndpgjmpyqtydrr79zhjcufucxdcr997l",
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
        shares: "99595301.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "99595301",
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
        shares: "308709161.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "308709161",
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
        shares: "496042987.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496042987",
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
        shares: "57793581.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57793581",
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
        delegator_address: "cosmos1vndl2klmcfnp8vjm6ja4lu89t0l02n9ks9p5sd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "20387345.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "20387345",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v5qkkfj0rf5ae24aj6w8wyqjskrjmagnadadf7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79119653.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79119653",
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
        delegator_address: "cosmos1vkngvnelw4tgahyn20sr0kvk9jq8wrfe8vtdfm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "310137232.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "310137232",
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
        shares: "57286009.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57286009",
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
        shares: "925917653.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "925917653",
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
        shares: "59885967.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59885967",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1drwkkq7awmrel2xgk3mnm9esuk769zc24wvm7y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57312437.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57312437",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d93ggvd6t3qnna3w280ax9g6j9jzr69eavp5nt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "211000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "211000000",
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
        shares: "934413033.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "934413033",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dtd5wc903mfgsw9sl7cr6x8h0xc73afn3h3p6u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "215156495.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "215156495",
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
        shares: "57286120.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57286120",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d076ek2e7m24jskmlgamv7kut7df892tks0c0a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "239132125.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "239132125",
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
        shares: "7705000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7705000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1djssj3erkjh9c0ha6da7ap473kkneyc2amddl0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81143155.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81143155",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dnj49scrz50wg3r7lwjezl642a8f5f6w7mcmel",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "44431272.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "44431272",
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
        shares: "57407316.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57407316",
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
        shares: "1239551837.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1239551837",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d6q04mwukqvu06ldsy24qnnt7kcjxyq9q390s5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77125767.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77125767",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dultlt37nav8y6l96y5tzq3ghz7mfr3lr3zlvj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "108491828.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "108491828",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1danvmprqfmhqspe0sc7cyzg9zmxfy3zs509cqp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57361410.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57361410",
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
        shares: "57281673.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57281673",
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
        shares: "83129223.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "83129223",
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
        delegator_address: "cosmos1wxv8jnx4tnr5rr5uwnx05g3s74tcpzajp6cq8p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1862640463.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1862640463",
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
        delegator_address: "cosmos1wtpn57dge2h8wyasgt3s9a0ky73tvlpat2trkt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51230002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51230002",
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
        shares: "57360923.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57360923",
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
        shares: "100681703.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100681703",
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
        shares: "360250000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "360250000",
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
        shares: "79237741.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79237741",
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
        shares: "382441391.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382441391",
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
        shares: "101643677.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101643677",
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
        shares: "7179000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7179000000",
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
        shares: "79147135.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79147135",
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
        shares: "75296976.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75296976",
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
        shares: "495963299.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495963299",
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
        shares: "57421456.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57421456",
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
        delegator_address: "cosmos1s2xvh4dq8dmu7pwkcl37wwax0jvmf029p44se8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51047944.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51047944",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1stvxat3uxuvw99gl8cek9faa2mt6ma5tcq0c5p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57465215.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57465215",
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
        shares: "57567502.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57567502",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s0gjejeatng87y54dalpcx6qpegzvqknssrpga",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57706980.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57706980",
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
        shares: "64500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sjkz08a2u9sgxwakapnlceusxj6qxwfy7kw9f9",
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
        delegator_address: "cosmos1sn6mlfkzcvrhf7uj4w03xnh0dgleaq3vty8ese",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80935207.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80935207",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s5qj44ta4pelugjzujtjuqpa3t6ynh7qytwv7g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57286556.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57286556",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s4szs2h38m5g20c7cwg9nve6whww4e099vhzs6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496028233.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496028233",
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
        shares: "57309836.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57309836",
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
        shares: "111868098.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111868098",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1smq0qz39r8e8awga8zaxlquftkzxldr8v6vl8q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "161000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "161000000",
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
        shares: "212959814.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "212959814",
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
        delegator_address: "cosmos13zzlsjnauafxz764nvj6mgagrkt5vke3sjv3su",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "160860275.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "160860275",
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
        shares: "80468713.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80468713",
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
        shares: "155968502.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "155968502",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos130umlsvuey3ss03p9pnmnww4mx3zta4sczpvpz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "795023732.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "795023732",
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
        shares: "496048263.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496048263",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13jungz72perqhfkzxhq77g37x3mavaw3ggrpnc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81587638.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81587638",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13n080myq5az7x2tffz4q0a5u2nnpk55m9nntcd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79939174.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79939174",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos135vz559nhcmvyta9y5juee8fs949nc8cskxejm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496048224.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496048224",
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
        shares: "301600521.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "301600521",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13cvpryh3pvrjv00dlfsuzmzwytjd09gfpjudeq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115095522.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115095522",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13cnywaqc8h882k8p29rlsajh2qgy74fyy2gp7y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57202409.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57202409",
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
        shares: "56940000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56940000",
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
        shares: "680762035.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "680762035",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos137hzsw2n0rklw78jxc92pyd86vg42zcnd832ye",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "181972447.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "181972447",
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
        shares: "67723244.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67723244",
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
        shares: "57149800.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57149800",
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
        shares: "118823231.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118823231",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jgyty590k5ejhkrnmd8ez52a5nld0pefp7gkt7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "32478755.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "32478755",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jfvwljhgmvpfya9pgepgqut7a9nt7llf358e7z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57311442.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57311442",
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
        shares: "675778261.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "675778261",
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
        shares: "43867341.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "43867341",
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
        shares: "100099999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100099999",
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
        shares: "1957247444.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1957247444",
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
        shares: "63358449.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63358449",
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
        shares: "58408684.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58408684",
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
        shares: "1535600459.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1535600459",
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
        shares: "115896705.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115896705",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nq32l4drp2t28ntlq95n9y65kzry6sxzjn6lj8",
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
        shares: "382441376.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382441376",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1np7lw8vrztrasq3hrazmydsgud793gkmm6hkws",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57292838.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57292838",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nre3qg4qeytzuaj9v639newdzs8x4d09y6ptef",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "22500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "22500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nyxh6aatp9fzxjcnsxgl47a7ax39ajerkdk6yn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57202143.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57202143",
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
        shares: "45332561.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "45332561",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ngx7xxgfrnguwkrjyw3uecr95krl26sp296da7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74850000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74850000",
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
        shares: "57565584.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57565584",
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
        shares: "57361264.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57361264",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nsqnul9j6qutnkre73warcpw6y4sx9wql8pxxf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79060524.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79060524",
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
        shares: "495966091.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495966091",
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
        shares: "161124426.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "161124426",
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
        shares: "57361691.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57361691",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nn7mdme6uaquplaed4cm9a764wavcdpk25d5s4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75675204.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75675204",
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
        shares: "157980317.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "157980317",
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
        shares: "1591229313.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1591229313",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nee5p6sn7fx4w3usljz8quugmjxp7uemlhvkac",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "380857442.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "380857442",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nu8r3g0nckm79tpmlvl06lj6pacve6svqg3xwp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57174624.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57174624",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nuu72je3qqzcymux20c0g7qwc8y4dzs6w2679h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81018260.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81018260",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nuaefncm0legfws3w6efpjlm34scupyxjyk82r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "69525394.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "69525394",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nanyw77wedg4fzccxynuyqe6rchg00nzfcjhsj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57534817.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57534817",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n7uf0luy0ste3lnwcrjc5fssf6wxvtel8hpezj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57293248.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57293248",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nls090mftwcg65f4v8we74wgzjjat9ags6tr0v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78730545.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78730545",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15p4z9ccspfkrahrn7670q5ej08q7fuc0w5nee5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57456539.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57456539",
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
        shares: "77747345.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77747345",
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
        shares: "67599763.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67599763",
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
        delegator_address: "cosmos15t23wzhznnzh93c88znrcu9pxcukpqqayugzra",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3000029.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3000029",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15s3raw658c6glx5fe8hqxla3ntn0mmj00yru0m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "111728473.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111728473",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15scds0jq9crvvphgmnkxuvnycj64xj9lddxrc9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "618447546.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "618447546",
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
        shares: "100000040.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000040",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15n9me5yykqtedf80zsnk46lckeu07eegl3gkzw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "556509999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "556509999",
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
        shares: "82238531.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82238531",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15c69h6rkd7set77y8ws7rnlyunjxtnxa5rkg9l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "13172662.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "13172662",
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
        shares: "121890783.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "121890783",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15and56df7e2pe03nqkas7ezmxldc4cf83wcmqm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "491053480.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "491053480",
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
        delegator_address: "cosmos157rrrrwvaz66nzm4adfe2u0ul44g90vwae35yx",
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
        shares: "62900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14qr54afm6rwhh73w8pxq0nes3tw0w3cjk0zlue",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57214074.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57214074",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14qdehlskhtzmmek00fcse24s427xq7ucv932vu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57287032.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57287032",
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
        shares: "57200626.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57200626",
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
        shares: "57282266.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57282266",
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
        shares: "216806678.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "216806678",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14tr8kzvetkd9lqmts8m8wa9cuh64q3r0jgd93g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "86165496.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86165496",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14wxtl6zj2qu7r4vmsrd3galut34zezaqfjm09z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77385220.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77385220",
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
        delegator_address: "cosmos14ktd683g58axlrw99pwlchmc5p8lk9hfwnzv4k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80477510.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80477510",
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
        shares: "57398141.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57398141",
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
        delegator_address: "cosmos14lv5xepxd56l9pvmunk4a8hyg3h732pc5cqfys",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "106000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "106000000",
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
        shares: "97500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "97500000",
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
        shares: "57399272.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57399272",
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
        shares: "11000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "11000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kgce2j9uepahgug8c8c6vmxevhmmux7s4lhmg5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496047102.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496047102",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kgu07r6lhpr0v3dww9a4rldfny5v6fyka2prfr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "896814020.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "896814020",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kfda4ujz0hxrr3unheysgfegj490kspwklr6tf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57120272.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57120272",
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
        shares: "607000004.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "607000004",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kv8344qazq7lvvh3xsutnshf0lsutkhu8n0zr0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "40000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "40000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kvkxlckp7a7vg7kuazefv30w38qymanrdgf3xy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57303246.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57303246",
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
        shares: "1144120278.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1144120278",
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
        shares: "121251677.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "121251677",
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
        shares: "81414735.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81414735",
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
        shares: "59198008.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59198008",
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
        shares: "1062852708.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1062852708",
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
        shares: "57525298.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57525298",
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
        shares: "117759024.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "117759024",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kal8h32wluskjd7gsqze9jlvk4zw7jp38hujfv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1386314511.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1386314511",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kal49er78r5urp2jha7qe6wwcqxjazddzd7dgv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57559788.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57559788",
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
        shares: "64038745.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64038745",
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
        shares: "90534558.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "90534558",
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
        shares: "57562877.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57562877",
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
        shares: "12600000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "12600000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hf05gnvyvnkst9856ju0z7tnttfe55ftw5za8w",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "31935285.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31935285",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1htrgaq0j6q34gmlhy88h3sg7detc8mrjxzn6ry",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51310590.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51310590",
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
        shares: "32790000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "32790000",
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
        shares: "57511750.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57511750",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h4kc33lwqqqytu0224y8hw2exfjnkprlpnkcfu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "63539000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63539000",
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
        delegator_address: "cosmos1h699jy43htdesrdtdqjlyj9t5c3dkv3gza5zpr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "401000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "401000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h6e82vzacz2a2ewyr8rsu5hwtchvp2252puv6y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "118424858.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118424858",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hm0sf840euex5sc7t64kthksqgr4qh5mnhwwjd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57358679.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57358679",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hmhlm867zq2muaru2zq0u8t86mp2jpetdsan3u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79799780.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79799780",
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
        shares: "495959139.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495959139",
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
        shares: "79611214.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79611214",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cpjexca8tzxwqa4692x09n3sm9qsamhsx4ajwr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57398650.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57398650",
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
        shares: "53695700.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53695700",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c9cfhs300g23jkv2feqff3kke7cdklj2gmh4w9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57316836.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57316836",
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
        shares: "57118917.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57118917",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c2gdsuq2n7avgwc7ev0puydzlk44uj5jc3nkc2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495965782.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495965782",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cthyr8req6svmza3euykd2sf5pzse6z2gkd2x6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "382418938.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382418938",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cv37v5mwxjczl5kzqykxc2fy08ed2tk85jj2r8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57398181.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57398181",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cdtyy29mre322xxpt2yvmz75crs3pl5tw0pken",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "898557285.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "898557285",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cd7a87m7r6angn3wqdfaksxp68y0t6dznx3mld",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "35479838.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "35479838",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cw38a4jse333zm6xa9g55fy4tuyjuyk8cxj64x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51818065.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51818065",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cszrktg52c4h4kqkzsyrrrw445fuzr6alqvxm5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57171831.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57171831",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cjnc8hlw4gt2p8wydxjdpckywlux327njcmfa7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "580944725.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "580944725",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c4skq47cqsyteg8kfjf6v3ehhza000phk685se",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "237793556.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "237793556",
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
        delegator_address: "cosmos1ccy0709lrhjfu7cg7xtyvp009d70y3zxxce59a",
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
        shares: "166604566.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "166604566",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ceml4szqpc58c7avacpd8uruzwuwt083y98flm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57120300.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57120300",
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
        shares: "21860000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "21860000",
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
        shares: "58384612.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58384612",
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
        shares: "64357999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64357999",
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
        shares: "57294980.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57294980",
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
        shares: "200027511.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "200027511",
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
        shares: "57313713.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57313713",
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
        delegator_address: "cosmos1e0awhdyuzszse5xdde3nrwpg2jzhwu4f06cj3q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "589607548.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "589607548",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1es5sskgfngfh6srkgv753l83emmc9j7qul998p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246108547.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246108547",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1es4gclnpjjlqppjvn5e4hknehm6sm494uv88ak",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58212990.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58212990",
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
        shares: "57514813.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57514813",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e5jmcepmgr6wsmp4n3tlhmdcny2pw49cyhn5mm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "157353448.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "157353448",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ekzawkkedhnlmxqcsp87aye5ne796jr4qlqy8a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101124999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101124999",
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
        shares: "51109831.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51109831",
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
        shares: "527000002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "527000002",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e7ductrmw5hrqzjelakecgpsu7twl8z3h2v7kp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57526987.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57526987",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e70us402l65vea04df9dxhaagph5gkcpjr8uc3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "65929000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65929000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1elphxtaaz2muszt2gc7rz9qq4nav203wnv35d8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57316368.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57316368",
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
        shares: "99000151.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "99000151",
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
        shares: "10150000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10150000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16z62k22z3xpq7x9sdhwums2lcks8wejc7qja5n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "106360849.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "106360849",
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
        shares: "90504783.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "90504783",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos169pkmuffdpwm8dfrefc2tcsvhyv74x8rg2uc55",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77016627.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77016627",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1698rcdde394kqj0vr7tyteqcjk60lq7kmud5vf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57362714.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57362714",
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
        shares: "31102851.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31102851",
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
        shares: "144110708.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "144110708",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16ssqymtz3vpd4y7tcqw0t23p4he9407c25yl9n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "94036666.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "94036666",
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
        shares: "134807221.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "134807221",
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
        shares: "115195018.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115195018",
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
        shares: "109863466.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "109863466",
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
        shares: "57162538.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57162538",
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
        delegator_address: "cosmos1myk9se7naem2dwyy5nc03w7d2fv40dlnr7r7rj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "24000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "24000000",
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
        shares: "57396839.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57396839",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mxu70gtcjfvr9xtk0pptep9r8y9s462n8awcxy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57566632.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57566632",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m846wav7usstl6upmj377k8q9zmvk3jwvhqy07",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495963133.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495963133",
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
        shares: "382399900.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382399900",
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
        shares: "57505976.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57505976",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mvd8wt3qtlr6ygh4k4wt9fyrxyj3vc7jkdf76p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57659967.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57659967",
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
        shares: "188622137.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "188622137",
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
        shares: "37497000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "37497000",
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
        shares: "57487213.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57487213",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mhkuzfws4xgcpkq252nv22vtdk93j3xd2jhd38",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "201000091.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "201000091",
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
        shares: "63458923.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63458923",
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
        shares: "28419912.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "28419912",
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
        shares: "57267170.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57267170",
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
        shares: "81372515.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81372515",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ut2wmfvchccthclwq7jmjd2kvsdm09l5ar045v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "189010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "189010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uvfwsp3nyx4rlzjcscmxlk2mh3twhwwtawn8x9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "85106764.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "85106764",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uvd8hwx2xcngg2fuq2yrddu979jgppfay6x3ez",
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
        delegator_address: "cosmos1uwrdtnk62tm78xk7jsc0s9gaue29h7v8e0hyty",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80936754.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80936754",
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
        shares: "57462312.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57462312",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u36qa4gluu2drp89jj0978c2g7d9j607hkl96f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "545095761.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "545095761",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ujepumwuauf5dv4jjc686f6xj4u29rtp704nyz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "116629864.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "116629864",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1unqdkdzw00zewx76ukt9hvnzpthk8hsec6h33f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50000099.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50000099",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1un5xvp9f0ynu6rv76lmr0y8spkx4nh4yq6xgff",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74917127.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74917127",
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
        shares: "83872991.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "83872991",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ucnzn86zszgjg8umz7ujzqvrcryxu46wumdxl0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "195000001.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "195000001",
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
        shares: "495962144.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495962144",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uah45eeda8k5qwqdapslalxu8kgf9deqckvxee",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "421992817.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "421992817",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uacchgmhlfmcx32p2fdmph4f08ugeyh8z6d7zc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u79zte6hvya37p8glwz94evd7m8cw93h49pcuc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "101595102.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101595102",
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
        shares: "80693241.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80693241",
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
        shares: "57314076.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57314076",
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
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
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
        shares: "57316228.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57316228",
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
        shares: "86093499.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86093499",
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
        shares: "117896517.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "117896517",
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
        delegator_address: "cosmos1a3858f250ve4t6rp9ef2svpr7sj20aaxql5ajw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "156794957.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "156794957",
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
        shares: "70000005.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70000005",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ah0y0s9tvagcw9l5228q0r25c9l0exp8lnpzur",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "76996321.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "76996321",
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
        shares: "27099421.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27099421",
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
        shares: "57313598.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57313598",
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
        shares: "86000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86000000",
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
        delegator_address: "cosmos17ffevfct6uz0llcrxz9szv80se5la47wvw5flk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "534939999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "534939999",
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
        shares: "123012472.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "123012472",
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
        shares: "57116467.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57116467",
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
        delegator_address: "cosmos177n4ptnw3utwjlrk8n28t4zf00afm379gc9xqz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "161487109.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "161487109",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17l2c3ac2k4dql09k5fuca2026l6952rzlmpp78",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "34890761.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "34890761",
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
        shares: "124618118.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "124618118",
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
        shares: "903488137.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "903488137",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lg9gkaps6pn2r6npdcyftrplxkrxk5f6x4r4lw",
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
        delegator_address: "cosmos1lfavkyvj7wl3ef5jzk6ywqrs0gcrec8txzrw88",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "44243990.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "44243990",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ltcwnf2r04cyry55nq2vhalmhezaudg6e8jphx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80025666.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80025666",
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
        delegator_address: "cosmos1ldqk85pu2jz7636yr5npllz5094qrs7dyjkswj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50672404.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50672404",
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
        shares: "57598789.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57598789",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lnvz5ldj6g8z0aaa4puz8aq5s8ntzw4tsza93n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81757935.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81757935",
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
        shares: "334534927.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "334534927",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lhsdcsklzvs7ek3kp59m36zq3739q3wavmyt6n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "137849999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "137849999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lcrtsnhrjv0emxd7nanywswfm0dh93emsnxh0d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "88671464.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "88671464",
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
        delegator_address: "cosmos1led37kx2jrjjn9mxvtukngwk3cmpauzutrwx4u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "108595944.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "108595944",
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
        shares: "57317103.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57317103",
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
        shares: "127000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "127000000",
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
        delegator_address: "cosmos1qqlw32u0c32g7nelttmj03q3lgwcdfn8fdcy0v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "550000050.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "550000050",
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
        shares: "2633311843.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2633311843",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qdj33jvvj67vyyhh454q6u7u8scplhvqfldy0t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496048242.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496048242",
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
        shares: "58099317.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58099317",
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
        shares: "58099728.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58099728",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qc0qad7w57zlr3zmzjmq776hxe9nw3fn53f4fu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57030000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qesvevs2p7p8apr5murjjz20sk0jsvf95m50zn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58098202.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58098202",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1qm0q9ec5ylrgz2sz78j53xnrfcsse74ay3p2us",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "304493192.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "304493192",
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
        shares: "931000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "931000000",
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
        shares: "58184024.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58184024",
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
        shares: "58057944.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58057944",
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
        delegator_address: "cosmos1pf57et67qwa77qa0554gycc04afsp6tmlygfus",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60321606.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60321606",
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
        shares: "106249999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "106249999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1pwpflqaa4jrjueyss55p0u7lyh6zr3hrylf33a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "88298053.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "88298053",
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
        shares: "174564221.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "174564221",
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
        delegator_address: "cosmos1p587eza5ua9qxt4q205jalhk4vq3cuhfsstuv4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "204000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "204000000",
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
        shares: "565702859.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "565702859",
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
        shares: "280311287.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "280311287",
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
        shares: "80421938.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80421938",
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
        shares: "56600000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "56600000",
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
        shares: "29771201.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "29771201",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zrvpldrwd7x2j2zfhn7g9etxp5nq8ag5pe6ya2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "67182104.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67182104",
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
        shares: "46239662.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "46239662",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zgs5nnwhpxg4sjyw7xerm4humluxua90hjprgf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z29j9acm70gs2ldrlre0fqlneaua2tz28t9t67",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "261302015.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "261302015",
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
        shares: "81215182.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81215182",
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
        shares: "58356648.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58356648",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zj2vpvjp2cr2950r350zp67py5wsnn6e20rhm8",
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
        delegator_address: "cosmos1z449svm08e9p0544grvq7skv4ltfev6hkgmzvp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58025469.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58025469",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zh7chuamwjstptpnsayzc8jzefqlaj652lwv5d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "26050000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "26050000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1zeqvfv3sd20jjltcv2gvnfwt7lcqcs0d04hgz4",
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
        shares: "58305320.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58305320",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1z7a6glgggrqhe8hzehc75lml3dz26mwdxxzhgj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58241110.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58241110",
      },
    },
    {
      delegation: {
        delegator_address:
          "cosmos1zlj68zec5je79h692cd46gs8zkg0gfjh9wdr89nerxxhfjw2dhfquc84h2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "439000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "439000000",
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
        shares: "58097909.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58097909",
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
        shares: "58002300.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58002300",
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
        shares: "158000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "158000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r93c20xuwtxadwgfkh9m2swkkvn49jdeeaxwyp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58255558.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58255558",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r9lglxgtxvuh8033mu7utazagm4l9jtsl2638r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58096308.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58096308",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rxqas2m8n3jjvulgzsmks0ekzqp32arvrar2m8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "84260125.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "84260125",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rxwnxskx7w9jjecfzjve35juw3qxughstnj32x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1022999721.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1022999721",
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
        shares: "53257009.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53257009",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rfkgpv4qah9arlq4gkpzjpu2l6gd32guuf7cvf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "16461574.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "16461574",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r2aslrtp8x0ffl83ty5z56mnqtlgj92a8p4rqv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "151000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "151000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rta9aa5dzsr3kvcf2x8x8zeycd0yw4stwwztuu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "831789538.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "831789538",
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
        shares: "58097171.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58097171",
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
        shares: "81485106.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81485106",
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
        delegator_address: "cosmos1r0vf3l0yn57unvhz7wecyyu9vvtgyh3xtq3m0u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82348651.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82348651",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r0he8n9zq6quah9xnmahkr4yl8pdk5xja8mdtp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "164567632.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "164567632",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rslwntv3eturuepj8svx33j2tawr0zj06g94w2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70000999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70000999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r39vukxnda00vv4urhfmqpjvfzknr7jrl0xugs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78477359.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78477359",
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
        shares: "78989999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78989999",
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
        shares: "57951226.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57951226",
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
        shares: "302579999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "302579999",
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
        delegator_address: "cosmos1r6n5uwu28x0cydt8staa0dge5veg0xqj7kwmy7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "8710000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "8710000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1r6knf70m2dlfljh9aqk87ldwvxshajj3mu45zr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60517809.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60517809",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rmtcl7m2pz63cgsvfxayuh54drk9sa9l858t6c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66335955.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66335955",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1rmvy6zqfxgat2905wekyhm528vqhu989dz4tfw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58003475.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58003475",
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
        shares: "105690695.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "105690695",
      },
    },
    {
      delegation: {
        delegator_address:
          "cosmos1rlck70dlwaczhw3c0v3wh8khy833xrsycpvk5kmxdyawsmws8hqshjx5hy",
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
        shares: "495962239.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495962239",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yp9qnmlhk5t5tghqq3hfq7j8h583wxcd83tvpq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "109366497.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "109366497",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yp542l3cwq8j0m9zkhcv8exrz2cp7l9qdyjm7a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "8568108383.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "8568108383",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ypa0glh2edqedz2yucsqdwzr5lqkx6mv9zz5fg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15189582.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15189582",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yzzxtvaus8kd0qhc7fvyuyrudnjqwzg4h7s6yw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "29655278.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "29655278",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yyxsxmf635pxvm0hlfucdegprh55xsxprcgalp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496048253.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496048253",
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
        shares: "84142345.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "84142345",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1yg39z2fdhjjjqmtjh02ugl7ll6avhvynk2eda7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "136130923.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "136130923",
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
        shares: "58246272.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58246272",
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
        delegator_address: "cosmos1ydk98d7j5awa8azhxx0r42zw8lmf5ka6j3jn0n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "169088865.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "169088865",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ysq5uaxz46zq8hwtmpmnrulcc3yzagwtsukh5t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1050970804.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1050970804",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ysthp74n2wxt4flmzyxrhza8rvxzr9mc3f9he5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "123941226.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "123941226",
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
        shares: "95502361.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "95502361",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ykyk43nxapm48n60ft0sr8ndrg8deu9pydglqn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1417803362.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1417803362",
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
        shares: "307683052.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "307683052",
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
        shares: "268036995.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "268036995",
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
        shares: "58099523.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58099523",
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
        shares: "80499576.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80499576",
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
        shares: "58219512.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58219512",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19xuvslp4za626qlpg6vrqu20gvh6n9lj45dmmp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58032169.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58032169",
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
        shares: "58004358.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58004358",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19gqhtd3zexuqtn86tg0pfesqjaa50x39trpdu5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "360000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "360000000",
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
        shares: "209000052.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "209000052",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19wmlrdhyf85fly7mqhm4a0jr5qa4hlvqpregkl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "83749803.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "83749803",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos190wj3tp2m9r9u42grsfhdm7errkca3uwgnfqrz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "65008391.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65008391",
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
        shares: "204000048.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "204000048",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos195uet0szm7hwaps2k99ywscsdl7hjcy8c7u720",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495969722.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495969722",
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
        shares: "16502180.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "16502180",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos194sg0pj6p5nk7dpnuh7wwm0evlwhw8zy7w8um4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495960968.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495960968",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19kp9zuk4cgttflrhsa42r5manhncxzwc68a3a8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "65071198.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65071198",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19kwsexd87fd49srdw4k6ltsfxg8xlnhw70xq3x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "827281881.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "827281881",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19k650hvvlzxp09c2y7qz6ahz594ecqu7fa5q2l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58097158.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58097158",
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
        shares: "55477755.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "55477755",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19eu8zmrzzt05l8yap70ur5t5fdzwgt9p353l9s",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "29197534.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "29197534",
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
        shares: "31230343.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "31230343",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos197djzpsht39797hkq7g3lfyk6pltmhzzevtquf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58305519.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58305519",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos197lc4ceg0xz4d874m87dhf2z0asugnukm93jpx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "115900061.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "115900061",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos19leyn03afswk92382pnlh6amnz5dhy4nl0kx5f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "113263382.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "113263382",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xqs5fhw6xecqvcs29j2w4y0p4438qk5j32608v",
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
        shares: "129894225.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "129894225",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xpavyl06wekueu4x4kg2424ex0dl9ww3g29thq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5520000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5520000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xzq3z62dvsrlkpmsw8ju4unh95sr7svzk60ngq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "118028060.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118028060",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xzpyvc0n75m5hadfk8y4tvpevnyvd4jhdq8zgd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "146550000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "146550000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xzjvj8shwnh2htpzhge368am0k35hegdj75ycu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "200566096.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "200566096",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xzck3lmpwsh4d474d94tl94tfate4tmwzemfsd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58032674.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58032674",
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
        shares: "153449999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "153449999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xx6hp82d3rj2vuwf7xahq0hl39ymrdp2cm9xpt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "7656945053.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7656945053",
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
        delegator_address: "cosmos1xftra46tnjp8f2ys4f0tswu92alzd8xupvvenp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15206226.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15206226",
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
        delegator_address: "cosmos1x2p8ux0rqcc00n5qngddhhxvutpv0v3halpfvh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "122000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "122000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x2hj089n9e977xcgcesut9tsahly3a8cz8wcw6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "195724998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "195724998",
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
        delegator_address: "cosmos1xwjl2gt3eut6p7n9panyt8vjmn39paee5wyjpa",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "85919471.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "85919471",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xw4de7r3zfeqdnuxv4l563exhvu0ttzyrjnf2y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58027412.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58027412",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0nxx37t8c2ep23ljqkcnwv53nfvg4fk5ug26c",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "140484719.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "140484719",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0esf3ex8lvpke6ej22ctszsng5njdpdue9nj3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "139007202.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "139007202",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1x0ehtkw9zmd4uyqtrquqm5ph309nygvg76n8t9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58305661.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58305661",
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
        delegator_address: "cosmos1x3xqdgpcc075wpr2h6zpcywewjl8pjl6yey8t8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "286416505.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "286416505",
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
        shares: "62640232.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62640232",
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
        shares: "10504445.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10504445",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1xmkmex07esul3lzx804tuxwcy0tguq00ld5rlg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58002690.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58002690",
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
        shares: "58095731.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58095731",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18zrr2q8kmvy99l5f0vm3tju6xlndfw3z4x5x2l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58018156.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58018156",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18rkzth7njet2h64w7fv4fmy0vaknsgpmfewj7n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58047231.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58047231",
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
        shares: "72778515.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "72778515",
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
        shares: "473252393.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "473252393",
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
        shares: "114210078.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "114210078",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18gcjgqkzxwatrnrhhykcr8k7emjcwjauwgrw2p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "278026174.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "278026174",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18t9j003umyplqsmglrxn6jxcwyqc86j3xuv447",
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
        shares: "58092563.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58092563",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18v7gc8m6trnc9rr28pkfk5j3ax9wmpzyz4yjcu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58103791.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58103791",
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
        shares: "101192579.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101192579",
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
        shares: "778473197.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "778473197",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos184mdhx7jq5al582e6t3ssdev08ccghk5w3td56",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "120000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "120000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos18kvjxrrp935gss49xpuqkn285m64zs9vupnw9r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "429470000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "429470000",
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
        shares: "82345538.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82345538",
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
        delegator_address: "cosmos18lg5ngs9z9sge5g2jqlfp8de3xxrd8egvm5a2m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57935332.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57935332",
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
        delegator_address: "cosmos1gfdx5quska6dpt9hryjqjdczmwatalw98gzeqy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "201100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "201100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g2qg8uujk0276ns25q9lrnvknp67sclk85sx09",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "252159694.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "252159694",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gtapverjhtstldp3guuc7eu3swmmwp97dvtkf9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10300000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10300000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gvzt7u05m72gk0dq9hwaddn5m0m0rxw6p76vnh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "74000002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "74000002",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gdpqt5a6npdwzxjv7pvnpa9uucsdyfdf5eqm8q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58253447.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58253447",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gd6zzn5lnz4m2hmg7kaf9x54pzvyg08rqhw24p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58020809.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58020809",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gd6twrfw7p04797dznh0u98q9ykc7d24pqplv9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52969999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52969999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gwh42aqnppx7d8lxuhkafh86ew6f0wrj6njmfl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "109121373.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "109121373",
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
        delegator_address: "cosmos1g3maguhq63kyf5upyj8eyw2nryz6eqtfe7aj3j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "69626221.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "69626221",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1g3uz8nkzq9zrdemjj82wvl5w74u9e8yv6zcp2g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "7130000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7130000",
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
        shares: "1100000009.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1100000009",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1gnasfq4qq9kuwphp7ytq50pg6f4pzqs4xqqe84",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "382441376.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382441376",
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
        shares: "298949900.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "298949900",
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
        shares: "58038319.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58038319",
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
        shares: "59238020.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59238020",
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
        shares: "100440994.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100440994",
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
        shares: "58295971.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58295971",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fdaz0u5x2nwnfp8ppdhryvkemzq8wxe4hnyv7t",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58038175.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58038175",
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
        shares: "58018028.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58018028",
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
        shares: "27374852.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27374852",
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
        shares: "50310000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50310000",
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
        shares: "58129693.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58129693",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1fuuuvgwsrrf3zy46azu22kzrskww9fte7wljh9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "34690000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "34690000",
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
        shares: "66423456.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66423456",
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
        delegator_address: "cosmos129mr02c78mun69nrwz7cjn40f002s6kpxr9rde",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70451596.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70451596",
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
        shares: "65106812.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65106812",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12gkhm2kxpe9w9452z0ry0qkf8peejvpva9atza",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "186697046.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "186697046",
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
        shares: "58047979.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58047979",
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
        delegator_address: "cosmos12f30ulre65d990rrqd7h0f2fs5mlnksnhystx2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "7652195.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7652195",
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
        shares: "62500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62500000",
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
        delegator_address: "cosmos12v736nuytn9rjl5dpqtfxzdg40vtlwqqqc6dpl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "502049387.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "502049387",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12dz0vh9gk50wsjc7jvefs7l8fafraalcssh8q8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "502125906.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "502125906",
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
        shares: "318000099.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "318000099",
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
        shares: "58018154.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58018154",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12j44zpvg5xc76z8a65gy7mmx06s7g4jm40cy9p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2160219837.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2160219837",
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
        shares: "58303138.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58303138",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos125g8ggctyw8d372u6nc9k94yml9exxkewdus3p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81959171.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81959171",
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
        delegator_address: "cosmos12kaasu3hxnlhvha96u9067glj0ajennnuata3a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "26000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "26000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12hvsxy7kj3l8sgsrm6je3kr6fkwtjml4w2sysh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58305588.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58305588",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos12h7hhgcj4drsya9ddhqaetvr9lae8semv62w39",
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
        delegator_address: "cosmos12crrl6qvkplfkz82mt7skcmaq4utgf5lxdjxyd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1553988900.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1553988900",
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
        delegator_address: "cosmos1tqpheaqprdqk8az6eql4eulhzkdjmfuh7shwsj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "373499999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "373499999",
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
        shares: "57946076.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57946076",
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
        delegator_address: "cosmos1tykt53m3lgzsdcvux0n9zsk3rqtpppaw23gnj8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "203000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "203000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tyu6854q0vlsqpmvaasr9043cwfrtmu4m9fhzh",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "192000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "192000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t9qy3tz704mschxd7ne28k37lygpttkwzw0lvr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "386566129.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "386566129",
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
        shares: "130000076.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "130000076",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tgyqvzknt3l0qv6p98guu859mv8htpz6z33ucz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53118214.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53118214",
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
        shares: "156000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "156000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tvl8kh6002dn0gdzd0jkksrj5fk0wdk2x6jaun",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58098564.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58098564",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tdxgaxl006u6yxkxfc6mfzgu2hnslw4ahw6r9v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58351436.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58351436",
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
        shares: "157023468.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "157023468",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tn96ndz26sftmhhtk87dy9h9909zm7msjfeuxl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51288894.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51288894",
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
        shares: "249649622.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "249649622",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t40rgwucyplzsxq5vusuam9kwwnzg3hhkrnqxf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "38676306.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "38676306",
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
        shares: "58320965.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58320965",
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
        shares: "65200000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65200000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1tce720rz62cp4zdqs7hmgas5m9wpytzsm54cft",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58018826.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58018826",
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
        delegator_address: "cosmos1tmm9nfl3ycv70fzxglzgm3vt0yfjmes84jy0ft",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "68937701.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "68937701",
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
        shares: "2110073.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2110073",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t7ycpyxs0qlpdzfkpuj4z9x44xnakh7anr9g2r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "121950000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "121950000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1t7gdzehwj5snn8hqg97dejuzj7eym42avechcp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496044318.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496044318",
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
        shares: "124800000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "124800000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vyruk9jpqsvjghar52xmnlprc6wptmzr0hmcud",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "15292164.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "15292164",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v9hnnh7qtv8x0sycn8ka064xqg4hw7jzvph4yx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "782748641.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "782748641",
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
        shares: "58120622.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58120622",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v88rt2ndpgjmpyqtydrr79zhjcufucxdcr997l",
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
        shares: "144520669.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "144520669",
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
        shares: "313098101.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "313098101",
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
        shares: "496042987.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496042987",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1vswg8gzjde5k8am9909qxjdk67a2k86dy839dn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "19487841.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "19487841",
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
        shares: "58532933.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58532933",
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
        delegator_address: "cosmos1vndl2klmcfnp8vjm6ja4lu89t0l02n9ks9p5sd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "20387345.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "20387345",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1v5qkkfj0rf5ae24aj6w8wyqjskrjmagnadadf7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80265611.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80265611",
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
        delegator_address: "cosmos1vkngvnelw4tgahyn20sr0kvk9jq8wrfe8vtdfm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "314547604.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "314547604",
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
        shares: "58022269.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58022269",
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
        shares: "925917653.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "925917653",
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
        shares: "60655645.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60655645",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1drwkkq7awmrel2xgk3mnm9esuk769zc24wvm7y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58049038.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58049038",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d93ggvd6t3qnna3w280ax9g6j9jzr69eavp5nt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "216000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "216000000",
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
        shares: "428423406.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "428423406",
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
        shares: "934413033.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "934413033",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dtd5wc903mfgsw9sl7cr6x8h0xc73afn3h3p6u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "215156495.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "215156495",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dvw2py8hjwcvypg6v0nue00j7wpwsdfcxxp7kt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "114114638.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "114114638",
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
        shares: "58022386.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58022386",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d076ek2e7m24jskmlgamv7kut7df892tks0c0a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "239132125.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "239132125",
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
        shares: "7750000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7750000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1djssj3erkjh9c0ha6da7ap473kkneyc2amddl0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82318476.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82318476",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dnj49scrz50wg3r7lwjezl642a8f5f6w7mcmel",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "44431272.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "44431272",
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
        shares: "58145138.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58145138",
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
        shares: "1266832619.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1266832619",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1d6q04mwukqvu06ldsy24qnnt7kcjxyq9q390s5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78159391.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78159391",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1dultlt37nav8y6l96y5tzq3ghz7mfr3lr3zlvj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "110092201.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "110092201",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1danvmprqfmhqspe0sc7cyzg9zmxfy3zs509cqp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58098642.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58098642",
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
        shares: "58017883.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58017883",
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
        delegator_address: "cosmos1wqjagmsh5tyv4eztpypqgklyq23aepxfq29rrt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "114589650.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "114589650",
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
        shares: "105431823.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "105431823",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wrfdzjw8evlaxsfzc3s7c4hwh539340acclrkr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "84333325.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "84333325",
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
        delegator_address: "cosmos1wxv8jnx4tnr5rr5uwnx05g3s74tcpzajp6cq8p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1908340463.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1908340463",
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
        delegator_address: "cosmos1wtpn57dge2h8wyasgt3s9a0ky73tvlpat2trkt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51230002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51230002",
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
        shares: "58098148.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58098148",
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
        delegator_address: "cosmos1wjlty4vyf5esyzydhr3dxcngt5v7k50ztm7rac",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "203766185.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "203766185",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wnzehu6mhz925gscdetf4htg4j4w7pf35wmm5q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "102058156.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "102058156",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wnfzsj6dmnwhk3g7qglw32989jm730ylmknvhq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "52509802.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52509802",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wn33dw4upqvtgz70xg264j68026426ahvve0ht",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "203000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "203000000",
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
        delegator_address: "cosmos1w4dpmczjzttwvxzpt268j72huffe6dgmfep29h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "260181658.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "260181658",
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
        shares: "80385482.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80385482",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1wl3xq2ktgeu0xxyf27axqvnpufft6vjzplgxna",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "237900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "237900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10q8z93hgpnl4h0fxjye58erz4gp66v3q3hflx4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "382441391.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382441391",
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
        delegator_address: "cosmos10rgr9c9qwzpyl3yv9zgtprtskmzuzs069xzmvk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "201000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "201000000",
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
        shares: "101643677.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101643677",
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
        shares: "7179000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "7179000000",
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
        shares: "3000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10uyrwwakpqt32y05gensh6vf0s9w9ccejls9yk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80293553.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80293553",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos10u7mu6yygadq4ak27wqgsexhjx0dstjrs2g9pe",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "245450000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "245450000",
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
        shares: "75296976.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75296976",
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
        delegator_address: "cosmos1szts0l3psx6hs3w9rfg6ayv2t0shmfmeh7r7ur",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "163545179.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "163545179",
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
        shares: "495963299.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495963299",
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
        shares: "58159456.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58159456",
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
        delegator_address: "cosmos1s2xvh4dq8dmu7pwkcl37wwax0jvmf029p44se8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51047944.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51047944",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1stvxat3uxuvw99gl8cek9faa2mt6ma5tcq0c5p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58203740.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58203740",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sdy2lhzh98xvv363da7xvg3jwlud9shcdctx0r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "83302156.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "83302156",
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
        shares: "52000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "52000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1swkpnruvzkrv7dm2psz4r5a6k6pvdxxy9tetr6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "110010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "110010000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1swh4mvlen7hql48c2z4t2hd3ag3mv9le73f7fm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58307385.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58307385",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s0gjejeatng87y54dalpcx6qpegzvqknssrpga",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57706980.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57706980",
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
        shares: "544816133.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "544816133",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sj5zyq6pple07fsjfghy80wc0s38chrxmys90g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "66000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "66000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1sjkz08a2u9sgxwakapnlceusxj6qxwfy7kw9f9",
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
        delegator_address: "cosmos1sn6mlfkzcvrhf7uj4w03xnh0dgleaq3vty8ese",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82107535.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82107535",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s5qj44ta4pelugjzujtjuqpa3t6ynh7qytwv7g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58022827.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58022827",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1s4szs2h38m5g20c7cwg9nve6whww4e099vhzs6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496028233.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496028233",
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
        shares: "58046404.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58046404",
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
        shares: "113000098.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "113000098",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1smq0qz39r8e8awga8zaxlquftkzxldr8v6vl8q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "161000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "161000000",
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
        delegator_address: "cosmos1suxtarl2jz06m7j0ghq8lcm0j4vekyy7j6yy08",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "43100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "43100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1su0p2tyhph4hv6ud22c057rz3f8gfvrs3ym3ju",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "215987533.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "215987533",
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
        delegator_address: "cosmos13zzlsjnauafxz764nvj6mgagrkt5vke3sjv3su",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "163146453.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "163146453",
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
        delegator_address: "cosmos13zjs9t80q2y4l2v4d57t8kfz276pjnfm820xt0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "201000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "201000000",
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
        shares: "64115964.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64115964",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13yh4cn2r4t2zam8c600d7zakd869pxa9d0j8r7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81634280.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81634280",
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
        delegator_address: "cosmos13guv5xm4k5wn6fch2388x34hsnd3pmy90dte0f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "4660000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "4660000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1328uvxy0gprmtrlxsvk2m3er8rpw0rwua2kzsu",
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
        delegator_address: "cosmos13wa6fnyfcxz6fhtuhdp22fux0zqzfmqcxn5q6g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "155968502.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "155968502",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos130umlsvuey3ss03p9pnmnww4mx3zta4sczpvpz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "795023732.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "795023732",
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
        delegator_address: "cosmos13jxac6y5axj3naj66l5crkfjsz3ms5r2d9zw8g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2767794541.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2767794541",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13jkhp3gp2enyhnp54txq8w5aw77aaqzyzpaf3u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496048263.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496048263",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13jungz72perqhfkzxhq77g37x3mavaw3ggrpnc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82769414.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82769414",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13n080myq5az7x2tffz4q0a5u2nnpk55m9nntcd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81097076.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81097076",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos135vz559nhcmvyta9y5juee8fs949nc8cskxejm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496048224.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496048224",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos134670l9zunccuft622tnz840fvpha3cde7elge",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "71211100.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "71211100",
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
        shares: "305969139.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "305969139",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13cvpryh3pvrjv00dlfsuzmzwytjd09gfpjudeq",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "117095522.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "117095522",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos13cnywaqc8h882k8p29rlsajh2qgy74fyy2gp7y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57937590.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57937590",
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
        shares: "57720000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57720000",
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
        shares: "690402265.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "690402265",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos137hzsw2n0rklw78jxc92pyd86vg42zcnd832ye",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "200000097.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "200000097",
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
        delegator_address: "cosmos1jpu0a8dkzw5k3rggtlrgaparnpedar77pvp3qc",
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
        delegator_address: "cosmos1jzw2yxmrmszhf288manm8fckql4979zyfu37tj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "68823244.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "68823244",
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
        shares: "57884309.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57884309",
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
        shares: "120447719.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "120447719",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jgyty590k5ejhkrnmd8ez52a5nld0pefp7gkt7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "32887235.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "32887235",
      },
    },
    {
      delegation: {
        delegator_address:
          "cosmos1jf8eqynuls52l73em8q4ruccjyhl3ejnqqm5vqww8cr83s93twkskwazua",
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
        delegator_address: "cosmos1jfvwljhgmvpfya9pgepgqut7a9nt7llf358e7z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58048032.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58048032",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jfwp4d5mg93sapd67r4274f8y8tg4xn7583dw6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "107349379.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "107349379",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jttdtq9ah54rawwtsapt225unp8fdpedq5l9f2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "685388128.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "685388128",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jtustv4ghy997d6catge3mgklszkvve6jh8ngz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "365600000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "365600000",
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
        shares: "44490059.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "44490059",
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
        shares: "100099999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100099999",
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
        delegator_address: "cosmos1jnappv8srf45966n32gu3f49fvf3cj4ry4phgz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "141177418.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "141177418",
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
        shares: "1963408246.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1963408246",
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
        shares: "21654719.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "21654719",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1jcrrk8zv8eeda79z8huqucp2k9g5ee3lxd09v3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64558449.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64558449",
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
        shares: "59159378.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59159378",
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
        shares: "118646705.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118646705",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nq32l4drp2t28ntlq95n9y65kzry6sxzjn6lj8",
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
        shares: "382441376.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382441376",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1np7lw8vrztrasq3hrazmydsgud793gkmm6hkws",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58029183.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58029183",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nre3qg4qeytzuaj9v639newdzs8x4d09y6ptef",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "22500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "22500000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nyxh6aatp9fzxjcnsxgl47a7ax39ajerkdk6yn",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57937326.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57937326",
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
        delegator_address: "cosmos1n97m6ug7aear9949n6ez0hkhaquetsfytkm0j3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "6753331.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "6753331",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nxaphw2f5yc2vczsheje065cvxq59uw7ep8epp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "45332561.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "45332561",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ngx7xxgfrnguwkrjyw3uecr95krl26sp296da7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75700000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75700000",
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
        shares: "58305438.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58305438",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nf5f04rk9t56pzdwve6rhe5gvneq6gvkesyfqx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "154150656.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "154150656",
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
        shares: "58098493.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58098493",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nsqnul9j6qutnkre73warcpw6y4sx9wql8pxxf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80205705.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80205705",
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
        shares: "495966091.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495966091",
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
        shares: "163415598.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "163415598",
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
        shares: "58098928.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58098928",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nn7mdme6uaquplaed4cm9a764wavcdpk25d5s4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "92106633.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "92106633",
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
        shares: "160226229.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "160226229",
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
        shares: "1607903962.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1607903962",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nee5p6sn7fx4w3usljz8quugmjxp7uemlhvkac",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "386273649.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "386273649",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nu8r3g0nckm79tpmlvl06lj6pacve6svqg3xwp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57909454.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57909454",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nuu72je3qqzcymux20c0g7qwc8y4dzs6w2679h",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82191784.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82191784",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nuaefncm0legfws3w6efpjlm34scupyxjyk82r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "70513700.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "70513700",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nanyw77wedg4fzccxynuyqe6rchg00nzfcjhsj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58274273.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58274273",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1n7uf0luy0ste3lnwcrjc5fssf6wxvtel8hpezj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58029599.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58029599",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1nls090mftwcg65f4v8we74wgzjjat9ags6tr0v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "79870939.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "79870939",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15p4z9ccspfkrahrn7670q5ej08q7fuc0w5nee5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58194988.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58194988",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15z8vvhha5pf7944hqugg4g5dfcf6ttj4yv9y5g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "724578.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "724578",
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
        shares: "78768241.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78768241",
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
        shares: "67599763.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "67599763",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1593yhrjwvhcv3vlvars3playrhfhr69xll8wc3",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "404925009.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "404925009",
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
        delegator_address: "cosmos15t23wzhznnzh93c88znrcu9pxcukpqqayugzra",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3044918.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3044918",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15s3raw658c6glx5fe8hqxla3ntn0mmj00yru0m",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "111728473.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111728473",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15scds0jq9crvvphgmnkxuvnycj64xj9lddxrc9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "626821598.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "626821598",
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
        shares: "144995539.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "144995539",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15n9me5yykqtedf80zsnk46lckeu07eegl3gkzw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "564424211.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "564424211",
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
        shares: "83429736.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "83429736",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15c69h6rkd7set77y8ws7rnlyunjxtnxa5rkg9l",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "13172662.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "13172662",
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
        shares: "123688828.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "123688828",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos15and56df7e2pe03nqkas7ezmxldc4cf83wcmqm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "491053480.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "491053480",
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
        delegator_address: "cosmos157rrrrwvaz66nzm4adfe2u0ul44g90vwae35yx",
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
        shares: "63900000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63900000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14qr54afm6rwhh73w8pxq0nes3tw0w3cjk0zlue",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57949407.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57949407",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14qdehlskhtzmmek00fcse24s427xq7ucv932vu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58023303.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58023303",
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
        shares: "57935792.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57935792",
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
        shares: "58018477.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58018477",
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
        shares: "219889037.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "219889037",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14tr8kzvetkd9lqmts8m8wa9cuh64q3r0jgd93g",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "87413528.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "87413528",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14wxtl6zj2qu7r4vmsrd3galut34zezaqfjm09z",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78401363.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78401363",
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
        delegator_address: "cosmos14ktd683g58axlrw99pwlchmc5p8lk9hfwnzv4k",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "80477510.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80477510",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14k5zmw7me6vlrxat9x953y4u023nvx53vtugy6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "86500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86500000",
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
        shares: "58135843.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58135843",
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
        shares: "27503689.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27503689",
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
        shares: "61097460.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61097460",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos14lv5xepxd56l9pvmunk4a8hyg3h732pc5cqfys",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "106000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "106000000",
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
        shares: "101500000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "101500000",
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
        shares: "58136984.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58136984",
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
        shares: "11000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "11000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kgce2j9uepahgug8c8c6vmxevhmmux7s4lhmg5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "496047102.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "496047102",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kgu07r6lhpr0v3dww9a4rldfny5v6fyka2prfr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "909568057.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "909568057",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kfda4ujz0hxrr3unheysgfegj490kspwklr6tf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57854407.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57854407",
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
        shares: "619000004.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "619000004",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kv8344qazq7lvvh3xsutnshf0lsutkhu8n0zr0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "40000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "40000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kvkxlckp7a7vg7kuazefv30w38qymanrdgf3xy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58039728.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58039728",
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
        shares: "1160391309.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1160391309",
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
        delegator_address: "cosmos1ks9dl2scahe45tfk4yjf976lhlfy5gkp0lg5rc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "35175220.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "35175220",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ksez8429rjftqa8f9wxxyg4l80ey7cfwpm82pr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "121251677.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "121251677",
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
        shares: "82593968.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82593968",
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
        shares: "60070748.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60070748",
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
        shares: "1077968183.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1077968183",
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
        shares: "58264657.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58264657",
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
        shares: "119496119.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "119496119",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kal8h32wluskjd7gsqze9jlvk4zw7jp38hujfv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1406029843.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1406029843",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1kal49er78r5urp2jha7qe6wwcqxjazddzd7dgv",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58299596.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58299596",
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
        shares: "65047555.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65047555",
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
        shares: "90534558.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "90534558",
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
        shares: "58302724.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58302724",
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
        shares: "12600000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "12600000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h8d5q2d9u2gc4au5wzh6tf42ufm5en00ew78cj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42118873.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42118873",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hgqgzynazhan293d69gymrnp0e005aq2jefqss",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "11830717.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "11830717",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hf05gnvyvnkst9856ju0z7tnttfe55ftw5za8w",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "32935285.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "32935285",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1htrgaq0j6q34gmlhy88h3sg7detc8mrjxzn6ry",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51310590.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51310590",
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
        delegator_address: "cosmos1hskks7nkcq4ys9u9frmj3rpj2pfdmp20q98l4h",
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
        delegator_address: "cosmos1h3j0wrf9kmthsp8rsrm72wcfptcy3qw3exj07v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "33030000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "33030000",
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
        shares: "58250908.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58250908",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h4kc33lwqqqytu0224y8hw2exfjnkprlpnkcfu",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "64209000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "64209000",
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
        delegator_address: "cosmos1h699jy43htdesrdtdqjlyj9t5c3dkv3gza5zpr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "811000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "811000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h6e82vzacz2a2ewyr8rsu5hwtchvp2252puv6y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "118424858.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118424858",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hm0sf840euex5sc7t64kthksqgr4qh5mnhwwjd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58095862.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58095862",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hmhlm867zq2muaru2zq0u8t86mp2jpetdsan3u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82099780.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82099780",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1h7wpe943s6tsvxun6ahnxkzshr7r0xachjl9a4",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "111668838.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111668838",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1hlqsmh35sc0zr9lmcrxfa585nc48u7cw7prtju",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "2323800015.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "2323800015",
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
        shares: "495959139.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495959139",
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
        shares: "80764376.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "80764376",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cpjexca8tzxwqa4692x09n3sm9qsamhsx4ajwr",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58136385.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58136385",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cz72h7thxsq92a26l8j3xkjx9jtlnuua942p0f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "264545193.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "264545193",
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
        delegator_address: "cosmos1cyvgmfa394pvkm6jvwzm8lyx3vr00wqw888cn6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "13100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "13100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c99hwnrhwjsst585h8287pj8396xce4aeju3gz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "142687411.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "142687411",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c9xa3dp0970yrp8gj8rrwgne7al7q0cv5ujhgz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "53695700.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "53695700",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c9cfhs300g23jkv2feqff3kke7cdklj2gmh4w9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58053516.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58053516",
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
        shares: "36896181.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "36896181",
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
        shares: "57853053.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57853053",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c2gdsuq2n7avgwc7ev0puydzlk44uj5jc3nkc2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495965782.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495965782",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cthyr8req6svmza3euykd2sf5pzse6z2gkd2x6",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "382418938.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382418938",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cv37v5mwxjczl5kzqykxc2fy08ed2tk85jj2r8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58135906.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58135906",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cdtyy29mre322xxpt2yvmz75crs3pl5tw0pken",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "898557285.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "898557285",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cd7a87m7r6angn3wqdfaksxp68y0t6dznx3mld",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "35894982.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "35894982",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cw38a4jse333zm6xa9g55fy4tuyjuyk8cxj64x",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "51818065.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "51818065",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c0k6p340st8egc7jcfndfm4jmly4na6c3mee8w",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "246000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "246000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cszrktg52c4h4kqkzsyrrrw445fuzr6alqvxm5",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57906643.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57906643",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cjnc8hlw4gt2p8wydxjdpckywlux327njcmfa7",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "580944725.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "580944725",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c4s0swsrncwlhtda9fujlnfmajdtla86ysxuwe",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "138319420.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "138319420",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1c4skq47cqsyteg8kfjf6v3ehhza000phk685se",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "237793556.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "237793556",
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
        delegator_address: "cosmos1ccy0709lrhjfu7cg7xtyvp009d70y3zxxce59a",
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
        delegator_address: "cosmos1ccjg0c5rk26jj22jwpeywga3qcyzg7hk4g3e73",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "60193980.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "60193980",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1cclvds6qkapm7d6m8akag2z2kqgqct5gmeyavg",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "168210066.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "168210066",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ceml4szqpc58c7avacpd8uruzwuwt083y98flm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57854449.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57854449",
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
        shares: "22010000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "22010000",
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
        shares: "59135012.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "59135012",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ep5837969j7sm4chu99kuuzgp8yksc5g0clr5f",
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
        delegator_address: "cosmos1ezgrtr9xg5thqxst6chnfsa2w8p5sqe4k7tdce",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "54209998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "54209998",
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
        shares: "65357999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "65357999",
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
        shares: "58031378.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58031378",
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
        shares: "203090998.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "203090998",
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
        shares: "58050351.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58050351",
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
        delegator_address: "cosmos1e0awhdyuzszse5xdde3nrwpg2jzhwu4f06cj3q",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "605089766.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "605089766",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1es5sskgfngfh6srkgv753l83emmc9j7qul998p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "250000047.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "250000047",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1es4gclnpjjlqppjvn5e4hknehm6sm494uv88ak",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58212990.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58212990",
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
        shares: "72897570.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "72897570",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ejapmy7rsffuxjhdug00s6k9440rj6g045vmml",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "10328929.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10328929",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e5jmcepmgr6wsmp4n3tlhmdcny2pw49cyhn5mm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "160233448.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "160233448",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ekzawkkedhnlmxqcsp87aye5ne796jr4qlqy8a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75562500.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75562500",
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
        shares: "62201405.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "62201405",
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
        shares: "534000002.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "534000002",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1e7ductrmw5hrqzjelakecgpsu7twl8z3h2v7kp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58266371.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58266371",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1elphxtaaz2muszt2gc7rz9qq4nav203wnv35d8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58053043.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58053043",
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
        shares: "100300151.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100300151",
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
        shares: "10150000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "10150000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16z62k22z3xpq7x9sdhwums2lcks8wejc7qja5n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "108760849.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "108760849",
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
        delegator_address: "cosmos16yzm6qjjheafnyvlcjxnkmhj3hullgplfumns2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "502192427.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "502192427",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16yanaa9gfmdytghzz3c5ep4kgmzjw00228zs8r",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "90504783.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "90504783",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos169pkmuffdpwm8dfrefc2tcsvhyv74x8rg2uc55",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "77016627.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "77016627",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1698rcdde394kqj0vr7tyteqcjk60lq7kmud5vf",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58099983.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58099983",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16xvd0j4cgnkydxwyfuryrjtw24hqgc2kgvjk3y",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "353019101.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "353019101",
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
        delegator_address: "cosmos16tfjyefrgekf0l8zzccjy2c72nh2mscjztmxsy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "502087201.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "502087201",
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
        shares: "274489946.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "274489946",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos16ssqymtz3vpd4y7tcqw0t23p4he9407c25yl9n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "96401676.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "96401676",
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
        shares: "141807221.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "141807221",
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
        shares: "147088899.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "147088899",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos165s3zw3vaytnjvfv390f9f876u79zv49p2yy44",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "122092789.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "122092789",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos165nqrnqep5e487wzgmydw7fjz6haq4v3w244w0",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "249100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "249100000",
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
        shares: "117845018.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "117845018",
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
        shares: "111484476.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111484476",
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
        delegator_address: "cosmos1mqnrchhd6as3jakrpkd6ua7qhcpze69juvmylm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57897239.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57897239",
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
        shares: "130323590.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "130323590",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1myk9se7naem2dwyy5nc03w7d2fv40dlnr7r7rj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "24000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "24000000",
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
        shares: "58134548.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58134548",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mx0ewey5e35ymn0uyz673qx5vwdfqlqskxqjpz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "820712873.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "820712873",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mxu70gtcjfvr9xtk0pptep9r8y9s462n8awcxy",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58306528.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58306528",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1m846wav7usstl6upmj377k8q9zmvk3jwvhqy07",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495963133.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495963133",
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
        shares: "382399900.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "382399900",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mfje8fezn9mxc7dxnxzumr9kffhxtrn9gd50ln",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "150400000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "150400000",
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
        shares: "58245089.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58245089",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mvd8wt3qtlr6ygh4k4wt9fyrxyj3vc7jkdf76p",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58401061.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58401061",
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
        shares: "191253318.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "191253318",
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
        shares: "37497000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "37497000",
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
        shares: "58226089.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58226089",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mhkuzfws4xgcpkq252nv22vtdk93j3xd2jhd38",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "205000091.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "205000091",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mckaflrkp3ud7wmeufr5xd79eynjxf8xa72dcp",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "300387143.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "300387143",
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
        shares: "63458923.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63458923",
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
        delegator_address: "cosmos1mu9qlfjp7dzwkjf8gvtftnqgjwus32gamh05kk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "40173693.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "40173693",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1mu26reayvd7vwknxugmx3vw8fqmvladjfrxmk8",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "269992997.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "269992997",
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
        shares: "29197452.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "29197452",
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
        shares: "58003183.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58003183",
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
        shares: "82551180.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82551180",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ut2wmfvchccthclwq7jmjd2kvsdm09l5ar045v",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "243710000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "243710000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uvfwsp3nyx4rlzjcscmxlk2mh3twhwwtawn8x9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "86339528.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86339528",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uvd8hwx2xcngg2fuq2yrddu979jgppfay6x3ez",
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
        delegator_address: "cosmos1uwrdtnk62tm78xk7jsc0s9gaue29h7v8e0hyty",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82109110.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82109110",
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
        shares: "58200862.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58200862",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u36qa4gluu2drp89jj0978c2g7d9j607hkl96f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "553895761.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "553895761",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ujepumwuauf5dv4jjc686f6xj4u29rtp704nyz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "118224394.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "118224394",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1unqdkdzw00zewx76ukt9hvnzpthk8hsec6h33f",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50000099.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50000099",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1un5xvp9f0ynu6rv76lmr0y8spkx4nh4yq6xgff",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "75961773.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "75961773",
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
        shares: "85087872.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "85087872",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ucnzn86zszgjg8umz7ujzqvrcryxu46wumdxl0",
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
        delegator_address: "cosmos1uce35h46uzq8jdaxmg44lktjtu2euehr7gl53j",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "125963600.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "125963600",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uey077ygnn8zz78ce9g05vkzetf32er4zgggp2",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "36286672.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "36286672",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u6yacwgkmvvzl37h3nmj9ylcv3ruza6g2xrty9",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "1001000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1001000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1umdjr3j2lcm69ly4tgy80ecs9qdpylhu0up48a",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "61773237.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "61773237",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uavz6gkj7j75ek0sxd7cue6v8vkzzjtlz4yu4e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "495962144.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "495962144",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uah45eeda8k5qwqdapslalxu8kgf9deqckvxee",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "427994427.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "427994427",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1uacchgmhlfmcx32p2fdmph4f08ugeyh8z6d7zc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "3100000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "3100000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1u79zte6hvya37p8glwz94evd7m8cw93h49pcuc",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "103895102.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "103895102",
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
        shares: "81862060.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81862060",
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
        delegator_address: "cosmos1azajwys0qz2mcyy9qu4e2ha5a5fcxh3mgadq83",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "5949583.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "5949583",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1a9nwzp942pfftgpapwwy9sztnuv8ctj76xmtwd",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58050715.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58050715",
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
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "100000000",
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
        shares: "58052899.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58052899",
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
        shares: "86093499.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86093499",
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
        shares: "40721646.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "40721646",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ad40h7ltcnsxcwgw8ruda052ekmunh6qsuus8j",
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
        delegator_address: "cosmos1awrzp3jg9g4cevjnkas4zq46q0m8jcj35yw7pt",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "119710017.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "119710017",
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
        delegator_address: "cosmos1a3858f250ve4t6rp9ef2svpr7sj20aaxql5ajw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "159023486.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "159023486",
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
        shares: "72000005.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "72000005",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ah0y0s9tvagcw9l5228q0r25c9l0exp8lnpzur",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "78028235.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "78028235",
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
        shares: "27099421.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "27099421",
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
        shares: "58050229.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58050229",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1au4sax26ge2wy07lx83mm8dzwg8cnvv8zt9k09",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "42244345.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "42244345",
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
        shares: "86000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "86000000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17qssz5p4dfgezhvek0q98gjmdgwx0txgpgjd05",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "111823988.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "111823988",
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
        shares: "418000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "418000000",
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
        shares: "447042083.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "447042083",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17xtyc4duvhrgnp57f75rl7rem4kyt4cysjarfl",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81339862.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81339862",
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
        delegator_address: "cosmos17ffevfct6uz0llcrxz9szv80se5la47wvw5flk",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "534939999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "534939999",
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
        shares: "135083136.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "135083136",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos172vz7u2mcxyl3ckja0j5u79mkrdzcnh89uvamm",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "123012472.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "123012472",
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
        shares: "249250000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "249250000",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17070ugefje3vvp09gvywgxn6flfv5qzgagw79e",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "57850567.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "57850567",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos174e92yuq26mlshk6kucrxup26dm3zrymfetlgw",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "63687690.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "63687690",
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
        delegator_address: "cosmos177n4ptnw3utwjlrk8n28t4zf00afm379gc9xqz",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "163782364.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "163782364",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos17l2c3ac2k4dql09k5fuca2026l6952rzlmpp78",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "35395179.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "35395179",
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
        shares: "125072402.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "125072402",
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
        shares: "1000000037.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "1000000037",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lg9gkaps6pn2r6npdcyftrplxkrxk5f6x4r4lw",
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
        delegator_address: "cosmos1lfavkyvj7wl3ef5jzk6ywqrs0gcrec8txzrw88",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "44771054.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "44771054",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1ltcwnf2r04cyry55nq2vhalmhezaudg6e8jphx",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "81184814.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "81184814",
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
        delegator_address: "cosmos1ldqk85pu2jz7636yr5npllz5094qrs7dyjkswj",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "50672404.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "50672404",
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
        shares: "88999999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "88999999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lj7p0js6864d6dl532du62xk0rjrjj30er4jfs",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "58339068.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58339068",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lnvz5ldj6g8z0aaa4puz8aq5s8ntzw4tsza93n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "82942184.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "82942184",
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
        delegator_address: "cosmos1lhsdcsklzvs7ek3kp59m36zq3739q3wavmyt6n",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "140299999.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "140299999",
      },
    },
    {
      delegation: {
        delegator_address: "cosmos1lcrtsnhrjv0emxd7nanywswfm0dh93emsnxh0d",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "89859550.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "89859550",
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
        delegator_address: "cosmos1led37kx2jrjjn9mxvtukngwk3cmpauzutrwx4u",
        validator_address:
          "cosmosvaloper140kq2fts8ed9m73a6dch7sgdap6hnp2p95f92k",
        shares: "108595944.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "108595944",
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
        shares: "58053786.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "58053786",
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
        shares: "127000000.000000000000000000",
      },
      balance: {
        denom: "uatom",
        amount: "127000000",
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
