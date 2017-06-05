var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MakeTemplateFactry = (function () {
    function MakeTemplateFactry() {
    }
    MakeTemplateFactry.prototype.makeTemplateHtml = function (type) {
        var ritem;
        if (type == 'genre') {
            ritem = new Genre();
        }
        else if (type == 'template') {
            ritem = new Template();
        }
        else if (type == 'item') {
            ritem = new Item();
        }
        else if (type == 'value') {
            ritem = new Value();
        }
        return ritem;
    };
    return MakeTemplateFactry;
}());
var RItem = (function () {
    function RItem() {
    }
    /**
     * DivのElement作成（テンプレート用HTMLを作成したDIVに表示される）
     * @param content 表示のところID
     * @param template 表示の内容
     */
    RItem.prototype.createElement = function (content, template, isrow) {
        if (isrow === void 0) { isrow = true; }
        // 创建Element
        var div = document.createElement('div');
        // row style
        if (isrow) {
            div.className = 'row';
        }
        div.innerHTML = template;
        // 画面追加做成的div
        document.getElementById(content).appendChild(div);
    };
    return RItem;
}());
/**
 * Gerre作成用のクラス
 *
 */
var Genre = (function (_super) {
    __extends(Genre, _super);
    function Genre() {
        _super.apply(this, arguments);
    }
    /**
      * DivのGenreのElement作成（テンプレート用HTMLを作成したDIVに表示される）
      * @param content 表示のところID
      * @param template 表示の内容
      */
    Genre.prototype.makeHtml = function (content, template, callback, count, name) {
        Genre.genreCount = Genre.genreCount + 1;
        var genreName = "ジャンル" + Genre.genreCount;
        var generId = "genreTemplateId" + Genre.genreCount;
        // template名称変える
        template = nano(template, {
            GenreName: genreName
        });
        template = template.replaceAll('tGenreTemplateId', generId);
        // element作成
        this.createElement(content, template, false);
        // call back method
        callback();
    };
    // Genreカウンター
    Genre.genreCount = 2;
    return Genre;
}(RItem));
/**
 * Template作成用のクラス
 *
 */
var Template = (function (_super) {
    __extends(Template, _super);
    function Template() {
        _super.apply(this, arguments);
    }
    /**
      * DivのGenreのElement作成（テンプレート用HTMLを作成したDIVに表示される）
      * @param content 表示のところID
      * @param template 表示の内容
      */
    Template.prototype.makeHtml = function (content, template, callback, count, name) {
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
    };
    // Templateカウンター
    Template.templateCount = 1;
    return Template;
}(RItem));
/**
 * Item作成用のクラス
 *
 */
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        _super.apply(this, arguments);
    }
    /**
      * DivのGenreのElement作成（テンプレート用HTMLを作成したDIVに表示される）
      * @param content 表示のところID
      * @param template 表示の内容
      */
    Item.prototype.makeHtml = function (content, template, callback, count, name) {
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
    };
    return Item;
}(RItem));
/**
 * Value作成用のクラス
 *
 */
var Value = (function (_super) {
    __extends(Value, _super);
    function Value() {
        _super.apply(this, arguments);
    }
    /**
      * DivのGenreのElement作成（テンプレート用HTMLを作成したDIVに表示される）
      * @param content 表示のところID
      * @param template 表示の内容
      */
    Value.prototype.makeHtml = function (content, template, callback, count, name) {
        var valueNameExt = "値" + count;
        var id = name + 'Value' + count;
        template = nano(template, {
            valueItem: valueNameExt
        });
        template = template.replaceAll('tempvalue', id);
        // element作成
        this.createElement(content, template);
        // call back method
        callback(id);
    };
    return Value;
}(RItem));
