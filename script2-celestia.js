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
        shares: "2333800000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2333800000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1qe6q4wwjzse3rkv07czlevhngxn56susv386gz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2836710716.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2836710716",
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
        shares: "1552200.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1552200",
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
        shares: "190054390.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "190054390",
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
        shares: "541944976.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "541944976",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1p7pucfsptdz7mpy32udr52v04edfqrqr86vzj3",
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
        delegator_address: "celestia1rzpz4fqmrcxkvdnskmx2k9wdqxv5ne3q4n3ue3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1159357153.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1159357153",
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
        shares: "67700000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "67700000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1r3sglnjc34q2l0nf2rl2dh6slum564mmk5249m",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "217456735.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "217456735",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1r4rcrlggecyhajgfvxqlu5pdnma64h6hudyj6s",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10372000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10372000000",
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
        delegator_address: "celestia1rcv6x4e0pddxulx7525uf468ttk9pedmw0hf9y",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "93050000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "93050000",
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
        shares: "77650000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "77650000",
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
        delegator_address: "celestia1ysthp74n2wxt4flmzyxrhza8rvxzr9mcqr58re",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "102500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "102500000",
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
        shares: "311669888.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "311669888",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ymm8jzym5a5adarzwgsqkuge9422gs27tjve93",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "145881323.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "145881323",
      },
    },
    {
      delegation: {
        delegator_address: "celestia19pmn60uy0wefxyyf6glh8wwhm4nugxl9ktzzh7",
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
        delegator_address: "celestia19esjpazhrxpkxtat680mc9v5al4emq3ndkr39x",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "70000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "70000000",
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
        shares: "71863000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "71863000",
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
        shares: "205207186.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "205207186",
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
        delegator_address: "celestia1x3xqdgpcc075wpr2h6zpcywewjl8pjl64n4h32",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "259000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "259000000",
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
        shares: "107000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "107000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18kvjxrrp935gss49xpuqkn285m64zs9vdtz7lw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "211600000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "211600000",
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
        delegator_address: "celestia1g06zqtasu0ca5k5yece6luqj3ke2w365u985ze",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "53000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "53000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1gsagmc8wxyzcz3c0nn8zv2kggpcnywynrehuk7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "185000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "185000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1g3uz8nkzq9zrdemjj82wvl5w74u9e8yvtgf3s9",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1955000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1955000",
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
        shares: "17295000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "17295000",
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
        delegator_address: "celestia123c8t0mmlj6x0ptqy4vm6x4ccn2ywhh0at2ys3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "3170000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "3170000",
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
        delegator_address: "celestia12erey3cnxl700ggcrfdmu2llhmjwn0f99v3wpv",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "107065923.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "107065923",
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
        delegator_address: "celestia1ty53xnrqsmk9zupyjgxktpt2gtyshvu45n0rq0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1776433854.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1776433854",
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
        delegator_address: "celestia1ttyy7fz35e8m83ypdujvlhrr39h2eesy7htjdc",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "30910299.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "30910299",
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
        delegator_address: "celestia1tjuf68dfhymtc3j3zlu9d7m6vjeqrcmp76uqqr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "143200000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "143200000",
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
        delegator_address: "celestia1vj6vnd7mdntguhs7j2fu3vjzt4v7u6xvqa389e",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "105100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "105100000",
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
        shares: "364170000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "364170000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1v6kdn485jkrnmpmmr2cl546a5dmlvlgg2yk6r7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "73949776.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "73949776",
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
        delegator_address: "celestia1de88sp2h3955ktrjgnm0jkhy8dttsgdzye3xus",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1022855307.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1022855307",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1duls39pg7uqze7vpz65n22re72nycvmrgkg4kr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2723517148.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2723517148",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wqjagmsh5tyv4eztpypqgklyq23aepxf3q5nex",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "279728550.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "279728550",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wxv8jnx4tnr5rr5uwnx05g3s74tcpzajssfsav",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "211716716.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "211716716",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wxhgzdwmek4duaevg2zwzguev8tnm4ncjrhau5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "100000000",
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
        shares: "12827000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "12827000000",
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
        delegator_address: "celestia1sdy2lhzh98xvv363da7xvg3jwlud9shcuj6k4w",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "107000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "107000000",
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
        shares: "366000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "366000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1sltq5xnhhh02zelpphpkqqfy48w7rg47000900",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "555500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "555500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13zzlsjnauafxz764nvj6mgagrkt5vke3pcap23",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "162092334.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "162092334",
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
        shares: "288121636.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "288121636",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13uyv2mzgrc4r0c8aslsvkfy7dcmgflq00je7pw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "44400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "44400000",
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
        shares: "596264996.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "596264996",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jttdtq9ah54rawwtsapt225unp8fdped37w4n8",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "761417816.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "761417816",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jtustv4ghy997d6catge3mgklszkvve6rakrj0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "522730000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "522730000",
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
        shares: "220110892.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "220110892",
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
        delegator_address: "celestia1nre3qg4qeytzuaj9v639newdzs8x4d094ssmry",
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
        shares: "161591733.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "161591733",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1nnlvg9fcs7lfsfxgeaf69hg604nxag0ahhuyu0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "156960028.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "156960028",
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
        shares: "122715212.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "122715212",
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
        delegator_address: "celestia15glnqj4uxt7hhjm8vxmgc38ckec686sgrsfhgl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "50165312.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "50165312",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15vwxwsex3ltadecjcxhg5zqkken63uvp2c7040",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "117000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "117000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15scds0jq9crvvphgmnkxuvnycj64xj9lu8hnzg",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "303152830.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "303152830",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15j7g66x5y99d9kjs0zvkvejgyhpgfael5cncwl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "70000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "70000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15epp26pl7cxhq6ff882cluyfxacj8lv5h44300",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "330000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "330000000",
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
        delegator_address: "celestia14pcyu8tnqed2z40y2qt9hy0u3xuetwgxsxh9hh",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "118600000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "118600000",
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
        shares: "400000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "400000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14l93dwnqe25rnu4anfc6q0dlcukea9pdwtkra7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "366000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "366000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14lunvdhjss8zk38zmjgtcr5szjl2flh5ds8r2z",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1400000",
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
        shares: "293857866.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "293857866",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1keqn6wegxwx6e3tyd9jmpmqpp9fgj3gup7pcy5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "38973534.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "38973534",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1kefzemyzcqfwfzhgg3g0hm4ccjpzllxhz0rfkt",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "504066449.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "504066449",
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
        delegator_address: "celestia1h6e82vzacz2a2ewyr8rsu5hwtchvp225mtduqf",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "118056916.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "118056916",
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
        delegator_address: "celestia1c9mkft0d3sdjm3us883270veuww7qe3ydkuntu",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "105300000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "105300000",
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
        delegator_address: "celestia1c4skq47cqsyteg8kfjf6v3ehhza000ph8sky25",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "331527785.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "331527785",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1c65g3f5ujul79f4tv39rnx4k3fp0nwvrp3w397",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2311500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2311500000",
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
        delegator_address: "celestia1ezgrtr9xg5thqxst6chnfsa2w8p5sqe4856az5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "161400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "161400000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1eypkhtdahph4y6kwguh4faqydl8clk420qu2t7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "56001000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "56001000",
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
        shares: "355583392.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "355583392",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1e0awhdyuzszse5xdde3nrwpg2jzhwu4f7sfztd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "95584594.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "95584594",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ekzawkkedhnlmxqcsp87aye5ne796jr43435as",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "100150000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "100150000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ehvppg4y9ar7dvnhjnqgjwxm2vd8yvsxpq6gre",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "200000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "200000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1emqzfcz5hezpg3z6ueqkptadpyx5qfujes34y6",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "114947802.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "114947802",
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
        shares: "200974218.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "200974218",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16yanaa9gfmdytghzz3c5ep4kgmzjw002mdnqaw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "30000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "30000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia169pkmuffdpwm8dfrefc2tcsvhyv74x8reqdgwe",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "41083664.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "41083664",
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
        delegator_address: "celestia16k3e075ym6e82d9yuvkyg43zgk9c4tmdjdh4uv",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "38450000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "38450000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16e8eese68zg9yvsd9f8f4urywq9vt276k09l7l",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "212760000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "212760000",
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
        delegator_address: "celestia1mjnpe7g82p2yztq9y6n6lyn0jhpy56vwhdzmse",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "29000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "29000000",
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
        delegator_address: "celestia1m7c2hzx6whe7gv64mu28nv6k66fmdvfawpv2je",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "82957792.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "82957792",
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
        shares: "164627187.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "164627187",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1unqdkdzw00zewx76ukt9hvnzpthk8hsefsxpty",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1010000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1010000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1u5qupjus2z99t0pxt3pv2csz96ytz06had5x0q",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "13755000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "13755000",
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
        shares: "48840000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "48840000",
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
        delegator_address: "celestia1a8f2spn7cjgk3qgks32a6an54542cnshxs24k3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "23060000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "23060000",
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
        shares: "364120000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "364120000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1a59ss427zm593lkm48p5f6jav6hwz65jzdkf7d",
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
        shares: "27500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "27500000",
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
        shares: "216131192.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "216131192",
      },
    },
    {
      delegation: {
        delegator_address: "celestia177h5g6har2ne9rhn5ekwlpgv7dtkjxp2765yfs",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "760483624.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "760483624",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1lx0my7kk7uy75y68r602ga62l7n8cwawex2l89",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "300018968.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "300018968",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1lft50ldy04u3szywhg38cnfpxfg7r5488veny2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1128622062.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1128622062",
      },
    },
  ];

  const txs1 = [
    {
      delegation: {
        delegator_address: "celestia1qqlw32u0c32g7nelttmj03q3lgwcdfn8c8f54p",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "203000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "203000000",
      },
    },
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
        delegator_address: "celestia1qrqu4g25un2ceu0tykv0h9us3kg2wud6pm695t",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "141340808.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "141340808",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1qvcy2gqxrdgnnypgsjcr2xz57lf4cs6nm6j2nl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2984300000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2984300000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1qc0qad7w57zlr3zmzjmq776hxe9nw3fn9mc9n3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "241980000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "241980000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1qe6q4wwjzse3rkv07czlevhngxn56susv386gz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2846510716.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2846510716",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1q7e59htnjuaguslst7lu8a5atjg68ceh0e3gsq",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "7400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "7400000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1q77pp2skywhf792avwnxjg2hw3zr030vmggxsd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "66000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "66000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ppmfsp6nnpjl90vtc4d02vqgrux9xr7t4sq6ev",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "48500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "48500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1pyfsd8urzmxvvlh8m87jx4grl2l7qymuj830cf",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10000000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10000000000",
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
        shares: "1552200.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1552200",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1pf57et67qwa77qa0554gycc04afsp6tmwweexa",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "51711444.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "51711444",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1pduj08yt5w8thfp50lcvwhffrahpfpj5q06u4c",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "206642446.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "206642446",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1p34krywk2xt67yz0ju4c5dzz5u6lurs08y2xuy",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "190954390.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "190954390",
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
        delegator_address: "celestia1pawn8dyft0aq4zlnwftj4phtuac8wgyax7tgrn",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "89590000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "89590000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1pa56a9fg5jhxrduru275vn2y7fpkxmx6up9jhw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "541944976.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "541944976",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1p7pucfsptdz7mpy32udr52v04edfqrqr86vzj3",
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
        delegator_address: "celestia1zpnfptuxfxsj3l77ghuh9hjntewzh0jg4t3qt3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "106400025.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "106400025",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1zgs5nnwhpxg4sjyw7xerm4humluxua90xcsnjy",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "199000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "199000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ztlf8vve6tn09ynr3qwm2jnq7grmwgn205uvpe",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "88850000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "88850000",
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
        delegator_address: "celestia1zw5d9ytjjl9lc07frnvshen63uqgru396k4tw8",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "59200000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "59200000",
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
        delegator_address: "celestia1rzpz4fqmrcxkvdnskmx2k9wdqxv5ne3q4n3ue3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1159357153.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1159357153",
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
        shares: "67700000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "67700000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1r3sglnjc34q2l0nf2rl2dh6slum564mmk5249m",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "217456735.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "217456735",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1r4rcrlggecyhajgfvxqlu5pdnma64h6hudyj6s",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10372000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10372000000",
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
        delegator_address: "celestia1rcv6x4e0pddxulx7525uf468ttk9pedmw0hf9y",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "93050000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "93050000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1rmtcl7m2pz63cgsvfxayuh54drk9sa9lk7kmq4",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "67417171.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "67417171",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1rlsdrt7m2aat7cvjvks00n5srq5khllqwhqlus",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "167146227.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "167146227",
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
        delegator_address: "celestia1yp9qnmlhk5t5tghqq3hfq7j8h583wxcdkm6umd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "206927393.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "206927393",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1yp542l3cwq8j0m9zkhcv8exrz2cp7l9quwrtys",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "7455594937.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "7455594937",
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
        shares: "77650000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "77650000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ygvcz54j2egxkmh0xtfjmx7qn7z8p2mek0uyjk",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15123641.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15123641",
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
        delegator_address: "celestia1ysthp74n2wxt4flmzyxrhza8rvxzr9mcqr58re",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "103100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "103100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1y36ate6ghkst3236vhnxgnhhdd6xfsusva7x3h",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "3230000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "3230000",
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
        delegator_address: "celestia1y6q4rqaq07qsvspwlr73caxku5fyw23psa2ker",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "277449991.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "277449991",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ymwgg85shgthy4gsp7qf59jpf0pz4c3rz3aqqm",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "311669888.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "311669888",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1y7lg2ucn8jp0t4lfsy7m7d7kw0rp7ng4lces96",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "114800000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "114800000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia19pmn60uy0wefxyyf6glh8wwhm4nugxl9ktzzh7",
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
        delegator_address: "celestia199sd444a6k6kr9vqpvuqg4gu2qgkeyx59d7r56",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "209000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "209000000",
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
        delegator_address: "celestia19dej9nex9sj3424eernwjs83pw75rt3k476mf6",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "61000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "61000000",
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
        delegator_address: "celestia19jhlpyjx3p4kqh347323azjuhnnew95rshe4xf",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "60228947.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "60228947",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1949rhj0kn0q9tz02720dgpxx8lz3l9ywtqycku",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10821280.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10821280",
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
        delegator_address: "celestia19esjpazhrxpkxtat680mc9v5al4emq3ndkr39x",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "70000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "70000000",
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
        delegator_address: "celestia1972qyccgxxkqu3atw3yndf44g9amft7e0lhue3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "140900000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "140900000",
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
        shares: "72223000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "72223000",
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
        shares: "206607186.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "206607186",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1xzpyvc0n75m5hadfk8y4tvpevnyvd4jhu2kjjq",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "50900000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "50900000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1xzjvj8shwnh2htpzhge368am0k35hegdr595z3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "172642370.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "172642370",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1x2hj089n9e977xcgcesut9tsahly3a8cndlg5h",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "100510000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "100510000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1x0esf3ex8lvpke6ej22ctszsng5njdpddn5rgu",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "75320919.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "75320919",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1x3xqdgpcc075wpr2h6zpcywewjl8pjl64n4h32",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "259000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "259000000",
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
        delegator_address: "celestia189el3722gd32rqauk0ru630cfneqq4evpnqh4c",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1100000",
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
        delegator_address: "celestia18gcjgqkzxwatrnrhhykcr8k7emjcwjaulzj7sv",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "61987200.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "61987200",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18t7qytg9fdgklzac9lm4ym0cjxhjcxsd6cv5wg",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "60137023.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "60137023",
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
        shares: "135400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "135400000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18kvjxrrp935gss49xpuqkn285m64zs9vdtz7lw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "212480000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "212480000",
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
        delegator_address: "celestia18crvw4qkw8ju6s9jqyw6w3wx5ghh3unvjs0lzp",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "127340000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "127340000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia18c49k8hwz9fe3y20ldfcwehcfuyrn6wj9wd95x",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "52152680.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "52152680",
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
        delegator_address: "celestia1g06zqtasu0ca5k5yece6luqj3ke2w365u985ze",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "53000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "53000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1gsagmc8wxyzcz3c0nn8zv2kggpcnywynrehuk7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "185000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "185000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1g3uz8nkzq9zrdemjj82wvl5w74u9e8yvtgf3s9",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1955000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1955000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1gn6w54uge5drhx0gskdgva4372d8guxhsyf4kx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "64000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "64000000",
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
        delegator_address: "celestia1g7ar4d9llnylch4gt9587q35j2qc23tu2uee9r",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "294200000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "294200000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1fqs3j0ern6f9plms4cv329a4w5uwtsccznrstv",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "41000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "41000000",
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
        delegator_address: "celestia1f9sjrzumpfa9e9wyv73kcymzeg4cjvtcacgj9p",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "112343695.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "112343695",
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
        shares: "17360000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "17360000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia12v736nuytn9rjl5dpqtfxzdg40vtlwqq3jtamj",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1319690501.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1319690501",
      },
    },
    {
      delegation: {
        delegator_address: "celestia12dz0vh9gk50wsjc7jvefs7l8fafraalcp6xh62",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1319703209.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1319703209",
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
        delegator_address: "celestia123c8t0mmlj6x0ptqy4vm6x4ccn2ywhh0at2ys3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "3170000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "3170000",
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
        delegator_address: "celestia12crrl6qvkplfkz82mt7skcmaq4utgf5lh8rk7q",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "51000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "51000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia12erey3cnxl700ggcrfdmu2llhmjwn0f99v3wpv",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "107065923.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "107065923",
      },
    },
    {
      delegation: {
        delegator_address: "celestia12ec47afsm5w9mrm8drn9u48dq29tzgkvzq4c0r",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "108521686.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "108521686",
      },
    },
    {
      delegation: {
        delegator_address: "celestia127lv477mp7gzzgpy4ewsa9andn0qhy6dlxhm50",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "17100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "17100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1tqpheaqprdqk8az6eql4eulhzkdjmfuh06x72l",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "180500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "180500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1tz38jrrdvg3upsu4nl7hqrqqhpvz05xprpfrkm",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "166100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "166100000",
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
        delegator_address: "celestia1ty53xnrqsmk9zupyjgxktpt2gtyshvu45n0rq0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1776433854.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1776433854",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1tyu6854q0vlsqpmvaasr9043cwfrtmu420c8c6",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "44000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "44000000",
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
        shares: "206722983.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "206722983",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ttyy7fz35e8m83ypdujvlhrr39h2eesy7htjdc",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "30910299.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "30910299",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1t3g44fggyhx2u9dxr34dtu6hxq3q72cjd6j5ku",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "57400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "57400000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1tjuf68dfhymtc3j3zlu9d7m6vjeqrcmp76uqqr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "143200000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "143200000",
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
        delegator_address: "celestia1t40rgwucyplzsxq5vusuam9kwwnzg3hh8fzsuy",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "10593746.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "10593746",
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
        delegator_address: "celestia1vxsltdye6ld6f9naehasskam4033xudlk3v2wr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "15153447.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "15153447",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1vswg8gzjde5k8am9909qxjdk67a2k86d4dq4h7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "63581831.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "63581831",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1vj6vnd7mdntguhs7j2fu3vjzt4v7u6xvqa389e",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "105100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "105100000",
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
        delegator_address: "celestia1v4pmzgjvymfv2vwncdg00zfpa7ttu9yw2sm096",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "56291502.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "56291502",
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
        shares: "365510000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "365510000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1v6kdn485jkrnmpmmr2cl546a5dmlvlgg2yk6r7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "73949776.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "73949776",
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
        delegator_address: "celestia1dyr59r2r7ecfn80668rstm9j9mv85xdt5auth6",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "138050000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "138050000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1d93ggvd6t3qnna3w280ax9g6j9jzr69evxsyfx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "60000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "60000000",
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
        delegator_address: "celestia1dth8p9d5ypr7fuzy5ewmy3y0mj0qal830n4uc7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "132800000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "132800000",
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
        delegator_address: "celestia1dnj49scrz50wg3r7lwjezl642a8f5f6w03ftrj",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "5100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "5100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1d4s2grqdelng2c4a3ta4cfmjhxxaf9jq8thv0u",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "113824542.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "113824542",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1de88sp2h3955ktrjgnm0jkhy8dttsgdzye3xus",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1022855307.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1022855307",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1duls39pg7uqze7vpz65n22re72nycvmrgkg4kr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2723517148.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2723517148",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wqjagmsh5tyv4eztpypqgklyq23aepxf3q5nex",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "281910850.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "281910850",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1w9gcxhaxj8f0rjlkwwu36e7elj9aqmj35v0qdj",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "100010000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "100010000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wxv8jnx4tnr5rr5uwnx05g3s74tcpzajssfsav",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "213229957.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "213229957",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wxhgzdwmek4duaevg2zwzguev8tnm4ncjrhau5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "100000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "100000000",
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
        shares: "116870000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "116870000",
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
        delegator_address: "celestia1wjlty4vyf5esyzydhr3dxcngt5v7k50z630n84",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "75779405.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "75779405",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1wnfzsj6dmnwhk3g7qglw32989jm730yl2uzudd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "201580000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "201580000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1w4dpmczjzttwvxzpt268j72huffe6dgmcns6l6",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "273914157.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "273914157",
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
        delegator_address: "celestia10z9mafyyxljzu56ansjqsa9et6nm493000avjz",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "420050000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "420050000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia10guvn4243qg2l8ey8gy9zwttz6v23232f0rvcr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "12827000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "12827000000",
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
        delegator_address: "celestia10j0w7rryh07z3dgvyk5afk5kpf4um48vuk0qha",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "98900000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "98900000",
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
        delegator_address: "celestia10mxudmq0ymwd86k3vtxj0zlv4u5rd2d7lgf6mw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "201000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "201000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1sdy2lhzh98xvv363da7xvg3jwlud9shcuj6k4w",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "107000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "107000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1sdhhsp2k2ktsgpc6xcknakeq559jl0vtel0kjd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "102000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "102000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1swkpnruvzkrv7dm2psz4r5a6k6pvdxxy5pgmeh",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "100672480.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "100672480",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1sc5rn5y6s8taq5equhpknmq33h73m8jh4fgvjl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2400000",
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
        delegator_address: "celestia1s63zncrcargfau4xfmrpvzyn0hndg2n7zkpztx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "195000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "195000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1smq0qz39r8e8awga8zaxlquftkzxldr8asa0ad",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "366000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "366000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1sltq5xnhhh02zelpphpkqqfy48w7rg47000900",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "555500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "555500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13zzlsjnauafxz764nvj6mgagrkt5vke3pcap23",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "162692334.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "162692334",
      },
    },
    {
      delegation: {
        delegator_address: "celestia138pl8udw69f9x5xrhyt4atk83u2nyggud05wvt",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "7788000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "7788000000",
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
        delegator_address: "celestia13vzrgd8x6ceznsnqy342d2qnekvaxfh7d3s8xu",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "159303025.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "159303025",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13jxac6y5axj3naj66l5crkfjsz3ms5r2u0n7a9",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "3095000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "3095000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13hapz35dfzuf9ult9vw7qdsag83r99qzu3uczw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "289341636.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "289341636",
      },
    },
    {
      delegation: {
        delegator_address: "celestia13uyv2mzgrc4r0c8aslsvkfy7dcmgflq00je7pw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "44570000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "44570000",
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
        delegator_address: "celestia1jpu0a8dkzw5k3rggtlrgaparnpedar77sxsp64",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "297000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "297000000",
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
        shares: "596264996.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "596264996",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jttdtq9ah54rawwtsapt225unp8fdped37w4n8",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "761417816.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "761417816",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jtustv4ghy997d6catge3mgklszkvve6rakrj0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "522730000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "522730000",
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
        delegator_address: "celestia1jwcdyc7j0tjavkjn7628zq7dtzvc9fpvrlwzgj",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "59500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "59500000",
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
        delegator_address: "celestia1jnersgg05x52a4fsm4caas5n02vcqsxqk6glql",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "116283910.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "116283910",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jnappv8srf45966n32gu3f49fvf3cj4r4ls8j0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "51000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "51000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1j5q6jta2en4ls2r25wez242wx77lcptvjacau0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "207950000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "207950000",
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
        delegator_address: "celestia1ja9uell4cj7a564fzdm7w7733um2mhnv0edc26",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "135806955.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "135806955",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1jlu7fqmtfkd7wj3nz53ta7yj4xtvhf4kwldkg2",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "221610892.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "221610892",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1npurzcjvq9rd29k29atvxd90732z4lwmq5yuev",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "153610000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "153610000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1nre3qg4qeytzuaj9v639newdzs8x4d094ssmry",
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
        delegator_address: "celestia1n97m6ug7aear9949n6ez0hkhaquetsfy6u2lgu",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "48090774.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "48090774",
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
        delegator_address: "celestia1nf5f04rk9t56pzdwve6rhe5gvneq6gvkg64e6t",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1319701968.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1319701968",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1nf4vmxexkvyv3rs9cks3l5zaxy4svkxg0zc593",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "950000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "950000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1n0lcfvr76pmnauavpgwuu2zrw328gf072gkl7h",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "102775000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "102775000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1nnh4thxglkdcp0h2kr7t53rqakrmlwvyemsgc0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "162191733.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "162191733",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1nnlvg9fcs7lfsfxgeaf69hg604nxag0ahhuyu0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "156960028.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "156960028",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1n5ycs4kv846zsku07xm29ltkyg2fs8xywvvn5k",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "107400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "107400000",
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
        shares: "123375212.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "123375212",
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
        delegator_address: "celestia1nktn8932mdec7xvlps0slsl79q7dashcvtq3dq",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "64680000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "64680000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1593yhrjwvhcv3vlvars3playrhfhr69xw4k7zu",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "43000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "43000000",
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
        delegator_address: "celestia15glnqj4uxt7hhjm8vxmgc38ckec686sgrsfhgl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "50165312.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "50165312",
      },
    },
    {
      delegation: {
        delegator_address: "celestia152l67q44deyj7t956f2swkjza5rznm2qc6m23a",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "114917238.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "114917238",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15vwxwsex3ltadecjcxhg5zqkken63uvp2c7040",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "117000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "117000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15scds0jq9crvvphgmnkxuvnycj64xj9lu8hnzg",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "304452830.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "304452830",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15j7g66x5y99d9kjs0zvkvejgyhpgfael5cncwl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "70000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "70000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15n9me5yykqtedf80zsnk46lckeu07eegwmexcr",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "198335639.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "198335639",
      },
    },
    {
      delegation: {
        delegator_address: "celestia155h526kgjgjzmhqrvfv6f3v05fd0h3q0cd9glh",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "130800000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "130800000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15epp26pl7cxhq6ff882cluyfxacj8lv5h44300",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "630000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "630000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia15af46ndh9ctvwtrcu8eep8dqaq2q8y6trpfrmn",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "105200000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "105200000",
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
        delegator_address: "celestia14pcyu8tnqed2z40y2qt9hy0u3xuetwgxsxh9hh",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "118600000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "118600000",
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
        shares: "71251939.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "71251939",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14g6w2t3mt4uau57h49hp0aagpr22q2gk2tjnz5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "80720000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "80720000",
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
        delegator_address: "celestia14jln46gqwuepkvz8zkzhswtwrla306gwvpv5ye",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "39963977.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "39963977",
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
        shares: "77510000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "77510000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14ez7s75ch67kvzc8c444kn9r4twarmrqhanhr3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "51000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "51000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14a8ecps4lm2admgxdcq007kmgt4l9cxye4jv3w",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "400000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "400000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia147dyp5wpjwd3sjkx0a5zg5rr89a3c2vzsx2gga",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "35609432.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "35609432",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14l93dwnqe25rnu4anfc6q0dlcukea9pdwtkra7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "366000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "366000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia14lunvdhjss8zk38zmjgtcr5szjl2flh5ds8r2z",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1400000",
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
        delegator_address: "celestia1kvq4n4n4x3gqlyfr672pjyqn73c2hdkuxsjl3h",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "417000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "417000000",
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
        delegator_address: "celestia1ks9dl2scahe45tfk4yjf976lhlfy5gkp74eye4",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "55079077.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "55079077",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ksez8429rjftqa8f9wxxyg4l80ey7cfws3k6mw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "293857866.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "293857866",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1keqn6wegxwx6e3tyd9jmpmqpp9fgj3gup7pcy5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "39233534.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "39233534",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1kefzemyzcqfwfzhgg3g0hm4ccjpzllxhz0rfkt",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "729066449.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "729066449",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1k6adpa3w6uwy6rlqv3qqt35aam00addpw6wplh",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "133051347.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "133051347",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1hpadqcpuflkm0627d42ect6zd36aj5wvy3tte8",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "80830000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "80830000",
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
        delegator_address: "celestia1h8d5q2d9u2gc4au5wzh6tf42ufm5en00gy0hzl",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "56064051.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "56064051",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1hdqcaue4umvkeae5ccnu6vt8ajt6l0rwsxf3vv",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "102174751.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "102174751",
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
        delegator_address: "celestia1hsnv76wmlxu78kxfdhg85fzry9uvaunq9p89c4",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "85120785.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "85120785",
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
        delegator_address: "celestia1h699jy43htdesrdtdqjlyj9t5c3dkv3gnh9jmw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "257730000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "257730000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1h6e82vzacz2a2ewyr8rsu5hwtchvp225mtduqf",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "118056916.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "118056916",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1hmhlm867zq2muaru2zq0u8t86mp2jpetu6vrt3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "57000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "57000000",
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
        delegator_address: "celestia1h7wpe943s6tsvxun6ahnxkzshr7r0xacxcw48c",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "30052904.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "30052904",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1hlqsmh35sc0zr9lmcrxfa585nc48u7cw0tjmg3",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "30000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "30000000",
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
        delegator_address: "celestia1cyvgmfa394pvkm6jvwzm8lyx3vr00wqwkdkgfh",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "98400000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "98400000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1c99hwnrhwjsst585h8287pj8396xce4agcdpj0",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "55500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "55500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1c9mkft0d3sdjm3us883270veuww7qe3ydkuntu",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "207483369.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "207483369",
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
        delegator_address: "celestia1cgdty3246mz7jatqkg36h2aeqwnwf2m64akfme",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "100598400.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "100598400",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ctjg9u7w39mcukaqe43l3x8w8ujnp4xckudxnf",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1014385.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1014385",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1c0k6p340st8egc7jcfndfm4jmly4na6cq3gfar",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "115000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "115000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1c4skq47cqsyteg8kfjf6v3ehhza000ph8sky25",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "331527785.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "331527785",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1cc9n326mgu9qkmg7fvmel7ax6ncg6vgszax8zk",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "64054074.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "64054074",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ccjg0c5rk26jj22jwpeywga3qcyzg7hkyzqfyu",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "82840000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "82840000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1c6vxwveatlnrskprrwzhe2x5cu2g60prswppju",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "35100000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "35100000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1c65g3f5ujul79f4tv39rnx4k3fp0nwvrp3w397",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "2311500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "2311500000",
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
        delegator_address: "celestia1ezgrtr9xg5thqxst6chnfsa2w8p5sqe4856az5",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "162500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "162500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1eypkhtdahph4y6kwguh4faqydl8clk420qu2t7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "56001000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "56001000",
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
        shares: "369565640.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "369565640",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1e0k9nvvjh5zwmcddp5t0rr6ccfkqkd5gavgmxe",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "135000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "135000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1e0awhdyuzszse5xdde3nrwpg2jzhwu4f7sfztd",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "95584594.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "95584594",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ekzawkkedhnlmxqcsp87aye5ne796jr43435as",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "347451046.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "347451046",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1ehvppg4y9ar7dvnhjnqgjwxm2vd8yvsxpq6gre",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "208000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "208000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1eh6zuf745vp7yqk0dcet7fexexaty4xe6ek752",
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
        delegator_address: "celestia1emqzfcz5hezpg3z6ueqkptadpyx5qfujes34y6",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "114947802.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "114947802",
      },
    },
    {
      delegation: {
        delegator_address: "celestia1eujlkkfsyjf28ey9vce3yp0s0mdd0l94a5j3nx",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "29000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "29000000",
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
        delegator_address: "celestia16pk3csxf2qnlettw5hh0ws5g8zj75jh859xns7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "111000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "111000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16z62k22z3xpq7x9sdhwums2lcks8wejc02rdw7",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "202274218.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "202274218",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16yzm6qjjheafnyvlcjxnkmhj3hullgplck2r28",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "1319731871.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "1319731871",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16yanaa9gfmdytghzz3c5ep4kgmzjw002mdnqaw",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "30000000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "30000000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia169pkmuffdpwm8dfrefc2tcsvhyv74x8reqdgwe",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "41083664.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "41083664",
      },
    },
    {
      delegation: {
        delegator_address: "celestia169c43lj2g43as5dkxeljvp8acgxgx7wx6ve3fg",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "156500000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "156500000",
      },
    },
    {
      delegation: {
        delegator_address: "celestia16xvd0j4cgnkydxwyfuryrjtw24hqgc2kexrxtf",
        validator_address:
          "celestiavaloper1ga4wavedkz3xrmhhtxgzxdrtysfpawnsksdx9y",
        shares: "119418000.000000000000000000",
      },
      balance: {
        denom: "utia",
        amount: "119418000",
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
    if (parseInt(txs[i].balance.amount) >= 100000000) {
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
    .writeFile("./celestia.xlsx")
    .then(() => console.log("File saved!"));

  console.log(output, output);
})();
