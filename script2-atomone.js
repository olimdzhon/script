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
        delegator_address: "atone1qrfk6d2uus52ndfcl6s6fgds20phn0frnryvz5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2101549.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2101549" },
    },
    {
      delegation: {
        delegator_address: "atone1q9gp582gplzv53h24lfsfuppl89vk66uval4un",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "20748183.000000000000000000",
      },
      balance: { denom: "uatone", amount: "20748183" },
    },
    {
      delegation: {
        delegator_address: "atone1qgs7r0t2djqzvf8u33mhcw7hqq2jfc5hzzycm0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "30675830.000000000000000000",
      },
      balance: { denom: "uatone", amount: "30675830" },
    },
    {
      delegation: {
        delegator_address: "atone1q2833t82zthataz0v6zracejyu7xfqh7mu2sw4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "320423872.000000000000000000",
      },
      balance: { denom: "uatone", amount: "320423872" },
    },
    {
      delegation: {
        delegator_address: "atone1qtj0nyafpvrsztj2x0p9yap6a2evnl0kq9kx3k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "7675688.000000000000000000",
      },
      balance: { denom: "uatone", amount: "7675688" },
    },
    {
      delegation: {
        delegator_address: "atone1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6nyslal2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "13879700000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13879700000" },
    },
    {
      delegation: {
        delegator_address: "atone1qdj33jvvj67vyyhh454q6u7u8scplhvq8l3ren",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300066965.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300066965" },
    },
    {
      delegation: {
        delegator_address: "atone1qs4eqtc0f28943s9q8jzcncr5pkmcgkf07lenq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "289700000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "289700000" },
    },
    {
      delegation: {
        delegator_address: "atone1qjxfq62d2wt3s3elra9v9zqxtjztk0qr8sasum",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "57300000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "57300000" },
    },
    {
      delegation: {
        delegator_address: "atone1q648z887yenz2gxkq4msa252nvp427tfsvh8hu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1682192753.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1682192753" },
    },
    {
      delegation: {
        delegator_address: "atone1qm0q9ec5ylrgz2sz78j53xnrfcsse74a23ad2g",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "380143640.000000000000000000",
      },
      balance: { denom: "uatone", amount: "380143640" },
    },
    {
      delegation: {
        delegator_address: "atone1qur9grvh29plr6pcyzl8rav7j95xghtl6fflzk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "81000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "81000000" },
    },
    {
      delegation: {
        delegator_address: "atone1quun3k4usk4gyad8drug4j9rmsmng30as3aty6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1q7x0hxpcjasvtv0cn7h0tqf47fp06ct2vrnm59",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "46000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "46000000" },
    },
    {
      delegation: {
        delegator_address: "atone1pz0gys67zv6dl0g69dree3yees48plzun5xcek",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "490000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "490000000" },
    },
    {
      delegation: {
        delegator_address: "atone1pz6px85mn3a4m4wsnfq4syuknl9s48fac33ncr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "149758180.000000000000000000",
      },
      balance: { denom: "uatone", amount: "149758180" },
    },
    {
      delegation: {
        delegator_address: "atone1p9hsmt9z6pt008v9rdfq5vv3pkqvnkrle5jqgt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "50200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "50200000" },
    },
    {
      delegation: {
        delegator_address: "atone1pfycqdd9yacgcn7hqd890s3d5cgu0v5r8s6wn4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1p34krywk2xt67yz0ju4c5dzz5u6lurs0cw83s3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "14490695.000000000000000000",
      },
      balance: { denom: "uatone", amount: "14490695" },
    },
    {
      delegation: {
        delegator_address: "atone1pnc97f6vyvgagq7za0u62ln48akk2nxmfnpwek",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "129022209.000000000000000000",
      },
      balance: { denom: "uatone", amount: "129022209" },
    },
    {
      delegation: {
        delegator_address: "atone1p587eza5ua9qxt4q205jalhk4vq3cuhf7shm6d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "140000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "140000000" },
    },
    {
      delegation: {
        delegator_address: "atone1p5esmskdq2vsh4yn5xxul2m3gkg3pmar3y6dp0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "129476548.000000000000000000",
      },
      balance: { denom: "uatone", amount: "129476548" },
    },
    {
      delegation: {
        delegator_address: "atone1p5e65khv540a2v7747nfktgxe5u78eelkcfw0u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ph402ry55q8ravgl2a9z4zctvrcmz00vtjychr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000" },
    },
    {
      delegation: {
        delegator_address: "atone1pemt63zctpxtmarevrjh0mwrv9mapnpyjwradt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "21989936.000000000000000000",
      },
      balance: { denom: "uatone", amount: "21989936" },
    },
    {
      delegation: {
        delegator_address: "atone1p6s3nqc8rr02j5n9qhtmt7zkf4ur2j0vf04p5p",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468938493.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468938493" },
    },
    {
      delegation: {
        delegator_address: "atone1pme8tquascj9t2kay0qxh42f688x5cmrl3qhze",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "88111462.000000000000000000",
      },
      balance: { denom: "uatone", amount: "88111462" },
    },
    {
      delegation: {
        delegator_address: "atone1pufy8qm4qsnxxapugc3l2vvmtpp0vk0suuqlp6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "95464705.000000000000000000",
      },
      balance: { denom: "uatone", amount: "95464705" },
    },
    {
      delegation: {
        delegator_address: "atone1pa56a9fg5jhxrduru275vn2y7fpkxmx6rtg9mm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "108374936.000000000000000000",
      },
      balance: { denom: "uatone", amount: "108374936" },
    },
    {
      delegation: {
        delegator_address: "atone1pl5jtmhlkmvgjv9qhgeucw6u4qxtxp6kvw8wk3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "38000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "38000000" },
    },
    {
      delegation: {
        delegator_address: "atone1zza8552zc92yceaufpjnepdh2cu55xvjtxyx78",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "370001.000000000000000000",
      },
      balance: { denom: "uatone", amount: "370001" },
    },
    {
      delegation: {
        delegator_address: "atone1zrlx4fwpwyx25k4mwraru9mte2wuzd3p3egt4k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "82007595.000000000000000000",
      },
      balance: { denom: "uatone", amount: "82007595" },
    },
    {
      delegation: {
        delegator_address: "atone1z9z5t7fcn9257prq2rq7tua9sghxyat23nsky2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10052902.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10052902" },
    },
    {
      delegation: {
        delegator_address: "atone1zxprgrhmf6zwkvrwmk08kgtlhu4ptk6sry58r3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000310644.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000310644" },
    },
    {
      delegation: {
        delegator_address: "atone1zgs5nnwhpxg4sjyw7xerm4humluxua90ejay73",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ztydpl2gges4u38rm7afs9rlmajk5sq6m2fkmu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101508897.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101508897" },
    },
    {
      delegation: {
        delegator_address: "atone1zdexhg5hnu7tyl0x36d0vmwfu364jr2snq6hfz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101000000" },
    },
    {
      delegation: {
        delegator_address: "atone1zwtv7pplzh7m3t4m2zel8c0q78qsyptvltl087",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "54303992.000000000000000000",
      },
      balance: { denom: "uatone", amount: "54303992" },
    },
    {
      delegation: {
        delegator_address: "atone1z0dg5vqjjeg7l4fhx9xarh7p7wcq2z4h7tfeq0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2100000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2100000" },
    },
    {
      delegation: {
        delegator_address: "atone1zsygz8es37kyfnhsg3xp59d43re4tjtq6ypaxc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "95903033.000000000000000000",
      },
      balance: { denom: "uatone", amount: "95903033" },
    },
    {
      delegation: {
        delegator_address: "atone1zsv6cvpd9y86hhxzatpgzu6ymxdeuc5njypdru",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "450000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "450000000" },
    },
    {
      delegation: {
        delegator_address: "atone1znaj4lqyds2jsg9tpmwt59r0mxn85at4fgdqed",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000" },
    },
    {
      delegation: {
        delegator_address: "atone1z692deslv3tgqcf7yjzu6l0x5p23jzw50vsdv5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "35493084.000000000000000000",
      },
      balance: { denom: "uatone", amount: "35493084" },
    },
    {
      delegation: {
        delegator_address: "atone1zlmdnd2uem5kxx7rdmkfnq2wl5cvfjxuktnvsh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1rxwnxskx7w9jjecfzjve35juw3qxughs9nwku7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1110000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1110000000" },
    },
    {
      delegation: {
        delegator_address: "atone1rxhswdq9852jldxvfxs53x3aql9t927kekln06",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99218568.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99218568" },
    },
    {
      delegation: {
        delegator_address: "atone1rfvtz0f7wkcj62t648s3k20ecjh7frn90nyys0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "3604761.000000000000000000",
      },
      balance: { denom: "uatone", amount: "3604761" },
    },
    {
      delegation: {
        delegator_address: "atone1rf0s9p99t3m0vnwcf0jy98hwedlrul90tsvp4s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "4003480821.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4003480821" },
    },
    {
      delegation: {
        delegator_address: "atone1rf3k6z6ur35djze3zt0zzk6lvm86cn2mstquee",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1065338.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1065338" },
    },
    {
      delegation: {
        delegator_address: "atone1r2nujddqfxvw3nuvdfgsnskxgrdhpfz76a0msu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1020000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1020000000" },
    },
    {
      delegation: {
        delegator_address: "atone1rta9aa5dzsr3kvcf2x8x8zeycd0yw4stqw7v2y",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "999964173.000000000000000000",
      },
      balance: { denom: "uatone", amount: "999964173" },
    },
    {
      delegation: {
        delegator_address: "atone1r05pkm6e6pc39629dmkmravse8v9h3gvjvy0ev",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5090000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5090000" },
    },
    {
      delegation: {
        delegator_address: "atone1rnht2un7dhe9x0450tkd9uezs3ts43sldn7msn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "18992048.000000000000000000",
      },
      balance: { denom: "uatone", amount: "18992048" },
    },
    {
      delegation: {
        delegator_address: "atone1rhyz30vg0c6ed69rmz43h35wn92ucksrclvndw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2427924513.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2427924513" },
    },
    {
      delegation: {
        delegator_address: "atone1rhgsg2qedccgwrpws524tagm4v7rlpdre0m4kz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "28216547118.000000000000000000",
      },
      balance: { denom: "uatone", amount: "28216547118" },
    },
    {
      delegation: {
        delegator_address: "atone1rcv6x4e0pddxulx7525uf468ttk9pedm3967f3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "724135764.000000000000000000",
      },
      balance: { denom: "uatone", amount: "724135764" },
    },
    {
      delegation: {
        delegator_address: "atone1r65lzzqauzca4ut8azectvv4dts8jy0hnhn074",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99537174.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99537174" },
    },
    {
      delegation: {
        delegator_address: "atone1r6knf70m2dlfljh9aqk87ldwvxshajj34ufn5m",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "13530949.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13530949" },
    },
    {
      delegation: {
        delegator_address: "atone1rmtcl7m2pz63cgsvfxayuh54drk9sa9lf5mvvq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "44187823.000000000000000000",
      },
      balance: { denom: "uatone", amount: "44187823" },
    },
    {
      delegation: {
        delegator_address: "atone1rudl9ygrudq66lwkf3j02thecfkmzkvf5ww5vl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "39582094.000000000000000000",
      },
      balance: { denom: "uatone", amount: "39582094" },
    },
    {
      delegation: {
        delegator_address: "atone1rlmkgp4htnlvfkcq9n6hpl702fdsr4q30j4jrg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99837260.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99837260" },
    },
    {
      delegation: {
        delegator_address: "atone1yq7n7f6ekn8rcxmlc033ea58kw5z0ly3w4ay8w",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000004421.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000004421" },
    },
    {
      delegation: {
        delegator_address: "atone1yzzxtvaus8kd0qhc7fvyuyrudnjqwzg4e7vajk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1609925.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1609925" },
    },
    {
      delegation: {
        delegator_address: "atone1yyxsxmf635pxvm0hlfucdegprh55xsxpdc56fe",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300010026.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300010026" },
    },
    {
      delegation: {
        delegator_address: "atone1yyvdwarlwt4sz6qslzs5sx5jlzu6guajpduunn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "623080770.000000000000000000",
      },
      balance: { denom: "uatone", amount: "623080770" },
    },
    {
      delegation: {
        delegator_address: "atone1y988ug894gwcuxesesnf4zxa5220qkutewtd8h",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1067490.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1067490" },
    },
    {
      delegation: {
        delegator_address: "atone1yxhwgqaezqqqnfx6djukd8cl3awq5angw0unr3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10440487.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10440487" },
    },
    {
      delegation: {
        delegator_address: "atone1ysthp74n2wxt4flmzyxrhza8rvxzr9mclfes0v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "707419783.000000000000000000",
      },
      balance: { denom: "uatone", amount: "707419783" },
    },
    {
      delegation: {
        delegator_address: "atone1y5jjkfkxzwr7dackdn9d6cmxc9xvtzdhy7hcy2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101660319.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101660319" },
    },
    {
      delegation: {
        delegator_address: "atone1y4m793g8n2sldvtnaxztl2usqqerhd99h7l00j",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99122123.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99122123" },
    },
    {
      delegation: {
        delegator_address: "atone1ykqpluuf7mxrsfxc66pw9044eacwq6uak04jlt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "120500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "120500000" },
    },
    {
      delegation: {
        delegator_address: "atone1ykyk43nxapm48n60ft0sr8ndrg8deu9p2d5ckt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2330297678.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2330297678" },
    },
    {
      delegation: {
        delegator_address: "atone1yclrw2qxzmyjxjry0fwusdurhkqgdag8j27zlq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "13501286.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13501286" },
    },
    {
      delegation: {
        delegator_address: "atone19y00m48c55re3hk8xskauvq9ny9gpftwquw98k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "12140470.000000000000000000",
      },
      balance: { denom: "uatone", amount: "12140470" },
    },
    {
      delegation: {
        delegator_address: "atone19g9flltdr2ahajrkefdqxc34h5uc532d4xgk5s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "751000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "751000000" },
    },
    {
      delegation: {
        delegator_address: "atone1923utg7e27z6cztq7ky89hx5n5k0awkhfv0l50",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "350000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "350000000" },
    },
    {
      delegation: {
        delegator_address: "atone19dej9nex9sj3424eernwjs83pw75rt3k25hv90",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "276000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "276000000" },
    },
    {
      delegation: {
        delegator_address: "atone193d2qsuk25e9mx0quan2msl2y9fqtt0gw6vxe9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "400000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "400000000" },
    },
    {
      delegation: {
        delegator_address: "atone19jhlpyjx3p4kqh347323azjuhnnew95r0a5z2u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "271800061.000000000000000000",
      },
      balance: { denom: "uatone", amount: "271800061" },
    },
    {
      delegation: {
        delegator_address: "atone195uet0szm7hwaps2k99ywscsdl7hjcy8k7qeuh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300080126.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300080126" },
    },
    {
      delegation: {
        delegator_address: "atone194sg0pj6p5nk7dpnuh7wwm0evlwhw8zyswmmdd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300080040.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300080040" },
    },
    {
      delegation: {
        delegator_address: "atone19e4l3hnkzp0wzz2zmngpkqtdwt49zlgpw97sey",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "49299055.000000000000000000",
      },
      balance: { denom: "uatone", amount: "49299055" },
    },
    {
      delegation: {
        delegator_address: "atone19uga3gpvacvlyuv2mf027n4xqrv4tssexz3wx7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "461408431.000000000000000000",
      },
      balance: { denom: "uatone", amount: "461408431" },
    },
    {
      delegation: {
        delegator_address: "atone1xsvm6ta76z77ydws4d0dcrrcm3syhf5f34xqe2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "128573587.000000000000000000",
      },
      balance: { denom: "uatone", amount: "128573587" },
    },
    {
      delegation: {
        delegator_address: "atone1xs7hps4auv5ksa9a2vuk90v07agx8nlxn6g8xa",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "285000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "285000000" },
    },
    {
      delegation: {
        delegator_address: "atone1x6lk0x27572prmys8xfyxqmj4vv95narsf7kgr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "6093042.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6093042" },
    },
    {
      delegation: {
        delegator_address: "atone1xupjdffnax8tkuzypjqswhz906lhljg4dk8wsg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101840822.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101840822" },
    },
    {
      delegation: {
        delegator_address: "atone18qn5q83vh6c5nnz7nlnrcgpxjac8plq833v00f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "150314367.000000000000000000",
      },
      balance: { denom: "uatone", amount: "150314367" },
    },
    {
      delegation: {
        delegator_address: "atone18rez2m9ffwuku0q4q8t5cjz4rpgku4vuvzjnn6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101746573.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101746573" },
    },
    {
      delegation: {
        delegator_address: "atone18yvdl9kmd32qk86e5xekfque3kx8dq8cycwtfw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1083820.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1083820" },
    },
    {
      delegation: {
        delegator_address: "atone18ywwgc84luq0u8evna62hasdeyagzenad55sma",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "53993654.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53993654" },
    },
    {
      delegation: {
        delegator_address: "atone188pjlw6q8xtfhuzfgzstux8vg379na680h85y4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99348993.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99348993" },
    },
    {
      delegation: {
        delegator_address: "atone18gxg34cp8r4gmsm5vgkaafg4fw4gzfur3xj7cx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "35490421.000000000000000000",
      },
      balance: { denom: "uatone", amount: "35490421" },
    },
    {
      delegation: {
        delegator_address: "atone18gd7nsv2qrx9rv8n0gh37l0x8qmwnrhad9r40u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1722000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1722000000" },
    },
    {
      delegation: {
        delegator_address: "atone18g7jfkn3ftmy79f7fy4qmxrg56t9m0v33qzvuh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2000000" },
    },
    {
      delegation: {
        delegator_address: "atone18t980er03tr8rzv24xswufqzldrf69t35vl8lw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "47057689.000000000000000000",
      },
      balance: { denom: "uatone", amount: "47057689" },
    },
    {
      delegation: {
        delegator_address: "atone18d2ge2rnttunzas75ygkjl5s8tvetevsyqjlpc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "73819155.000000000000000000",
      },
      balance: { denom: "uatone", amount: "73819155" },
    },
    {
      delegation: {
        delegator_address: "atone18nf84jgwkqypaplz45xyf3yegpu4vvhznf9gn4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "250872257.000000000000000000",
      },
      balance: { denom: "uatone", amount: "250872257" },
    },
    {
      delegation: {
        delegator_address: "atone18n4fk0rm4u25lqp38k5xxnepgy7rgge748cdzj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "650000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "650000" },
    },
    {
      delegation: {
        delegator_address: "atone185fkw70ntyc0vlvrf30grsxurfw2d7cplyp8ep",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468824166.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468824166" },
    },
    {
      delegation: {
        delegator_address: "atone1850rdjq4sf488sad4qsj64sj2s8h53z0hhu7q7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000002488.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000002488" },
    },
    {
      delegation: {
        delegator_address: "atone184xze0xvsngwgl3nmu8s6qrns02v0epn6eavjp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100984891.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100984891" },
    },
    {
      delegation: {
        delegator_address: "atone18kvjxrrp935gss49xpuqkn285m64zs9vjp0fnm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "153000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "153000000" },
    },
    {
      delegation: {
        delegator_address: "atone18crvw4qkw8ju6s9jqyw6w3wx5ghh3unvd6zgw5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "449426243.000000000000000000",
      },
      balance: { denom: "uatone", amount: "449426243" },
    },
    {
      delegation: {
        delegator_address: "atone18ank35aua8ftetpmvcsxwdqy4pheltee3wzc2f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "218000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "218000000" },
    },
    {
      delegation: {
        delegator_address: "atone18l3v435q04cmxn0ec45r3vwxdfl3har3ntywp2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1gzdgqfz9a5hpm9mp6v08d2cejcukup3g5n6c85",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "56000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "56000000" },
    },
    {
      delegation: {
        delegator_address: "atone1gzwmgc096jgunp47tnn7j7ulzgc97ce8s82dzw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1495890303.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1495890303" },
    },
    {
      delegation: {
        delegator_address: "atone1gxa40yjrgrlt2ffqka8cgycxnhlq9kd2f4u93y",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000330102.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000330102" },
    },
    {
      delegation: {
        delegator_address: "atone1g8c56wgcxlgy9aeq3hm82vs8t6zyw8cs7sv63y",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101000000" },
    },
    {
      delegation: {
        delegator_address: "atone1g238t79lec906hgnvpnyu4mywltl0kd66uy95g",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "34285236.000000000000000000",
      },
      balance: { denom: "uatone", amount: "34285236" },
    },
    {
      delegation: {
        delegator_address: "atone1gtaegw4m2n7ww538fn3chnmnda5mqe73cx7dqg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "31000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "31000000" },
    },
    {
      delegation: {
        delegator_address: "atone1gd6twrfw7p04797dznh0u98q9ykc7d240qac6a",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "217960229.000000000000000000",
      },
      balance: { denom: "uatone", amount: "217960229" },
    },
    {
      delegation: {
        delegator_address: "atone1gwshmuwm8ny33x3sq6ncvajf2d8sd450uksre5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2900000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2900000" },
    },
    {
      delegation: {
        delegator_address: "atone1gw3zv7exwdh7txlgwm3wnn3xwaj2z9eh7e86d8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1043198.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1043198" },
    },
    {
      delegation: {
        delegator_address: "atone1gwh42aqnppx7d8lxuhkafh86ew6f0wrj5nwul8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "21805088.000000000000000000",
      },
      balance: { denom: "uatone", amount: "21805088" },
    },
    {
      delegation: {
        delegator_address: "atone1g06zqtasu0ca5k5yece6luqj3ke2w365r02rwv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1924878646.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1924878646" },
    },
    {
      delegation: {
        delegator_address: "atone1g3uz8nkzq9zrdemjj82wvl5w74u9e8yv5zyxus",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "170099.000000000000000000",
      },
      balance: { denom: "uatone", amount: "170099" },
    },
    {
      delegation: {
        delegator_address: "atone1g37mcad2p7w4d8zes77mly0tawrmhvamjkdp22",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000200000" },
    },
    {
      delegation: {
        delegator_address: "atone1gn6w54uge5drhx0gskdgva4372d8guxh0wyz6n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "683000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "683000000" },
    },
    {
      delegation: {
        delegator_address: "atone1gnasfq4qq9kuwphp7ytq50pg6f4pzqs4gqu73d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "459461868.000000000000000000",
      },
      balance: { denom: "uatone", amount: "459461868" },
    },
    {
      delegation: {
        delegator_address: "atone1g6lhftnmfh8rxg036facaa72jcypf6rtjhw0zu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "102334282.000000000000000000",
      },
      balance: { denom: "uatone", amount: "102334282" },
    },
    {
      delegation: {
        delegator_address: "atone1gmldc4msum7fer0mp3dq4u9k3wnemw8q5d4jp5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29257363.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29257363" },
    },
    {
      delegation: {
        delegator_address: "atone1frwewwrswegyuxsz800zeaqesq5k678xe5hd9p",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "850000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "850000000" },
    },
    {
      delegation: {
        delegator_address: "atone1f9dge7nrtrlxg24qekrwk24nxzmzlappuw8q39",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "221993564.000000000000000000",
      },
      balance: { denom: "uatone", amount: "221993564" },
    },
    {
      delegation: {
        delegator_address: "atone1f8qxs3n4pstp3ddfzt7773w9wl3c6c04nj7r0d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468824508.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468824508" },
    },
    {
      delegation: {
        delegator_address: "atone1fgngf5pka7m6u68zmdllds7gna7jttw0j27eyz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "34765612.000000000000000000",
      },
      balance: { denom: "uatone", amount: "34765612" },
    },
    {
      delegation: {
        delegator_address: "atone1fs50772f762vxnz2w5k5t3utllu8mymw8w0092",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1963332.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1963332" },
    },
    {
      delegation: {
        delegator_address: "atone1f3rayhc3nkgr287p2md63dg49hr3ykvqmxyrt7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10000000" },
    },
    {
      delegation: {
        delegator_address: "atone1fjuq5uyjkhtcj09alwgtj45qv7q6lw47x4sjkv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "118188431.000000000000000000",
      },
      balance: { denom: "uatone", amount: "118188431" },
    },
    {
      delegation: {
        delegator_address: "atone1f44qd2yw4f007dqddltptaqyqly9qs05n8edum",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "246000041.000000000000000000",
      },
      balance: { denom: "uatone", amount: "246000041" },
    },
    {
      delegation: {
        delegator_address: "atone1fha8ltkqccqxquvhatceu2saqaksmzls405yme",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "650000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "650000" },
    },
    {
      delegation: {
        delegator_address: "atone1fcygwdcfwdnt8gpuv0rr5j6llnexsw6655j42g",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500000000" },
    },
    {
      delegation: {
        delegator_address: "atone1fe49k5nn78tjzh3rqazteynq6sfflq6r55q6dn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1082967.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1082967" },
    },
    {
      delegation: {
        delegator_address: "atone1f6gehrngp29zf7nstklu6732nrwdykaajg8muy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101790408.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101790408" },
    },
    {
      delegation: {
        delegator_address: "atone1f6w3gudyw02vg7jql2kqyte9us8qa5kxfpkwva",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500164791.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500164791" },
    },
    {
      delegation: {
        delegator_address: "atone1f6klmvl7ftqntv2mpcvnhujf3vs2xl2z9dawa7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "75663275.000000000000000000",
      },
      balance: { denom: "uatone", amount: "75663275" },
    },
    {
      delegation: {
        delegator_address: "atone1fud5k0utxxjm27je5t72h82tyten72acpns7n3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500000000" },
    },
    {
      delegation: {
        delegator_address: "atone1fuuuvgwsrrf3zy46azu22kzrskww9fteswr4pa",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "150000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "150000" },
    },
    {
      delegation: {
        delegator_address: "atone12pjgwmk672r98fhjrpxg9xz2j29vmu9r472x4s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1067098314.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1067098314" },
    },
    {
      delegation: {
        delegator_address: "atone12ydrj8eml4wq2cvva7s502ge2w5u7qh5n736c9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5401316174.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5401316174" },
    },
    {
      delegation: {
        delegator_address: "atone122xq6xe80jk5zkhul6zzh80n2k69yr2eh34ht4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "600000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "600000000" },
    },
    {
      delegation: {
        delegator_address: "atone12tdud9qmqzu0vhu5r7t0thvcmjtnx0j39zdgr6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "128635497.000000000000000000",
      },
      balance: { denom: "uatone", amount: "128635497" },
    },
    {
      delegation: {
        delegator_address: "atone12v736nuytn9rjl5dpqtfxzdg40vtlwqqwcx2h8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "618151136.000000000000000000",
      },
      balance: { denom: "uatone", amount: "618151136" },
    },
    {
      delegation: {
        delegator_address: "atone12dz0vh9gk50wsjc7jvefs7l8fafraalc7stqkl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "618145609.000000000000000000",
      },
      balance: { denom: "uatone", amount: "618145609" },
    },
    {
      delegation: {
        delegator_address: "atone12w932cswf7lp9q2lfmwz2nuhjy4uawqw6va96a",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "120000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "120000000" },
    },
    {
      delegation: {
        delegator_address: "atone124rxmmffm329znr5ww8tats35gjq2jzj3m2f8e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500200000" },
    },
    {
      delegation: {
        delegator_address: "atone12c2f2rd0v27ceds29pz4whpumqpxnhk7udqn5s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "675750000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "675750000" },
    },
    {
      delegation: {
        delegator_address: "atone12c6y9dm97r05cu2ewjjw0gm4f6y0pnsm3nwau7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "214000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "214000000" },
    },
    {
      delegation: {
        delegator_address: "atone12erey3cnxl700ggcrfdmu2llhmjwn0f96xuede",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "31000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "31000000" },
    },
    {
      delegation: {
        delegator_address: "atone12ec47afsm5w9mrm8drn9u48dq29tzgkva2c0rk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200000" },
    },
    {
      delegation: {
        delegator_address: "atone12el8k6fz3n80mv2czz6apdxplsnpxznawsllcl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "6000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1tykt53m3lgzsdcvux0n9zsk3rqtpppawy355yl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "54000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "54000000" },
    },
    {
      delegation: {
        delegator_address: "atone1tyu6854q0vlsqpmvaasr9043cwfrtmu4494s50",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "201000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "201000000" },
    },
    {
      delegation: {
        delegator_address: "atone1tg3fa0td5gkzvq94vjefhxu7llyqj3mvnqtm9l",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "739000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "739000000" },
    },
    {
      delegation: {
        delegator_address: "atone1t2vtt4qzhcgg04czu327vaxz0v5drg2w7dzugd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "150384276.000000000000000000",
      },
      balance: { denom: "uatone", amount: "150384276" },
    },
    {
      delegation: {
        delegator_address: "atone1td0nm484l83c4yp3pna9h03jg34wfwrz04weml",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "294001118.000000000000000000",
      },
      balance: { denom: "uatone", amount: "294001118" },
    },
    {
      delegation: {
        delegator_address: "atone1tk9ecdjc59ek3r3dsqe83026jxvtlr0kst3j2z",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468382015.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468382015" },
    },
    {
      delegation: {
        delegator_address: "atone1tkvkxz9fqrcd45zp3pxhtz7fhzmxgm5vp4cx33",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "63128232.000000000000000000",
      },
      balance: { denom: "uatone", amount: "63128232" },
    },
    {
      delegation: {
        delegator_address: "atone1tufwp6sgrnh49dme3hs62dafvckmtfaefff0mv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "150826462.000000000000000000",
      },
      balance: { denom: "uatone", amount: "150826462" },
    },
    {
      delegation: {
        delegator_address: "atone1tuwwym47e68v2cg93j20esjc65hmejk749tzkl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101415022.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101415022" },
    },
    {
      delegation: {
        delegator_address: "atone1t7gdzehwj5snn8hqg97dejuzj7eym42azeyswe",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300080109.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300080109" },
    },
    {
      delegation: {
        delegator_address: "atone1v9hnnh7qtv8x0sycn8ka064xqg4hw7jzzptjj7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "86951079.000000000000000000",
      },
      balance: { denom: "uatone", amount: "86951079" },
    },
    {
      delegation: {
        delegator_address: "atone1vv82mgf9s2uvjre4449ugr3ljyfqdpzh2puwrt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1vd359h8vnd4sy2azrpy8wkj57fg594jerls3zj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "61895988.000000000000000000",
      },
      balance: { denom: "uatone", amount: "61895988" },
    },
    {
      delegation: {
        delegator_address: "atone1vdc8gkzgr60s079fwfpczk708spgwqtgtlv48w",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "131617409.000000000000000000",
      },
      balance: { denom: "uatone", amount: "131617409" },
    },
    {
      delegation: {
        delegator_address: "atone1vw9zdq0yxuazrsa5hsksd5apdsme2etvr8fgd2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300080272.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300080272" },
    },
    {
      delegation: {
        delegator_address: "atone1vkngvnelw4tgahyn20sr0kvk9jq8wrfefvh2lr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "265041313.000000000000000000",
      },
      balance: { denom: "uatone", amount: "265041313" },
    },
    {
      delegation: {
        delegator_address: "atone1dqf5rg4kccq558f29qa02wurmcmrapchm6xkhf",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1999964485.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1999964485" },
    },
    {
      delegation: {
        delegator_address: "atone1dzf04eymc4sf87evqxc87n8x6w75f867hcstty",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "12522926.000000000000000000",
      },
      balance: { denom: "uatone", amount: "12522926" },
    },
    {
      delegation: {
        delegator_address: "atone1d93ggvd6t3qnna3w280ax9g6j9jzr69envan9n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "245000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "245000000" },
    },
    {
      delegation: {
        delegator_address: "atone1dx6r0dy0admj0lc35cukwdgjnr8z0wrz4d3q4e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "32171968.000000000000000000",
      },
      balance: { denom: "uatone", amount: "32171968" },
    },
    {
      delegation: {
        delegator_address: "atone1dxlzv3nym93x72t6d5rtaqzre7skke3nk3nzwg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000009071.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000009071" },
    },
    {
      delegation: {
        delegator_address: "atone1df25fj5wnmgla8f26fqq76mm9ly8hcv5wf7nd7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "144262.000000000000000000",
      },
      balance: { denom: "uatone", amount: "144262" },
    },
    {
      delegation: {
        delegator_address: "atone1d2cu9qgn9kuhne0ljtjpwzd08tjzcr36eacj0u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101590553.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101590553" },
    },
    {
      delegation: {
        delegator_address: "atone1d27jtvp26d2ul4lwy6th9mqmwxvp68pje4lzj2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "999962074.000000000000000000",
      },
      balance: { denom: "uatone", amount: "999962074" },
    },
    {
      delegation: {
        delegator_address: "atone1dtd5wc903mfgsw9sl7cr6x8h0xc73afnlhdxvy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "52000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "52000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ddg9tjkf0vmd3t2mdqpxk2pkk6zssvduphf7js",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "450000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "450000000" },
    },
    {
      delegation: {
        delegator_address: "atone1d06u6y3uaud037prwuhyc6r4g0znyc9rtjcuzt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1005413937.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1005413937" },
    },
    {
      delegation: {
        delegator_address: "atone1d076ek2e7m24jskmlgamv7kut7df892tcsnle9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "312000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "312000000" },
    },
    {
      delegation: {
        delegator_address: "atone1dj254eq6f7xgwltre6jdns582a94phsjvprcfx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "680000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "680000" },
    },
    {
      delegation: {
        delegator_address: "atone1dn54g3fpsp853jmux297fpj89uufn3zxgmuqfh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "248592319.000000000000000000",
      },
      balance: { denom: "uatone", amount: "248592319" },
    },
    {
      delegation: {
        delegator_address: "atone1dkqem467z8l7vjktx7ldg93r82e056qs0m3skm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500000000" },
    },
    {
      delegation: {
        delegator_address: "atone1de88sp2h3955ktrjgnm0jkhy8dttsgdzmnu3s9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "525162375.000000000000000000",
      },
      balance: { denom: "uatone", amount: "525162375" },
    },
    {
      delegation: {
        delegator_address: "atone1wqmkny5hu632yxv6u7ca634p3ewuxq0ph7ewrq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "35499547.000000000000000000",
      },
      balance: { denom: "uatone", amount: "35499547" },
    },
    {
      delegation: {
        delegator_address: "atone1wpxr45kyyzzuaz6s8h7g33d0sjxu9d00u0kzxs",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "533000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "533000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wr0mqeyea45u9av63srtvgr553nyg6l9v8kd2u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "54510775.000000000000000000",
      },
      balance: { denom: "uatone", amount: "54510775" },
    },
    {
      delegation: {
        delegator_address: "atone1w9gcxhaxj8f0rjlkwwu36e7elj9aqmj3txzhp8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wxv8jnx4tnr5rr5uwnx05g3s74tcpzaj06y83e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2237969553.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2237969553" },
    },
    {
      delegation: {
        delegator_address: "atone1wd0867jyazkkuepypfsupnunygv38cg8dn7kmp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468939022.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468939022" },
    },
    {
      delegation: {
        delegator_address: "atone1wwg9r2s99ca9esdvugg6w03zlatv6kprjjhtt2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "290000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "290000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wwf8fsyr3xj8a84k5qkf0tkmvq8gmhg3f627pw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "117147693.000000000000000000",
      },
      balance: { denom: "uatone", amount: "117147693" },
    },
    {
      delegation: {
        delegator_address: "atone1wn33dw4upqvtgz70xg264j68026426ahzv9gpn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "302000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "302000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wkep6k06rqh2vls8t5q2jjkdn4z803alu5e235",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "456000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "456000000" },
    },
    {
      delegation: {
        delegator_address: "atone1w64nk0hmjelradw68twzs8zngk253y3g27s0sr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "550000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "550000000" },
    },
    {
      delegation: {
        delegator_address: "atone1watcl6uwglas3zumlkz8se0j33zzt6sknd2lxd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "282000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "282000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wlg3r97try92fgvvt5puntmekacwqjep6eve29",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "95079329.000000000000000000",
      },
      balance: { denom: "uatone", amount: "95079329" },
    },
    {
      delegation: {
        delegator_address: "atone10q8z93hgpnl4h0fxjye58erz4gp66v3qlh4csd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "78965124.000000000000000000",
      },
      balance: { denom: "uatone", amount: "78965124" },
    },
    {
      delegation: {
        delegator_address: "atone10rgr9c9qwzpyl3yv9zgtprtskmzuzs06tx7u6w",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "302000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "302000000" },
    },
    {
      delegation: {
        delegator_address: "atone10gzg69ktz2ku6swm400ghtpfj77u9hg7ua0t55",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "227076162.000000000000000000",
      },
      balance: { denom: "uatone", amount: "227076162" },
    },
    {
      delegation: {
        delegator_address: "atone10guvn4243qg2l8ey8gy9zwttz6v23232k9wm5k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1642234585.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1642234585" },
    },
    {
      delegation: {
        delegator_address: "atone10t6r2xw3496d0r84lu9vprm547uww0sz0502rq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "155000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "155000000" },
    },
    {
      delegation: {
        delegator_address: "atone104jtrwcljnxfljhml8mxrw7qetcsdmqvz2lkry",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "4380813.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4380813" },
    },
    {
      delegation: {
        delegator_address: "atone10hx50q3nzp2z3hzuwkyjlf2e3hnxcjrlpyadpl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1068511.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1068511" },
    },
    {
      delegation: {
        delegator_address: "atone10hm8wmpkn7qhp4cd2d784r5t4lvnwy0sc7fuz4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "128747304.000000000000000000",
      },
      balance: { denom: "uatone", amount: "128747304" },
    },
    {
      delegation: {
        delegator_address: "atone10mgy3dygkqyg8v82q6k3526r5lgt5q8cucdane",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "71948704.000000000000000000",
      },
      balance: { denom: "uatone", amount: "71948704" },
    },
    {
      delegation: {
        delegator_address: "atone1szw5zdjh4jyq2yprdrn7shw6jv3my96sr8nfem",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "31000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "31000000" },
    },
    {
      delegation: {
        delegator_address: "atone1srrk9qyuc3255u7h8zk78n5pvu3vatt96ejuks",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000002783.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000002783" },
    },
    {
      delegation: {
        delegator_address: "atone1sr603679vzkd896wveuay3aft82h0kqwgrq7cw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "144000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "144000000" },
    },
    {
      delegation: {
        delegator_address: "atone1sg4g7vasfs60zfajeeje862h9cnffdnuucky7t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1058685.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1058685" },
    },
    {
      delegation: {
        delegator_address: "atone1snydm4jj9j9fd8vyxw6sansv52653de820xnxt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1862084711.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1862084711" },
    },
    {
      delegation: {
        delegator_address: "atone1sn0gq7jlk5cscurvnsrlxc644p2dkwq56anjm7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "52746366457.000000000000000000",
      },
      balance: { denom: "uatone", amount: "52746366457" },
    },
    {
      delegation: {
        delegator_address: "atone1s4szs2h38m5g20c7cwg9nve6whww4e09tvt9xz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300067567.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300067567" },
    },
    {
      delegation: {
        delegator_address: "atone1smq0qz39r8e8awga8zaxlquftkzxldr8z6sc3c",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "32299367.000000000000000000",
      },
      balance: { denom: "uatone", amount: "32299367" },
    },
    {
      delegation: {
        delegator_address: "atone1su0p2tyhph4hv6ud22c057rz3f8gfvrsly8kyy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "327052057.000000000000000000",
      },
      balance: { denom: "uatone", amount: "327052057" },
    },
    {
      delegation: {
        delegator_address: "atone1sltq5xnhhh02zelpphpkqqfy48w7rg47s9zjr6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "555500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "555500000" },
    },
    {
      delegation: {
        delegator_address: "atone13q84zxycqx2m6kpslgsd835s2fxg0kv52x7aym",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99418049.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99418049" },
    },
    {
      delegation: {
        delegator_address: "atone13zzlsjnauafxz764nvj6mgagrkt5vke37jskxy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1171903798.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1171903798" },
    },
    {
      delegation: {
        delegator_address: "atone13zjs9t80q2y4l2v4d57t8kfz276pjnfmf2npah",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "130000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "130000000" },
    },
    {
      delegation: {
        delegator_address: "atone13rge5v0u9vvee6we2teyk2vam6lq6ft4lqyv3t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000013.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000013" },
    },
    {
      delegation: {
        delegator_address: "atone13g25c4rmcyq2nxhpu00nke5u0puld50gn0as9h",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "280355742.000000000000000000",
      },
      balance: { denom: "uatone", amount: "280355742" },
    },
    {
      delegation: {
        delegator_address: "atone1322eyxkxyz8d00x40mp9yzlwcvx5wnsdmul6e2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99421438.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99421438" },
    },
    {
      delegation: {
        delegator_address: "atone130umlsvuey3ss03p9pnmnww4mx3zta4skzath6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "999961986.000000000000000000",
      },
      balance: { denom: "uatone", amount: "999961986" },
    },
    {
      delegation: {
        delegator_address: "atone13sdqfpxsal48xlmspyg2dzteyqu04dvex628wa",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "469951548.000000000000000000",
      },
      balance: { denom: "uatone", amount: "469951548" },
    },
    {
      delegation: {
        delegator_address: "atone13jkhp3gp2enyhnp54txq8w5aw77aaqzyvppw8y",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300065984.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300065984" },
    },
    {
      delegation: {
        delegator_address: "atone135vz559nhcmvyta9y5juee8fs949nc8c7k67yr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300080377.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300080377" },
    },
    {
      delegation: {
        delegator_address: "atone13ee0yyvm7qhqsvqe2qprk3me60zlr642srpmwc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2472530.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2472530" },
    },
    {
      delegation: {
        delegator_address: "atone13uyv2mzgrc4r0c8aslsvkfy7dcmgflq0sc5fdm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "4000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4000000" },
    },
    {
      delegation: {
        delegator_address: "atone1j9js8967j33c2t48pcjrmgyef5m6m4prsl3am3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1074473.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1074473" },
    },
    {
      delegation: {
        delegator_address: "atone1jxd29h6ra4taagzxp7k05f56u50h9r8zekk8nr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "15871701.000000000000000000",
      },
      balance: { denom: "uatone", amount: "15871701" },
    },
    {
      delegation: {
        delegator_address: "atone1jfwp4d5mg93sapd67r4274f8y8tg4xn768d2cz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "370256909.000000000000000000",
      },
      balance: { denom: "uatone", amount: "370256909" },
    },
    {
      delegation: {
        delegator_address: "atone1jttdtq9ah54rawwtsapt225unp8fdpedw5rzlj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2128045398.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2128045398" },
    },
    {
      delegation: {
        delegator_address: "atone1jtustv4ghy997d6catge3mgklszkvve6uhm576",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1285979541.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1285979541" },
    },
    {
      delegation: {
        delegator_address: "atone1j0qxu2ym2uxdatx9u236crh820c9lrg9az6lpm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101787978.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101787978" },
    },
    {
      delegation: {
        delegator_address: "atone1j3qv4khvemv2fgk9a6g238g3suyqatahxqczdq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "127518873.000000000000000000",
      },
      balance: { denom: "uatone", amount: "127518873" },
    },
    {
      delegation: {
        delegator_address: "atone1jev7zyn0zkln3gtsuprgwwxmrs6shsux2aa70z",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "51000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "51000000" },
    },
    {
      delegation: {
        delegator_address: "atone1juskw0hae7e0stnwmsl8hc2t7gd9yxuusrlzdj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "128916857.000000000000000000",
      },
      balance: { denom: "uatone", amount: "128916857" },
    },
    {
      delegation: {
        delegator_address: "atone1jujullnrumr8mplckscuxzfnzkspfm6lfjncpt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "350000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "350000000" },
    },
    {
      delegation: {
        delegator_address: "atone1npurzcjvq9rd29k29atvxd90732z4lwml7ft4e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1npu9lyaf0ve5hrr30xdc8r57jje98tu5ljgw62",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "457958779.000000000000000000",
      },
      balance: { denom: "uatone", amount: "457958779" },
    },
    {
      delegation: {
        delegator_address: "atone1n9wl97cms52tkhc2j40mmktgew0e08aw6e23j2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "209027000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "209027000" },
    },
    {
      delegation: {
        delegator_address: "atone1ngr5pfhr04rumnzz8vk7cmueat0au88y44xkck",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "86262625.000000000000000000",
      },
      balance: { denom: "uatone", amount: "86262625" },
    },
    {
      delegation: {
        delegator_address: "atone1nf5f04rk9t56pzdwve6rhe5gvneq6gvkhscwk7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "617905596.000000000000000000",
      },
      balance: { denom: "uatone", amount: "617905596" },
    },
    {
      delegation: {
        delegator_address: "atone1ntqjylqqzw4a22hhljxsmwd7vf3h4eq64tsd0h",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "36678562.000000000000000000",
      },
      balance: { denom: "uatone", amount: "36678562" },
    },
    {
      delegation: {
        delegator_address: "atone1njqpx444qvmq9q9yewupn4nztmsfzvcts3h7qj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000004414.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000004414" },
    },
    {
      delegation: {
        delegator_address: "atone1n45t2sknp6gjj85f25sazprq7q8kyweqv4lc0n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "7521345388.000000000000000000",
      },
      balance: { denom: "uatone", amount: "7521345388" },
    },
    {
      delegation: {
        delegator_address: "atone1nkw9c3he7mnhq3jf0rfyrs4uzlawkr6qfghvzj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "56000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "56000000" },
    },
    {
      delegation: {
        delegator_address: "atone1nesuje39dmscqg5v3qrqpedg77f8qtq33v67dj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101002436.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101002436" },
    },
    {
      delegation: {
        delegator_address: "atone1ne67r4tv5sgpkax7q4se0u84gmqh83sd4jcjuh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "128996747.000000000000000000",
      },
      balance: { denom: "uatone", amount: "128996747" },
    },
    {
      delegation: {
        delegator_address: "atone1nmt9zlgmcn6f9qj3gepxdfy690kkna0xxslfrh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000" },
    },
    {
      delegation: {
        delegator_address: "atone15rgk9gkgc0rfsflyh6ygkcn8vnnhnq49arvcdg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "7777000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "7777000000" },
    },
    {
      delegation: {
        delegator_address: "atone15yatfzzljeruqjytj7ev25nwy53l0uvfch2xn4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5222.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5222" },
    },
    {
      delegation: {
        delegator_address: "atone15x84rgw68x6v42c7drsgwng0dzt8ylvf56zs4w",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "13501304.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13501304" },
    },
    {
      delegation: {
        delegator_address: "atone15gq8zpzagw6e5gzed8pfggsyvjdfmsss3l22dr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "55000008383.000000000000000000",
      },
      balance: { denom: "uatone", amount: "55000008383" },
    },
    {
      delegation: {
        delegator_address: "atone1528kd4dh7cxd2x2zknq48zt40lnx3phl3zs0jc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000" },
    },
    {
      delegation: {
        delegator_address: "atone152l67q44deyj7t956f2swkjza5rznm2q8skaag",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16785037.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16785037" },
    },
    {
      delegation: {
        delegator_address: "atone150q6ppu366x468pkhm7zcw7jk5jegg0swa8dn2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "698608142.000000000000000000",
      },
      balance: { denom: "uatone", amount: "698608142" },
    },
    {
      delegation: {
        delegator_address: "atone15jx0v767zutpsjvwx4lwk7z28n8mzvd0m8wawc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "34872164.000000000000000000",
      },
      balance: { denom: "uatone", amount: "34872164" },
    },
    {
      delegation: {
        delegator_address: "atone15jnuh4s763w5msmnk5tx9vdgrdxgx39hdyksft",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1" },
    },
    {
      delegation: {
        delegator_address: "atone15j7g66x5y99d9kjs0zvkvejgyhpgfaeltj70z2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone15n9me5yykqtedf80zsnk46lckeu07eeg33535k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "876157931.000000000000000000",
      },
      balance: { denom: "uatone", amount: "876157931" },
    },
    {
      delegation: {
        delegator_address: "atone1547h9rujujmxw00lzm5dqwqcew7sczu9xm7wwt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "6960000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6960000" },
    },
    {
      delegation: {
        delegator_address: "atone15hmqrc245kryaehxlch7scl9d9znxa58wka40n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "67253427190.000000000000000000",
      },
      balance: { denom: "uatone", amount: "67253427190" },
    },
    {
      delegation: {
        delegator_address: "atone15epp26pl7cxhq6ff882cluyfxacj8lv5glcxr6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "210000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "210000000" },
    },
    {
      delegation: {
        delegator_address: "atone15mzzewuylf8a8y9ve2e07e5wckjq75kpkspavm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "128712584.000000000000000000",
      },
      balance: { denom: "uatone", amount: "128712584" },
    },
    {
      delegation: {
        delegator_address: "atone15and56df7e2pe03nqkas7ezmxldc4cf8lwyukr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "136000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "136000000" },
    },
    {
      delegation: {
        delegator_address: "atone157qu9jpq3pasuc9s50tpd4hwu3tm45lrhs7vx4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "605000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "605000000" },
    },
    {
      delegation: {
        delegator_address: "atone15lnq0udq33dg3aghgagxtswdyvjluunag40wun",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99519355.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99519355" },
    },
    {
      delegation: {
        delegator_address: "atone14r9q9ntn0zncx7gtkzarcasgfmvwh86qr3c3nv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "25191228.000000000000000000",
      },
      balance: { denom: "uatone", amount: "25191228" },
    },
    {
      delegation: {
        delegator_address: "atone14yxypnruq07v300a0ga8xkl900vc3chkkvpgex",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "102329099.000000000000000000",
      },
      balance: { denom: "uatone", amount: "102329099" },
    },
    {
      delegation: {
        delegator_address: "atone14xcezyeyvxx384vnqhcxrs7qesfkkrkdws77y5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "51004356.000000000000000000",
      },
      balance: { denom: "uatone", amount: "51004356" },
    },
    {
      delegation: {
        delegator_address: "atone148whzgrgd57wak0lk5teamngwww66amzc3wul8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "374632881.000000000000000000",
      },
      balance: { denom: "uatone", amount: "374632881" },
    },
    {
      delegation: {
        delegator_address: "atone14f5vpj2hdw37rng9zct7llkqax2znrhyg4vg84",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "284932859.000000000000000000",
      },
      balance: { denom: "uatone", amount: "284932859" },
    },
    {
      delegation: {
        delegator_address: "atone14wjel7svz58fhpzhfpdw2adl0wmk9vemy65tjk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "34849099.000000000000000000",
      },
      balance: { denom: "uatone", amount: "34849099" },
    },
    {
      delegation: {
        delegator_address: "atone14sqxm7fn47tkm4lx9e7yd3wzuym2h4tdu2qj89",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "129205111.000000000000000000",
      },
      balance: { denom: "uatone", amount: "129205111" },
    },
    {
      delegation: {
        delegator_address: "atone14uutcxkwe0rws08j74v8vl9f9z0qz3kcysmwmh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "45403686.000000000000000000",
      },
      balance: { denom: "uatone", amount: "45403686" },
    },
    {
      delegation: {
        delegator_address: "atone147vq8se2xg7nq566udrn6gz2pz9y88m7ulnvea",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468938520.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468938520" },
    },
    {
      delegation: {
        delegator_address: "atone1476qsc899206arz7s4g7uu7p73r2ue8ute7088",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "161553394.000000000000000000",
      },
      balance: { denom: "uatone", amount: "161553394" },
    },
    {
      delegation: {
        delegator_address: "atone14l93dwnqe25rnu4anfc6q0dlcukea9pd3pm53t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1390000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1390000" },
    },
    {
      delegation: {
        delegator_address: "atone1kzyz6wyvt6maafq3ajy30ed9gxv9etwq7cv2jl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "469000987.000000000000000000",
      },
      balance: { denom: "uatone", amount: "469000987" },
    },
    {
      delegation: {
        delegator_address: "atone1ky4l8why7jctxpwwxwy2en5txagy8j7x5kpc8n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "3500234400.000000000000000000",
      },
      balance: { denom: "uatone", amount: "3500234400" },
    },
    {
      delegation: {
        delegator_address: "atone1kyc0uy0lje8eyc02qhnz3msav2jytz33943683",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24700000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24700000" },
    },
    {
      delegation: {
        delegator_address: "atone1kg5chx398g0p09tc4hemm2fwxj6cwt9ww7j97n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "25712087.000000000000000000",
      },
      balance: { denom: "uatone", amount: "25712087" },
    },
    {
      delegation: {
        delegator_address: "atone1kgce2j9uepahgug8c8c6vmxevhmmux7smltu7v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "871927809.000000000000000000",
      },
      balance: { denom: "uatone", amount: "871927809" },
    },
    {
      delegation: {
        delegator_address: "atone1kgu07r6lhpr0v3dww9a4rldfny5v6fykn2aylm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "158329305.000000000000000000",
      },
      balance: { denom: "uatone", amount: "158329305" },
    },
    {
      delegation: {
        delegator_address: "atone1kvqxv4pgmteqrwrcfj8j3g3vwhcg0zmupnp9nc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "35530671.000000000000000000",
      },
      balance: { denom: "uatone", amount: "35530671" },
    },
    {
      delegation: {
        delegator_address: "atone1kvq4n4n4x3gqlyfr672pjyqn73c2hdkue6lgaz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "613000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "613000000" },
    },
    {
      delegation: {
        delegator_address: "atone1keqn6wegxwx6e3tyd9jmpmqpp9fgj3gu75v0gp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "4984319.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4984319" },
    },
    {
      delegation: {
        delegator_address: "atone1ka3w345dawr0quc4uac9unv8x43yvfzwzmuh0j",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29070388.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29070388" },
    },
    {
      delegation: {
        delegator_address: "atone1kahgd5qgy23w7djkc43ghpqg2uv52ds0yrgqq3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100053965.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100053965" },
    },
    {
      delegation: {
        delegator_address: "atone1kal8h32wluskjd7gsqze9jlvk4zw7jp3fhq4l5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2052855913.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2052855913" },
    },
    {
      delegation: {
        delegator_address: "atone1hqn9uvusqygerc6ccs6n6e074yqp2sjp7v3rwk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1090401.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1090401" },
    },
    {
      delegation: {
        delegator_address: "atone1hr7tz3qvyhlpghtyfxdlwrfkw5zcjkxngdncue",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "6412147.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6412147" },
    },
    {
      delegation: {
        delegator_address: "atone1hx0875zj5x9p5wlzzxsvttwmmue6ftclcl93vx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "35193171.000000000000000000",
      },
      balance: { denom: "uatone", amount: "35193171" },
    },
    {
      delegation: {
        delegator_address: "atone1hv4rlv94dwwsj3z7l6muye6ndmup0htacx6m3t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "4924131699.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4924131699" },
    },
    {
      delegation: {
        delegator_address: "atone1h033rs3na3faurz0n3qlmls52q04k4u4u3wnug",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "93708219.000000000000000000",
      },
      balance: { denom: "uatone", amount: "93708219" },
    },
    {
      delegation: {
        delegator_address: "atone1hskks7nkcq4ys9u9frmj3rpj2pfdmp20w9mcr0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2374407555.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2374407555" },
    },
    {
      delegation: {
        delegator_address: "atone1h3j0wrf9kmthsp8rsrm72wcfptcy3qw3hxwgg5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "310000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "310000" },
    },
    {
      delegation: {
        delegator_address: "atone1h3l6dyvhg0zsh403q6v5c9xpne8ucl8jh72672",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "600000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "600000000" },
    },
    {
      delegation: {
        delegator_address: "atone1hna4ue4tszxzawa6me683u2pn25lmewg46tvwv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101737634.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101737634" },
    },
    {
      delegation: {
        delegator_address: "atone1h4yklnnd3a9tas43y0ey8z3vg5zzwjs0g2t8ma",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "251000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "251000000" },
    },
    {
      delegation: {
        delegator_address: "atone1h4x2tx4679zjv77uet0x6e6v33dc8l82kgtzvx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468824166.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468824166" },
    },
    {
      delegation: {
        delegator_address: "atone1hk4tzw5nqc43zt4aukxn5za5fmgk7qqqsjuhnc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "36661254.000000000000000000",
      },
      balance: { denom: "uatone", amount: "36661254" },
    },
    {
      delegation: {
        delegator_address: "atone1hhef32qjjhcy7zqx8u6e4znk598v30e8syh549",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "139723340.000000000000000000",
      },
      balance: { denom: "uatone", amount: "139723340" },
    },
    {
      delegation: {
        delegator_address: "atone1h6e82vzacz2a2ewyr8rsu5hwtchvp225ypqtvu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1996915246.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1996915246" },
    },
    {
      delegation: {
        delegator_address: "atone1hujv5m4jnlhxpkmw64kedms2l9pcggps024e7l",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "13375474.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13375474" },
    },
    {
      delegation: {
        delegator_address: "atone1hlfy3cmznkzu75208e7kgy4u6juk4v8y36mz0e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000006655.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000006655" },
    },
    {
      delegation: {
        delegator_address: "atone1cqrky3t78np3a60kmdpylzyv594muagf04t72v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "276711975.000000000000000000",
      },
      balance: { denom: "uatone", amount: "276711975" },
    },
    {
      delegation: {
        delegator_address: "atone1cqjp63tugraf4wksanzh3xzaap9upz428azfhl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "800000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "800000" },
    },
    {
      delegation: {
        delegator_address: "atone1cz72h7thxsq92a26l8j3xkjx9jtlnuuat4kxe3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "139000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "139000000" },
    },
    {
      delegation: {
        delegator_address: "atone1cyhtq6e9x7f2haf6rn5l08svmhsrcqlvlkxzf6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1c9xa3dp0970yrp8gj8rrwgne7al7q0cv6uws76",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "28700000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "28700000" },
    },
    {
      delegation: {
        delegator_address: "atone1c9mkft0d3sdjm3us883270veuww7qe3yju3y8f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "57140198.000000000000000000",
      },
      balance: { denom: "uatone", amount: "57140198" },
    },
    {
      delegation: {
        delegator_address: "atone1cgdty3246mz7jatqkg36h2aeqwnwf2m62hm7hv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1c2gdsuq2n7avgwc7ev0puydzlk44uj5jk303wj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000006647.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000006647" },
    },
    {
      delegation: {
        delegator_address: "atone1cthyr8req6svmza3euykd2sf5pzse6z2xk3dsz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "459823736.000000000000000000",
      },
      balance: { denom: "uatone", amount: "459823736" },
    },
    {
      delegation: {
        delegator_address: "atone1cdtyy29mre322xxpt2yvmz75crs3pl5tq0a30t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "999963509.000000000000000000",
      },
      balance: { denom: "uatone", amount: "999963509" },
    },
    {
      delegation: {
        delegator_address: "atone1cdu9je4hm97yygcw89684sxptpsrrg7sx7v5uj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "129012446.000000000000000000",
      },
      balance: { denom: "uatone", amount: "129012446" },
    },
    {
      delegation: {
        delegator_address: "atone1c0uv00l292ph9znzwt5w6uemur5n2kpgesgktz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99468950.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99468950" },
    },
    {
      delegation: {
        delegator_address: "atone1c347zr3z9ck7kwf9csxnn5vj5d06xcnguanma4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "174366484.000000000000000000",
      },
      balance: { denom: "uatone", amount: "174366484" },
    },
    {
      delegation: {
        delegator_address: "atone1cjnc8hlw4gt2p8wydxjdpckywlux327nuc8wtx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "400631190.000000000000000000",
      },
      balance: { denom: "uatone", amount: "400631190" },
    },
    {
      delegation: {
        delegator_address: "atone1ccy0709lrhjfu7cg7xtyvp009d70y3zxgc9nn9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "245500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "245500000" },
    },
    {
      delegation: {
        delegator_address: "atone1c7pn0kv2x784cujvthxh5km8xxuftf85angsts",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000468536.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000468536" },
    },
    {
      delegation: {
        delegator_address: "atone1c78d8wwp6stq2cpfpw9u8aq6qwmswpp2tywnh5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "105000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "105000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ezr0cxsyt4qtsm2dd4ce50kdlps8w7wars8zrh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "11000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "11000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1er0ahfstn00n5mhajl33c3w645e46pkw6usn8d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "53206777.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53206777" },
    },
    {
      delegation: {
        delegator_address: "atone1e0d0daqr34t7kgdumgrlrwf7xye9alqfu20hkl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "6300000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6300000000" },
    },
    {
      delegation: {
        delegator_address: "atone1e04npj9jtg9p05symnpupepe0dqc9p4f5jlkrq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5000000" },
    },
    {
      delegation: {
        delegator_address: "atone1e04kh9g0gdst6374grqld9mvs2lvk3tcaexysm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200000000" },
    },
    {
      delegation: {
        delegator_address: "atone1esysgy90dkyk5kuhhl3mzv4wq55t3ks0j4enly",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "18263770.000000000000000000",
      },
      balance: { denom: "uatone", amount: "18263770" },
    },
    {
      delegation: {
        delegator_address: "atone1ejskt8erpgnpzymf2js47rtnfxramr5aw2egkx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ehvppg4y9ar7dvnhjnqgjwxm2vd8yvsx72hl0v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "39942372.000000000000000000",
      },
      balance: { denom: "uatone", amount: "39942372" },
    },
    {
      delegation: {
        delegator_address: "atone1eewlz3pl8rhs083nqrds45kfg93sm7vu7jafhk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "227081317.000000000000000000",
      },
      balance: { denom: "uatone", amount: "227081317" },
    },
    {
      delegation: {
        delegator_address: "atone1e69qx3c2tn2jxpq79kvlnc5yvu6hshqtxcr5dn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1080683.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1080683" },
    },
    {
      delegation: {
        delegator_address: "atone1eujlkkfsyjf28ey9vce3yp0s0mdd0l94z7lxln",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "710000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "710000000" },
    },
    {
      delegation: {
        delegator_address: "atone16qyvjuygm7p69ffjzn8szwxjq6l6fafsddzjtc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "34309622.000000000000000000",
      },
      balance: { denom: "uatone", amount: "34309622" },
    },
    {
      delegation: {
        delegator_address: "atone16pyqdev493dszr786lp38d39mncf9ljrryprud",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2197091.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2197091" },
    },
    {
      delegation: {
        delegator_address: "atone16pnm0sxpta3t9u7s9ujd7lkhxhdha05tafc93s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2942439382.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2942439382" },
    },
    {
      delegation: {
        delegator_address: "atone16yzm6qjjheafnyvlcjxnkmhj3hullgpl8u85xj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "617910818.000000000000000000",
      },
      balance: { denom: "uatone", amount: "617910818" },
    },
    {
      delegation: {
        delegator_address: "atone168lrc09vv6cp2yckr2klhfutz8reu95clzg3ee",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "51522527.000000000000000000",
      },
      balance: { denom: "uatone", amount: "51522527" },
    },
    {
      delegation: {
        delegator_address: "atone1628l2qz5mgdf890wt5fksf3c8smw0k783aqsy4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "81976500.000000000000000000",
      },
      balance: { denom: "uatone", amount: "81976500" },
    },
    {
      delegation: {
        delegator_address: "atone16tfjyefrgekf0l8zzccjy2c72nh2mscjvt8pxu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "618086776.000000000000000000",
      },
      balance: { denom: "uatone", amount: "618086776" },
    },
    {
      delegation: {
        delegator_address: "atone16vrpzr6hfqmmktqa9u2s0qm6qw0sd6pa7la6lm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "25500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "25500000" },
    },
    {
      delegation: {
        delegator_address: "atone16wpn0gwepdalz0fnlq5nfy645wmwej2ctqmvyp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000007269.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000007269" },
    },
    {
      delegation: {
        delegator_address: "atone1602cse30jdmctgque3j8lc78w2frxzhnga4m5x",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "287000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "287000000" },
    },
    {
      delegation: {
        delegator_address: "atone1603r7hdvmntnh67rr6gnf3myg5sj0020pssh5d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000" },
    },
    {
      delegation: {
        delegator_address: "atone16sspfg6v82wwqwsmeqfh0483mpgxt8h3cvpca7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "18229359.000000000000000000",
      },
      balance: { denom: "uatone", amount: "18229359" },
    },
    {
      delegation: {
        delegator_address: "atone16j9m4s9hvz2ns2z6fk2s35egca5l6rw9rjupm8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1001944920.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1001944920" },
    },
    {
      delegation: {
        delegator_address: "atone16jk3xk8y96xfwhu3z2u8jenn2shxm0u05sulhj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "152000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "152000000" },
    },
    {
      delegation: {
        delegator_address: "atone16kmc5esy37tu6jpywhmgts889ukewwy5nv5h38",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "74594746.000000000000000000",
      },
      balance: { denom: "uatone", amount: "74594746" },
    },
    {
      delegation: {
        delegator_address: "atone16hk3m0pnmswlvcpptq2v9admexwqp85tgp2fn7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "130066837.000000000000000000",
      },
      balance: { denom: "uatone", amount: "130066837" },
    },
    {
      delegation: {
        delegator_address: "atone166au0wp40n0p0yrj7vf9gce7yre3wyq0f7nmek",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "11865246328.000000000000000000",
      },
      balance: { denom: "uatone", amount: "11865246328" },
    },
    {
      delegation: {
        delegator_address: "atone16awp53yurhwyu6sl7tmr3jufjg6pttguk3r37v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100857686.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100857686" },
    },
    {
      delegation: {
        delegator_address: "atone1675kjxe5a9lzjgu3wmgkn5rp9zta6wh8pyxykn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "105195124.000000000000000000",
      },
      balance: { denom: "uatone", amount: "105195124" },
    },
    {
      delegation: {
        delegator_address: "atone1myj2ethr8q5wh6rhq0rqmqmhtvu2tc84qfht8n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "130079027.000000000000000000",
      },
      balance: { denom: "uatone", amount: "130079027" },
    },
    {
      delegation: {
        delegator_address: "atone1m846wav7usstl6upmj377k8q9zmvk3jwzhurex",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000025006.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000025006" },
    },
    {
      delegation: {
        delegator_address: "atone1mfq9n8ghfxga047m97wuvzp5t8t7ujxrmuwwzr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "455781424.000000000000000000",
      },
      balance: { denom: "uatone", amount: "455781424" },
    },
    {
      delegation: {
        delegator_address: "atone1mfje8fezn9mxc7dxnxzumr9kffhxtrn9xdggft",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300000000" },
    },
    {
      delegation: {
        delegator_address: "atone1m20wyugxnse56q2lfmm9txyk2fx39s6fq0l38r",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "580080200.000000000000000000",
      },
      balance: { denom: "uatone", amount: "580080200" },
    },
    {
      delegation: {
        delegator_address: "atone1mhkuzfws4xgcpkq252nv22vtdk93j3xdyjt28l",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "235000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "235000000" },
    },
    {
      delegation: {
        delegator_address: "atone1mmf9nqwjnsx7ghyt3aq45w59xdj0wt3kuudn8z",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "26200002.000000000000000000",
      },
      balance: { denom: "uatone", amount: "26200002" },
    },
    {
      delegation: {
        delegator_address: "atone1m7k3xsvucwd09qq2ylzdum8qhej879alwu2njc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5000000" },
    },
    {
      delegation: {
        delegator_address: "atone1uqs2uu4y2knl0gjk7uk0uxwd5ut4qgc9ty20p0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "102130617.000000000000000000",
      },
      balance: { denom: "uatone", amount: "102130617" },
    },
    {
      delegation: {
        delegator_address: "atone1uznr6lmlyx66er4dvw54c7e25pyr0qg3at2q67",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2000420178.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2000420178" },
    },
    {
      delegation: {
        delegator_address: "atone1ujepumwuauf5dv4jjc686f6xj4u29rtps0f5j6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2021268977.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2021268977" },
    },
    {
      delegation: {
        delegator_address: "atone1ukt0nsy3drwzmm08ane6zarvmjpts27p0cxdls",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "263508350.000000000000000000",
      },
      balance: { denom: "uatone", amount: "263508350" },
    },
    {
      delegation: {
        delegator_address: "atone1ucnzn86zszgjg8umz7ujzqvrcryxu46wjm3pfh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "230000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "230000000" },
    },
    {
      delegation: {
        delegator_address: "atone1uey077ygnn8zz78ce9g05vkzetf32er4vg50hj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "260417022.000000000000000000",
      },
      balance: { denom: "uatone", amount: "260417022" },
    },
    {
      delegation: {
        delegator_address: "atone1uevdz6s8j4l45n5ap3uzxcfjel9nfpmapf8790",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "131701038.000000000000000000",
      },
      balance: { denom: "uatone", amount: "131701038" },
    },
    {
      delegation: {
        delegator_address: "atone1umdjr3j2lcm69ly4tgy80ecs9qdpylhupuaj39",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "130000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "130000000" },
    },
    {
      delegation: {
        delegator_address: "atone1umukkcm6pee0t0vgatfwdpwl8kc092ccl8k8y0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "123000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "123000000" },
    },
    {
      delegation: {
        delegator_address: "atone1uavz6gkj7j75ek0sxd7cue6v8vkzzjtlv4cmrp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000448364.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000448364" },
    },
    {
      delegation: {
        delegator_address: "atone1ap0wsf2nyfkhht0ymqv6rmsm0ylj7vqhz7wtyl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "83500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "83500000" },
    },
    {
      delegation: {
        delegator_address: "atone1ayy0y3lex3wkhcp7y5y6s439nv3k78eg98anw9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "36471758.000000000000000000",
      },
      balance: { denom: "uatone", amount: "36471758" },
    },
    {
      delegation: {
        delegator_address: "atone1ayn8vxqju80mp923yrlyq9epurw5pwlt6jjrvc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "51000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "51000000" },
    },
    {
      delegation: {
        delegator_address: "atone1agqxzl2r9rn6xhpjlsn3g0xf55ap687va0lt0e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "469639573.000000000000000000",
      },
      balance: { denom: "uatone", amount: "469639573" },
    },
    {
      delegation: {
        delegator_address: "atone1at2aa07247avq2xuzeeswje5pxswr8a5frkfxg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "104000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "104000000" },
    },
    {
      delegation: {
        delegator_address: "atone1atasr6jurjqc9gjpy2cm0rvrwculkcqrxufa22",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "337000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "337000000" },
    },
    {
      delegation: {
        delegator_address: "atone1adnktzkssw5e2lmqlvz8vykfyh9y3xm8f65c72",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99748470.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99748470" },
    },
    {
      delegation: {
        delegator_address: "atone1a3858f250ve4t6rp9ef2svpr7sj20aaxwlg6yk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "258588237.000000000000000000",
      },
      balance: { denom: "uatone", amount: "258588237" },
    },
    {
      delegation: {
        delegator_address: "atone1ajde2jnuw6tzkskyyfx7sgt059kryzktf6f54a",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "38169248.000000000000000000",
      },
      balance: { denom: "uatone", amount: "38169248" },
    },
    {
      delegation: {
        delegator_address: "atone17prz2ww2r89w8ds3nhjt32lf7rwu37enzh3tac",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "450000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "450000000" },
    },
    {
      delegation: {
        delegator_address: "atone17zhqvql2khzue6kpmgmd9gz5m02j67vr53n24t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "680955641.000000000000000000",
      },
      balance: { denom: "uatone", amount: "680955641" },
    },
    {
      delegation: {
        delegator_address: "atone17yf8hsgezzhtl58gp3sqe7dcsj2wpqtzla05kh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2600000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2600000000" },
    },
    {
      delegation: {
        delegator_address: "atone17t908frmwcuqd83nsx3ydsxx6gfy6dzl9tzngw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "40700000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "40700000" },
    },
    {
      delegation: {
        delegator_address: "atone17w007ye3uy8x8d8ng7vguynzcxgea53dlxnl7a",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "114500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "114500000" },
    },
    {
      delegation: {
        delegator_address: "atone17w500e4efj3z8cu82ep5vt79ztszt9y3y2r5xh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "302367229.000000000000000000",
      },
      balance: { denom: "uatone", amount: "302367229" },
    },
    {
      delegation: {
        delegator_address: "atone17hr0kwjgklazhufht4sdpllmvm6047wd66z6s5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "275632342.000000000000000000",
      },
      balance: { denom: "uatone", amount: "275632342" },
    },
    {
      delegation: {
        delegator_address: "atone17er3w7ca3jxxm45r53vg5zcs86ulyks4mljajg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "82203622.000000000000000000",
      },
      balance: { denom: "uatone", amount: "82203622" },
    },
    {
      delegation: {
        delegator_address: "atone1lqnmymgw9pmhvf4nec26ykdfh0ccmdnzmy5jfx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "128985826.000000000000000000",
      },
      balance: { denom: "uatone", amount: "128985826" },
    },
    {
      delegation: {
        delegator_address: "atone1lx2zuc7ls0rw0jf89y9366fg7w5l9clgu74lj3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468382203.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468382203" },
    },
    {
      delegation: {
        delegator_address: "atone1lx0my7kk7uy75y68r602ga62l7n8cwawxv8gts",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "512403227.000000000000000000",
      },
      balance: { denom: "uatone", amount: "512403227" },
    },
    {
      delegation: {
        delegator_address: "atone1lft50ldy04u3szywhg38cnfpxfg7r548cx5ygl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1588480361.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1588480361" },
    },
    {
      delegation: {
        delegator_address: "atone1l2u72c838qe5yc2mn90an2cuqddehflm4hr07k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "554979322.000000000000000000",
      },
      balance: { denom: "uatone", amount: "554979322" },
    },
    {
      delegation: {
        delegator_address: "atone1ltdzw90gmtjslllkxz3a8mhw3lqyfuarl8z3vs",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "222100000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "222100000" },
    },
    {
      delegation: {
        delegator_address: "atone1ldg6m46nw06gntnnxq6llju42ffw0cn9ncpyw2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "39108599.000000000000000000",
      },
      balance: { denom: "uatone", amount: "39108599" },
    },
    {
      delegation: {
        delegator_address: "atone1lwnk6d7vuqhrma0q2vgcn5ezs5c4gtser28gme",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99954839.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99954839" },
    },
    {
      delegation: {
        delegator_address: "atone1l0tdzdyxsayestm8lu95xehgtc0s825pmq5rx5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "11251229084.000000000000000000",
      },
      balance: { denom: "uatone", amount: "11251229084" },
    },
    {
      delegation: {
        delegator_address: "atone1l4tw22eqltq70x2rmxgwcp99tg30kezmt9mapf",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500000000" },
    },
    {
      delegation: {
        delegator_address: "atone1led37kx2jrjjn9mxvtukngwk3cmpauzu9rjpry",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "11434398.000000000000000000",
      },
      balance: { denom: "uatone", amount: "11434398" },
    },
    {
      delegation: {
        delegator_address: "atone1leae7fx997hkfg88dsl0zshr9f64jcaa7pg6kz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1763000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1763000" },
    },
    {
      delegation: {
        delegator_address: "atone1l6zhscdzftcxwgrsdhgqy5sla6h0ddkhuc7uns",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100090250.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100090250" },
    },
    {
      delegation: {
        delegator_address: "atone1lu3nn4ml05h02hu2pncek40cu46fpdpjr4lwhn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100044818.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100044818" },
    },
    {
      delegation: {
        delegator_address: "atone1lul42lw2p4mv2mlte89cf4qnfg2jfduuz9syur",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1328882959.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1328882959" },
    },
    {
      delegation: {
        delegator_address: "atone1l7jdfh5ze7dzzyextvvk445dr9wy43qstt6xax",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "17366116.000000000000000000",
      },
      balance: { denom: "uatone", amount: "17366116" },
    },
    {
      delegation: {
        delegator_address: "atone1llcjm6rtra0yfa8s6754s4hs7vr06d2ledwrjv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "109000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "109000000" },
    },
  ];

  const txs1 = [
    {
      delegation: {
        delegator_address: "atone1qrfk6d2uus52ndfcl6s6fgds20phn0frnryvz5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2201921.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2201921" },
    },
    {
      delegation: {
        delegator_address: "atone1q9gp582gplzv53h24lfsfuppl89vk66uval4un",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "20748183.000000000000000000",
      },
      balance: { denom: "uatone", amount: "20748183" },
    },
    {
      delegation: {
        delegator_address: "atone1qgs7r0t2djqzvf8u33mhcw7hqq2jfc5hzzycm0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "293298239.000000000000000000",
      },
      balance: { denom: "uatone", amount: "293298239" },
    },
    {
      delegation: {
        delegator_address: "atone1q2833t82zthataz0v6zracejyu7xfqh7mu2sw4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "331423872.000000000000000000",
      },
      balance: { denom: "uatone", amount: "331423872" },
    },
    {
      delegation: {
        delegator_address: "atone1qtj0nyafpvrsztj2x0p9yap6a2evnl0kq9kx3k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "7675688.000000000000000000",
      },
      balance: { denom: "uatone", amount: "7675688" },
    },
    {
      delegation: {
        delegator_address: "atone1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6nyslal2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "14912100000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "14912100000" },
    },
    {
      delegation: {
        delegator_address: "atone1qdj33jvvj67vyyhh454q6u7u8scplhvq8l3ren",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000066966.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000066966" },
    },
    {
      delegation: {
        delegator_address: "atone1qs4eqtc0f28943s9q8jzcncr5pkmcgkf07lenq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "292300000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "292300000" },
    },
    {
      delegation: {
        delegator_address: "atone1qjxfq62d2wt3s3elra9v9zqxtjztk0qr8sasum",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "57300000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "57300000" },
    },
    {
      delegation: {
        delegator_address: "atone1q648z887yenz2gxkq4msa252nvp427tfsvh8hu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1947999984.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1947999984" },
    },
    {
      delegation: {
        delegator_address: "atone1qm0q9ec5ylrgz2sz78j53xnrfcsse74a23ad2g",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "396896250.000000000000000000",
      },
      balance: { denom: "uatone", amount: "396896250" },
    },
    {
      delegation: {
        delegator_address: "atone1qur9grvh29plr6pcyzl8rav7j95xghtl6fflzk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "81000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "81000000" },
    },
    {
      delegation: {
        delegator_address: "atone1quun3k4usk4gyad8drug4j9rmsmng30as3aty6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1q7x0hxpcjasvtv0cn7h0tqf47fp06ct2vrnm59",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "46000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "46000000" },
    },
    {
      delegation: {
        delegator_address: "atone1pz0gys67zv6dl0g69dree3yees48plzun5xcek",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "769860000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "769860000" },
    },
    {
      delegation: {
        delegator_address: "atone1pz6px85mn3a4m4wsnfq4syuknl9s48fac33ncr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "149758180.000000000000000000",
      },
      balance: { denom: "uatone", amount: "149758180" },
    },
    {
      delegation: {
        delegator_address: "atone1p9hsmt9z6pt008v9rdfq5vv3pkqvnkrle5jqgt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "50200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "50200000" },
    },
    {
      delegation: {
        delegator_address: "atone1pfycqdd9yacgcn7hqd890s3d5cgu0v5r8s6wn4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1p34krywk2xt67yz0ju4c5dzz5u6lurs0cw83s3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "14990695.000000000000000000",
      },
      balance: { denom: "uatone", amount: "14990695" },
    },
    {
      delegation: {
        delegator_address: "atone1pnc97f6vyvgagq7za0u62ln48akk2nxmfnpwek",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "134849377.000000000000000000",
      },
      balance: { denom: "uatone", amount: "134849377" },
    },
    {
      delegation: {
        delegator_address: "atone1p587eza5ua9qxt4q205jalhk4vq3cuhf7shm6d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "204000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "204000000" },
    },
    {
      delegation: {
        delegator_address: "atone1p5esmskdq2vsh4yn5xxul2m3gkg3pmar3y6dp0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "135324331.000000000000000000",
      },
      balance: { denom: "uatone", amount: "135324331" },
    },
    {
      delegation: {
        delegator_address: "atone1p5e65khv540a2v7747nfktgxe5u78eelkcfw0u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ph402ry55q8ravgl2a9z4zctvrcmz00vtjychr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000" },
    },
    {
      delegation: {
        delegator_address: "atone1pemt63zctpxtmarevrjh0mwrv9mapnpyjwradt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "21989936.000000000000000000",
      },
      balance: { denom: "uatone", amount: "21989936" },
    },
    {
      delegation: {
        delegator_address: "atone1p6s3nqc8rr02j5n9qhtmt7zkf4ur2j0vf04p5p",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468938493.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468938493" },
    },
    {
      delegation: {
        delegator_address: "atone1pme8tquascj9t2kay0qxh42f688x5cmrl3qhze",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "301641371.000000000000000000",
      },
      balance: { denom: "uatone", amount: "301641371" },
    },
    {
      delegation: {
        delegator_address: "atone1pufy8qm4qsnxxapugc3l2vvmtpp0vk0suuqlp6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "299175191.000000000000000000",
      },
      balance: { denom: "uatone", amount: "299175191" },
    },
    {
      delegation: {
        delegator_address: "atone1pa56a9fg5jhxrduru275vn2y7fpkxmx6rtg9mm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "113268482.000000000000000000",
      },
      balance: { denom: "uatone", amount: "113268482" },
    },
    {
      delegation: {
        delegator_address: "atone1pl5jtmhlkmvgjv9qhgeucw6u4qxtxp6kvw8wk3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "38000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "38000000" },
    },
    {
      delegation: {
        delegator_address: "atone1zq5rkgsmaacw59ququcxfypftyukhn63h0qpr6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1zza8552zc92yceaufpjnepdh2cu55xvjtxyx78",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "370001.000000000000000000",
      },
      balance: { denom: "uatone", amount: "370001" },
    },
    {
      delegation: {
        delegator_address: "atone1zrlx4fwpwyx25k4mwraru9mte2wuzd3p3egt4k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "85710551.000000000000000000",
      },
      balance: { denom: "uatone", amount: "85710551" },
    },
    {
      delegation: {
        delegator_address: "atone1z9z5t7fcn9257prq2rq7tua9sghxyat23nsky2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10052902.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10052902" },
    },
    {
      delegation: {
        delegator_address: "atone1zxprgrhmf6zwkvrwmk08kgtlhu4ptk6sry58r3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000310644.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000310644" },
    },
    {
      delegation: {
        delegator_address: "atone1zgs5nnwhpxg4sjyw7xerm4humluxua90ejay73",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ztydpl2gges4u38rm7afs9rlmajk5sq6m2fkmu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101508897.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101508897" },
    },
    {
      delegation: {
        delegator_address: "atone1zdexhg5hnu7tyl0x36d0vmwfu364jr2snq6hfz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101000000" },
    },
    {
      delegation: {
        delegator_address: "atone1z0dg5vqjjeg7l4fhx9xarh7p7wcq2z4h7tfeq0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2100000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2100000" },
    },
    {
      delegation: {
        delegator_address: "atone1zsygz8es37kyfnhsg3xp59d43re4tjtq6ypaxc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "299951150.000000000000000000",
      },
      balance: { denom: "uatone", amount: "299951150" },
    },
    {
      delegation: {
        delegator_address: "atone1zsv6cvpd9y86hhxzatpgzu6ymxdeuc5njypdru",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "616862343.000000000000000000",
      },
      balance: { denom: "uatone", amount: "616862343" },
    },
    {
      delegation: {
        delegator_address: "atone1zj04hzjgvdeqt3rl3ym4phf999hh89uqv6lsnx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1zjldm3w2vynd5flrypty4hk7n9sypcqa943jlz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1znaj4lqyds2jsg9tpmwt59r0mxn85at4fgdqed",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000" },
    },
    {
      delegation: {
        delegator_address: "atone1zeqvfv3sd20jjltcv2gvnfwt7lcqcs0dp4t05d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "9000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "9000000" },
    },
    {
      delegation: {
        delegator_address: "atone1z692deslv3tgqcf7yjzu6l0x5p23jzw50vsdv5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200726797.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200726797" },
    },
    {
      delegation: {
        delegator_address: "atone1zlmdnd2uem5kxx7rdmkfnq2wl5cvfjxuktnvsh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1rxwnxskx7w9jjecfzjve35juw3qxughs9nwku7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1110000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1110000000" },
    },
    {
      delegation: {
        delegator_address: "atone1rxhswdq9852jldxvfxs53x3aql9t927kekln06",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "296187846.000000000000000000",
      },
      balance: { denom: "uatone", amount: "296187846" },
    },
    {
      delegation: {
        delegator_address: "atone1rfvtz0f7wkcj62t648s3k20ecjh7frn90nyys0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "3810223.000000000000000000",
      },
      balance: { denom: "uatone", amount: "3810223" },
    },
    {
      delegation: {
        delegator_address: "atone1rf0s9p99t3m0vnwcf0jy98hwedlrul90tsvp4s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "4003480821.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4003480821" },
    },
    {
      delegation: {
        delegator_address: "atone1rf3k6z6ur35djze3zt0zzk6lvm86cn2mstquee",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1065338.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1065338" },
    },
    {
      delegation: {
        delegator_address: "atone1r2nujddqfxvw3nuvdfgsnskxgrdhpfz76a0msu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1020000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1020000000" },
    },
    {
      delegation: {
        delegator_address: "atone1rta9aa5dzsr3kvcf2x8x8zeycd0yw4stqw7v2y",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "999964173.000000000000000000",
      },
      balance: { denom: "uatone", amount: "999964173" },
    },
    {
      delegation: {
        delegator_address: "atone1r05pkm6e6pc39629dmkmravse8v9h3gvjvy0ev",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5090000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5090000" },
    },
    {
      delegation: {
        delegator_address: "atone1rnht2un7dhe9x0450tkd9uezs3ts43sldn7msn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "18992048.000000000000000000",
      },
      balance: { denom: "uatone", amount: "18992048" },
    },
    {
      delegation: {
        delegator_address: "atone1rk8f8ye8rjl43aktg8g2m3u36vp2kmwhm9twt2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "25700000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "25700000" },
    },
    {
      delegation: {
        delegator_address: "atone1rhyz30vg0c6ed69rmz43h35wn92ucksrclvndw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2534656947.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2534656947" },
    },
    {
      delegation: {
        delegator_address: "atone1rhgsg2qedccgwrpws524tagm4v7rlpdre0m4kz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "28216547118.000000000000000000",
      },
      balance: { denom: "uatone", amount: "28216547118" },
    },
    {
      delegation: {
        delegator_address: "atone1rcv6x4e0pddxulx7525uf468ttk9pedm3967f3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "756842208.000000000000000000",
      },
      balance: { denom: "uatone", amount: "756842208" },
    },
    {
      delegation: {
        delegator_address: "atone1r65lzzqauzca4ut8azectvv4dts8jy0hnhn074",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206623715.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206623715" },
    },
    {
      delegation: {
        delegator_address: "atone1r6knf70m2dlfljh9aqk87ldwvxshajj34ufn5m",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "13530949.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13530949" },
    },
    {
      delegation: {
        delegator_address: "atone1rmtcl7m2pz63cgsvfxayuh54drk9sa9lf5mvvq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "45442247.000000000000000000",
      },
      balance: { denom: "uatone", amount: "45442247" },
    },
    {
      delegation: {
        delegator_address: "atone1rudl9ygrudq66lwkf3j02thecfkmzkvf5ww5vl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "51090195.000000000000000000",
      },
      balance: { denom: "uatone", amount: "51090195" },
    },
    {
      delegation: {
        delegator_address: "atone1rlfgzevqezmgx6j8l9e037zt6f53dtxaxkyxjz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "111820912.000000000000000000",
      },
      balance: { denom: "uatone", amount: "111820912" },
    },
    {
      delegation: {
        delegator_address: "atone1rlsdrt7m2aat7cvjvks00n5srq5khllq3adgs9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2040774406.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2040774406" },
    },
    {
      delegation: {
        delegator_address: "atone1rlmkgp4htnlvfkcq9n6hpl702fdsr4q30j4jrg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206174365.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206174365" },
    },
    {
      delegation: {
        delegator_address: "atone1yq7n7f6ekn8rcxmlc033ea58kw5z0ly3w4ay8w",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000004421.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000004421" },
    },
    {
      delegation: {
        delegator_address: "atone1yzzxtvaus8kd0qhc7fvyuyrudnjqwzg4e7vajk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1609925.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1609925" },
    },
    {
      delegation: {
        delegator_address: "atone1yyxsxmf635pxvm0hlfucdegprh55xsxpdc56fe",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000010026.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000010026" },
    },
    {
      delegation: {
        delegator_address: "atone1yyvdwarlwt4sz6qslzs5sx5jlzu6guajpduunn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "623080770.000000000000000000",
      },
      balance: { denom: "uatone", amount: "623080770" },
    },
    {
      delegation: {
        delegator_address: "atone1y988ug894gwcuxesesnf4zxa5220qkutewtd8h",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1067490.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1067490" },
    },
    {
      delegation: {
        delegator_address: "atone1yxhwgqaezqqqnfx6djukd8cl3awq5angw0unr3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10440487.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10440487" },
    },
    {
      delegation: {
        delegator_address: "atone1ysthp74n2wxt4flmzyxrhza8rvxzr9mclfes0v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "742779765.000000000000000000",
      },
      balance: { denom: "uatone", amount: "742779765" },
    },
    {
      delegation: {
        delegator_address: "atone1y5jjkfkxzwr7dackdn9d6cmxc9xvtzdhy7hcy2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "213220695.000000000000000000",
      },
      balance: { denom: "uatone", amount: "213220695" },
    },
    {
      delegation: {
        delegator_address: "atone1y4m793g8n2sldvtnaxztl2usqqerhd99h7l00j",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "208181783.000000000000000000",
      },
      balance: { denom: "uatone", amount: "208181783" },
    },
    {
      delegation: {
        delegator_address: "atone1ykqpluuf7mxrsfxc66pw9044eacwq6uak04jlt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "120500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "120500000" },
    },
    {
      delegation: {
        delegator_address: "atone1ykyk43nxapm48n60ft0sr8ndrg8deu9p2d5ckt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2330297678.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2330297678" },
    },
    {
      delegation: {
        delegator_address: "atone1yclrw2qxzmyjxjry0fwusdurhkqgdag8j27zlq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "13501286.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13501286" },
    },
    {
      delegation: {
        delegator_address: "atone19r4ey2gg8k3v8mdya3h8wg2tm0xuuawkpt836r",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone19y00m48c55re3hk8xskauvq9ny9gpftwquw98k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "12676285.000000000000000000",
      },
      balance: { denom: "uatone", amount: "12676285" },
    },
    {
      delegation: {
        delegator_address: "atone19g9flltdr2ahajrkefdqxc34h5uc532d4xgk5s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "751000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "751000000" },
    },
    {
      delegation: {
        delegator_address: "atone1923utg7e27z6cztq7ky89hx5n5k0awkhfv0l50",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "514981713.000000000000000000",
      },
      balance: { denom: "uatone", amount: "514981713" },
    },
    {
      delegation: {
        delegator_address: "atone19dej9nex9sj3424eernwjs83pw75rt3k25hv90",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "292000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "292000000" },
    },
    {
      delegation: {
        delegator_address: "atone193d2qsuk25e9mx0quan2msl2y9fqtt0gw6vxe9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "565353012.000000000000000000",
      },
      balance: { denom: "uatone", amount: "565353012" },
    },
    {
      delegation: {
        delegator_address: "atone19jhlpyjx3p4kqh347323azjuhnnew95r0a5z2u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "288000061.000000000000000000",
      },
      balance: { denom: "uatone", amount: "288000061" },
    },
    {
      delegation: {
        delegator_address: "atone195uet0szm7hwaps2k99ywscsdl7hjcy8k7qeuh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000080127.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000080127" },
    },
    {
      delegation: {
        delegator_address: "atone194sg0pj6p5nk7dpnuh7wwm0evlwhw8zyswmmdd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000080041.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000080041" },
    },
    {
      delegation: {
        delegator_address: "atone19hy5d3ha8v8krsgu34angnephkfzvtg9sxps9p",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "105529601.000000000000000000",
      },
      balance: { denom: "uatone", amount: "105529601" },
    },
    {
      delegation: {
        delegator_address: "atone19e4l3hnkzp0wzz2zmngpkqtdwt49zlgpw97sey",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "49299055.000000000000000000",
      },
      balance: { denom: "uatone", amount: "49299055" },
    },
    {
      delegation: {
        delegator_address: "atone19uga3gpvacvlyuv2mf027n4xqrv4tssexz3wx7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "461408431.000000000000000000",
      },
      balance: { denom: "uatone", amount: "461408431" },
    },
    {
      delegation: {
        delegator_address: "atone1xw2wsvpx0zc6a7gldl5rklq6qn4egv5w273xza",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "20.000000000000000000",
      },
      balance: { denom: "uatone", amount: "20" },
    },
    {
      delegation: {
        delegator_address: "atone1xsvm6ta76z77ydws4d0dcrrcm3syhf5f34xqe2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "134380767.000000000000000000",
      },
      balance: { denom: "uatone", amount: "134380767" },
    },
    {
      delegation: {
        delegator_address: "atone1xs7hps4auv5ksa9a2vuk90v07agx8nlxn6g8xa",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "297265529.000000000000000000",
      },
      balance: { denom: "uatone", amount: "297265529" },
    },
    {
      delegation: {
        delegator_address: "atone1x6lk0x27572prmys8xfyxqmj4vv95narsf7kgr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5093042.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5093042" },
    },
    {
      delegation: {
        delegator_address: "atone1xupjdffnax8tkuzypjqswhz906lhljg4dk8wsg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "207576086.000000000000000000",
      },
      balance: { denom: "uatone", amount: "207576086" },
    },
    {
      delegation: {
        delegator_address: "atone18qn5q83vh6c5nnz7nlnrcgpxjac8plq833v00f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "150314367.000000000000000000",
      },
      balance: { denom: "uatone", amount: "150314367" },
    },
    {
      delegation: {
        delegator_address: "atone18rez2m9ffwuku0q4q8t5cjz4rpgku4vuvzjnn6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "205274787.000000000000000000",
      },
      balance: { denom: "uatone", amount: "205274787" },
    },
    {
      delegation: {
        delegator_address: "atone18yvdl9kmd32qk86e5xekfque3kx8dq8cycwtfw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1083820.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1083820" },
    },
    {
      delegation: {
        delegator_address: "atone18ywwgc84luq0u8evna62hasdeyagzenad55sma",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "273886593.000000000000000000",
      },
      balance: { denom: "uatone", amount: "273886593" },
    },
    {
      delegation: {
        delegator_address: "atone188pjlw6q8xtfhuzfgzstux8vg379na680h85y4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300131896.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300131896" },
    },
    {
      delegation: {
        delegator_address: "atone18gxg34cp8r4gmsm5vgkaafg4fw4gzfur3xj7cx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200033581.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200033581" },
    },
    {
      delegation: {
        delegator_address: "atone18gd7nsv2qrx9rv8n0gh37l0x8qmwnrhad9r40u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1722000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1722000000" },
    },
    {
      delegation: {
        delegator_address: "atone18g7jfkn3ftmy79f7fy4qmxrg56t9m0v33qzvuh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2000000" },
    },
    {
      delegation: {
        delegator_address: "atone18t980er03tr8rzv24xswufqzldrf69t35vl8lw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "47057689.000000000000000000",
      },
      balance: { denom: "uatone", amount: "47057689" },
    },
    {
      delegation: {
        delegator_address: "atone18d2ge2rnttunzas75ygkjl5s8tvetevsyqjlpc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "304512848.000000000000000000",
      },
      balance: { denom: "uatone", amount: "304512848" },
    },
    {
      delegation: {
        delegator_address: "atone18nf84jgwkqypaplz45xyf3yegpu4vvhznf9gn4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "250872257.000000000000000000",
      },
      balance: { denom: "uatone", amount: "250872257" },
    },
    {
      delegation: {
        delegator_address: "atone18n4fk0rm4u25lqp38k5xxnepgy7rgge748cdzj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "650000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "650000" },
    },
    {
      delegation: {
        delegator_address: "atone185fkw70ntyc0vlvrf30grsxurfw2d7cplyp8ep",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468824166.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468824166" },
    },
    {
      delegation: {
        delegator_address: "atone1850rdjq4sf488sad4qsj64sj2s8h53z0hhu7q7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000002488.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000002488" },
    },
    {
      delegation: {
        delegator_address: "atone184xze0xvsngwgl3nmu8s6qrns02v0epn6eavjp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "208185326.000000000000000000",
      },
      balance: { denom: "uatone", amount: "208185326" },
    },
    {
      delegation: {
        delegator_address: "atone18kvjxrrp935gss49xpuqkn285m64zs9vjp0fnm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "159860000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "159860000" },
    },
    {
      delegation: {
        delegator_address: "atone18crvw4qkw8ju6s9jqyw6w3wx5ghh3unvd6zgw5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "630126243.000000000000000000",
      },
      balance: { denom: "uatone", amount: "630126243" },
    },
    {
      delegation: {
        delegator_address: "atone18ank35aua8ftetpmvcsxwdqy4pheltee3wzc2f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "218000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "218000000" },
    },
    {
      delegation: {
        delegator_address: "atone18l3v435q04cmxn0ec45r3vwxdfl3har3ntywp2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1gzdgqfz9a5hpm9mp6v08d2cejcukup3g5n6c85",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "56000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "56000000" },
    },
    {
      delegation: {
        delegator_address: "atone1gzwmgc096jgunp47tnn7j7ulzgc97ce8s82dzw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1796538135.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1796538135" },
    },
    {
      delegation: {
        delegator_address: "atone1gxa40yjrgrlt2ffqka8cgycxnhlq9kd2f4u93y",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000330102.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000330102" },
    },
    {
      delegation: {
        delegator_address: "atone1g8c56wgcxlgy9aeq3hm82vs8t6zyw8cs7sv63y",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101000000" },
    },
    {
      delegation: {
        delegator_address: "atone1g238t79lec906hgnvpnyu4mywltl0kd66uy95g",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "201896667.000000000000000000",
      },
      balance: { denom: "uatone", amount: "201896667" },
    },
    {
      delegation: {
        delegator_address: "atone1gtaegw4m2n7ww538fn3chnmnda5mqe73cx7dqg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "38000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "38000000" },
    },
    {
      delegation: {
        delegator_address: "atone1gd6twrfw7p04797dznh0u98q9ykc7d240qac6a",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "229883388.000000000000000000",
      },
      balance: { denom: "uatone", amount: "229883388" },
    },
    {
      delegation: {
        delegator_address: "atone1gwshmuwm8ny33x3sq6ncvajf2d8sd450uksre5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2900000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2900000" },
    },
    {
      delegation: {
        delegator_address: "atone1gw3zv7exwdh7txlgwm3wnn3xwaj2z9eh7e86d8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1043198.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1043198" },
    },
    {
      delegation: {
        delegator_address: "atone1gwh42aqnppx7d8lxuhkafh86ew6f0wrj5nwul8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "21805088.000000000000000000",
      },
      balance: { denom: "uatone", amount: "21805088" },
    },
    {
      delegation: {
        delegator_address: "atone1g3uz8nkzq9zrdemjj82wvl5w74u9e8yv5zyxus",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "170099.000000000000000000",
      },
      balance: { denom: "uatone", amount: "170099" },
    },
    {
      delegation: {
        delegator_address: "atone1g37mcad2p7w4d8zes77mly0tawrmhvamjkdp22",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000200000" },
    },
    {
      delegation: {
        delegator_address: "atone1gn6w54uge5drhx0gskdgva4372d8guxh0wyz6n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2445000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2445000000" },
    },
    {
      delegation: {
        delegator_address: "atone1gnasfq4qq9kuwphp7ytq50pg6f4pzqs4gqu73d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "459461868.000000000000000000",
      },
      balance: { denom: "uatone", amount: "459461868" },
    },
    {
      delegation: {
        delegator_address: "atone1g6lhftnmfh8rxg036facaa72jcypf6rtjhw0zu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "207795287.000000000000000000",
      },
      balance: { denom: "uatone", amount: "207795287" },
    },
    {
      delegation: {
        delegator_address: "atone1gmldc4msum7fer0mp3dq4u9k3wnemw8q5d4jp5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "198806014.000000000000000000",
      },
      balance: { denom: "uatone", amount: "198806014" },
    },
    {
      delegation: {
        delegator_address: "atone1frwewwrswegyuxsz800zeaqesq5k678xe5hd9p",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "900000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "900000000" },
    },
    {
      delegation: {
        delegator_address: "atone1f9dge7nrtrlxg24qekrwk24nxzmzlappuw8q39",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "221993564.000000000000000000",
      },
      balance: { denom: "uatone", amount: "221993564" },
    },
    {
      delegation: {
        delegator_address: "atone1f8qxs3n4pstp3ddfzt7773w9wl3c6c04nj7r0d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468824508.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468824508" },
    },
    {
      delegation: {
        delegator_address: "atone1fgngf5pka7m6u68zmdllds7gna7jttw0j27eyz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "201725280.000000000000000000",
      },
      balance: { denom: "uatone", amount: "201725280" },
    },
    {
      delegation: {
        delegator_address: "atone1fs50772f762vxnz2w5k5t3utllu8mymw8w0092",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1963332.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1963332" },
    },
    {
      delegation: {
        delegator_address: "atone1f3rayhc3nkgr287p2md63dg49hr3ykvqmxyrt7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10000000" },
    },
    {
      delegation: {
        delegator_address: "atone1fjuq5uyjkhtcj09alwgtj45qv7q6lw47x4sjkv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "118188431.000000000000000000",
      },
      balance: { denom: "uatone", amount: "118188431" },
    },
    {
      delegation: {
        delegator_address: "atone1f44qd2yw4f007dqddltptaqyqly9qs05n8edum",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "251000041.000000000000000000",
      },
      balance: { denom: "uatone", amount: "251000041" },
    },
    {
      delegation: {
        delegator_address: "atone1fha8ltkqccqxquvhatceu2saqaksmzls405yme",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "650000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "650000" },
    },
    {
      delegation: {
        delegator_address: "atone1fcygwdcfwdnt8gpuv0rr5j6llnexsw6655j42g",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "665957002.000000000000000000",
      },
      balance: { denom: "uatone", amount: "665957002" },
    },
    {
      delegation: {
        delegator_address: "atone1fe49k5nn78tjzh3rqazteynq6sfflq6r55q6dn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1082967.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1082967" },
    },
    {
      delegation: {
        delegator_address: "atone1f6gehrngp29zf7nstklu6732nrwdykaajg8muy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101790408.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101790408" },
    },
    {
      delegation: {
        delegator_address: "atone1f6w3gudyw02vg7jql2kqyte9us8qa5kxfpkwva",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500164791.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500164791" },
    },
    {
      delegation: {
        delegator_address: "atone1f6klmvl7ftqntv2mpcvnhujf3vs2xl2z9dawa7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "94419022.000000000000000000",
      },
      balance: { denom: "uatone", amount: "94419022" },
    },
    {
      delegation: {
        delegator_address: "atone1fud5k0utxxjm27je5t72h82tyten72acpns7n3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500000000" },
    },
    {
      delegation: {
        delegator_address: "atone1fuuuvgwsrrf3zy46azu22kzrskww9fteswr4pa",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "150000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "150000" },
    },
    {
      delegation: {
        delegator_address: "atone12pjgwmk672r98fhjrpxg9xz2j29vmu9r472x4s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1067098314.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1067098314" },
    },
    {
      delegation: {
        delegator_address: "atone12ydrj8eml4wq2cvva7s502ge2w5u7qh5n736c9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "6873005527.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6873005527" },
    },
    {
      delegation: {
        delegator_address: "atone122xq6xe80jk5zkhul6zzh80n2k69yr2eh34ht4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "600000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "600000000" },
    },
    {
      delegation: {
        delegator_address: "atone12tdud9qmqzu0vhu5r7t0thvcmjtnx0j39zdgr6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "134445578.000000000000000000",
      },
      balance: { denom: "uatone", amount: "134445578" },
    },
    {
      delegation: {
        delegator_address: "atone12v736nuytn9rjl5dpqtfxzdg40vtlwqqwcx2h8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "643688593.000000000000000000",
      },
      balance: { denom: "uatone", amount: "643688593" },
    },
    {
      delegation: {
        delegator_address: "atone12dz0vh9gk50wsjc7jvefs7l8fafraalc7stqkl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "643684805.000000000000000000",
      },
      balance: { denom: "uatone", amount: "643684805" },
    },
    {
      delegation: {
        delegator_address: "atone12w932cswf7lp9q2lfmwz2nuhjy4uawqw6va96a",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "133000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "133000000" },
    },
    {
      delegation: {
        delegator_address: "atone124rxmmffm329znr5ww8tats35gjq2jzj3m2f8e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500200000" },
    },
    {
      delegation: {
        delegator_address: "atone12hw7ms48ln4jawlehvhsl2j5e4gvaq8hhdth64",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "4000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4000000" },
    },
    {
      delegation: {
        delegator_address: "atone12c2f2rd0v27ceds29pz4whpumqpxnhk7udqn5s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "675750000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "675750000" },
    },
    {
      delegation: {
        delegator_address: "atone12c6y9dm97r05cu2ewjjw0gm4f6y0pnsm3nwau7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "214000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "214000000" },
    },
    {
      delegation: {
        delegator_address: "atone12erey3cnxl700ggcrfdmu2llhmjwn0f96xuede",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "31000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "31000000" },
    },
    {
      delegation: {
        delegator_address: "atone12ec47afsm5w9mrm8drn9u48dq29tzgkva2c0rk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200000" },
    },
    {
      delegation: {
        delegator_address: "atone12el8k6fz3n80mv2czz6apdxplsnpxznawsllcl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "6000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1tykt53m3lgzsdcvux0n9zsk3rqtpppawy355yl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "111000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "111000000" },
    },
    {
      delegation: {
        delegator_address: "atone1tyu6854q0vlsqpmvaasr9043cwfrtmu4494s50",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "231000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "231000000" },
    },
    {
      delegation: {
        delegator_address: "atone1tg3fa0td5gkzvq94vjefhxu7llyqj3mvnqtm9l",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "739000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "739000000" },
    },
    {
      delegation: {
        delegator_address: "atone1t2vtt4qzhcgg04czu327vaxz0v5drg2w7dzugd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "150384276.000000000000000000",
      },
      balance: { denom: "uatone", amount: "150384276" },
    },
    {
      delegation: {
        delegator_address: "atone1td0nm484l83c4yp3pna9h03jg34wfwrz04weml",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "294001118.000000000000000000",
      },
      balance: { denom: "uatone", amount: "294001118" },
    },
    {
      delegation: {
        delegator_address: "atone1tk9ecdjc59ek3r3dsqe83026jxvtlr0kst3j2z",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468382015.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468382015" },
    },
    {
      delegation: {
        delegator_address: "atone1tkvkxz9fqrcd45zp3pxhtz7fhzmxgm5vp4cx33",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206468287.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206468287" },
    },
    {
      delegation: {
        delegator_address: "atone1tufwp6sgrnh49dme3hs62dafvckmtfaefff0mv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "150826462.000000000000000000",
      },
      balance: { denom: "uatone", amount: "150826462" },
    },
    {
      delegation: {
        delegator_address: "atone1tuwwym47e68v2cg93j20esjc65hmejk749tzkl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "205252665.000000000000000000",
      },
      balance: { denom: "uatone", amount: "205252665" },
    },
    {
      delegation: {
        delegator_address: "atone1t7gdzehwj5snn8hqg97dejuzj7eym42azeyswe",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000080110.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000080110" },
    },
    {
      delegation: {
        delegator_address: "atone1v9hnnh7qtv8x0sycn8ka064xqg4hw7jzzptjj7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "90877387.000000000000000000",
      },
      balance: { denom: "uatone", amount: "90877387" },
    },
    {
      delegation: {
        delegator_address: "atone1vfakz5sxes5ccxx24l8rwsvm5rnzl22jgw66k4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1vv82mgf9s2uvjre4449ugr3ljyfqdpzh2puwrt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1vd359h8vnd4sy2azrpy8wkj57fg594jerls3zj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "74767031.000000000000000000",
      },
      balance: { denom: "uatone", amount: "74767031" },
    },
    {
      delegation: {
        delegator_address: "atone1vdc8gkzgr60s079fwfpczk708spgwqtgtlv48w",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "137562172.000000000000000000",
      },
      balance: { denom: "uatone", amount: "137562172" },
    },
    {
      delegation: {
        delegator_address: "atone1vw9zdq0yxuazrsa5hsksd5apdsme2etvr8fgd2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000080273.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000080273" },
    },
    {
      delegation: {
        delegator_address: "atone1vjymkucluukngrzyp3ykkdrj6mr6h7y0jef9h5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300000000" },
    },
    {
      delegation: {
        delegator_address: "atone1vkngvnelw4tgahyn20sr0kvk9jq8wrfefvh2lr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "277012494.000000000000000000",
      },
      balance: { denom: "uatone", amount: "277012494" },
    },
    {
      delegation: {
        delegator_address: "atone1vhpq7gmysjasngv28r0z3uxvy5s269jk6ck699",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "13090688.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13090688" },
    },
    {
      delegation: {
        delegator_address: "atone1dqf5rg4kccq558f29qa02wurmcmrapchm6xkhf",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1999964485.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1999964485" },
    },
    {
      delegation: {
        delegator_address: "atone1dpudyhk8ak74s830z4ewgxdk504laufqqew8lj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10000000" },
    },
    {
      delegation: {
        delegator_address: "atone1dzf04eymc4sf87evqxc87n8x6w75f867hcstty",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "12522926.000000000000000000",
      },
      balance: { denom: "uatone", amount: "12522926" },
    },
    {
      delegation: {
        delegator_address: "atone1d93ggvd6t3qnna3w280ax9g6j9jzr69envan9n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "259000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "259000000" },
    },
    {
      delegation: {
        delegator_address: "atone1dx6r0dy0admj0lc35cukwdgjnr8z0wrz4d3q4e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "32171968.000000000000000000",
      },
      balance: { denom: "uatone", amount: "32171968" },
    },
    {
      delegation: {
        delegator_address: "atone1dxlzv3nym93x72t6d5rtaqzre7skke3nk3nzwg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000009071.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000009071" },
    },
    {
      delegation: {
        delegator_address: "atone1df25fj5wnmgla8f26fqq76mm9ly8hcv5wf7nd7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "144262.000000000000000000",
      },
      balance: { denom: "uatone", amount: "144262" },
    },
    {
      delegation: {
        delegator_address: "atone1d2cu9qgn9kuhne0ljtjpwzd08tjzcr36eacj0u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206195483.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206195483" },
    },
    {
      delegation: {
        delegator_address: "atone1d27jtvp26d2ul4lwy6th9mqmwxvp68pje4lzj2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "999962074.000000000000000000",
      },
      balance: { denom: "uatone", amount: "999962074" },
    },
    {
      delegation: {
        delegator_address: "atone1dtd5wc903mfgsw9sl7cr6x8h0xc73afnlhdxvy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "52000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "52000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ddg9tjkf0vmd3t2mdqpxk2pkk6zssvduphf7js",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "730000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "730000000" },
    },
    {
      delegation: {
        delegator_address: "atone1d06u6y3uaud037prwuhyc6r4g0znyc9rtjcuzt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1005413937.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1005413937" },
    },
    {
      delegation: {
        delegator_address: "atone1d076ek2e7m24jskmlgamv7kut7df892tcsnle9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "312000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "312000000" },
    },
    {
      delegation: {
        delegator_address: "atone1dj254eq6f7xgwltre6jdns582a94phsjvprcfx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "680000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "680000" },
    },
    {
      delegation: {
        delegator_address: "atone1dn54g3fpsp853jmux297fpj89uufn3zxgmuqfh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "254863987.000000000000000000",
      },
      balance: { denom: "uatone", amount: "254863987" },
    },
    {
      delegation: {
        delegator_address: "atone1dkqem467z8l7vjktx7ldg93r82e056qs0m3skm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "779900000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "779900000" },
    },
    {
      delegation: {
        delegator_address: "atone1de88sp2h3955ktrjgnm0jkhy8dttsgdzmnu3s9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "559521402.000000000000000000",
      },
      balance: { denom: "uatone", amount: "559521402" },
    },
    {
      delegation: {
        delegator_address: "atone1dukn56adq5pk7r0r3y6zgvur7epyg2k7nfv9h5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "120000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "120000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wqmkny5hu632yxv6u7ca634p3ewuxq0ph7ewrq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "202550206.000000000000000000",
      },
      balance: { denom: "uatone", amount: "202550206" },
    },
    {
      delegation: {
        delegator_address: "atone1wpxr45kyyzzuaz6s8h7g33d0sjxu9d00u0kzxs",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "550100000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "550100000" },
    },
    {
      delegation: {
        delegator_address: "atone1wr0mqeyea45u9av63srtvgr553nyg6l9v8kd2u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "56881675.000000000000000000",
      },
      balance: { denom: "uatone", amount: "56881675" },
    },
    {
      delegation: {
        delegator_address: "atone1w9gcxhaxj8f0rjlkwwu36e7elj9aqmj3txzhp8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wxv8jnx4tnr5rr5uwnx05g3s74tcpzaj06y83e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2403651544.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2403651544" },
    },
    {
      delegation: {
        delegator_address: "atone1wvrn346lgfsg4zcaacjfgkzq0wdsvds45hdars",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wd0867jyazkkuepypfsupnunygv38cg8dn7kmp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468939022.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468939022" },
    },
    {
      delegation: {
        delegator_address: "atone1wwg9r2s99ca9esdvugg6w03zlatv6kprjjhtt2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "900000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "900000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wwf8fsyr3xj8a84k5qkf0tkmvq8gmhg3f627pw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "117147693.000000000000000000",
      },
      balance: { denom: "uatone", amount: "117147693" },
    },
    {
      delegation: {
        delegator_address: "atone1wn33dw4upqvtgz70xg264j68026426ahzv9gpn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "303000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "303000000" },
    },
    {
      delegation: {
        delegator_address: "atone1w64nk0hmjelradw68twzs8zngk253y3g27s0sr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "830354812.000000000000000000",
      },
      balance: { denom: "uatone", amount: "830354812" },
    },
    {
      delegation: {
        delegator_address: "atone1watcl6uwglas3zumlkz8se0j33zzt6sknd2lxd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "293000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "293000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wlg3r97try92fgvvt5puntmekacwqjep6eve29",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "204577302.000000000000000000",
      },
      balance: { denom: "uatone", amount: "204577302" },
    },
    {
      delegation: {
        delegator_address: "atone10q8z93hgpnl4h0fxjye58erz4gp66v3qlh4csd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "78965124.000000000000000000",
      },
      balance: { denom: "uatone", amount: "78965124" },
    },
    {
      delegation: {
        delegator_address: "atone10rgr9c9qwzpyl3yv9zgtprtskmzuzs06tx7u6w",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "302000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "302000000" },
    },
    {
      delegation: {
        delegator_address: "atone10gzg69ktz2ku6swm400ghtpfj77u9hg7ua0t55",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "237332584.000000000000000000",
      },
      balance: { denom: "uatone", amount: "237332584" },
    },
    {
      delegation: {
        delegator_address: "atone10guvn4243qg2l8ey8gy9zwttz6v23232k9wm5k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1642234585.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1642234585" },
    },
    {
      delegation: {
        delegator_address: "atone10t6r2xw3496d0r84lu9vprm547uww0sz0502rq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "155000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "155000000" },
    },
    {
      delegation: {
        delegator_address: "atone104jtrwcljnxfljhml8mxrw7qetcsdmqvz2lkry",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "45989474.000000000000000000",
      },
      balance: { denom: "uatone", amount: "45989474" },
    },
    {
      delegation: {
        delegator_address: "atone10hx50q3nzp2z3hzuwkyjlf2e3hnxcjrlpyadpl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1068511.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1068511" },
    },
    {
      delegation: {
        delegator_address: "atone10hm8wmpkn7qhp4cd2d784r5t4lvnwy0sc7fuz4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "134562353.000000000000000000",
      },
      balance: { denom: "uatone", amount: "134562353" },
    },
    {
      delegation: {
        delegator_address: "atone10mgy3dygkqyg8v82q6k3526r5lgt5q8cucdane",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "75197581.000000000000000000",
      },
      balance: { denom: "uatone", amount: "75197581" },
    },
    {
      delegation: {
        delegator_address: "atone1szw5zdjh4jyq2yprdrn7shw6jv3my96sr8nfem",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "31000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "31000000" },
    },
    {
      delegation: {
        delegator_address: "atone1srrk9qyuc3255u7h8zk78n5pvu3vatt96ejuks",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000002783.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000002783" },
    },
    {
      delegation: {
        delegator_address: "atone1sr603679vzkd896wveuay3aft82h0kqwgrq7cw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "190000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "190000000" },
    },
    {
      delegation: {
        delegator_address: "atone1sg4g7vasfs60zfajeeje862h9cnffdnuucky7t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1058685.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1058685" },
    },
    {
      delegation: {
        delegator_address: "atone1snydm4jj9j9fd8vyxw6sansv52653de820xnxt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1946190478.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1946190478" },
    },
    {
      delegation: {
        delegator_address: "atone1sn0gq7jlk5cscurvnsrlxc644p2dkwq56anjm7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "52746366457.000000000000000000",
      },
      balance: { denom: "uatone", amount: "52746366457" },
    },
    {
      delegation: {
        delegator_address: "atone1s4szs2h38m5g20c7cwg9nve6whww4e09tvt9xz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000067568.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000067568" },
    },
    {
      delegation: {
        delegator_address: "atone1smq0qz39r8e8awga8zaxlquftkzxldr8z6sc3c",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "32299367.000000000000000000",
      },
      balance: { denom: "uatone", amount: "32299367" },
    },
    {
      delegation: {
        delegator_address: "atone1su0p2tyhph4hv6ud22c057rz3f8gfvrsly8kyy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "341824171.000000000000000000",
      },
      balance: { denom: "uatone", amount: "341824171" },
    },
    {
      delegation: {
        delegator_address: "atone1sltq5xnhhh02zelpphpkqqfy48w7rg47s9zjr6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "555500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "555500000" },
    },
    {
      delegation: {
        delegator_address: "atone13q84zxycqx2m6kpslgsd835s2fxg0kv52x7aym",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "296475151.000000000000000000",
      },
      balance: { denom: "uatone", amount: "296475151" },
    },
    {
      delegation: {
        delegator_address: "atone13zzlsjnauafxz764nvj6mgagrkt5vke37jskxy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1224835789.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1224835789" },
    },
    {
      delegation: {
        delegator_address: "atone13zjs9t80q2y4l2v4d57t8kfz276pjnfmf2npah",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "199000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "199000000" },
    },
    {
      delegation: {
        delegator_address: "atone13rge5v0u9vvee6we2teyk2vam6lq6ft4lqyv3t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000013.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000013" },
    },
    {
      delegation: {
        delegator_address: "atone13g25c4rmcyq2nxhpu00nke5u0puld50gn0as9h",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "285833200.000000000000000000",
      },
      balance: { denom: "uatone", amount: "285833200" },
    },
    {
      delegation: {
        delegator_address: "atone1322eyxkxyz8d00x40mp9yzlwcvx5wnsdmul6e2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "103910866.000000000000000000",
      },
      balance: { denom: "uatone", amount: "103910866" },
    },
    {
      delegation: {
        delegator_address: "atone130umlsvuey3ss03p9pnmnww4mx3zta4skzath6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "999961986.000000000000000000",
      },
      balance: { denom: "uatone", amount: "999961986" },
    },
    {
      delegation: {
        delegator_address: "atone13sdqfpxsal48xlmspyg2dzteyqu04dvex628wa",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "469951548.000000000000000000",
      },
      balance: { denom: "uatone", amount: "469951548" },
    },
    {
      delegation: {
        delegator_address: "atone13jkhp3gp2enyhnp54txq8w5aw77aaqzyvppw8y",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000065985.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000065985" },
    },
    {
      delegation: {
        delegator_address: "atone135vz559nhcmvyta9y5juee8fs949nc8c7k67yr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000080378.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000080378" },
    },
    {
      delegation: {
        delegator_address: "atone13ee0yyvm7qhqsvqe2qprk3me60zlr642srpmwc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "32472530.000000000000000000",
      },
      balance: { denom: "uatone", amount: "32472530" },
    },
    {
      delegation: {
        delegator_address: "atone136fhkg5l592vvvncd5e604upsd9qkzwm2djr5f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "152547205.000000000000000000",
      },
      balance: { denom: "uatone", amount: "152547205" },
    },
    {
      delegation: {
        delegator_address: "atone13uyv2mzgrc4r0c8aslsvkfy7dcmgflq0sc5fdm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "4270000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4270000" },
    },
    {
      delegation: {
        delegator_address: "atone1j9js8967j33c2t48pcjrmgyef5m6m4prsl3am3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1074473.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1074473" },
    },
    {
      delegation: {
        delegator_address: "atone1jxd29h6ra4taagzxp7k05f56u50h9r8zekk8nr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "15871701.000000000000000000",
      },
      balance: { denom: "uatone", amount: "15871701" },
    },
    {
      delegation: {
        delegator_address: "atone1jfwp4d5mg93sapd67r4274f8y8tg4xn768d2cz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "389310661.000000000000000000",
      },
      balance: { denom: "uatone", amount: "389310661" },
    },
    {
      delegation: {
        delegator_address: "atone1jttdtq9ah54rawwtsapt225unp8fdpedw5rzlj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2224164428.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2224164428" },
    },
    {
      delegation: {
        delegator_address: "atone1jtustv4ghy997d6catge3mgklszkvve6uhm576",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1285979541.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1285979541" },
    },
    {
      delegation: {
        delegator_address: "atone1j0qxu2ym2uxdatx9u236crh820c9lrg9az6lpm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "298514516.000000000000000000",
      },
      balance: { denom: "uatone", amount: "298514516" },
    },
    {
      delegation: {
        delegator_address: "atone1j3qv4khvemv2fgk9a6g238g3suyqatahxqczdq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "133278649.000000000000000000",
      },
      balance: { denom: "uatone", amount: "133278649" },
    },
    {
      delegation: {
        delegator_address: "atone1jev7zyn0zkln3gtsuprgwwxmrs6shsux2aa70z",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "51000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "51000000" },
    },
    {
      delegation: {
        delegator_address: "atone1jm5hs7957cpn6ngs00yngup6f7z8jls8r59xk0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "202562137.000000000000000000",
      },
      balance: { denom: "uatone", amount: "202562137" },
    },
    {
      delegation: {
        delegator_address: "atone1juskw0hae7e0stnwmsl8hc2t7gd9yxuusrlzdj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "134739767.000000000000000000",
      },
      balance: { denom: "uatone", amount: "134739767" },
    },
    {
      delegation: {
        delegator_address: "atone1jujullnrumr8mplckscuxzfnzkspfm6lfjncpt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "515110552.000000000000000000",
      },
      balance: { denom: "uatone", amount: "515110552" },
    },
    {
      delegation: {
        delegator_address: "atone1ja9uell4cj7a564fzdm7w7733um2mhnvsnq0x0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "308100000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "308100000" },
    },
    {
      delegation: {
        delegator_address: "atone1npurzcjvq9rd29k29atvxd90732z4lwml7ft4e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1npu9lyaf0ve5hrr30xdc8r57jje98tu5ljgw62",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "457958779.000000000000000000",
      },
      balance: { denom: "uatone", amount: "457958779" },
    },
    {
      delegation: {
        delegator_address: "atone1n9wl97cms52tkhc2j40mmktgew0e08aw6e23j2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "209027000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "209027000" },
    },
    {
      delegation: {
        delegator_address: "atone1ngr5pfhr04rumnzz8vk7cmueat0au88y44xkck",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "201867775.000000000000000000",
      },
      balance: { denom: "uatone", amount: "201867775" },
    },
    {
      delegation: {
        delegator_address: "atone1nf5f04rk9t56pzdwve6rhe5gvneq6gvkhscwk7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "643437121.000000000000000000",
      },
      balance: { denom: "uatone", amount: "643437121" },
    },
    {
      delegation: {
        delegator_address: "atone1ntqjylqqzw4a22hhljxsmwd7vf3h4eq64tsd0h",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "78205823.000000000000000000",
      },
      balance: { denom: "uatone", amount: "78205823" },
    },
    {
      delegation: {
        delegator_address: "atone1njqpx444qvmq9q9yewupn4nztmsfzvcts3h7qj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000004414.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000004414" },
    },
    {
      delegation: {
        delegator_address: "atone1n45t2sknp6gjj85f25sazprq7q8kyweqv4lc0n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "7521345388.000000000000000000",
      },
      balance: { denom: "uatone", amount: "7521345388" },
    },
    {
      delegation: {
        delegator_address: "atone1nkw9c3he7mnhq3jf0rfyrs4uzlawkr6qfghvzj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "56000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "56000000" },
    },
    {
      delegation: {
        delegator_address: "atone1nesuje39dmscqg5v3qrqpedg77f8qtq33v67dj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "207142210.000000000000000000",
      },
      balance: { denom: "uatone", amount: "207142210" },
    },
    {
      delegation: {
        delegator_address: "atone1ne67r4tv5sgpkax7q4se0u84gmqh83sd4jcjuh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "134823299.000000000000000000",
      },
      balance: { denom: "uatone", amount: "134823299" },
    },
    {
      delegation: {
        delegator_address: "atone1nmt9zlgmcn6f9qj3gepxdfy690kkna0xxslfrh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000" },
    },
    {
      delegation: {
        delegator_address: "atone15rgk9gkgc0rfsflyh6ygkcn8vnnhnq49arvcdg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "7777000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "7777000000" },
    },
    {
      delegation: {
        delegator_address: "atone15rhh8q8us9a8lepcu6dg4864dmx60lvm5kxy9n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "64700000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "64700000" },
    },
    {
      delegation: {
        delegator_address: "atone15yatfzzljeruqjytj7ev25nwy53l0uvfch2xn4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5222.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5222" },
    },
    {
      delegation: {
        delegator_address: "atone15x84rgw68x6v42c7drsgwng0dzt8ylvf56zs4w",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "13501304.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13501304" },
    },
    {
      delegation: {
        delegator_address: "atone15gq8zpzagw6e5gzed8pfggsyvjdfmsss3l22dr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "55000008383.000000000000000000",
      },
      balance: { denom: "uatone", amount: "55000008383" },
    },
    {
      delegation: {
        delegator_address: "atone1528kd4dh7cxd2x2zknq48zt40lnx3phl3zs0jc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000" },
    },
    {
      delegation: {
        delegator_address: "atone152l67q44deyj7t956f2swkjza5rznm2q8skaag",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16785037.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16785037" },
    },
    {
      delegation: {
        delegator_address: "atone150q6ppu366x468pkhm7zcw7jk5jegg0swa8dn2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "698608142.000000000000000000",
      },
      balance: { denom: "uatone", amount: "698608142" },
    },
    {
      delegation: {
        delegator_address: "atone15jx0v767zutpsjvwx4lwk7z28n8mzvd0m8wawc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "204231361.000000000000000000",
      },
      balance: { denom: "uatone", amount: "204231361" },
    },
    {
      delegation: {
        delegator_address: "atone15jnuh4s763w5msmnk5tx9vdgrdxgx39hdyksft",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1" },
    },
    {
      delegation: {
        delegator_address: "atone15j7g66x5y99d9kjs0zvkvejgyhpgfaeltj70z2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone15n9me5yykqtedf80zsnk46lckeu07eeg33535k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "876157931.000000000000000000",
      },
      balance: { denom: "uatone", amount: "876157931" },
    },
    {
      delegation: {
        delegator_address: "atone1547h9rujujmxw00lzm5dqwqcew7sczu9xm7wwt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "7110000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "7110000" },
    },
    {
      delegation: {
        delegator_address: "atone15hmqrc245kryaehxlch7scl9d9znxa58wka40n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "67253427190.000000000000000000",
      },
      balance: { denom: "uatone", amount: "67253427190" },
    },
    {
      delegation: {
        delegator_address: "atone15epp26pl7cxhq6ff882cluyfxacj8lv5glcxr6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500000000" },
    },
    {
      delegation: {
        delegator_address: "atone15mzzewuylf8a8y9ve2e07e5wckjq75kpkspavm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "134526287.000000000000000000",
      },
      balance: { denom: "uatone", amount: "134526287" },
    },
    {
      delegation: {
        delegator_address: "atone15and56df7e2pe03nqkas7ezmxldc4cf8lwyukr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "136000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "136000000" },
    },
    {
      delegation: {
        delegator_address: "atone157qu9jpq3pasuc9s50tpd4hwu3tm45lrhs7vx4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "605000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "605000000" },
    },
    {
      delegation: {
        delegator_address: "atone15lnq0udq33dg3aghgagxtswdyvjluunag40wun",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "296476526.000000000000000000",
      },
      balance: { denom: "uatone", amount: "296476526" },
    },
    {
      delegation: {
        delegator_address: "atone14r9q9ntn0zncx7gtkzarcasgfmvwh86qr3c3nv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "25191228.000000000000000000",
      },
      balance: { denom: "uatone", amount: "25191228" },
    },
    {
      delegation: {
        delegator_address: "atone14yxypnruq07v300a0ga8xkl900vc3chkkvpgex",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "204832310.000000000000000000",
      },
      balance: { denom: "uatone", amount: "204832310" },
    },
    {
      delegation: {
        delegator_address: "atone14xcezyeyvxx384vnqhcxrs7qesfkkrkdws77y5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "51004356.000000000000000000",
      },
      balance: { denom: "uatone", amount: "51004356" },
    },
    {
      delegation: {
        delegator_address: "atone148whzgrgd57wak0lk5teamngwww66amzc3wul8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "390493377.000000000000000000",
      },
      balance: { denom: "uatone", amount: "390493377" },
    },
    {
      delegation: {
        delegator_address: "atone14f5vpj2hdw37rng9zct7llkqax2znrhyg4vg84",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "804762565.000000000000000000",
      },
      balance: { denom: "uatone", amount: "804762565" },
    },
    {
      delegation: {
        delegator_address: "atone1423lrkcyufus67w7j79hyjfjr0hd35kxxcz2tt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "245370579.000000000000000000",
      },
      balance: { denom: "uatone", amount: "245370579" },
    },
    {
      delegation: {
        delegator_address: "atone14wseucu2dkg6x06achamn8a0l0u059klxst5x4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10000000000" },
    },
    {
      delegation: {
        delegator_address: "atone14wjel7svz58fhpzhfpdw2adl0wmk9vemy65tjk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "201434832.000000000000000000",
      },
      balance: { denom: "uatone", amount: "201434832" },
    },
    {
      delegation: {
        delegator_address: "atone14sqxm7fn47tkm4lx9e7yd3wzuym2h4tdu2qj89",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "135041034.000000000000000000",
      },
      balance: { denom: "uatone", amount: "135041034" },
    },
    {
      delegation: {
        delegator_address: "atone143d2gk8dfffh5a77f23tml2de50jyasmwnufqc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000" },
    },
    {
      delegation: {
        delegator_address: "atone14uutcxkwe0rws08j74v8vl9f9z0qz3kcysmwmh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "45403686.000000000000000000",
      },
      balance: { denom: "uatone", amount: "45403686" },
    },
    {
      delegation: {
        delegator_address: "atone147vq8se2xg7nq566udrn6gz2pz9y88m7ulnvea",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468938520.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468938520" },
    },
    {
      delegation: {
        delegator_address: "atone1476qsc899206arz7s4g7uu7p73r2ue8ute7088",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "161553394.000000000000000000",
      },
      balance: { denom: "uatone", amount: "161553394" },
    },
    {
      delegation: {
        delegator_address: "atone14l93dwnqe25rnu4anfc6q0dlcukea9pd3pm53t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1390000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1390000" },
    },
    {
      delegation: {
        delegator_address: "atone1kzyz6wyvt6maafq3ajy30ed9gxv9etwq7cv2jl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "469000987.000000000000000000",
      },
      balance: { denom: "uatone", amount: "469000987" },
    },
    {
      delegation: {
        delegator_address: "atone1ky4l8why7jctxpwwxwy2en5txagy8j7x5kpc8n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "3547134400.000000000000000000",
      },
      balance: { denom: "uatone", amount: "3547134400" },
    },
    {
      delegation: {
        delegator_address: "atone1kyc0uy0lje8eyc02qhnz3msav2jytz33943683",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24700000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24700000" },
    },
    {
      delegation: {
        delegator_address: "atone1kg5chx398g0p09tc4hemm2fwxj6cwt9ww7j97n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "25712087.000000000000000000",
      },
      balance: { denom: "uatone", amount: "25712087" },
    },
    {
      delegation: {
        delegator_address: "atone1kgce2j9uepahgug8c8c6vmxevhmmux7smltu7v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000027809.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000027809" },
    },
    {
      delegation: {
        delegator_address: "atone1kgu07r6lhpr0v3dww9a4rldfny5v6fykn2aylm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "165480763.000000000000000000",
      },
      balance: { denom: "uatone", amount: "165480763" },
    },
    {
      delegation: {
        delegator_address: "atone1kvqxv4pgmteqrwrcfj8j3g3vwhcg0zmupnp9nc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200448873.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200448873" },
    },
    {
      delegation: {
        delegator_address: "atone1kvq4n4n4x3gqlyfr672pjyqn73c2hdkue6lgaz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2112000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2112000000" },
    },
    {
      delegation: {
        delegator_address: "atone1keqn6wegxwx6e3tyd9jmpmqpp9fgj3gu75v0gp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5194319.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5194319" },
    },
    {
      delegation: {
        delegator_address: "atone1ka3w345dawr0quc4uac9unv8x43yvfzwzmuh0j",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "298839662.000000000000000000",
      },
      balance: { denom: "uatone", amount: "298839662" },
    },
    {
      delegation: {
        delegator_address: "atone1kahgd5qgy23w7djkc43ghpqg2uv52ds0yrgqq3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206888352.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206888352" },
    },
    {
      delegation: {
        delegator_address: "atone1kal8h32wluskjd7gsqze9jlvk4zw7jp3fhq4l5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2145330883.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2145330883" },
    },
    {
      delegation: {
        delegator_address: "atone1hqn9uvusqygerc6ccs6n6e074yqp2sjp7v3rwk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1090401.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1090401" },
    },
    {
      delegation: {
        delegator_address: "atone1hr7tz3qvyhlpghtyfxdlwrfkw5zcjkxngdncue",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "6412147.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6412147" },
    },
    {
      delegation: {
        delegator_address: "atone1hx0875zj5x9p5wlzzxsvttwmmue6ftclcl93vx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "95280644.000000000000000000",
      },
      balance: { denom: "uatone", amount: "95280644" },
    },
    {
      delegation: {
        delegator_address: "atone1hv4rlv94dwwsj3z7l6muye6ndmup0htacx6m3t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "4924131699.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4924131699" },
    },
    {
      delegation: {
        delegator_address: "atone1h033rs3na3faurz0n3qlmls52q04k4u4u3wnug",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206126100.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206126100" },
    },
    {
      delegation: {
        delegator_address: "atone1hskks7nkcq4ys9u9frmj3rpj2pfdmp20w9mcr0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2374407555.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2374407555" },
    },
    {
      delegation: {
        delegator_address: "atone1h3j0wrf9kmthsp8rsrm72wcfptcy3qw3hxwgg5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "310000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "310000" },
    },
    {
      delegation: {
        delegator_address: "atone1h3l6dyvhg0zsh403q6v5c9xpne8ucl8jh72672",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "600000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "600000000" },
    },
    {
      delegation: {
        delegator_address: "atone1hna4ue4tszxzawa6me683u2pn25lmewg46tvwv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206844061.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206844061" },
    },
    {
      delegation: {
        delegator_address: "atone1h4yklnnd3a9tas43y0ey8z3vg5zzwjs0g2t8ma",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "251000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "251000000" },
    },
    {
      delegation: {
        delegator_address: "atone1h4x2tx4679zjv77uet0x6e6v33dc8l82kgtzvx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468824166.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468824166" },
    },
    {
      delegation: {
        delegator_address: "atone1hk4tzw5nqc43zt4aukxn5za5fmgk7qqqsjuhnc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "78749079.000000000000000000",
      },
      balance: { denom: "uatone", amount: "78749079" },
    },
    {
      delegation: {
        delegator_address: "atone1hhef32qjjhcy7zqx8u6e4znk598v30e8syh549",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "144846469.000000000000000000",
      },
      balance: { denom: "uatone", amount: "144846469" },
    },
    {
      delegation: {
        delegator_address: "atone1h6e82vzacz2a2ewyr8rsu5hwtchvp225ypqtvu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2087114083.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2087114083" },
    },
    {
      delegation: {
        delegator_address: "atone1hujv5m4jnlhxpkmw64kedms2l9pcggps024e7l",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "13375474.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13375474" },
    },
    {
      delegation: {
        delegator_address: "atone1h7wpe943s6tsvxun6ahnxkzshr7r0xacejrztd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "20150000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "20150000" },
    },
    {
      delegation: {
        delegator_address: "atone1hlfy3cmznkzu75208e7kgy4u6juk4v8y36mz0e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000006655.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000006655" },
    },
    {
      delegation: {
        delegator_address: "atone1cqrky3t78np3a60kmdpylzyv594muagf04t72v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "289210808.000000000000000000",
      },
      balance: { denom: "uatone", amount: "289210808" },
    },
    {
      delegation: {
        delegator_address: "atone1cqjp63tugraf4wksanzh3xzaap9upz428azfhl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "800000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "800000" },
    },
    {
      delegation: {
        delegator_address: "atone1cz72h7thxsq92a26l8j3xkjx9jtlnuuat4kxe3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "139000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "139000000" },
    },
    {
      delegation: {
        delegator_address: "atone1cyhtq6e9x7f2haf6rn5l08svmhsrcqlvlkxzf6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "8000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "8000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1c9xa3dp0970yrp8gj8rrwgne7al7q0cv6uws76",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "28700000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "28700000" },
    },
    {
      delegation: {
        delegator_address: "atone1c9mkft0d3sdjm3us883270veuww7qe3yju3y8f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "59090198.000000000000000000",
      },
      balance: { denom: "uatone", amount: "59090198" },
    },
    {
      delegation: {
        delegator_address: "atone1cgdty3246mz7jatqkg36h2aeqwnwf2m62hm7hv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1c2gdsuq2n7avgwc7ev0puydzlk44uj5jk303wj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000006647.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000006647" },
    },
    {
      delegation: {
        delegator_address: "atone1cthyr8req6svmza3euykd2sf5pzse6z2xk3dsz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "459823736.000000000000000000",
      },
      balance: { denom: "uatone", amount: "459823736" },
    },
    {
      delegation: {
        delegator_address: "atone1cdtyy29mre322xxpt2yvmz75crs3pl5tq0a30t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "999963509.000000000000000000",
      },
      balance: { denom: "uatone", amount: "999963509" },
    },
    {
      delegation: {
        delegator_address: "atone1cdu9je4hm97yygcw89684sxptpsrrg7sx7v5uj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "134839797.000000000000000000",
      },
      balance: { denom: "uatone", amount: "134839797" },
    },
    {
      delegation: {
        delegator_address: "atone1c0uv00l292ph9znzwt5w6uemur5n2kpgesgktz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206544275.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206544275" },
    },
    {
      delegation: {
        delegator_address: "atone1c347zr3z9ck7kwf9csxnn5vj5d06xcnguanma4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "174366484.000000000000000000",
      },
      balance: { denom: "uatone", amount: "174366484" },
    },
    {
      delegation: {
        delegator_address: "atone1cjnc8hlw4gt2p8wydxjdpckywlux327nuc8wtx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "400631190.000000000000000000",
      },
      balance: { denom: "uatone", amount: "400631190" },
    },
    {
      delegation: {
        delegator_address: "atone1ccy0709lrhjfu7cg7xtyvp009d70y3zxgc9nn9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "253500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "253500000" },
    },
    {
      delegation: {
        delegator_address: "atone1cclvds6qkapm7d6m8akag2z2kqgqct5g4ec66s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "211240000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "211240000" },
    },
    {
      delegation: {
        delegator_address: "atone1c7pn0kv2x784cujvthxh5km8xxuftf85angsts",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000468536.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000468536" },
    },
    {
      delegation: {
        delegator_address: "atone1c78d8wwp6stq2cpfpw9u8aq6qwmswpp2tywnh5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "15844000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "15844000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ezr0cxsyt4qtsm2dd4ce50kdlps8w7wars8zrh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "11000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "11000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1er0ahfstn00n5mhajl33c3w645e46pkw6usn8d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "55521003.000000000000000000",
      },
      balance: { denom: "uatone", amount: "55521003" },
    },
    {
      delegation: {
        delegator_address: "atone1efsj9hrsuhcu6lmamm544n7syfn58kd6pk7ckl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1001000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1001000000" },
    },
    {
      delegation: {
        delegator_address: "atone1e0d0daqr34t7kgdumgrlrwf7xye9alqfu20hkl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "6571720436.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6571720436" },
    },
    {
      delegation: {
        delegator_address: "atone1e04npj9jtg9p05symnpupepe0dqc9p4f5jlkrq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5000000" },
    },
    {
      delegation: {
        delegator_address: "atone1e04kh9g0gdst6374grqld9mvs2lvk3tcaexysm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "350000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "350000000" },
    },
    {
      delegation: {
        delegator_address: "atone1esysgy90dkyk5kuhhl3mzv4wq55t3ks0j4enly",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "18263770.000000000000000000",
      },
      balance: { denom: "uatone", amount: "18263770" },
    },
    {
      delegation: {
        delegator_address: "atone1ejwsyd4xvc8mu6mkn2wkfav4f9l9eeaqplc9s8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ejskt8erpgnpzymf2js47rtnfxramr5aw2egkx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ehvppg4y9ar7dvnhjnqgjwxm2vd8yvsx72hl0v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "46643491.000000000000000000",
      },
      balance: { denom: "uatone", amount: "46643491" },
    },
    {
      delegation: {
        delegator_address: "atone1ec8gcke3uc8qavull6cm0wtf3dl08qde5fpsuc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "309000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "309000000" },
    },
    {
      delegation: {
        delegator_address: "atone1eewlz3pl8rhs083nqrds45kfg93sm7vu7jafhk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "237338375.000000000000000000",
      },
      balance: { denom: "uatone", amount: "237338375" },
    },
    {
      delegation: {
        delegator_address: "atone1e69qx3c2tn2jxpq79kvlnc5yvu6hshqtxcr5dn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1080683.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1080683" },
    },
    {
      delegation: {
        delegator_address: "atone1eujlkkfsyjf28ey9vce3yp0s0mdd0l94z7lxln",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "751000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "751000000" },
    },
    {
      delegation: {
        delegator_address: "atone1elclpa4cpu3tshp9sd2r5v5gjnm6sn58je8unv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "99272729.000000000000000000",
      },
      balance: { denom: "uatone", amount: "99272729" },
    },
    {
      delegation: {
        delegator_address: "atone16qyvjuygm7p69ffjzn8szwxjq6l6fafsddzjtc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "34309622.000000000000000000",
      },
      balance: { denom: "uatone", amount: "34309622" },
    },
    {
      delegation: {
        delegator_address: "atone16pyqdev493dszr786lp38d39mncf9ljrryprud",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "154879669.000000000000000000",
      },
      balance: { denom: "uatone", amount: "154879669" },
    },
    {
      delegation: {
        delegator_address: "atone16pnm0sxpta3t9u7s9ujd7lkhxhdha05tafc93s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "4920353279.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4920353279" },
    },
    {
      delegation: {
        delegator_address: "atone16yzm6qjjheafnyvlcjxnkmhj3hullgpl8u85xj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "643436512.000000000000000000",
      },
      balance: { denom: "uatone", amount: "643436512" },
    },
    {
      delegation: {
        delegator_address: "atone16xvd0j4cgnkydxwyfuryrjtw24hqgc2kxvw38u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "350206212.000000000000000000",
      },
      balance: { denom: "uatone", amount: "350206212" },
    },
    {
      delegation: {
        delegator_address: "atone1628l2qz5mgdf890wt5fksf3c8smw0k783aqsy4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "108076500.000000000000000000",
      },
      balance: { denom: "uatone", amount: "108076500" },
    },
    {
      delegation: {
        delegator_address: "atone16tfjyefrgekf0l8zzccjy2c72nh2mscjvt8pxu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "643616749.000000000000000000",
      },
      balance: { denom: "uatone", amount: "643616749" },
    },
    {
      delegation: {
        delegator_address: "atone16vrpzr6hfqmmktqa9u2s0qm6qw0sd6pa7la6lm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "25500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "25500000" },
    },
    {
      delegation: {
        delegator_address: "atone16wpn0gwepdalz0fnlq5nfy645wmwej2ctqmvyp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000007269.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000007269" },
    },
    {
      delegation: {
        delegator_address: "atone1602cse30jdmctgque3j8lc78w2frxzhnga4m5x",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "297000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "297000000" },
    },
    {
      delegation: {
        delegator_address: "atone1603r7hdvmntnh67rr6gnf3myg5sj0020pssh5d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000" },
    },
    {
      delegation: {
        delegator_address: "atone16sspfg6v82wwqwsmeqfh0483mpgxt8h3cvpca7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "19050975.000000000000000000",
      },
      balance: { denom: "uatone", amount: "19050975" },
    },
    {
      delegation: {
        delegator_address: "atone16j9m4s9hvz2ns2z6fk2s35egca5l6rw9rjupm8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1045917963.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1045917963" },
    },
    {
      delegation: {
        delegator_address: "atone16jk3xk8y96xfwhu3z2u8jenn2shxm0u05sulhj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "159000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "159000000" },
    },
    {
      delegation: {
        delegator_address: "atone16kmc5esy37tu6jpywhmgts889ukewwy5nv5h38",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206063287.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206063287" },
    },
    {
      delegation: {
        delegator_address: "atone16hk3m0pnmswlvcpptq2v9admexwqp85tgp2fn7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "135941881.000000000000000000",
      },
      balance: { denom: "uatone", amount: "135941881" },
    },
    {
      delegation: {
        delegator_address: "atone166au0wp40n0p0yrj7vf9gce7yre3wyq0f7nmek",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "12401194066.000000000000000000",
      },
      balance: { denom: "uatone", amount: "12401194066" },
    },
    {
      delegation: {
        delegator_address: "atone16awp53yurhwyu6sl7tmr3jufjg6pttguk3r37v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "208214266.000000000000000000",
      },
      balance: { denom: "uatone", amount: "208214266" },
    },
    {
      delegation: {
        delegator_address: "atone1675kjxe5a9lzjgu3wmgkn5rp9zta6wh8pyxykn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "109945380.000000000000000000",
      },
      balance: { denom: "uatone", amount: "109945380" },
    },
    {
      delegation: {
        delegator_address: "atone1myrthlzxd3vl35d0ah5g3nsrdavkmtqx7zaka0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "488000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "488000000" },
    },
    {
      delegation: {
        delegator_address: "atone1myj2ethr8q5wh6rhq0rqmqmhtvu2tc84qfht8n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "135954636.000000000000000000",
      },
      balance: { denom: "uatone", amount: "135954636" },
    },
    {
      delegation: {
        delegator_address: "atone1m846wav7usstl6upmj377k8q9zmvk3jwzhurex",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000025006.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000025006" },
    },
    {
      delegation: {
        delegator_address: "atone1mfq9n8ghfxga047m97wuvzp5t8t7ujxrmuwwzr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "455781424.000000000000000000",
      },
      balance: { denom: "uatone", amount: "455781424" },
    },
    {
      delegation: {
        delegator_address: "atone1mfje8fezn9mxc7dxnxzumr9kffhxtrn9xdggft",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300000000" },
    },
    {
      delegation: {
        delegator_address: "atone1m20wyugxnse56q2lfmm9txyk2fx39s6fq0l38r",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "580080200.000000000000000000",
      },
      balance: { denom: "uatone", amount: "580080200" },
    },
    {
      delegation: {
        delegator_address: "atone1mjd974cadz3spd2n4jr6mxh4s883tzr6s7d5sq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1m5nftdd9fejyd84e9w3t5swgcgvmlzwwctlal4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1mhkuzfws4xgcpkq252nv22vtdk93j3xdyjt28l",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "248000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "248000000" },
    },
    {
      delegation: {
        delegator_address: "atone1mmf9nqwjnsx7ghyt3aq45w59xdj0wt3kuudn8z",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "27447326.000000000000000000",
      },
      balance: { denom: "uatone", amount: "27447326" },
    },
    {
      delegation: {
        delegator_address: "atone1m7k3xsvucwd09qq2ylzdum8qhej879alwu2njc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5000000" },
    },
    {
      delegation: {
        delegator_address: "atone1uqs2uu4y2knl0gjk7uk0uxwd5ut4qgc9ty20p0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "207290676.000000000000000000",
      },
      balance: { denom: "uatone", amount: "207290676" },
    },
    {
      delegation: {
        delegator_address: "atone1uznr6lmlyx66er4dvw54c7e25pyr0qg3at2q67",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "3825198030.000000000000000000",
      },
      balance: { denom: "uatone", amount: "3825198030" },
    },
    {
      delegation: {
        delegator_address: "atone1ujepumwuauf5dv4jjc686f6xj4u29rtps0f5j6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2112567649.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2112567649" },
    },
    {
      delegation: {
        delegator_address: "atone1ukt0nsy3drwzmm08ane6zarvmjpts27p0cxdls",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "275410816.000000000000000000",
      },
      balance: { denom: "uatone", amount: "275410816" },
    },
    {
      delegation: {
        delegator_address: "atone1ucnzn86zszgjg8umz7ujzqvrcryxu46wjm3pfh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "244000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "244000000" },
    },
    {
      delegation: {
        delegator_address: "atone1uey077ygnn8zz78ce9g05vkzetf32er4vg50hj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "260417022.000000000000000000",
      },
      balance: { denom: "uatone", amount: "260417022" },
    },
    {
      delegation: {
        delegator_address: "atone1uevdz6s8j4l45n5ap3uzxcfjel9nfpmapf8790",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "137649930.000000000000000000",
      },
      balance: { denom: "uatone", amount: "137649930" },
    },
    {
      delegation: {
        delegator_address: "atone1umdjr3j2lcm69ly4tgy80ecs9qdpylhupuaj39",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "140000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "140000000" },
    },
    {
      delegation: {
        delegator_address: "atone1umukkcm6pee0t0vgatfwdpwl8kc092ccl8k8y0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "123000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "123000000" },
    },
    {
      delegation: {
        delegator_address: "atone1uavz6gkj7j75ek0sxd7cue6v8vkzzjtlv4cmrp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000448364.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000448364" },
    },
    {
      delegation: {
        delegator_address: "atone1ap0wsf2nyfkhht0ymqv6rmsm0ylj7vqhz7wtyl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "83500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "83500000" },
    },
    {
      delegation: {
        delegator_address: "atone1ayy0y3lex3wkhcp7y5y6s439nv3k78eg98anw9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "36471758.000000000000000000",
      },
      balance: { denom: "uatone", amount: "36471758" },
    },
    {
      delegation: {
        delegator_address: "atone1ayn8vxqju80mp923yrlyq9epurw5pwlt6jjrvc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "51000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "51000000" },
    },
    {
      delegation: {
        delegator_address: "atone1agqxzl2r9rn6xhpjlsn3g0xf55ap687va0lt0e",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "469639573.000000000000000000",
      },
      balance: { denom: "uatone", amount: "469639573" },
    },
    {
      delegation: {
        delegator_address: "atone1at2aa07247avq2xuzeeswje5pxswr8a5frkfxg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "104000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "104000000" },
    },
    {
      delegation: {
        delegator_address: "atone1atasr6jurjqc9gjpy2cm0rvrwculkcqrxufa22",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "337000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "337000000" },
    },
    {
      delegation: {
        delegator_address: "atone1adnktzkssw5e2lmqlvz8vykfyh9y3xm8f65c72",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206057339.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206057339" },
    },
    {
      delegation: {
        delegator_address: "atone1a3858f250ve4t6rp9ef2svpr7sj20aaxwlg6yk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "270268551.000000000000000000",
      },
      balance: { denom: "uatone", amount: "270268551" },
    },
    {
      delegation: {
        delegator_address: "atone1ajde2jnuw6tzkskyyfx7sgt059kryzktf6f54a",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "39959142.000000000000000000",
      },
      balance: { denom: "uatone", amount: "39959142" },
    },
    {
      delegation: {
        delegator_address: "atone1an4jnulwqm9pv46qqsqdj63zhjq29vnwsrzaet",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "180000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "180000000" },
    },
    {
      delegation: {
        delegator_address: "atone17prz2ww2r89w8ds3nhjt32lf7rwu37enzh3tac",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "729912042.000000000000000000",
      },
      balance: { denom: "uatone", amount: "729912042" },
    },
    {
      delegation: {
        delegator_address: "atone17zhqvql2khzue6kpmgmd9gz5m02j67vr53n24t",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "680955641.000000000000000000",
      },
      balance: { denom: "uatone", amount: "680955641" },
    },
    {
      delegation: {
        delegator_address: "atone17yf8hsgezzhtl58gp3sqe7dcsj2wpqtzla05kh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2630478318.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2630478318" },
    },
    {
      delegation: {
        delegator_address: "atone17t908frmwcuqd83nsx3ydsxx6gfy6dzl9tzngw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "41100000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "41100000" },
    },
    {
      delegation: {
        delegator_address: "atone17w007ye3uy8x8d8ng7vguynzcxgea53dlxnl7a",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "114500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "114500000" },
    },
    {
      delegation: {
        delegator_address: "atone17w500e4efj3z8cu82ep5vt79ztszt9y3y2r5xh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "302367229.000000000000000000",
      },
      balance: { denom: "uatone", amount: "302367229" },
    },
    {
      delegation: {
        delegator_address: "atone17hr0kwjgklazhufht4sdpllmvm6047wd66z6s5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "288082409.000000000000000000",
      },
      balance: { denom: "uatone", amount: "288082409" },
    },
    {
      delegation: {
        delegator_address: "atone17er3w7ca3jxxm45r53vg5zcs86ulyks4mljajg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "82203622.000000000000000000",
      },
      balance: { denom: "uatone", amount: "82203622" },
    },
    {
      delegation: {
        delegator_address: "atone177h5g6har2ne9rhn5ekwlpgv7dtkjxp2psen99",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1416528878.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1416528878" },
    },
    {
      delegation: {
        delegator_address: "atone1lqnmymgw9pmhvf4nec26ykdfh0ccmdnzmy5jfx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "134811902.000000000000000000",
      },
      balance: { denom: "uatone", amount: "134811902" },
    },
    {
      delegation: {
        delegator_address: "atone1lx2zuc7ls0rw0jf89y9366fg7w5l9clgu74lj3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "468382203.000000000000000000",
      },
      balance: { denom: "uatone", amount: "468382203" },
    },
    {
      delegation: {
        delegator_address: "atone1lx0my7kk7uy75y68r602ga62l7n8cwawxv8gts",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "535785912.000000000000000000",
      },
      balance: { denom: "uatone", amount: "535785912" },
    },
    {
      delegation: {
        delegator_address: "atone1lft50ldy04u3szywhg38cnfpxfg7r548cx5ygl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1615754326.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1615754326" },
    },
    {
      delegation: {
        delegator_address: "atone1l2u72c838qe5yc2mn90an2cuqddehflm4hr07k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "584635252.000000000000000000",
      },
      balance: { denom: "uatone", amount: "584635252" },
    },
    {
      delegation: {
        delegator_address: "atone1ltdzw90gmtjslllkxz3a8mhw3lqyfuarl8z3vs",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "222100000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "222100000" },
    },
    {
      delegation: {
        delegator_address: "atone1ldg6m46nw06gntnnxq6llju42ffw0cn9ncpyw2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "40873330.000000000000000000",
      },
      balance: { denom: "uatone", amount: "40873330" },
    },
    {
      delegation: {
        delegator_address: "atone1lwnk6d7vuqhrma0q2vgcn5ezs5c4gtser28gme",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206275999.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206275999" },
    },
    {
      delegation: {
        delegator_address: "atone1l0tdzdyxsayestm8lu95xehgtc0s825pmq5rx5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "11759429432.000000000000000000",
      },
      balance: { denom: "uatone", amount: "11759429432" },
    },
    {
      delegation: {
        delegator_address: "atone1l4tw22eqltq70x2rmxgwcp99tg30kezmt9mapf",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500000000" },
    },
    {
      delegation: {
        delegator_address: "atone1led37kx2jrjjn9mxvtukngwk3cmpauzu9rjpry",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "11434398.000000000000000000",
      },
      balance: { denom: "uatone", amount: "11434398" },
    },
    {
      delegation: {
        delegator_address: "atone1leae7fx997hkfg88dsl0zshr9f64jcaa7pg6kz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1763000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1763000" },
    },
    {
      delegation: {
        delegator_address: "atone1l6zhscdzftcxwgrsdhgqy5sla6h0ddkhuc7uns",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206393423.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206393423" },
    },
    {
      delegation: {
        delegator_address: "atone1lu3nn4ml05h02hu2pncek40cu46fpdpjr4lwhn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "205077076.000000000000000000",
      },
      balance: { denom: "uatone", amount: "205077076" },
    },
    {
      delegation: {
        delegator_address: "atone1lul42lw2p4mv2mlte89cf4qnfg2jfduuz9syur",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1328882959.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1328882959" },
    },
    {
      delegation: {
        delegator_address: "atone1l7jdfh5ze7dzzyextvvk445dr9wy43qstt6xax",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "18148507.000000000000000000",
      },
      balance: { denom: "uatone", amount: "18148507" },
    },
    {
      delegation: {
        delegator_address: "atone1llcjm6rtra0yfa8s6754s4hs7vr06d2ledwrjv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "109000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "109000000" },
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
    if (parseInt(txs[i].balance.amount) >= 200000000) {
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
    .writeFile("./atomone.xlsx")
    .then(() => console.log("File saved!"));

  console.log(output, output);
})();
