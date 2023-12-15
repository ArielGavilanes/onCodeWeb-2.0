import { Body, Controller, Post } from '@nestjs/common';
import { TransactionService } from '../../services/transaction/transaction.service';
import { TransactionDTO } from '../../dto/transaction.dto';

@Controller('transaction')
export class TransactionController {

    constructor(private readonly transactionService: TransactionService) { }

    @Post('')
    async comprarCurso(@Body() transactionDTO: TransactionDTO): Promise<any> {
        try {
            return await this.transactionService.comprarCurso(transactionDTO);
        } catch (error) {
            return { mensaje: 'Error al comprar el curso', error: error.message };
        }
    }
}
