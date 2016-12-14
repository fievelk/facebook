## What is this

Mongodb can [execute scripts](https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/)

**fix scripts**: Sometime happen that database is containing incomplete, wrong, not-minimized, inprecise information, these script are stored in the 'fix/' directory and they are incremewntal numerated

**batch scripts**: when happen that complex or intensive operation have to be executed once a while, the script can be run manually of from crontab. they are stored in 'batch/'

In all the cases, they are documented below, and they have to be exectued in sequence.

### [2016-12-14] 

  * fix/1.js: remove `ip` and `referer` from `accesses`
  * fix/2.js: fixed the missing of `startingTime` in `timelines` using the earliest related from `impressions`
  * fix/3.js: Fixed `when` in `accesses`, is `String` has to be `Date`
  * fix/4.js: Dropped everything earlier than 9 of December, day of ß launch
  * fix/5.js: Provide coherence between in `supporters`, `userId` sometime is `Double`, other is `String`, has to be `Double`
