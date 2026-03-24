import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Supplier {
  id: number;
  name: string;
  code: string;
  phone: string;
  contactNotes: string;
  debt: string;
  lastPaymentDate: string;
  lastPaymentAmount: string;
  status: 'active' | 'inactive';
  imageUrl: string;
}

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './suppliers-list.html',
  styleUrl: './suppliers-list.scss',
})
export class SuppliersList {
  suppliers = signal<Supplier[]>([
    {
      id: 1,
      name: 'الأندلسي للأخشاب',
      code: '#SPL-9902',
      phone: '0100 456 7890',
      contactNotes: 'واتساب شغال',
      debt: '٤٥٠,٠٠٠',
      lastPaymentDate: '١٢ أكتوبر ٢٠٢٣',
      lastPaymentAmount: '١٠٠,٠٠٠ ج.م',
      status: 'active',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxY7gNKoyt3sIm8qzdxSWmdBf1P3OZs3dbHJ58dpnXw6o9HMsutFjg_64BNQmcl-ysnLOUbiW4LwpLPa3Z5FjNcx7LYQ3TC0vdU9jl3afNyHMnhi7savlozF164kacpSxi0TDyIxsRZdvZcwPyT2LTMFeviEVgZG1rmTmRzT2rMbKfNou-s0sC_lgM1EaG9FQxnsvzZDe7gHpxezoDU0NxtCB3Vb3nLf1gKwXAG0YClbemvXEL_XZtD64PMuhTMlcPBEm21hR_Tk4'
    },
    {
      id: 2,
      name: 'مودرن ديزاين (الشرقاوي)',
      code: '#SPL-4321',
      phone: '0122 888 1122',
      contactNotes: 'ردوده متأخرة',
      debt: '٠',
      lastPaymentDate: '---',
      lastPaymentAmount: '',
      status: 'inactive',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxTkaToLq70uqdWLwRYWerlC8zf9n3d8K7hgVGiwD56OvSkZyufdad9ypaskrLuBddGj2g3pbGnhVCCFv85jyPZE3Zi2w2UO15KBKIlUe18ipqH5GCOQk3075iCITk4Mby7uIki6IqhCj7Y4pQXENDFOHS_mY_gxMtUfneo-HQKO_2dsBfiuyHLCmU1ZIModa0KizxZzxLc1TuG7fwSDEG8hrvbBZSOAaCqxoPjXHAhGL9BhnerVGsdkJruc-cd2-74wbK9qnNWVY'
    },
    {
      id: 3,
      name: 'هوم ستايل للإكسسوارات',
      code: '#SPL-8812',
      phone: '0111 223 3445',
      contactNotes: 'مورد مفضل',
      debt: '٨٢٠,٥٠٠',
      lastPaymentDate: '٠٢ نوفمبر ٢٠٢٣',
      lastPaymentAmount: '٥٠,٠٠٠ ج.م',
      status: 'active',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPcCcW3xx5bYmM6nGJ0c0rUDdCy8lrMlEKN0T6m4mXJgTi7q5fMv15nCveC4DNySh8LXjNZOBXQYwqgCpsEG3rAYoAjS_yF_mybQ9NhesQkdt7Cs-5g6IAzSEtee3e6OfBMiKEn0Zi7GR7C7dLOvT-6UA0HDVUOICd2hdaTP7AoPl5fyLx4YEf0sqUa57yGjRcNy-dwNJ0_N2uwY9i0DSH1BAQty3zocKl3HOZX8DbBuRXIvtcMIpm0aHDD1PvRqvL4aNqCjZKm5Y'
    }
  ]);

  totalDebt = signal('١,٤٢٠,٠٠٠');
  containersInRoute = signal('٠٤');
  lastPayment = signal('٢٥٠,٠٠٠');
}
