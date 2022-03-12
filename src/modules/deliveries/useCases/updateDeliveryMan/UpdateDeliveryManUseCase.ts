import prisma from '../../../../database/prismaClient';

export default class UpdateDeliveryManUseCase{
    async execute(id_delivery: string, deliveryman_id: string){
        const result = await prisma.deliveries.update({
            where: {
                id: id_delivery
            },
            data: {
                id_deliveryman: deliveryman_id
            }
        })

        return result
    }
}