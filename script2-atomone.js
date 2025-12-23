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
        shares: "24769919.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24769919" },
    },
    {
      delegation: {
        delegator_address: "atone1q2833t82zthataz0v6zracejyu7xfqh7mu2sw4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "288223872.000000000000000000",
      },
      balance: { denom: "uatone", amount: "288223872" },
    },
    {
      delegation: {
        delegator_address: "atone1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6nyslal2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "12092500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "12092500000" },
    },
    {
      delegation: {
        delegator_address: "atone1qs4eqtc0f28943s9q8jzcncr5pkmcgkf07lenq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "284600000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "284600000" },
    },
    {
      delegation: {
        delegator_address: "atone1qjxfq62d2wt3s3elra9v9zqxtjztk0qr8sasum",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "50300000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "50300000" },
    },
    {
      delegation: {
        delegator_address: "atone1q648z887yenz2gxkq4msa252nvp427tfsvh8hu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1527911947.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1527911947" },
    },
    {
      delegation: {
        delegator_address: "atone1qm0q9ec5ylrgz2sz78j53xnrfcsse74a23ad2g",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "63995757.000000000000000000",
      },
      balance: { denom: "uatone", amount: "63995757" },
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
        shares: "13100000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13100000" },
    },
    {
      delegation: {
        delegator_address: "atone1p587eza5ua9qxt4q205jalhk4vq3cuhf7shm6d",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "53000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53000000" },
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
        shares: "19989936.000000000000000000",
      },
      balance: { denom: "uatone", amount: "19989936" },
    },
    {
      delegation: {
        delegator_address: "atone1p6s3nqc8rr02j5n9qhtmt7zkf4ur2j0vf04p5p",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "148938493.000000000000000000",
      },
      balance: { denom: "uatone", amount: "148938493" },
    },
    {
      delegation: {
        delegator_address: "atone1pme8tquascj9t2kay0qxh42f688x5cmrl3qhze",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "61011462.000000000000000000",
      },
      balance: { denom: "uatone", amount: "61011462" },
    },
    {
      delegation: {
        delegator_address: "atone1pufy8qm4qsnxxapugc3l2vvmtpp0vk0suuqlp6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16837526.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16837526" },
    },
    {
      delegation: {
        delegator_address: "atone1pa56a9fg5jhxrduru275vn2y7fpkxmx6rtg9mm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "19077261.000000000000000000",
      },
      balance: { denom: "uatone", amount: "19077261" },
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
        shares: "100334841.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100334841" },
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
        shares: "59308897.000000000000000000",
      },
      balance: { denom: "uatone", amount: "59308897" },
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
        shares: "18870557.000000000000000000",
      },
      balance: { denom: "uatone", amount: "18870557" },
    },
    {
      delegation: {
        delegator_address: "atone1zsygz8es37kyfnhsg3xp59d43re4tjtq6ypaxc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16792416.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16792416" },
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
        delegator_address: "atone1z692deslv3tgqcf7yjzu6l0x5p23jzw50vsdv5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24381811.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24381811" },
    },
    {
      delegation: {
        delegator_address: "atone1rxwnxskx7w9jjecfzjve35juw3qxughs9nwku7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1rxhswdq9852jldxvfxs53x3aql9t927kekln06",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16550165.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16550165" },
    },
    {
      delegation: {
        delegator_address: "atone1rfvtz0f7wkcj62t648s3k20ecjh7frn90nyys0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "3301242.000000000000000000",
      },
      balance: { denom: "uatone", amount: "3301242" },
    },
    {
      delegation: {
        delegator_address: "atone1rf0s9p99t3m0vnwcf0jy98hwedlrul90tsvp4s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1805012486.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1805012486" },
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
        delegator_address: "atone1rnht2un7dhe9x0450tkd9uezs3ts43sldn7msn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "18000070.000000000000000000",
      },
      balance: { denom: "uatone", amount: "18000070" },
    },
    {
      delegation: {
        delegator_address: "atone1rhyz30vg0c6ed69rmz43h35wn92ucksrclvndw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2205912322.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2205912322" },
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
        delegator_address: "atone1r65lzzqauzca4ut8azectvv4dts8jy0hnhn074",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16514533.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16514533" },
    },
    {
      delegation: {
        delegator_address: "atone1rmtcl7m2pz63cgsvfxayuh54drk9sa9lf5mvvq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "40586158.000000000000000000",
      },
      balance: { denom: "uatone", amount: "40586158" },
    },
    {
      delegation: {
        delegator_address: "atone1rudl9ygrudq66lwkf3j02thecfkmzkvf5ww5vl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "15000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "15000000" },
    },
    {
      delegation: {
        delegator_address: "atone1rlmkgp4htnlvfkcq9n6hpl702fdsr4q30j4jrg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16518351.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16518351" },
    },
    {
      delegation: {
        delegator_address: "atone1yzzxtvaus8kd0qhc7fvyuyrudnjqwzg4e7vajk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1408738.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1408738" },
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
        delegator_address: "atone1yxhwgqaezqqqnfx6djukd8cl3awq5angw0unr3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ysthp74n2wxt4flmzyxrhza8rvxzr9mclfes0v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500017077.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500017077" },
    },
    {
      delegation: {
        delegator_address: "atone1y5jjkfkxzwr7dackdn9d6cmxc9xvtzdhy7hcy2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16416668.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16416668" },
    },
    {
      delegation: {
        delegator_address: "atone1y4m793g8n2sldvtnaxztl2usqqerhd99h7l00j",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16479713.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16479713" },
    },
    {
      delegation: {
        delegator_address: "atone1ykyk43nxapm48n60ft0sr8ndrg8deu9p2d5ckt",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2002297678.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2002297678" },
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
        shares: "11008568.000000000000000000",
      },
      balance: { denom: "uatone", amount: "11008568" },
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
        shares: "225000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "225000000" },
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
        shares: "224000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "224000000" },
    },
    {
      delegation: {
        delegator_address: "atone19e4l3hnkzp0wzz2zmngpkqtdwt49zlgpw97sey",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "46033833.000000000000000000",
      },
      balance: { denom: "uatone", amount: "46033833" },
    },
    {
      delegation: {
        delegator_address: "atone19uga3gpvacvlyuv2mf027n4xqrv4tssexz3wx7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "145000825.000000000000000000",
      },
      balance: { denom: "uatone", amount: "145000825" },
    },
    {
      delegation: {
        delegator_address: "atone19uwu9dqspgqdd47s9gsgf6khgp64qlxq4fzds9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "562743406.000000000000000000",
      },
      balance: { denom: "uatone", amount: "562743406" },
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
        delegator_address: "atone1xmv9u389awdw6qpvekwsnkv7zvlyh3qmpqhfr9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29752354.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29752354" },
    },
    {
      delegation: {
        delegator_address: "atone1xupjdffnax8tkuzypjqswhz906lhljg4dk8wsg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16449368.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16449368" },
    },
    {
      delegation: {
        delegator_address: "atone18qn5q83vh6c5nnz7nlnrcgpxjac8plq833v00f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "46566948.000000000000000000",
      },
      balance: { denom: "uatone", amount: "46566948" },
    },
    {
      delegation: {
        delegator_address: "atone18rez2m9ffwuku0q4q8t5cjz4rpgku4vuvzjnn6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16421047.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16421047" },
    },
    {
      delegation: {
        delegator_address: "atone18ywwgc84luq0u8evna62hasdeyagzenad55sma",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "20073663.000000000000000000",
      },
      balance: { denom: "uatone", amount: "20073663" },
    },
    {
      delegation: {
        delegator_address: "atone188pjlw6q8xtfhuzfgzstux8vg379na680h85y4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16585761.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16585761" },
    },
    {
      delegation: {
        delegator_address: "atone18gxg34cp8r4gmsm5vgkaafg4fw4gzfur3xj7cx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24380017.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24380017" },
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
        shares: "44845777.000000000000000000",
      },
      balance: { denom: "uatone", amount: "44845777" },
    },
    {
      delegation: {
        delegator_address: "atone18d2ge2rnttunzas75ygkjl5s8tvetevsyqjlpc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16535890.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16535890" },
    },
    {
      delegation: {
        delegator_address: "atone18nf84jgwkqypaplz45xyf3yegpu4vvhznf9gn4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "130872257.000000000000000000",
      },
      balance: { denom: "uatone", amount: "130872257" },
    },
    {
      delegation: {
        delegator_address: "atone185fkw70ntyc0vlvrf30grsxurfw2d7cplyp8ep",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300824166.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300824166" },
    },
    {
      delegation: {
        delegator_address: "atone1850rdjq4sf488sad4qsj64sj2s8h53z0hhu7q7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "999962488.000000000000000000",
      },
      balance: { denom: "uatone", amount: "999962488" },
    },
    {
      delegation: {
        delegator_address: "atone184xze0xvsngwgl3nmu8s6qrns02v0epn6eavjp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16428471.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16428471" },
    },
    {
      delegation: {
        delegator_address: "atone18crvw4qkw8ju6s9jqyw6w3wx5ghh3unvd6zgw5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "251796243.000000000000000000",
      },
      balance: { denom: "uatone", amount: "251796243" },
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
        shares: "1358694210.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1358694210" },
    },
    {
      delegation: {
        delegator_address: "atone1gxa40yjrgrlt2ffqka8cgycxnhlq9kd2f4u93y",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100330102.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100330102" },
    },
    {
      delegation: {
        delegator_address: "atone1g238t79lec906hgnvpnyu4mywltl0kd66uy95g",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24389528.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24389528" },
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
        shares: "202988690.000000000000000000",
      },
      balance: { denom: "uatone", amount: "202988690" },
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
        delegator_address: "atone1gwh42aqnppx7d8lxuhkafh86ew6f0wrj5nwul8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "19105088.000000000000000000",
      },
      balance: { denom: "uatone", amount: "19105088" },
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
        shares: "445000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "445000000" },
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
        shares: "16420096.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16420096" },
    },
    {
      delegation: {
        delegator_address: "atone1gmldc4msum7fer0mp3dq4u9k3wnemw8q5d4jp5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24738190.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24738190" },
    },
    {
      delegation: {
        delegator_address: "atone1frwewwrswegyuxsz800zeaqesq5k678xe5hd9p",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "570900000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "570900000" },
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
        shares: "300824508.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300824508" },
    },
    {
      delegation: {
        delegator_address: "atone1fgngf5pka7m6u68zmdllds7gna7jttw0j27eyz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "26097871.000000000000000000",
      },
      balance: { denom: "uatone", amount: "26097871" },
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
        delegator_address: "atone1f44qd2yw4f007dqddltptaqyqly9qs05n8edum",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "220000041.000000000000000000",
      },
      balance: { denom: "uatone", amount: "220000041" },
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
        delegator_address: "atone1f6gehrngp29zf7nstklu6732nrwdykaajg8muy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "42120408.000000000000000000",
      },
      balance: { denom: "uatone", amount: "42120408" },
    },
    {
      delegation: {
        delegator_address: "atone1f6w3gudyw02vg7jql2kqyte9us8qa5kxfpkwva",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "335164791.000000000000000000",
      },
      balance: { denom: "uatone", amount: "335164791" },
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
        delegator_address: "atone12pjgwmk672r98fhjrpxg9xz2j29vmu9r472x4s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "974000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "974000000" },
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
        delegator_address: "atone12v736nuytn9rjl5dpqtfxzdg40vtlwqqwcx2h8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "558466316.000000000000000000",
      },
      balance: { denom: "uatone", amount: "558466316" },
    },
    {
      delegation: {
        delegator_address: "atone12dz0vh9gk50wsjc7jvefs7l8fafraalc7stqkl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "558463588.000000000000000000",
      },
      balance: { denom: "uatone", amount: "558463588" },
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
        shares: "5385500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5385500000" },
    },
    {
      delegation: {
        delegator_address: "atone1tykt53m3lgzsdcvux0n9zsk3rqtpppawy355yl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "53000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53000000" },
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
        delegator_address: "atone1t2vtt4qzhcgg04czu327vaxz0v5drg2w7dzugd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "84181997.000000000000000000",
      },
      balance: { denom: "uatone", amount: "84181997" },
    },
    {
      delegation: {
        delegator_address: "atone1tk9ecdjc59ek3r3dsqe83026jxvtlr0kst3j2z",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300382015.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300382015" },
    },
    {
      delegation: {
        delegator_address: "atone1tkvkxz9fqrcd45zp3pxhtz7fhzmxgm5vp4cx33",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "25543342.000000000000000000",
      },
      balance: { denom: "uatone", amount: "25543342" },
    },
    {
      delegation: {
        delegator_address: "atone1tufwp6sgrnh49dme3hs62dafvckmtfaefff0mv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "61197289.000000000000000000",
      },
      balance: { denom: "uatone", amount: "61197289" },
    },
    {
      delegation: {
        delegator_address: "atone1tuwwym47e68v2cg93j20esjc65hmejk749tzkl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16437452.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16437452" },
    },
    {
      delegation: {
        delegator_address: "atone1v9hnnh7qtv8x0sycn8ka064xqg4hw7jzzptjj7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "79002675.000000000000000000",
      },
      balance: { denom: "uatone", amount: "79002675" },
    },
    {
      delegation: {
        delegator_address: "atone1vd359h8vnd4sy2azrpy8wkj57fg594jerls3zj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "55330561.000000000000000000",
      },
      balance: { denom: "uatone", amount: "55330561" },
    },
    {
      delegation: {
        delegator_address: "atone1vdc8gkzgr60s079fwfpczk708spgwqtgtlv48w",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "119456081.000000000000000000",
      },
      balance: { denom: "uatone", amount: "119456081" },
    },
    {
      delegation: {
        delegator_address: "atone1vkngvnelw4tgahyn20sr0kvk9jq8wrfefvh2lr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "211810767.000000000000000000",
      },
      balance: { denom: "uatone", amount: "211810767" },
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
        shares: "224000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "224000000" },
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
        shares: "681112818.000000000000000000",
      },
      balance: { denom: "uatone", amount: "681112818" },
    },
    {
      delegation: {
        delegator_address: "atone1d2cu9qgn9kuhne0ljtjpwzd08tjzcr36eacj0u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16428390.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16428390" },
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
        delegator_address: "atone1ddg9tjkf0vmd3t2mdqpxk2pkk6zssvduphf7js",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "450000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "450000000" },
    },
    {
      delegation: {
        delegator_address: "atone1dn54g3fpsp853jmux297fpj89uufn3zxgmuqfh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "238586659.000000000000000000",
      },
      balance: { denom: "uatone", amount: "238586659" },
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
        shares: "425162375.000000000000000000",
      },
      balance: { denom: "uatone", amount: "425162375" },
    },
    {
      delegation: {
        delegator_address: "atone1wqmkny5hu632yxv6u7ca634p3ewuxq0ph7ewrq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24386130.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24386130" },
    },
    {
      delegation: {
        delegator_address: "atone1wpxr45kyyzzuaz6s8h7g33d0sjxu9d00u0kzxs",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "150010000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "150010000" },
    },
    {
      delegation: {
        delegator_address: "atone1w9gcxhaxj8f0rjlkwwu36e7elj9aqmj3txzhp8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "208000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "208000000" },
    },
    {
      delegation: {
        delegator_address: "atone1w90axmgz99vz9twceexyjspxquhyl0tq93csre",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "50300000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "50300000" },
    },
    {
      delegation: {
        delegator_address: "atone1wd0867jyazkkuepypfsupnunygv38cg8dn7kmp",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "148939022.000000000000000000",
      },
      balance: { denom: "uatone", amount: "148939022" },
    },
    {
      delegation: {
        delegator_address: "atone1wwf8fsyr3xj8a84k5qkf0tkmvq8gmhg3f627pw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "21816362.000000000000000000",
      },
      balance: { denom: "uatone", amount: "21816362" },
    },
    {
      delegation: {
        delegator_address: "atone1wn33dw4upqvtgz70xg264j68026426ahzv9gpn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "52000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "52000000" },
    },
    {
      delegation: {
        delegator_address: "atone1wkep6k06rqh2vls8t5q2jjkdn4z803alu5e235",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "400211897.000000000000000000",
      },
      balance: { denom: "uatone", amount: "400211897" },
    },
    {
      delegation: {
        delegator_address: "atone1wektw7lt8ghvsaclf5zq2jpgpkalgec5xj9f9s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100000000" },
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
        delegator_address: "atone1wlg3r97try92fgvvt5puntmekacwqjep6eve29",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24807008.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24807008" },
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
        shares: "52000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "52000000" },
    },
    {
      delegation: {
        delegator_address: "atone10yp8ey37pjt4y5cr6nl2dstqjyz9f5k93nqlx2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "401190000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "401190000" },
    },
    {
      delegation: {
        delegator_address: "atone10gzg69ktz2ku6swm400ghtpfj77u9hg7ua0t55",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206249381.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206249381" },
    },
    {
      delegation: {
        delegator_address: "atone10guvn4243qg2l8ey8gy9zwttz6v23232k9wm5k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1492234585.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1492234585" },
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
        delegator_address: "atone10mgy3dygkqyg8v82q6k3526r5lgt5q8cucdane",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "65301573.000000000000000000",
      },
      balance: { denom: "uatone", amount: "65301573" },
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
        delegator_address: "atone1sr603679vzkd896wveuay3aft82h0kqwgrq7cw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "78000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "78000000" },
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
        delegator_address: "atone1smq0qz39r8e8awga8zaxlquftkzxldr8z6sc3c",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "30136658.000000000000000000",
      },
      balance: { denom: "uatone", amount: "30136658" },
    },
    {
      delegation: {
        delegator_address: "atone1su0p2tyhph4hv6ud22c057rz3f8gfvrsly8kyy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "297055618.000000000000000000",
      },
      balance: { denom: "uatone", amount: "297055618" },
    },
    {
      delegation: {
        delegator_address: "atone13q84zxycqx2m6kpslgsd835s2fxg0kv52x7aym",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16537602.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16537602" },
    },
    {
      delegation: {
        delegator_address: "atone13zzlsjnauafxz764nvj6mgagrkt5vke37jskxy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1112163228.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1112163228" },
    },
    {
      delegation: {
        delegator_address: "atone13zjs9t80q2y4l2v4d57t8kfz276pjnfmf2npah",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "53000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53000000" },
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
        shares: "145437332.000000000000000000",
      },
      balance: { denom: "uatone", amount: "145437332" },
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
        shares: "358468451.000000000000000000",
      },
      balance: { denom: "uatone", amount: "358468451" },
    },
    {
      delegation: {
        delegator_address: "atone1jtustv4ghy997d6catge3mgklszkvve6uhm576",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "706100000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "706100000" },
    },
    {
      delegation: {
        delegator_address: "atone1jdcxj8ufkmef83wd02jz4vzxmg4tut4pju9yjn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "485220000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "485220000" },
    },
    {
      delegation: {
        delegator_address: "atone1j0qxu2ym2uxdatx9u236crh820c9lrg9az6lpm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16424627.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16424627" },
    },
    {
      delegation: {
        delegator_address: "atone1j3qv4khvemv2fgk9a6g238g3suyqatahxqczdq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "115737350.000000000000000000",
      },
      balance: { denom: "uatone", amount: "115737350" },
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
        shares: "24725913.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24725913" },
    },
    {
      delegation: {
        delegator_address: "atone1nf5f04rk9t56pzdwve6rhe5gvneq6gvkhscwk7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "558241609.000000000000000000",
      },
      balance: { denom: "uatone", amount: "558241609" },
    },
    {
      delegation: {
        delegator_address: "atone1ntqjylqqzw4a22hhljxsmwd7vf3h4eq64tsd0h",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "34249236.000000000000000000",
      },
      balance: { denom: "uatone", amount: "34249236" },
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
        shares: "16510907.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16510907" },
    },
    {
      delegation: {
        delegator_address: "atone1ne67r4tv5sgpkax7q4se0u84gmqh83sd4jcjuh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "117078131.000000000000000000",
      },
      balance: { denom: "uatone", amount: "117078131" },
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
        delegator_address: "atone15plqyst4mg0tz7mgdjglleztv54rm887mdx8n5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "276107194.000000000000000000",
      },
      balance: { denom: "uatone", amount: "276107194" },
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
        shares: "39248247074.000000000000000000",
      },
      balance: { denom: "uatone", amount: "39248247074" },
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
        delegator_address: "atone15wdtw54qpamprk4g4ea0w7elmhl9mhcva90alm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "407740000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "407740000" },
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
        shares: "24422024.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24422024" },
    },
    {
      delegation: {
        delegator_address: "atone15j7g66x5y99d9kjs0zvkvejgyhpgfaeltj70z2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "70000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "70000000" },
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
        shares: "6150000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6150000" },
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
        shares: "16528164.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16528164" },
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
        shares: "16419393.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16419393" },
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
        delegator_address: "atone1485qx5g7eyd5f6w07u6ht5rwauv4s8ygw5pj2s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "754486696.000000000000000000",
      },
      balance: { denom: "uatone", amount: "754486696" },
    },
    {
      delegation: {
        delegator_address: "atone14f5vpj2hdw37rng9zct7llkqax2znrhyg4vg84",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "258262254.000000000000000000",
      },
      balance: { denom: "uatone", amount: "258262254" },
    },
    {
      delegation: {
        delegator_address: "atone14wjel7svz58fhpzhfpdw2adl0wmk9vemy65tjk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24405609.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24405609" },
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
        shares: "148938520.000000000000000000",
      },
      balance: { denom: "uatone", amount: "148938520" },
    },
    {
      delegation: {
        delegator_address: "atone1476qsc899206arz7s4g7uu7p73r2ue8ute7088",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "5355069.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5355069" },
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
        shares: "145000987.000000000000000000",
      },
      balance: { denom: "uatone", amount: "145000987" },
    },
    {
      delegation: {
        delegator_address: "atone1ky4l8why7jctxpwwxwy2en5txagy8j7x5kpc8n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "440989685.000000000000000000",
      },
      balance: { denom: "uatone", amount: "440989685" },
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
        delegator_address: "atone1kgu07r6lhpr0v3dww9a4rldfny5v6fykn2aylm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "143807606.000000000000000000",
      },
      balance: { denom: "uatone", amount: "143807606" },
    },
    {
      delegation: {
        delegator_address: "atone1kvqxv4pgmteqrwrcfj8j3g3vwhcg0zmupnp9nc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24407508.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24407508" },
    },
    {
      delegation: {
        delegator_address: "atone1ka3w345dawr0quc4uac9unv8x43yvfzwzmuh0j",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24451684.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24451684" },
    },
    {
      delegation: {
        delegator_address: "atone1kahgd5qgy23w7djkc43ghpqg2uv52ds0yrgqq3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16508152.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16508152" },
    },
    {
      delegation: {
        delegator_address: "atone1kal8h32wluskjd7gsqze9jlvk4zw7jp3fhq4l5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1864569984.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1864569984" },
    },
    {
      delegation: {
        delegator_address: "atone1hr7tz3qvyhlpghtyfxdlwrfkw5zcjkxngdncue",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "6353588.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6353588" },
    },
    {
      delegation: {
        delegator_address: "atone1hx0875zj5x9p5wlzzxsvttwmmue6ftclcl93vx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "32862142.000000000000000000",
      },
      balance: { denom: "uatone", amount: "32862142" },
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
        shares: "24723597.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24723597" },
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
        shares: "4000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4000" },
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
        shares: "16429204.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16429204" },
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
        shares: "300824166.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300824166" },
    },
    {
      delegation: {
        delegator_address: "atone1hk4tzw5nqc43zt4aukxn5za5fmgk7qqqsjuhnc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "34233032.000000000000000000",
      },
      balance: { denom: "uatone", amount: "34233032" },
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
        shares: "100006655.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100006655" },
    },
    {
      delegation: {
        delegator_address: "atone1cqrky3t78np3a60kmdpylzyv594muagf04t72v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "502890201.000000000000000000",
      },
      balance: { denom: "uatone", amount: "502890201" },
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
        shares: "125000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "125000000" },
    },
    {
      delegation: {
        delegator_address: "atone1cyhtq6e9x7f2haf6rn5l08svmhsrcqlvlkxzf6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "3000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "3000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1c9mkft0d3sdjm3us883270veuww7qe3yju3y8f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "26395039.000000000000000000",
      },
      balance: { denom: "uatone", amount: "26395039" },
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
        shares: "100006647.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100006647" },
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
        delegator_address: "atone1c0uv00l292ph9znzwt5w6uemur5n2kpgesgktz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16506774.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16506774" },
    },
    {
      delegation: {
        delegator_address: "atone1c347zr3z9ck7kwf9csxnn5vj5d06xcnguanma4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "142028393.000000000000000000",
      },
      balance: { denom: "uatone", amount: "142028393" },
    },
    {
      delegation: {
        delegator_address: "atone1cjnc8hlw4gt2p8wydxjdpckywlux327nuc8wtx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100631190.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100631190" },
    },
    {
      delegation: {
        delegator_address: "atone1ccy0709lrhjfu7cg7xtyvp009d70y3zxgc9nn9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "122500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "122500000" },
    },
    {
      delegation: {
        delegator_address: "atone1c7pn0kv2x784cujvthxh5km8xxuftf85angsts",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "676373988.000000000000000000",
      },
      balance: { denom: "uatone", amount: "676373988" },
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
        shares: "48255664.000000000000000000",
      },
      balance: { denom: "uatone", amount: "48255664" },
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
        delegator_address: "atone1esysgy90dkyk5kuhhl3mzv4wq55t3ks0j4enly",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "18263770.000000000000000000",
      },
      balance: { denom: "uatone", amount: "18263770" },
    },
    {
      delegation: {
        delegator_address: "atone1ehvppg4y9ar7dvnhjnqgjwxm2vd8yvsx72hl0v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29306069.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29306069" },
    },
    {
      delegation: {
        delegator_address: "atone1eh6zuf745vp7yqk0dcet7fexexaty4xe9nmfcl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1000000" },
    },
    {
      delegation: {
        delegator_address: "atone1eewlz3pl8rhs083nqrds45kfg93sm7vu7jafhk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "206253752.000000000000000000",
      },
      balance: { denom: "uatone", amount: "206253752" },
    },
    {
      delegation: {
        delegator_address: "atone1eujlkkfsyjf28ey9vce3yp0s0mdd0l94z7lxln",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500000000" },
    },
    {
      delegation: {
        delegator_address: "atone16qyvjuygm7p69ffjzn8szwxjq6l6fafsddzjtc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "30009622.000000000000000000",
      },
      balance: { denom: "uatone", amount: "30009622" },
    },
    {
      delegation: {
        delegator_address: "atone16pyqdev493dszr786lp38d39mncf9ljrryprud",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1787091.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1787091" },
    },
    {
      delegation: {
        delegator_address: "atone16yzm6qjjheafnyvlcjxnkmhj3hullgpl8u85xj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "558017688.000000000000000000",
      },
      balance: { denom: "uatone", amount: "558017688" },
    },
    {
      delegation: {
        delegator_address: "atone16tfjyefrgekf0l8zzccjy2c72nh2mscjvt8pxu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "558187461.000000000000000000",
      },
      balance: { denom: "uatone", amount: "558187461" },
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
        shares: "676391389.000000000000000000",
      },
      balance: { denom: "uatone", amount: "676391389" },
    },
    {
      delegation: {
        delegator_address: "atone1602cse30jdmctgque3j8lc78w2frxzhnga4m5x",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "251000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "251000000" },
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
        shares: "16473698.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16473698" },
    },
    {
      delegation: {
        delegator_address: "atone16j9m4s9hvz2ns2z6fk2s35egca5l6rw9rjupm8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "528814172.000000000000000000",
      },
      balance: { denom: "uatone", amount: "528814172" },
    },
    {
      delegation: {
        delegator_address: "atone16kmc5esy37tu6jpywhmgts889ukewwy5nv5h38",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24740801.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24740801" },
    },
    {
      delegation: {
        delegator_address: "atone16hk3m0pnmswlvcpptq2v9admexwqp85tgp2fn7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "118048990.000000000000000000",
      },
      balance: { denom: "uatone", amount: "118048990" },
    },
    {
      delegation: {
        delegator_address: "atone166au0wp40n0p0yrj7vf9gce7yre3wyq0f7nmek",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10776968125.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10776968125" },
    },
    {
      delegation: {
        delegator_address: "atone16awp53yurhwyu6sl7tmr3jufjg6pttguk3r37v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16436852.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16436852" },
    },
    {
      delegation: {
        delegator_address: "atone1675kjxe5a9lzjgu3wmgkn5rp9zta6wh8pyxykn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "95476157.000000000000000000",
      },
      balance: { denom: "uatone", amount: "95476157" },
    },
    {
      delegation: {
        delegator_address: "atone1myj2ethr8q5wh6rhq0rqmqmhtvu2tc84qfht8n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "118059954.000000000000000000",
      },
      balance: { denom: "uatone", amount: "118059954" },
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
        shares: "215000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "215000000" },
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
        shares: "16454051.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16454051" },
    },
    {
      delegation: {
        delegator_address: "atone1uznr6lmlyx66er4dvw54c7e25pyr0qg3at2q67",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1999964711.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1999964711" },
    },
    {
      delegation: {
        delegator_address: "atone1ukt0nsy3drwzmm08ane6zarvmjpts27p0cxdls",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "239339339.000000000000000000",
      },
      balance: { denom: "uatone", amount: "239339339" },
    },
    {
      delegation: {
        delegator_address: "atone1ucnzn86zszgjg8umz7ujzqvrcryxu46wjm3pfh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "211000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "211000000" },
    },
    {
      delegation: {
        delegator_address: "atone1uey077ygnn8zz78ce9g05vkzetf32er4vg50hj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "230968838.000000000000000000",
      },
      balance: { denom: "uatone", amount: "230968838" },
    },
    {
      delegation: {
        delegator_address: "atone1uevdz6s8j4l45n5ap3uzxcfjel9nfpmapf8790",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "119531652.000000000000000000",
      },
      balance: { denom: "uatone", amount: "119531652" },
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
        shares: "148939573.000000000000000000",
      },
      balance: { denom: "uatone", amount: "148939573" },
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
        delegator_address: "atone1adnktzkssw5e2lmqlvz8vykfyh9y3xm8f65c72",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16528256.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16528256" },
    },
    {
      delegation: {
        delegator_address: "atone1a3858f250ve4t6rp9ef2svpr7sj20aaxwlg6yk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "211071708.000000000000000000",
      },
      balance: { denom: "uatone", amount: "211071708" },
    },
    {
      delegation: {
        delegator_address: "atone1ajde2jnuw6tzkskyyfx7sgt059kryzktf6f54a",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "34353419.000000000000000000",
      },
      balance: { denom: "uatone", amount: "34353419" },
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
        shares: "631614698.000000000000000000",
      },
      balance: { denom: "uatone", amount: "631614698" },
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
        shares: "30200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "30200000" },
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
        delegator_address: "atone17hr0kwjgklazhufht4sdpllmvm6047wd66z6s5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "503005884.000000000000000000",
      },
      balance: { denom: "uatone", amount: "503005884" },
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
        delegator_address: "atone1lx2zuc7ls0rw0jf89y9366fg7w5l9clgu74lj3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300382203.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300382203" },
    },
    {
      delegation: {
        delegator_address: "atone1lx0my7kk7uy75y68r602ga62l7n8cwawxv8gts",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "429228324.000000000000000000",
      },
      balance: { denom: "uatone", amount: "429228324" },
    },
    {
      delegation: {
        delegator_address: "atone1lft50ldy04u3szywhg38cnfpxfg7r548cx5ygl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2005185008.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2005185008" },
    },
    {
      delegation: {
        delegator_address: "atone1l2u72c838qe5yc2mn90an2cuqddehflm4hr07k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "502418267.000000000000000000",
      },
      balance: { denom: "uatone", amount: "502418267" },
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
        shares: "35525079.000000000000000000",
      },
      balance: { denom: "uatone", amount: "35525079" },
    },
    {
      delegation: {
        delegator_address: "atone1lwnk6d7vuqhrma0q2vgcn5ezs5c4gtser28gme",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16508881.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16508881" },
    },
    {
      delegation: {
        delegator_address: "atone1l0tdzdyxsayestm8lu95xehgtc0s825pmq5rx5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10219237237.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10219237237" },
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
        shares: "16509995.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16509995" },
    },
    {
      delegation: {
        delegator_address: "atone1lu3nn4ml05h02hu2pncek40cu46fpdpjr4lwhn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "16511882.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16511882" },
    },
    {
      delegation: {
        delegator_address: "atone1lul42lw2p4mv2mlte89cf4qnfg2jfduuz9syur",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1287000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1287000000" },
    },
    {
      delegation: {
        delegator_address: "atone1l7jdfh5ze7dzzyextvvk445dr9wy43qstt6xax",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "15753216.000000000000000000",
      },
      balance: { denom: "uatone", amount: "15753216" },
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
        shares: "2000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2000000" },
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
        shares: "24769919.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24769919" },
    },
    {
      delegation: {
        delegator_address: "atone1q2833t82zthataz0v6zracejyu7xfqh7mu2sw4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "301023872.000000000000000000",
      },
      balance: { denom: "uatone", amount: "301023872" },
    },
    {
      delegation: {
        delegator_address: "atone1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6nyslal2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "12542200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "12542200000" },
    },
    {
      delegation: {
        delegator_address: "atone1qdj33jvvj67vyyhh454q6u7u8scplhvq8l3ren",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200004408.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200004408" },
    },
    {
      delegation: {
        delegator_address: "atone1qs4eqtc0f28943s9q8jzcncr5pkmcgkf07lenq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "286200000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "286200000" },
    },
    {
      delegation: {
        delegator_address: "atone1qjxfq62d2wt3s3elra9v9zqxtjztk0qr8sasum",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "50300000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "50300000" },
    },
    {
      delegation: {
        delegator_address: "atone1q648z887yenz2gxkq4msa252nvp427tfsvh8hu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1579574656.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1579574656" },
    },
    {
      delegation: {
        delegator_address: "atone1qm0q9ec5ylrgz2sz78j53xnrfcsse74a23ad2g",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "66076678.000000000000000000",
      },
      balance: { denom: "uatone", amount: "66076678" },
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
        shares: "13450000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "13450000" },
    },
    {
      delegation: {
        delegator_address: "atone1pnc97f6vyvgagq7za0u62ln48akk2nxmfnpwek",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "53580628.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53580628" },
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
        shares: "53594908.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53594908" },
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
        shares: "19989936.000000000000000000",
      },
      balance: { denom: "uatone", amount: "19989936" },
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
        shares: "63011462.000000000000000000",
      },
      balance: { denom: "uatone", amount: "63011462" },
    },
    {
      delegation: {
        delegator_address: "atone1pufy8qm4qsnxxapugc3l2vvmtpp0vk0suuqlp6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "92881174.000000000000000000",
      },
      balance: { denom: "uatone", amount: "92881174" },
    },
    {
      delegation: {
        delegator_address: "atone1pa56a9fg5jhxrduru275vn2y7fpkxmx6rtg9mm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "101765473.000000000000000000",
      },
      balance: { denom: "uatone", amount: "101765473" },
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
        shares: "76944793.000000000000000000",
      },
      balance: { denom: "uatone", amount: "76944793" },
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
        shares: "50997560.000000000000000000",
      },
      balance: { denom: "uatone", amount: "50997560" },
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
        shares: "93321100.000000000000000000",
      },
      balance: { denom: "uatone", amount: "93321100" },
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
        delegator_address: "atone1z692deslv3tgqcf7yjzu6l0x5p23jzw50vsdv5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29119725.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29119725" },
    },
    {
      delegation: {
        delegator_address: "atone1rxwnxskx7w9jjecfzjve35juw3qxughs9nwku7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1100000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1100000000" },
    },
    {
      delegation: {
        delegator_address: "atone1rxhswdq9852jldxvfxs53x3aql9t927kekln06",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "96241691.000000000000000000",
      },
      balance: { denom: "uatone", amount: "96241691" },
    },
    {
      delegation: {
        delegator_address: "atone1rfvtz0f7wkcj62t648s3k20ecjh7frn90nyys0",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "3402117.000000000000000000",
      },
      balance: { denom: "uatone", amount: "3402117" },
    },
    {
      delegation: {
        delegator_address: "atone1rf0s9p99t3m0vnwcf0jy98hwedlrul90tsvp4s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "3373957677.000000000000000000",
      },
      balance: { denom: "uatone", amount: "3373957677" },
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
        delegator_address: "atone1rnht2un7dhe9x0450tkd9uezs3ts43sldn7msn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "18000070.000000000000000000",
      },
      balance: { denom: "uatone", amount: "18000070" },
    },
    {
      delegation: {
        delegator_address: "atone1rhyz30vg0c6ed69rmz43h35wn92ucksrclvndw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "2280500478.000000000000000000",
      },
      balance: { denom: "uatone", amount: "2280500478" },
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
        delegator_address: "atone1r65lzzqauzca4ut8azectvv4dts8jy0hnhn074",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "96952304.000000000000000000",
      },
      balance: { denom: "uatone", amount: "96952304" },
    },
    {
      delegation: {
        delegator_address: "atone1rmtcl7m2pz63cgsvfxayuh54drk9sa9lf5mvvq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "41878000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "41878000" },
    },
    {
      delegation: {
        delegator_address: "atone1rudl9ygrudq66lwkf3j02thecfkmzkvf5ww5vl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29827447.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29827447" },
    },
    {
      delegation: {
        delegator_address: "atone1rlmkgp4htnlvfkcq9n6hpl702fdsr4q30j4jrg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24068686.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24068686" },
    },
    {
      delegation: {
        delegator_address: "atone1yq7n7f6ekn8rcxmlc033ea58kw5z0ly3w4ay8w",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300004421.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300004421" },
    },
    {
      delegation: {
        delegator_address: "atone1yzzxtvaus8kd0qhc7fvyuyrudnjqwzg4e7vajk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1509824.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1509824" },
    },
    {
      delegation: {
        delegator_address: "atone1yyxsxmf635pxvm0hlfucdegprh55xsxpdc56fe",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200010026.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200010026" },
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
        shares: "10000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ysthp74n2wxt4flmzyxrhza8rvxzr9mclfes0v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "500017077.000000000000000000",
      },
      balance: { denom: "uatone", amount: "500017077" },
    },
    {
      delegation: {
        delegator_address: "atone1y5jjkfkxzwr7dackdn9d6cmxc9xvtzdhy7hcy2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "23920398.000000000000000000",
      },
      balance: { denom: "uatone", amount: "23920398" },
    },
    {
      delegation: {
        delegator_address: "atone1y4m793g8n2sldvtnaxztl2usqqerhd99h7l00j",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24012773.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24012773" },
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
        shares: "11419284.000000000000000000",
      },
      balance: { denom: "uatone", amount: "11419284" },
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
        shares: "231000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "231000000" },
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
        shares: "230799861.000000000000000000",
      },
      balance: { denom: "uatone", amount: "230799861" },
    },
    {
      delegation: {
        delegator_address: "atone195uet0szm7hwaps2k99ywscsdl7hjcy8k7qeuh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200004415.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200004415" },
    },
    {
      delegation: {
        delegator_address: "atone194sg0pj6p5nk7dpnuh7wwm0evlwhw8zyswmmdd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200004415.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200004415" },
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
        shares: "53545562.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53545562" },
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
        delegator_address: "atone1xmv9u389awdw6qpvekwsnkv7zvlyh3qmpqhfr9",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "30682324.000000000000000000",
      },
      balance: { denom: "uatone", amount: "30682324" },
    },
    {
      delegation: {
        delegator_address: "atone1xupjdffnax8tkuzypjqswhz906lhljg4dk8wsg",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "23968426.000000000000000000",
      },
      balance: { denom: "uatone", amount: "23968426" },
    },
    {
      delegation: {
        delegator_address: "atone18qn5q83vh6c5nnz7nlnrcgpxjac8plq833v00f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100646948.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100646948" },
    },
    {
      delegation: {
        delegator_address: "atone18rez2m9ffwuku0q4q8t5cjz4rpgku4vuvzjnn6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "23926766.000000000000000000",
      },
      balance: { denom: "uatone", amount: "23926766" },
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
        shares: "53022510.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53022510" },
    },
    {
      delegation: {
        delegator_address: "atone188pjlw6q8xtfhuzfgzstux8vg379na680h85y4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "96046672.000000000000000000",
      },
      balance: { denom: "uatone", amount: "96046672" },
    },
    {
      delegation: {
        delegator_address: "atone18gxg34cp8r4gmsm5vgkaafg4fw4gzfur3xj7cx",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29117518.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29117518" },
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
        shares: "130872257.000000000000000000",
      },
      balance: { denom: "uatone", amount: "130872257" },
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
        shares: "23937537.000000000000000000",
      },
      balance: { denom: "uatone", amount: "23937537" },
    },
    {
      delegation: {
        delegator_address: "atone18crvw4qkw8ju6s9jqyw6w3wx5ghh3unvd6zgw5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "418596243.000000000000000000",
      },
      balance: { denom: "uatone", amount: "418596243" },
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
        shares: "456500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "456500000" },
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
        shares: "1404636087.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1404636087" },
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
        delegator_address: "atone1g238t79lec906hgnvpnyu4mywltl0kd66uy95g",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29129219.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29129219" },
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
        shares: "209988690.000000000000000000",
      },
      balance: { denom: "uatone", amount: "209988690" },
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
        shares: "19105088.000000000000000000",
      },
      balance: { denom: "uatone", amount: "19105088" },
    },
    {
      delegation: {
        delegator_address: "atone1g06zqtasu0ca5k5yece6luqj3ke2w365r02rwv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1467461496.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1467461496" },
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
        shares: "445000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "445000000" },
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
        shares: "23925831.000000000000000000",
      },
      balance: { denom: "uatone", amount: "23925831" },
    },
    {
      delegation: {
        delegator_address: "atone1gmldc4msum7fer0mp3dq4u9k3wnemw8q5d4jp5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24738190.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24738190" },
    },
    {
      delegation: {
        delegator_address: "atone1frwewwrswegyuxsz800zeaqesq5k678xe5hd9p",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "591400000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "591400000" },
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
        shares: "29397871.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29397871" },
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
        shares: "109388655.000000000000000000",
      },
      balance: { denom: "uatone", amount: "109388655" },
    },
    {
      delegation: {
        delegator_address: "atone1f44qd2yw4f007dqddltptaqyqly9qs05n8edum",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "225000041.000000000000000000",
      },
      balance: { denom: "uatone", amount: "225000041" },
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
        shares: "93790408.000000000000000000",
      },
      balance: { denom: "uatone", amount: "93790408" },
    },
    {
      delegation: {
        delegator_address: "atone1f6w3gudyw02vg7jql2kqyte9us8qa5kxfpkwva",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "335164791.000000000000000000",
      },
      balance: { denom: "uatone", amount: "335164791" },
    },
    {
      delegation: {
        delegator_address: "atone1f6klmvl7ftqntv2mpcvnhujf3vs2xl2z9dawa7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "30585374.000000000000000000",
      },
      balance: { denom: "uatone", amount: "30585374" },
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
        shares: "1740447971.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1740447971" },
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
        shares: "53585858.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53585858" },
    },
    {
      delegation: {
        delegator_address: "atone12v736nuytn9rjl5dpqtfxzdg40vtlwqqwcx2h8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "577720135.000000000000000000",
      },
      balance: { denom: "uatone", amount: "577720135" },
    },
    {
      delegation: {
        delegator_address: "atone12dz0vh9gk50wsjc7jvefs7l8fafraalc7stqkl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "577717683.000000000000000000",
      },
      balance: { denom: "uatone", amount: "577717683" },
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
        shares: "5555000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5555000000" },
    },
    {
      delegation: {
        delegator_address: "atone1tykt53m3lgzsdcvux0n9zsk3rqtpppawy355yl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "53000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53000000" },
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
        shares: "701000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "701000000" },
    },
    {
      delegation: {
        delegator_address: "atone1t2vtt4qzhcgg04czu327vaxz0v5drg2w7dzugd",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100381997.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100381997" },
    },
    {
      delegation: {
        delegator_address: "atone1td0nm484l83c4yp3pna9h03jg34wfwrz04weml",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "281000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "281000000" },
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
        shares: "25543342.000000000000000000",
      },
      balance: { denom: "uatone", amount: "25543342" },
    },
    {
      delegation: {
        delegator_address: "atone1tufwp6sgrnh49dme3hs62dafvckmtfaefff0mv",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "100697289.000000000000000000",
      },
      balance: { denom: "uatone", amount: "100697289" },
    },
    {
      delegation: {
        delegator_address: "atone1tuwwym47e68v2cg93j20esjc65hmejk749tzkl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "23951106.000000000000000000",
      },
      balance: { denom: "uatone", amount: "23951106" },
    },
    {
      delegation: {
        delegator_address: "atone1t7gdzehwj5snn8hqg97dejuzj7eym42azeyswe",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200004419.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200004419" },
    },
    {
      delegation: {
        delegator_address: "atone1v9hnnh7qtv8x0sycn8ka064xqg4hw7jzzptjj7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "81648064.000000000000000000",
      },
      balance: { denom: "uatone", amount: "81648064" },
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
        shares: "123588809.000000000000000000",
      },
      balance: { denom: "uatone", amount: "123588809" },
    },
    {
      delegation: {
        delegator_address: "atone1vw9zdq0yxuazrsa5hsksd5apdsme2etvr8fgd2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200004411.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200004411" },
    },
    {
      delegation: {
        delegator_address: "atone1vkngvnelw4tgahyn20sr0kvk9jq8wrfefvh2lr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "231215488.000000000000000000",
      },
      balance: { denom: "uatone", amount: "231215488" },
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
        shares: "230000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "230000000" },
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
        delegator_address: "atone1d2cu9qgn9kuhne0ljtjpwzd08tjzcr36eacj0u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "23937860.000000000000000000",
      },
      balance: { denom: "uatone", amount: "23937860" },
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
        delegator_address: "atone1ddg9tjkf0vmd3t2mdqpxk2pkk6zssvduphf7js",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "450000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "450000000" },
    },
    {
      delegation: {
        delegator_address: "atone1dn54g3fpsp853jmux297fpj89uufn3zxgmuqfh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "238586659.000000000000000000",
      },
      balance: { denom: "uatone", amount: "238586659" },
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
        shares: "425162375.000000000000000000",
      },
      balance: { denom: "uatone", amount: "425162375" },
    },
    {
      delegation: {
        delegator_address: "atone1wqmkny5hu632yxv6u7ca634p3ewuxq0ph7ewrq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29125129.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29125129" },
    },
    {
      delegation: {
        delegator_address: "atone1wr0mqeyea45u9av63srtvgr553nyg6l9v8kd2u",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "51187564.000000000000000000",
      },
      balance: { denom: "uatone", amount: "51187564" },
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
        delegator_address: "atone1w90axmgz99vz9twceexyjspxquhyl0tq93csre",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "50300000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "50300000" },
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
        delegator_address: "atone1wwf8fsyr3xj8a84k5qkf0tkmvq8gmhg3f627pw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "70946736.000000000000000000",
      },
      balance: { denom: "uatone", amount: "70946736" },
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
        shares: "400211897.000000000000000000",
      },
      balance: { denom: "uatone", amount: "400211897" },
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
        delegator_address: "atone1wlg3r97try92fgvvt5puntmekacwqjep6eve29",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "26566586.000000000000000000",
      },
      balance: { denom: "uatone", amount: "26566586" },
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
        delegator_address: "atone10yp8ey37pjt4y5cr6nl2dstqjyz9f5k93nqlx2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "401190000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "401190000" },
    },
    {
      delegation: {
        delegator_address: "atone10gzg69ktz2ku6swm400ghtpfj77u9hg7ua0t55",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "213223437.000000000000000000",
      },
      balance: { denom: "uatone", amount: "213223437" },
    },
    {
      delegation: {
        delegator_address: "atone10guvn4243qg2l8ey8gy9zwttz6v23232k9wm5k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1492234585.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1492234585" },
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
        shares: "53529621.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53529621" },
    },
    {
      delegation: {
        delegator_address: "atone10mgy3dygkqyg8v82q6k3526r5lgt5q8cucdane",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "67506806.000000000000000000",
      },
      balance: { denom: "uatone", amount: "67506806" },
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
        shares: "300004410.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300004410" },
    },
    {
      delegation: {
        delegator_address: "atone1sr603679vzkd896wveuay3aft82h0kqwgrq7cw",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "78000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "78000000" },
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
        shares: "200004408.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200004408" },
    },
    {
      delegation: {
        delegator_address: "atone1smq0qz39r8e8awga8zaxlquftkzxldr8z6sc3c",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "30136658.000000000000000000",
      },
      balance: { denom: "uatone", amount: "30136658" },
    },
    {
      delegation: {
        delegator_address: "atone1su0p2tyhph4hv6ud22c057rz3f8gfvrsly8kyy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "307100175.000000000000000000",
      },
      balance: { denom: "uatone", amount: "307100175" },
    },
    {
      delegation: {
        delegator_address: "atone1sltq5xnhhh02zelpphpkqqfy48w7rg47s9zjr6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "355500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "355500000" },
    },
    {
      delegation: {
        delegator_address: "atone13q84zxycqx2m6kpslgsd835s2fxg0kv52x7aym",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "96441527.000000000000000000",
      },
      balance: { denom: "uatone", amount: "96441527" },
    },
    {
      delegation: {
        delegator_address: "atone13zzlsjnauafxz764nvj6mgagrkt5vke37jskxy",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1120078903.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1120078903" },
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
        shares: "9000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "9000000" },
    },
    {
      delegation: {
        delegator_address: "atone1322eyxkxyz8d00x40mp9yzlwcvx5wnsdmul6e2",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "93283405.000000000000000000",
      },
      balance: { denom: "uatone", amount: "93283405" },
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
        shares: "200004414.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200004414" },
    },
    {
      delegation: {
        delegator_address: "atone135vz559nhcmvyta9y5juee8fs949nc8c7k67yr",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200004408.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200004408" },
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
        shares: "360256909.000000000000000000",
      },
      balance: { denom: "uatone", amount: "360256909" },
    },
    {
      delegation: {
        delegator_address: "atone1jtustv4ghy997d6catge3mgklszkvve6uhm576",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "815665115.000000000000000000",
      },
      balance: { denom: "uatone", amount: "815665115" },
    },
    {
      delegation: {
        delegator_address: "atone1j0qxu2ym2uxdatx9u236crh820c9lrg9az6lpm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "23931961.000000000000000000",
      },
      balance: { denom: "uatone", amount: "23931961" },
    },
    {
      delegation: {
        delegator_address: "atone1j3qv4khvemv2fgk9a6g238g3suyqatahxqczdq",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "119741432.000000000000000000",
      },
      balance: { denom: "uatone", amount: "119741432" },
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
        shares: "53567451.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53567451" },
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
        shares: "24725913.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24725913" },
    },
    {
      delegation: {
        delegator_address: "atone1nf5f04rk9t56pzdwve6rhe5gvneq6gvkhscwk7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "577486390.000000000000000000",
      },
      balance: { denom: "uatone", amount: "577486390" },
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
        shares: "300004414.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300004414" },
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
        shares: "24057885.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24057885" },
    },
    {
      delegation: {
        delegator_address: "atone1ne67r4tv5sgpkax7q4se0u84gmqh83sd4jcjuh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "121128615.000000000000000000",
      },
      balance: { denom: "uatone", amount: "121128615" },
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
        delegator_address: "atone15plqyst4mg0tz7mgdjglleztv54rm887mdx8n5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "285051499.000000000000000000",
      },
      balance: { denom: "uatone", amount: "285051499" },
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
        shares: "39284247076.000000000000000000",
      },
      balance: { denom: "uatone", amount: "39284247076" },
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
        delegator_address: "atone15wdtw54qpamprk4g4ea0w7elmhl9mhcva90alm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1001040000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1001040000" },
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
        shares: "29167662.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29167662" },
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
        shares: "70000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "70000000" },
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
        shares: "6300000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "6300000" },
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
        shares: "150000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "150000000" },
    },
    {
      delegation: {
        delegator_address: "atone15mzzewuylf8a8y9ve2e07e5wckjq75kpkspavm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "53557758.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53557758" },
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
        shares: "96542488.000000000000000000",
      },
      balance: { denom: "uatone", amount: "96542488" },
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
        shares: "78126104.000000000000000000",
      },
      balance: { denom: "uatone", amount: "78126104" },
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
        delegator_address: "atone14f5vpj2hdw37rng9zct7llkqax2znrhyg4vg84",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "267997497.000000000000000000",
      },
      balance: { denom: "uatone", amount: "267997497" },
    },
    {
      delegation: {
        delegator_address: "atone14wjel7svz58fhpzhfpdw2adl0wmk9vemy65tjk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29148308.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29148308" },
    },
    {
      delegation: {
        delegator_address: "atone14sqxm7fn47tkm4lx9e7yd3wzuym2h4tdu2qj89",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "53570196.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53570196" },
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
        shares: "5355069.000000000000000000",
      },
      balance: { denom: "uatone", amount: "5355069" },
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
        shares: "1728334743.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1728334743" },
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
        shares: "4610691.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4610691" },
    },
    {
      delegation: {
        delegator_address: "atone1kgce2j9uepahgug8c8c6vmxevhmmux7smltu7v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "200004421.000000000000000000",
      },
      balance: { denom: "uatone", amount: "200004421" },
    },
    {
      delegation: {
        delegator_address: "atone1kgu07r6lhpr0v3dww9a4rldfny5v6fykn2aylm",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "148670331.000000000000000000",
      },
      balance: { denom: "uatone", amount: "148670331" },
    },
    {
      delegation: {
        delegator_address: "atone1kvqxv4pgmteqrwrcfj8j3g3vwhcg0zmupnp9nc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "29150625.000000000000000000",
      },
      balance: { denom: "uatone", amount: "29150625" },
    },
    {
      delegation: {
        delegator_address: "atone1kvq4n4n4x3gqlyfr672pjyqn73c2hdkue6lgaz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "574000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "574000000" },
    },
    {
      delegation: {
        delegator_address: "atone1ka3w345dawr0quc4uac9unv8x43yvfzwzmuh0j",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24451684.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24451684" },
    },
    {
      delegation: {
        delegator_address: "atone1kahgd5qgy23w7djkc43ghpqg2uv52ds0yrgqq3",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24053651.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24053651" },
    },
    {
      delegation: {
        delegator_address: "atone1kal8h32wluskjd7gsqze9jlvk4zw7jp3fhq4l5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1927620000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1927620000" },
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
        shares: "24723597.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24723597" },
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
        shares: "4000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "4000" },
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
        shares: "53026951.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53026951" },
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
        shares: "259830944.000000000000000000",
      },
      balance: { denom: "uatone", amount: "259830944" },
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
        shares: "131000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "131000000" },
    },
    {
      delegation: {
        delegator_address: "atone1cyhtq6e9x7f2haf6rn5l08svmhsrcqlvlkxzf6",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "3000000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "3000000000" },
    },
    {
      delegation: {
        delegator_address: "atone1c9xa3dp0970yrp8gj8rrwgne7al7q0cv6uws76",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "700000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "700000" },
    },
    {
      delegation: {
        delegator_address: "atone1c9mkft0d3sdjm3us883270veuww7qe3yju3y8f",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "28235039.000000000000000000",
      },
      balance: { denom: "uatone", amount: "28235039" },
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
        shares: "53479601.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53479601" },
    },
    {
      delegation: {
        delegator_address: "atone1c0uv00l292ph9znzwt5w6uemur5n2kpgesgktz",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "96941863.000000000000000000",
      },
      balance: { denom: "uatone", amount: "96941863" },
    },
    {
      delegation: {
        delegator_address: "atone1c347zr3z9ck7kwf9csxnn5vj5d06xcnguanma4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "143366484.000000000000000000",
      },
      balance: { denom: "uatone", amount: "143366484" },
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
        shares: "122500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "122500000" },
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
        shares: "49962817.000000000000000000",
      },
      balance: { denom: "uatone", amount: "49962817" },
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
        shares: "32705767.000000000000000000",
      },
      balance: { denom: "uatone", amount: "32705767" },
    },
    {
      delegation: {
        delegator_address: "atone1eewlz3pl8rhs083nqrds45kfg93sm7vu7jafhk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "213228111.000000000000000000",
      },
      balance: { denom: "uatone", amount: "213228111" },
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
        shares: "666000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "666000000" },
    },
    {
      delegation: {
        delegator_address: "atone16qyvjuygm7p69ffjzn8szwxjq6l6fafsddzjtc",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "30009622.000000000000000000",
      },
      balance: { denom: "uatone", amount: "30009622" },
    },
    {
      delegation: {
        delegator_address: "atone16pyqdev493dszr786lp38d39mncf9ljrryprud",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1787091.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1787091" },
    },
    {
      delegation: {
        delegator_address: "atone16pnm0sxpta3t9u7s9ujd7lkhxhdha05tafc93s",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "869105541.000000000000000000",
      },
      balance: { denom: "uatone", amount: "869105541" },
    },
    {
      delegation: {
        delegator_address: "atone16yzm6qjjheafnyvlcjxnkmhj3hullgpl8u85xj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "577481847.000000000000000000",
      },
      balance: { denom: "uatone", amount: "577481847" },
    },
    {
      delegation: {
        delegator_address: "atone1628l2qz5mgdf890wt5fksf3c8smw0k783aqsy4",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "44500000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "44500000" },
    },
    {
      delegation: {
        delegator_address: "atone16tfjyefrgekf0l8zzccjy2c72nh2mscjvt8pxu",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "579467308.000000000000000000",
      },
      balance: { denom: "uatone", amount: "579467308" },
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
        shares: "251000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "251000000" },
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
        shares: "17092782.000000000000000000",
      },
      balance: { denom: "uatone", amount: "17092782" },
    },
    {
      delegation: {
        delegator_address: "atone16j9m4s9hvz2ns2z6fk2s35egca5l6rw9rjupm8",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "546695832.000000000000000000",
      },
      balance: { denom: "uatone", amount: "546695832" },
    },
    {
      delegation: {
        delegator_address: "atone16kmc5esy37tu6jpywhmgts889ukewwy5nv5h38",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24740801.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24740801" },
    },
    {
      delegation: {
        delegator_address: "atone16hk3m0pnmswlvcpptq2v9admexwqp85tgp2fn7",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "122133113.000000000000000000",
      },
      balance: { denom: "uatone", amount: "122133113" },
    },
    {
      delegation: {
        delegator_address: "atone166au0wp40n0p0yrj7vf9gce7yre3wyq0f7nmek",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "11141391316.000000000000000000",
      },
      balance: { denom: "uatone", amount: "11141391316" },
    },
    {
      delegation: {
        delegator_address: "atone16awp53yurhwyu6sl7tmr3jufjg6pttguk3r37v",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "23949757.000000000000000000",
      },
      balance: { denom: "uatone", amount: "23949757" },
    },
    {
      delegation: {
        delegator_address: "atone1675kjxe5a9lzjgu3wmgkn5rp9zta6wh8pyxykn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "98779340.000000000000000000",
      },
      balance: { denom: "uatone", amount: "98779340" },
    },
    {
      delegation: {
        delegator_address: "atone1myj2ethr8q5wh6rhq0rqmqmhtvu2tc84qfht8n",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "122144454.000000000000000000",
      },
      balance: { denom: "uatone", amount: "122144454" },
    },
    {
      delegation: {
        delegator_address: "atone1m846wav7usstl6upmj377k8q9zmvk3jwzhurex",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "300004414.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300004414" },
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
        shares: "215000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "215000000" },
    },
    {
      delegation: {
        delegator_address: "atone1mmf9nqwjnsx7ghyt3aq45w59xdj0wt3kuudn8z",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "25000002.000000000000000000",
      },
      balance: { denom: "uatone", amount: "25000002" },
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
        shares: "77271287.000000000000000000",
      },
      balance: { denom: "uatone", amount: "77271287" },
    },
    {
      delegation: {
        delegator_address: "atone1uznr6lmlyx66er4dvw54c7e25pyr0qg3at2q67",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1999964711.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1999964711" },
    },
    {
      delegation: {
        delegator_address: "atone1ukt0nsy3drwzmm08ane6zarvmjpts27p0cxdls",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "247432554.000000000000000000",
      },
      balance: { denom: "uatone", amount: "247432554" },
    },
    {
      delegation: {
        delegator_address: "atone1ucnzn86zszgjg8umz7ujzqvrcryxu46wjm3pfh",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "211000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "211000000" },
    },
    {
      delegation: {
        delegator_address: "atone1uey077ygnn8zz78ce9g05vkzetf32er4vg50hj",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "247968838.000000000000000000",
      },
      balance: { denom: "uatone", amount: "247968838" },
    },
    {
      delegation: {
        delegator_address: "atone1uevdz6s8j4l45n5ap3uzxcfjel9nfpmapf8790",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "123667085.000000000000000000",
      },
      balance: { denom: "uatone", amount: "123667085" },
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
        shares: "300004417.000000000000000000",
      },
      balance: { denom: "uatone", amount: "300004417" },
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
        shares: "50000000.000000000000000000",
      },
      balance: { denom: "uatone", amount: "50000000" },
    },
    {
      delegation: {
        delegator_address: "atone1adnktzkssw5e2lmqlvz8vykfyh9y3xm8f65c72",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24082932.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24082932" },
    },
    {
      delegation: {
        delegator_address: "atone1a3858f250ve4t6rp9ef2svpr7sj20aaxwlg6yk",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "224309171.000000000000000000",
      },
      balance: { denom: "uatone", amount: "224309171" },
    },
    {
      delegation: {
        delegator_address: "atone1ajde2jnuw6tzkskyyfx7sgt059kryzktf6f54a",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "35285080.000000000000000000",
      },
      balance: { denom: "uatone", amount: "35285080" },
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
        shares: "644247665.000000000000000000",
      },
      balance: { denom: "uatone", amount: "644247665" },
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
        delegator_address: "atone17hr0kwjgklazhufht4sdpllmvm6047wd66z6s5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "258816817.000000000000000000",
      },
      balance: { denom: "uatone", amount: "258816817" },
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
        shares: "53526163.000000000000000000",
      },
      balance: { denom: "uatone", amount: "53526163" },
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
        shares: "443742846.000000000000000000",
      },
      balance: { denom: "uatone", amount: "443742846" },
    },
    {
      delegation: {
        delegator_address: "atone1lft50ldy04u3szywhg38cnfpxfg7r548cx5ygl",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "1542987625.000000000000000000",
      },
      balance: { denom: "uatone", amount: "1542987625" },
    },
    {
      delegation: {
        delegator_address: "atone1l2u72c838qe5yc2mn90an2cuqddehflm4hr07k",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "518468778.000000000000000000",
      },
      balance: { denom: "uatone", amount: "518468778" },
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
        shares: "36637155.000000000000000000",
      },
      balance: { denom: "uatone", amount: "36637155" },
    },
    {
      delegation: {
        delegator_address: "atone1lwnk6d7vuqhrma0q2vgcn5ezs5c4gtser28gme",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24054981.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24054981" },
    },
    {
      delegation: {
        delegator_address: "atone1l0tdzdyxsayestm8lu95xehgtc0s825pmq5rx5",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "10564805190.000000000000000000",
      },
      balance: { denom: "uatone", amount: "10564805190" },
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
        shares: "24056375.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24056375" },
    },
    {
      delegation: {
        delegator_address: "atone1lu3nn4ml05h02hu2pncek40cu46fpdpjr4lwhn",
        validator_address:
          "atonevaloper1603r7hdvmntnh67rr6gnf3myg5sj0020rdm774",
        shares: "24059067.000000000000000000",
      },
      balance: { denom: "uatone", amount: "24059067" },
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
        shares: "16296300.000000000000000000",
      },
      balance: { denom: "uatone", amount: "16296300" },
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
          j.delegation.delegator_address === txs[i].delegation.delegator_address
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
