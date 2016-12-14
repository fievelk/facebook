db.supporters.remove({ lastInfo: { $lt: ISODate("2016-12-09")}});
db.timelines.remove({ startTime: { $lt: ISODate("2016-12-09")}});
db.impressions.remove({ impressionTime: { $lt: ISODate("2016-12-09")}});
db.html.remove({ savingTime: { $lt: ISODate("2016-12-09")}});
db.accesses.remove({ when: { $lt: ISODate("2016-12-09")}});
