// View bill receipts
function viewBills(memberEmail) {
    db.collection("bills").where("email", "==", memberEmail)
      .get()
      .then(snapshot => {
          snapshot.forEach(doc => {
              console.log(doc.data());
          });
      });
}

// Receive notifications
function getNotifications() {
    db.collection("notifications").orderBy("timestamp", "desc")
      .get()
      .then(snapshot => {
          snapshot.forEach(doc => {
              console.log(doc.data().message);
          });
      });
}
