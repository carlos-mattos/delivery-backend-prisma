import prisma from '../../../../database/prismaClient';

export default class FindAllAvailableUseCase {
    async execute(){
        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_at: null
            }
        })

        return deliveries
    }
}