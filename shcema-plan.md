# Basic Data Schema Plan

## Firebase 

### User 
```javascript 
  user = {
    userId: string,
    name: string,
    email: string,
    tagLine: string,
    bio: string,
    posts: [podId, PodId],
    OffersMade: [OfferId, OfferId],
    OffersReplied: [OfferId, OfferId]
  }

```

### Pod

```javascript
  pod = {
    podId: string,
    Title:  string,
    Owner: userId,
    tagLine: string,
    location: string,
    description: string,
    createdAt: date,
    users: [userId, userId],
  }

```

### Offer
```javascript
  Offer = {
    offerId: string,
    podId: podId,
    author: userId,
    title: string,
    detials: string,
    img: string,
    createdAt: date,
    replies: [{
      createdAt: date,
      userName: string,
      userId: userId,
      message: string
    }],
    active: bool
  }
```

## Local State
### CurrentUserProfile
```javascript
  userDate = {}
```

### SelectedOffer
```javascript
  selectedPod = {}
```