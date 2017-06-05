class MakeTemplateFactry {
   
  public makeTemplateHtml(type) {
    let ritem: RItem;
    if (type == 'genre') {
      ritem = new Genre();
    } else if (type == 'template') {
      ritem = new Template();

    } else if (type == 'item') {
      ritem = new Item();

    } else if (type == 'value') {
      ritem = new Value();
    }
    return ritem;
  }
 
}

abstract class RItem {

   /**
    * DivのElement作成（テンプレート用HTMLを作成したDIVに表示される）
    * @param content 表示のところID
    * @param template 表示の内容
    */
  createElement(content:string, template:string, isrow?:boolean = true) {
    // 创建Element
    let div = document.createElement('div');

    // row style
    if (isrow) {
      div.className = 'row';
    }

    div.innerHTML = template;

    // 画面追加做成的div
    document.getElementById(content).appendChild(div);

  }

  abstract makeHtml(content:string, template:string, callback?:any, count?:number, name?:string):void; 
}

/**
 * Gerre作成用のクラス
 *
 */
class Genre extends RItem {
  // Genreカウンター
	private static genreCount : number = 2;
  /**
    * DivのGenreのElement作成（テンプレート用HTMLを作成したDIVに表示される）
    * @param content 表示のところID
    * @param template 表示の内容
    */
	public makeHtml(content:string, template:string, callback?:any, count?:number, name?:string):void {

	    Genre.genreCount = Genre.genreCount + 1;
	    let genreName = "ジャンル" + Genre.genreCount;
	    let generId = "genreTemplateId" + Genre.genreCount;

	    // template名称変える
	    template = nano(template, {
	      GenreName: genreName
	    });
	    template = template.replaceAll('tGenreTemplateId', generId);

	    // element作成
	    this.createElement(content, template, false);

      // call back method
      callback();
	}
}

/**
 * Template作成用のクラス
 *
 */
class Template extends RItem {
  // Templateカウンター
  private static templateCount : number = 1;
  /**
    * DivのGenreのElement作成（テンプレート用HTMLを作成したDIVに表示される）
    * @param content 表示のところID
    * @param template 表示の内容
    */
  public makeHtml(content:string, template:string, callback?:any, count?:number, name?:string):void {

    Template.templateCount = Template.templateCount + 1;

    var templateName = "Template" + Template.templateCount;
    var templateNameExt = "テンプレート" + Template.templateCount;

    // template中的{TemplateName}设定
    template = nano(template, {
      TemplateName: templateNameExt
    });

    template = template.replaceAll('templateA', templateName);

    template = template.replaceAll("areaitem", "area" + templateName + "Item");

    // element作成
    this.createElement(content, template);

    // call back method
    callback(templateName);

  }
}

/**
 * Item作成用のクラス
 *
 */
class Item extends RItem {


  /**
    * DivのGenreのElement作成（テンプレート用HTMLを作成したDIVに表示される）
    * @param content 表示のところID
    * @param template 表示の内容
    */
  public makeHtml(content:string, template:string, callback?:any, count?:number, name?:string):void {

    var item = name + count;
    var itemNameExt = "項目" + count;

    template = nano(template, {
      ItemName: itemNameExt
    });

    template = template.replaceAll('templateItem', item);

    // element作成
    this.createElement(content, template);

    // call back method
    callback(item);
  }
}

/**
 * Value作成用のクラス
 *
 */
class Value extends RItem {


  /**
    * DivのGenreのElement作成（テンプレート用HTMLを作成したDIVに表示される）
    * @param content 表示のところID
    * @param template 表示の内容
    */
  public makeHtml(content:string, template:string, callback?:any, count?:number, name?:string):void {

    let valueNameExt = "値" + count;
    let id = name + 'Value' + count;
    template = nano(template, {
      valueItem: valueNameExt
    });
    template = template.replaceAll('tempvalue', id);

    // element作成
    this.createElement(content, template);

    // call back method
    callback(id);
  }
}

