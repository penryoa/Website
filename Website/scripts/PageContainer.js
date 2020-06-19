class PageContainer {
	constructor(title, htmlContent){
		this.title = title;
		// this.imports = imports;
		this.htmlContent = htmlContent;
	}

	export function getTitle(){
		return this.title;
	}

	export function getContent(){
		return this.htmlContent;
	}
}