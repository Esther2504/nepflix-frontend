import paypall from '../../assets/account-images/paypal.webp'
import avatarbluegreen from '../../assets/account-images/avatar-bluegreen.png'
import avatarlightgreen from '../../assets/account-images/avatar-lightgreen.png'
import avatarblue from '../../assets/account-images/avatar-blue.png'

 export const data = {
      "email": "johndoe@fakeemail.com",
      "register_date": "29 September 2019",
      "register_day": "29",
      "register_month": "September",
      "register_year": "2019",
      "payment_method": "PayPal",
      "payment_logo": `${paypall}`,
      "plan": "Standard",
      "profiles": [
        {
          "id": 1,
          "avatar": `${avatarbluegreen}`,
          "name": "John",
          "rating": "All Maturity Ratings",
          "language": "English",
          "restrictions": "No restrictions.",
          "profile_lock": "Off",
          "playback_settings": "Autoplay next episode. Autoplay previews. Default video and audio quality."
        },
        {
          "id": 2,
          "avatar": `${avatarlightgreen}`,
          "name": "Jane",
          "rating": "All Maturity Ratings",
          "language": "English",
          "restrictions": "No restrictions.",
          "profile_lock": "On",
          "playback_settings": "Autoplay next episode. Autoplay previews. Default video and audio quality."
        },
        {
          "id": 3,
          "avatar": `${avatarblue}`,
          "name": "James",
          "rating": "12 and below",
          "language": "English",
          "restrictions": "12 and below.",
          "profile_lock": "Off",
          "playback_settings": "Do not autoplay next episode. Do not autoplay previews. Default video and audio quality."
        }
      ]
    }
    