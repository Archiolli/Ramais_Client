'use client'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Margins, TDocumentDefinitions, Content } from 'pdfmake/interfaces';
import { iRamais } from "@/@types/types";

const PdfMaker = (val: any) => {

	pdfMake.vfs = pdfFonts.pdfMake.vfs;

	const reportTitle: Content = [
		{
		  stack: [
			{
			  text: `Lista de ramais atualizados`,
			  fontSize: 20,
			  bold: true,
			  margin: [20, 20, 0, 0] as Margins, 
			},
			{
			  text: "Empresa: (55) 3999-9999",
			  fontSize: 10,
			  margin: [20, 0, 20, 0] as Margins, 
			},
		  ],
		},
	  ];
	const details: Content = [
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				widths: [160, 70, 80, 70, 60, 60],
				body: [
					[
						{ text: 'Usuários do ramal', style: 'tableHeader', fontSize: 11 },
						{ text: 'Ramal', style: 'tableHeader', fontSize: 11 },
						{ text: 'Departamento', style: 'tableHeader', fontSize: 11 },
						{ text: 'Cargo', style: 'tableHeader', fontSize: 11 },
						{ text: 'Empresa', style: 'tableHeader', fontSize: 11 },
						{ text: 'Prédio', style: 'tableHeader', fontSize: 11 },
					], ...val.map((ramal: iRamais) => [
						{ text: ramal.nm_funcionario, style: 'tableCell', fontSize: 9 },
						{ text: ramal.cd_ramal, style: 'tableCell', fontSize: 9 },
						{ text: ramal.nm_departamento, style: 'tableCell', fontSize: 9 },
						{ text: ramal.nm_cargos, style: 'tableCell', fontSize: 9 },
						{ text: ramal.nm_empresa, style: 'tableCell', fontSize: 9 },
						{ text: ramal.nm_predio, style: 'tableCell', fontSize: 9 },
					]),
				]
			},
			layout: 'lightHorizontalLines'
		}
	];

	const footer = (currentPage: number, pageCount: number): Content => {
		return [
		  {
			text: `${currentPage} / ${pageCount}`,
			alignment: "right",
			fontSize: 9,
			margin: [0, 10, 20, 0] as Margins
		  },
		];
	  };
	

	const docDefinitions: TDocumentDefinitions = {
		pageSize: 'A4',
		pageMargins: [15, 80, 15, 40],
		header: reportTitle,
		content: details,
		footer: (currentPage: number, pageCount: number) =>
			footer(currentPage, pageCount)
	}
	pdfMake.createPdf(docDefinitions).open()
}

export default PdfMaker;

