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
-- Reducer ---
{ type: 'UPDATE_SELECTED' }
```javascript
  pod = {
    podId: string,
    podImg: string,
    title:  string,
    ownerId: userId,
    ownerName: userName,
    ownerImg: string,
    tagLine: string,
    location: string,
    description: string,
    createdAt: date,
    users: [userId, userId],
  }

```

### Offer
-- Reducer ---
{type: 'UPDATE_SELECT_OFFER'}

```javascript
  Offer = {
    offerId: 'string',
    podId: 'podId',
    podName: 'podName',
    author: 'userId',
    title: 'string',
    details: 'string',
    img: 'string',
    createdAt: 'date',
    replies: [{
      createdAt: 'date',
      userName: 'string',
      userId: 'userId',
      message: 'string'
    }],
    active: true
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