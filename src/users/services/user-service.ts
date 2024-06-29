import {UserEntity} from "../entity/user-entity";

export class UserService {
    #user: UserEntity
    constructor(userEntity: UserEntity) {
    }
}