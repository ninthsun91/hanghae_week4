import { models } from "../config.js";
import { Op } from "sequelize";

const { Users } = models;


export async function findOne(ID) {
    const result = await Users.findOne({
        where: { 
            [Op.or]: [
                { userId: ID },
                { nickname: ID }
            ]
         }
    });
    return result!==null ? result.get() : null;
}

export async function createOne(user) {
    try {
        console.log("TRY");
        const result = await Users.create(user);
        console.log("SUCCESS");
        return {
            user: result.get(),
            isNewRecord: result._options.isNewRecord,
        }
        
    } catch (error) {
        if (error.parent.code === "ER_DUP_ENTRY") {
            return { user: {}, isNewRecord: false }
        };
    }
}