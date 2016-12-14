db.accesses.find().forEach(function(doc) { 
    doc.when = new Date(doc.when);
    db.accesses.save(doc); 
});




