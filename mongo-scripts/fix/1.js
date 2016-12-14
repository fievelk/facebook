db.accesses.update({}, { $unset: {ip:1}}, {multi: true});
db.accesses.update({}, { $unset: {referer:1}}, {multi: true});
