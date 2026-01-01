// Search member records
function searchMembers(query) {
    db.collection("members").where("name", "==", query)
      .get()
      .then(snapshot => {
          snapshot.forEach(doc => console.log(doc.data()));
      });
}

// View member details
function viewMemberDetails(memberId) {
    db.collection("members").doc(memberId)
      .get()
      .then(doc => {
          if(doc.exists){
              console.log(doc.data());
          } else {
              alert("Member not found!");
          }
      });
}
