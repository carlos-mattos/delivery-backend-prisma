import prisma from '../../../../database/prismaClient'

export default class UpdateEndDateUseCase{
    async execute(deliveryman_id: string, id_delivery: string){
        const result = await prisma.deliveries.updateMany({
            where: {
                id: id_delivery,
                id_deliveryman: deliveryman_id
            },
            data: {
                end_at: new Date()
            }
        })

        return result
    }
}