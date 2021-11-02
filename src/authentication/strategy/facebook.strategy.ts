import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-facebook";

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, "facebook") {
    constructor() {
        super({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "http://localhost:3000/auth/facebook/redirect",
            profileFields: ["email", "name", 'displayName', 'photos',]
        })
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        const { name, displayName, emails, photos } = profile

        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            name: displayName,
            picture: photos[0].value
        }

        const payload = {
            user,
            accessToken,
            refreshToken
        }

        console.log(payload)

        done(null, payload)
    }
}