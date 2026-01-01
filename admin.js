// Add a new member
function addMember(name, email, packageType) {
    db.collection("members").add({
        name: name,
        email: email,
        package: packageType,
        createdAt: firebase.firestore.Timestamp.now()
    })
    .then(() => alert("Member added successfully"))
    .catch(err => console.error(err));
}

// Update member
function updateMember(memberId, updatedData) {
    db.collection("members").doc(memberId).update(updatedData)
      .then(() => alert("Member updated"))
      .catch(err => console.error(err));
}

// Delete member
function deleteMember(memberId) {
    db.collection("members").doc(memberId).delete()
      .then(() => alert("Member deleted"))
      .catch(err => console.error(err));
}

// Send notification
function sendNotification(message) {
    db.collection("notifications").add({
        message: message,
        timestamp: firebase.firestore.Timestamp.now()
    })
    .then(() => alert("Notification sent"))
    .catch(err => console.error(err));
}

// View all members
function viewMembers() {
    db.collection("members").get().then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.id, doc.data());
        });
    });
}
