import prisma from '../../../../database/prismaClient'

export default class FindAllDeliveriesDeliverymanUseCase{
    async execute(deliveryman_id: string){
        const deliveries = await prisma.deliveryman.findMany({
            where: {
                id: deliveryman_id
            },
            select: {
                Deliveries: true,
                id: true,
                username: true
            },
        })

        return deliveries
    }
}