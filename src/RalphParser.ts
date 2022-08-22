// Generated from ./src/RalphParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { RalphParserListener } from "./RalphParserListener";
import { RalphParserVisitor } from "./RalphParserVisitor";


export class RalphParser extends Parser {
	public static readonly IMPORT = 1;
	public static readonly PACKAGE = 2;
	public static readonly FN = 3;
	public static readonly PUB = 4;
	public static readonly PAYABLE = 5;
	public static readonly RETURN = 6;
	public static readonly INTERFACE = 7;
	public static readonly STRUCT = 8;
	public static readonly ENUM = 9;
	public static readonly TXSCRIPT = 10;
	public static readonly TXCONTRACT = 11;
	public static readonly CONTRACT = 12;
	public static readonly ASSETSCRIPT = 13;
	public static readonly IF = 14;
	public static readonly ELSE = 15;
	public static readonly FOR = 16;
	public static readonly WHILE = 17;
	public static readonly BREAK = 18;
	public static readonly CONTINUE = 19;
	public static readonly DEFAULT = 20;
	public static readonly GOTO = 21;
	public static readonly SWITCH = 22;
	public static readonly CASE = 23;
	public static readonly TYPE = 24;
	public static readonly LET = 25;
	public static readonly CONST = 26;
	public static readonly MUT = 27;
	public static readonly ALPH = 28;
	public static readonly EXTENDS = 29;
	public static readonly ABSTRACT = 30;
	public static readonly IMPLEMENTS = 31;
	public static readonly EVENT = 32;
	public static readonly EVMIT = 33;
	public static readonly USING = 34;
	public static readonly AT = 35;
	public static readonly BOOL = 36;
	public static readonly I256 = 37;
	public static readonly U256 = 38;
	public static readonly BYTEVEC = 39;
	public static readonly ADDRESS = 40;
	public static readonly R_ARROW = 41;
	public static readonly IDENTIFIER = 42;
	public static readonly L_PAREN = 43;
	public static readonly R_PAREN = 44;
	public static readonly L_CURLY = 45;
	public static readonly R_CURLY = 46;
	public static readonly L_BRACKET = 47;
	public static readonly R_BRACKET = 48;
	public static readonly ASSIGN = 49;
	public static readonly COMMA = 50;
	public static readonly SEMI = 51;
	public static readonly COLON = 52;
	public static readonly DOT = 53;
	public static readonly PLUS_PLUS = 54;
	public static readonly MINUS_MINUS = 55;
	public static readonly DECLARE_ASSIGN = 56;
	public static readonly ELLIPSIS = 57;
	public static readonly LOGICAL_OR = 58;
	public static readonly LOGICAL_AND = 59;
	public static readonly EQUALS = 60;
	public static readonly NOT_EQUALS = 61;
	public static readonly LESS = 62;
	public static readonly LESS_OR_EQUALS = 63;
	public static readonly GREATER = 64;
	public static readonly GREATER_OR_EQUALS = 65;
	public static readonly OR = 66;
	public static readonly DIV = 67;
	public static readonly MOD = 68;
	public static readonly LSHIFT = 69;
	public static readonly RSHIFT = 70;
	public static readonly BIT_CLEAR = 71;
	public static readonly EXCLAMATION = 72;
	public static readonly PLUS = 73;
	public static readonly MINUS = 74;
	public static readonly CARET = 75;
	public static readonly STAR = 76;
	public static readonly AMPERSAND = 77;
	public static readonly RECEIVE = 78;
	public static readonly DECIMAL_LIT = 79;
	public static readonly BINARY_LIT = 80;
	public static readonly OCTAL_LIT = 81;
	public static readonly HEX_LIT = 82;
	public static readonly FLOAT_LIT = 83;
	public static readonly DECIMAL_FLOAT_LIT = 84;
	public static readonly HEX_FLOAT_LIT = 85;
	public static readonly IMAGINARY_LIT = 86;
	public static readonly RUNE_LIT = 87;
	public static readonly BYTE_VALUE = 88;
	public static readonly OCTAL_BYTE_VALUE = 89;
	public static readonly HEX_BYTE_VALUE = 90;
	public static readonly LITTLE_U_VALUE = 91;
	public static readonly BIG_U_VALUE = 92;
	public static readonly RAW_STRING_LIT = 93;
	public static readonly INTERPRETED_STRING_LIT = 94;
	public static readonly WS = 95;
	public static readonly COMMENT = 96;
	public static readonly TERMINATOR = 97;
	public static readonly LINE_COMMENT = 98;
	public static readonly WS_NLSEMI = 99;
	public static readonly COMMENT_NLSEMI = 100;
	public static readonly LINE_COMMENT_NLSEMI = 101;
	public static readonly EOS = 102;
	public static readonly OTHER = 103;
	public static readonly BYTE = 104;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_importDecl = 1;
	public static readonly RULE_importSpec = 2;
	public static readonly RULE_importPath = 3;
	public static readonly RULE_declaration = 4;
	public static readonly RULE_identifierList = 5;
	public static readonly RULE_constDecl = 6;
	public static readonly RULE_constSpec = 7;
	public static readonly RULE_varDecl = 8;
	public static readonly RULE_varSpec = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_expressionList = 11;
	public static readonly RULE_primaryExpr = 12;
	public static readonly RULE_conversion = 13;
	public static readonly RULE_methodExpr = 14;
	public static readonly RULE_primitiveType = 15;
	public static readonly RULE_typeDecl = 16;
	public static readonly RULE_typeSpec = 17;
	public static readonly RULE_typeList = 18;
	public static readonly RULE_type_ = 19;
	public static readonly RULE_typeName = 20;
	public static readonly RULE_typeLit = 21;
	public static readonly RULE_arrayType = 22;
	public static readonly RULE_arrayLength = 23;
	public static readonly RULE_elementType = 24;
	public static readonly RULE_functionType = 25;
	public static readonly RULE_signature = 26;
	public static readonly RULE_result = 27;
	public static readonly RULE_parameters = 28;
	public static readonly RULE_parameterDecl = 29;
	public static readonly RULE_nonNamedType = 30;
	public static readonly RULE_operand = 31;
	public static readonly RULE_literal = 32;
	public static readonly RULE_basicLit = 33;
	public static readonly RULE_integer = 34;
	public static readonly RULE_qualifiedIdent = 35;
	public static readonly RULE_fieldDecl = 36;
	public static readonly RULE_string_ = 37;
	public static readonly RULE_index = 38;
	public static readonly RULE_slice_ = 39;
	public static readonly RULE_arguments = 40;
	public static readonly RULE_methodDecl = 41;
	public static readonly RULE_sliceType = 42;
	public static readonly RULE_typeStruct = 43;
	public static readonly RULE_typeParam = 44;
	public static readonly RULE_typeStructHeader = 45;
	public static readonly RULE_typeStructBody = 46;
	public static readonly RULE_eventEmit = 47;
	public static readonly RULE_annotation = 48;
	public static readonly RULE_varAssignParamList = 49;
	public static readonly RULE_assign = 50;
	public static readonly RULE_varParamList = 51;
	public static readonly RULE_block = 52;
	public static readonly RULE_statementList = 53;
	public static readonly RULE_statement = 54;
	public static readonly RULE_simpleStmt = 55;
	public static readonly RULE_expressionStmt = 56;
	public static readonly RULE_incDecStmt = 57;
	public static readonly RULE_assignment = 58;
	public static readonly RULE_assign_op = 59;
	public static readonly RULE_shortVarDecl = 60;
	public static readonly RULE_emptyStmt = 61;
	public static readonly RULE_returnStmt = 62;
	public static readonly RULE_breakStmt = 63;
	public static readonly RULE_continueStmt = 64;
	public static readonly RULE_ifStmt = 65;
	public static readonly RULE_forStmt = 66;
	public static readonly RULE_whileStmt = 67;
	public static readonly RULE_eos = 68;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "importDecl", "importSpec", "importPath", "declaration", 
		"identifierList", "constDecl", "constSpec", "varDecl", "varSpec", "expression", 
		"expressionList", "primaryExpr", "conversion", "methodExpr", "primitiveType", 
		"typeDecl", "typeSpec", "typeList", "type_", "typeName", "typeLit", "arrayType", 
		"arrayLength", "elementType", "functionType", "signature", "result", "parameters", 
		"parameterDecl", "nonNamedType", "operand", "literal", "basicLit", "integer", 
		"qualifiedIdent", "fieldDecl", "string_", "index", "slice_", "arguments", 
		"methodDecl", "sliceType", "typeStruct", "typeParam", "typeStructHeader", 
		"typeStructBody", "eventEmit", "annotation", "varAssignParamList", "assign", 
		"varParamList", "block", "statementList", "statement", "simpleStmt", "expressionStmt", 
		"incDecStmt", "assignment", "assign_op", "shortVarDecl", "emptyStmt", 
		"returnStmt", "breakStmt", "continueStmt", "ifStmt", "forStmt", "whileStmt", 
		"eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'package'", "'fn'", "'pub'", "'payable'", "'return'", 
		"'Interface'", "'struct'", "'enum'", "'TxScript'", "'TxContract'", "'Contract'", 
		"'AssetScript'", "'if'", "'else'", "'for'", "'while'", "'break'", "'continue'", 
		"'default'", "'goto'", "'switch'", "'case'", "'type'", "'let'", "'const'", 
		"'mut'", "'alph'", "'extends'", "'Abstract'", "'implements'", "'event'", 
		"'emit'", "'using'", "'@'", "'Bool'", "'I256'", "'U256'", "'ByteVec'", 
		"'Address'", "'->'", undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", 
		"'='", "','", "';'", "':'", "'.'", "'++'", "'--'", "':='", "'...'", "'||'", 
		"'&&'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'|'", "'/'", "'%'", 
		"'<<'", "'>>'", "'&^'", "'!'", "'+'", "'-'", "'^'", "'*'", "'&'", "'<-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IMPORT", "PACKAGE", "FN", "PUB", "PAYABLE", "RETURN", "INTERFACE", 
		"STRUCT", "ENUM", "TXSCRIPT", "TXCONTRACT", "CONTRACT", "ASSETSCRIPT", 
		"IF", "ELSE", "FOR", "WHILE", "BREAK", "CONTINUE", "DEFAULT", "GOTO", 
		"SWITCH", "CASE", "TYPE", "LET", "CONST", "MUT", "ALPH", "EXTENDS", "ABSTRACT", 
		"IMPLEMENTS", "EVENT", "EVMIT", "USING", "AT", "BOOL", "I256", "U256", 
		"BYTEVEC", "ADDRESS", "R_ARROW", "IDENTIFIER", "L_PAREN", "R_PAREN", "L_CURLY", 
		"R_CURLY", "L_BRACKET", "R_BRACKET", "ASSIGN", "COMMA", "SEMI", "COLON", 
		"DOT", "PLUS_PLUS", "MINUS_MINUS", "DECLARE_ASSIGN", "ELLIPSIS", "LOGICAL_OR", 
		"LOGICAL_AND", "EQUALS", "NOT_EQUALS", "LESS", "LESS_OR_EQUALS", "GREATER", 
		"GREATER_OR_EQUALS", "OR", "DIV", "MOD", "LSHIFT", "RSHIFT", "BIT_CLEAR", 
		"EXCLAMATION", "PLUS", "MINUS", "CARET", "STAR", "AMPERSAND", "RECEIVE", 
		"DECIMAL_LIT", "BINARY_LIT", "OCTAL_LIT", "HEX_LIT", "FLOAT_LIT", "DECIMAL_FLOAT_LIT", 
		"HEX_FLOAT_LIT", "IMAGINARY_LIT", "RUNE_LIT", "BYTE_VALUE", "OCTAL_BYTE_VALUE", 
		"HEX_BYTE_VALUE", "LITTLE_U_VALUE", "BIG_U_VALUE", "RAW_STRING_LIT", "INTERPRETED_STRING_LIT", 
		"WS", "COMMENT", "TERMINATOR", "LINE_COMMENT", "WS_NLSEMI", "COMMENT_NLSEMI", 
		"LINE_COMMENT_NLSEMI", "EOS", "OTHER", "BYTE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RalphParser._LITERAL_NAMES, RalphParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RalphParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RalphParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return RalphParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RalphParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RalphParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RalphParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.IMPORT) {
				{
				{
				this.state = 138;
				this.importDecl();
				this.state = 139;
				this.eos();
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.TYPE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST))) !== 0)) {
				{
				{
				this.state = 146;
				this.declaration();
				this.state = 147;
				this.eos();
				}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 154;
			this.match(RalphParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDecl(): ImportDeclContext {
		let _localctx: ImportDeclContext = new ImportDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RalphParser.RULE_importDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(RalphParser.IMPORT);
			this.state = 168;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
			case RalphParser.DOT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				{
				this.state = 157;
				this.importSpec();
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 158;
				this.match(RalphParser.L_PAREN);
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RalphParser.IDENTIFIER || _la === RalphParser.DOT || _la === RalphParser.RAW_STRING_LIT || _la === RalphParser.INTERPRETED_STRING_LIT) {
					{
					{
					this.state = 159;
					this.importSpec();
					this.state = 160;
					this.eos();
					}
					}
					this.state = 166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 167;
				this.match(RalphParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importSpec(): ImportSpecContext {
		let _localctx: ImportSpecContext = new ImportSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RalphParser.RULE_importSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER || _la === RalphParser.DOT) {
				{
				this.state = 170;
				_localctx._alias = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === RalphParser.IDENTIFIER || _la === RalphParser.DOT)) {
					_localctx._alias = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 173;
			this.importPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RalphParser.RULE_importPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RalphParser.RULE_declaration);
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.CONST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 177;
				this.constDecl();
				}
				break;
			case RalphParser.TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 178;
				this.typeDecl();
				}
				break;
			case RalphParser.LET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 179;
				this.varDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RalphParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(RalphParser.IDENTIFIER);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 183;
				this.match(RalphParser.COMMA);
				this.state = 184;
				this.match(RalphParser.IDENTIFIER);
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDecl(): ConstDeclContext {
		let _localctx: ConstDeclContext = new ConstDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RalphParser.RULE_constDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(RalphParser.CONST);
			this.state = 202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				{
				this.state = 191;
				this.constSpec();
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 192;
				this.match(RalphParser.L_PAREN);
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RalphParser.IDENTIFIER) {
					{
					{
					this.state = 193;
					this.constSpec();
					this.state = 194;
					this.eos();
					}
					}
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 201;
				this.match(RalphParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constSpec(): ConstSpecContext {
		let _localctx: ConstSpecContext = new ConstSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RalphParser.RULE_constSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.identifierList();
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)) | (1 << (RalphParser.ASSIGN - 36)))) !== 0) || _la === RalphParser.BYTE) {
				{
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0) || _la === RalphParser.BYTE) {
					{
					this.state = 205;
					this.type_();
					}
				}

				this.state = 208;
				this.match(RalphParser.ASSIGN);
				this.state = 209;
				this.expressionList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RalphParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(RalphParser.LET);
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 213;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				{
				this.state = 216;
				this.varSpec();
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 217;
				this.match(RalphParser.L_PAREN);
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RalphParser.IDENTIFIER) {
					{
					{
					this.state = 218;
					this.varSpec();
					this.state = 219;
					this.eos();
					}
					}
					this.state = 225;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 226;
				this.match(RalphParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varSpec(): VarSpecContext {
		let _localctx: VarSpecContext = new VarSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RalphParser.RULE_varSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.identifierList();
			this.state = 237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.FN:
			case RalphParser.PUB:
			case RalphParser.INTERFACE:
			case RalphParser.STRUCT:
			case RalphParser.ENUM:
			case RalphParser.TXSCRIPT:
			case RalphParser.TXCONTRACT:
			case RalphParser.CONTRACT:
			case RalphParser.ASSETSCRIPT:
			case RalphParser.BOOL:
			case RalphParser.I256:
			case RalphParser.U256:
			case RalphParser.BYTEVEC:
			case RalphParser.ADDRESS:
			case RalphParser.IDENTIFIER:
			case RalphParser.L_PAREN:
			case RalphParser.L_BRACKET:
			case RalphParser.BYTE:
				{
				this.state = 230;
				this.type_();
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.ASSIGN) {
					{
					this.state = 231;
					this.match(RalphParser.ASSIGN);
					this.state = 232;
					this.expressionList();
					}
				}

				}
				break;
			case RalphParser.ASSIGN:
				{
				this.state = 235;
				this.match(RalphParser.ASSIGN);
				this.state = 236;
				this.expressionList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, RalphParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.FN:
			case RalphParser.PUB:
			case RalphParser.BOOL:
			case RalphParser.I256:
			case RalphParser.U256:
			case RalphParser.BYTEVEC:
			case RalphParser.ADDRESS:
			case RalphParser.IDENTIFIER:
			case RalphParser.L_PAREN:
			case RalphParser.L_BRACKET:
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
			case RalphParser.BYTE:
				{
				this.state = 240;
				this.primaryExpr(0);
				}
				break;
			case RalphParser.EXCLAMATION:
			case RalphParser.PLUS:
			case RalphParser.MINUS:
			case RalphParser.CARET:
			case RalphParser.STAR:
			case RalphParser.AMPERSAND:
			case RalphParser.RECEIVE:
				{
				this.state = 241;
				_localctx._unary_op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RalphParser.EXCLAMATION - 72)) | (1 << (RalphParser.PLUS - 72)) | (1 << (RalphParser.MINUS - 72)) | (1 << (RalphParser.CARET - 72)) | (1 << (RalphParser.STAR - 72)) | (1 << (RalphParser.AMPERSAND - 72)) | (1 << (RalphParser.RECEIVE - 72)))) !== 0))) {
					_localctx._unary_op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 242;
				this.expression(6);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 262;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 260;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 245;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 246;
						_localctx._mul_op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (RalphParser.DIV - 67)) | (1 << (RalphParser.MOD - 67)) | (1 << (RalphParser.LSHIFT - 67)) | (1 << (RalphParser.RSHIFT - 67)) | (1 << (RalphParser.BIT_CLEAR - 67)) | (1 << (RalphParser.STAR - 67)) | (1 << (RalphParser.AMPERSAND - 67)))) !== 0))) {
							_localctx._mul_op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 247;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 248;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 249;
						_localctx._add_op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (RalphParser.OR - 66)) | (1 << (RalphParser.PLUS - 66)) | (1 << (RalphParser.MINUS - 66)) | (1 << (RalphParser.CARET - 66)))) !== 0))) {
							_localctx._add_op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 250;
						this.expression(5);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 251;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 252;
						_localctx._rel_op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (RalphParser.EQUALS - 60)) | (1 << (RalphParser.NOT_EQUALS - 60)) | (1 << (RalphParser.LESS - 60)) | (1 << (RalphParser.LESS_OR_EQUALS - 60)) | (1 << (RalphParser.GREATER - 60)) | (1 << (RalphParser.GREATER_OR_EQUALS - 60)))) !== 0))) {
							_localctx._rel_op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 253;
						this.expression(4);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 254;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 255;
						this.match(RalphParser.LOGICAL_AND);
						this.state = 256;
						this.expression(3);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 257;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 258;
						this.match(RalphParser.LOGICAL_OR);
						this.state = 259;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RalphParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.expression(0);
			this.state = 270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 266;
					this.match(RalphParser.COMMA);
					this.state = 267;
					this.expression(0);
					}
					}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public primaryExpr(): PrimaryExprContext;
	public primaryExpr(_p: number): PrimaryExprContext;
	// @RuleVersion(0)
	public primaryExpr(_p?: number): PrimaryExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, _parentState);
		let _prevctx: PrimaryExprContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, RalphParser.RULE_primaryExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 274;
				this.operand();
				}
				break;

			case 2:
				{
				this.state = 275;
				this.conversion();
				}
				break;

			case 3:
				{
				this.state = 276;
				this.methodExpr();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 289;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PrimaryExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_primaryExpr);
					this.state = 279;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 285;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						{
						this.state = 280;
						this.match(RalphParser.DOT);
						this.state = 281;
						this.match(RalphParser.IDENTIFIER);
						}
						}
						break;

					case 2:
						{
						this.state = 282;
						this.index();
						}
						break;

					case 3:
						{
						this.state = 283;
						this.slice_();
						}
						break;

					case 4:
						{
						this.state = 284;
						this.arguments();
						}
						break;
					}
					}
					}
				}
				this.state = 291;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversion(): ConversionContext {
		let _localctx: ConversionContext = new ConversionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RalphParser.RULE_conversion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this.nonNamedType();
			this.state = 293;
			this.match(RalphParser.L_PAREN);
			this.state = 294;
			this.expression(0);
			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.COMMA) {
				{
				this.state = 295;
				this.match(RalphParser.COMMA);
				}
			}

			this.state = 298;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodExpr(): MethodExprContext {
		let _localctx: MethodExprContext = new MethodExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RalphParser.RULE_methodExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.nonNamedType();
			this.state = 301;
			this.match(RalphParser.DOT);
			this.state = 302;
			this.match(RalphParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RalphParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)))) !== 0) || _la === RalphParser.BYTE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDecl(): TypeDeclContext {
		let _localctx: TypeDeclContext = new TypeDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RalphParser.RULE_typeDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(RalphParser.TYPE);
			this.state = 318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				{
				this.state = 307;
				this.typeSpec();
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 308;
				this.match(RalphParser.L_PAREN);
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RalphParser.IDENTIFIER) {
					{
					{
					this.state = 309;
					this.typeSpec();
					this.state = 310;
					this.eos();
					}
					}
					this.state = 316;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 317;
				this.match(RalphParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpec(): TypeSpecContext {
		let _localctx: TypeSpecContext = new TypeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RalphParser.RULE_typeSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(RalphParser.IDENTIFIER);
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ASSIGN) {
				{
				this.state = 321;
				this.match(RalphParser.ASSIGN);
				}
			}

			this.state = 324;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RalphParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 326;
			this.type_();
			}
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 327;
				this.match(RalphParser.COMMA);
				{
				this.state = 328;
				this.type_();
				}
				}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 38, RalphParser.RULE_type_);
		try {
			this.state = 341;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 334;
				this.typeName();
				}
				break;
			case RalphParser.FN:
			case RalphParser.PUB:
			case RalphParser.BOOL:
			case RalphParser.I256:
			case RalphParser.U256:
			case RalphParser.BYTEVEC:
			case RalphParser.ADDRESS:
			case RalphParser.L_BRACKET:
			case RalphParser.BYTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 335;
				this.typeLit();
				}
				break;
			case RalphParser.L_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 336;
				this.match(RalphParser.L_PAREN);
				this.state = 337;
				this.type_();
				this.state = 338;
				this.match(RalphParser.R_PAREN);
				}
				break;
			case RalphParser.INTERFACE:
			case RalphParser.STRUCT:
			case RalphParser.ENUM:
			case RalphParser.TXSCRIPT:
			case RalphParser.TXCONTRACT:
			case RalphParser.CONTRACT:
			case RalphParser.ASSETSCRIPT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 340;
				this.typeStruct();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RalphParser.RULE_typeName);
		try {
			this.state = 345;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 343;
				this.qualifiedIdent();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
				this.match(RalphParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeLit(): TypeLitContext {
		let _localctx: TypeLitContext = new TypeLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, RalphParser.RULE_typeLit);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 347;
				this.primitiveType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 348;
				this.arrayType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 349;
				this.functionType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 350;
				this.sliceType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RalphParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(RalphParser.L_BRACKET);
			this.state = 354;
			this.arrayLength();
			this.state = 355;
			this.elementType();
			this.state = 356;
			this.match(RalphParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLength(): ArrayLengthContext {
		let _localctx: ArrayLengthContext = new ArrayLengthContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RalphParser.RULE_arrayLength);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementType(): ElementTypeContext {
		let _localctx: ElementTypeContext = new ElementTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RalphParser.RULE_elementType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RalphParser.RULE_functionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PUB) {
				{
				this.state = 362;
				this.match(RalphParser.PUB);
				}
			}

			this.state = 365;
			this.match(RalphParser.FN);
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PAYABLE) {
				{
				this.state = 366;
				this.match(RalphParser.PAYABLE);
				}
			}

			this.state = 369;
			this.signature();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signature(): SignatureContext {
		let _localctx: SignatureContext = new SignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RalphParser.RULE_signature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.parameters();
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.R_ARROW) {
				{
				this.state = 372;
				this.match(RalphParser.R_ARROW);
				this.state = 373;
				this.result();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, RalphParser.RULE_result);
		let _la: number;
		try {
			let _alt: number;
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 376;
				this.match(RalphParser.L_PAREN);
				this.state = 377;
				this.match(RalphParser.R_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 378;
				this.type_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 379;
				this.match(RalphParser.L_PAREN);
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0) || _la === RalphParser.BYTE) {
					{
					this.state = 380;
					this.type_();
					this.state = 385;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 381;
							this.match(RalphParser.COMMA);
							this.state = 382;
							this.type_();
							}
							}
						}
						this.state = 387;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
					}
					this.state = 389;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RalphParser.COMMA) {
						{
						this.state = 388;
						this.match(RalphParser.COMMA);
						}
					}

					}
				}

				this.state = 393;
				this.match(RalphParser.R_PAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RalphParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(RalphParser.L_PAREN);
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)) | (1 << (RalphParser.ELLIPSIS - 36)))) !== 0) || _la === RalphParser.BYTE) {
				{
				this.state = 397;
				this.parameterDecl();
				this.state = 402;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 398;
						this.match(RalphParser.COMMA);
						this.state = 399;
						this.parameterDecl();
						}
						}
					}
					this.state = 404;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				}
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.COMMA) {
					{
					this.state = 405;
					this.match(RalphParser.COMMA);
					}
				}

				}
			}

			this.state = 410;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDecl(): ParameterDeclContext {
		let _localctx: ParameterDeclContext = new ParameterDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, RalphParser.RULE_parameterDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 412;
				this.identifierList();
				}
				break;
			}
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ELLIPSIS) {
				{
				this.state = 415;
				this.match(RalphParser.ELLIPSIS);
				}
			}

			this.state = 418;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonNamedType(): NonNamedTypeContext {
		let _localctx: NonNamedTypeContext = new NonNamedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, RalphParser.RULE_nonNamedType);
		try {
			this.state = 425;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.FN:
			case RalphParser.PUB:
			case RalphParser.BOOL:
			case RalphParser.I256:
			case RalphParser.U256:
			case RalphParser.BYTEVEC:
			case RalphParser.ADDRESS:
			case RalphParser.L_BRACKET:
			case RalphParser.BYTE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 420;
				this.typeLit();
				}
				break;
			case RalphParser.L_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 421;
				this.match(RalphParser.L_PAREN);
				this.state = 422;
				this.nonNamedType();
				this.state = 423;
				this.match(RalphParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, RalphParser.RULE_operand);
		try {
			this.state = 433;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.literal();
				}
				break;
			case RalphParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.match(RalphParser.IDENTIFIER);
				}
				break;
			case RalphParser.L_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 429;
				this.match(RalphParser.L_PAREN);
				this.state = 430;
				this.expression(0);
				this.state = 431;
				this.match(RalphParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, RalphParser.RULE_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.basicLit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicLit(): BasicLitContext {
		let _localctx: BasicLitContext = new BasicLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, RalphParser.RULE_basicLit);
		try {
			this.state = 439;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 437;
				this.integer();
				}
				break;
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 438;
				this.string_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, RalphParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			_la = this._input.LA(1);
			if (!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (RalphParser.DECIMAL_LIT - 79)) | (1 << (RalphParser.BINARY_LIT - 79)) | (1 << (RalphParser.OCTAL_LIT - 79)) | (1 << (RalphParser.HEX_LIT - 79)) | (1 << (RalphParser.IMAGINARY_LIT - 79)) | (1 << (RalphParser.RUNE_LIT - 79)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedIdent(): QualifiedIdentContext {
		let _localctx: QualifiedIdentContext = new QualifiedIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, RalphParser.RULE_qualifiedIdent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(RalphParser.IDENTIFIER);
			this.state = 444;
			this.match(RalphParser.DOT);
			this.state = 445;
			this.match(RalphParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDecl(): FieldDeclContext {
		let _localctx: FieldDeclContext = new FieldDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, RalphParser.RULE_fieldDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.LET) {
				{
				this.state = 447;
				this.match(RalphParser.LET);
				}
			}

			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 450;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 453;
			this.identifierList();
			this.state = 454;
			this.match(RalphParser.COLON);
			this.state = 455;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_(): String_Context {
		let _localctx: String_Context = new String_Context(this._ctx, this.state);
		this.enterRule(_localctx, 74, RalphParser.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			_la = this._input.LA(1);
			if (!(_la === RalphParser.RAW_STRING_LIT || _la === RalphParser.INTERPRETED_STRING_LIT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public index(): IndexContext {
		let _localctx: IndexContext = new IndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, RalphParser.RULE_index);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.match(RalphParser.L_BRACKET);
			this.state = 460;
			this.expression(0);
			this.state = 461;
			this.match(RalphParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public slice_(): Slice_Context {
		let _localctx: Slice_Context = new Slice_Context(this._ctx, this.state);
		this.enterRule(_localctx, 78, RalphParser.RULE_slice_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.match(RalphParser.L_BRACKET);
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.FN || _la === RalphParser.PUB || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RalphParser.EXCLAMATION - 72)) | (1 << (RalphParser.PLUS - 72)) | (1 << (RalphParser.MINUS - 72)) | (1 << (RalphParser.CARET - 72)) | (1 << (RalphParser.STAR - 72)) | (1 << (RalphParser.AMPERSAND - 72)) | (1 << (RalphParser.RECEIVE - 72)) | (1 << (RalphParser.DECIMAL_LIT - 72)) | (1 << (RalphParser.BINARY_LIT - 72)) | (1 << (RalphParser.OCTAL_LIT - 72)) | (1 << (RalphParser.HEX_LIT - 72)) | (1 << (RalphParser.IMAGINARY_LIT - 72)) | (1 << (RalphParser.RUNE_LIT - 72)) | (1 << (RalphParser.RAW_STRING_LIT - 72)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 72)))) !== 0) || _la === RalphParser.BYTE) {
					{
					this.state = 464;
					this.expression(0);
					}
				}

				this.state = 467;
				this.match(RalphParser.COLON);
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.FN || _la === RalphParser.PUB || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RalphParser.EXCLAMATION - 72)) | (1 << (RalphParser.PLUS - 72)) | (1 << (RalphParser.MINUS - 72)) | (1 << (RalphParser.CARET - 72)) | (1 << (RalphParser.STAR - 72)) | (1 << (RalphParser.AMPERSAND - 72)) | (1 << (RalphParser.RECEIVE - 72)) | (1 << (RalphParser.DECIMAL_LIT - 72)) | (1 << (RalphParser.BINARY_LIT - 72)) | (1 << (RalphParser.OCTAL_LIT - 72)) | (1 << (RalphParser.HEX_LIT - 72)) | (1 << (RalphParser.IMAGINARY_LIT - 72)) | (1 << (RalphParser.RUNE_LIT - 72)) | (1 << (RalphParser.RAW_STRING_LIT - 72)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 72)))) !== 0) || _la === RalphParser.BYTE) {
					{
					this.state = 468;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.FN || _la === RalphParser.PUB || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RalphParser.EXCLAMATION - 72)) | (1 << (RalphParser.PLUS - 72)) | (1 << (RalphParser.MINUS - 72)) | (1 << (RalphParser.CARET - 72)) | (1 << (RalphParser.STAR - 72)) | (1 << (RalphParser.AMPERSAND - 72)) | (1 << (RalphParser.RECEIVE - 72)) | (1 << (RalphParser.DECIMAL_LIT - 72)) | (1 << (RalphParser.BINARY_LIT - 72)) | (1 << (RalphParser.OCTAL_LIT - 72)) | (1 << (RalphParser.HEX_LIT - 72)) | (1 << (RalphParser.IMAGINARY_LIT - 72)) | (1 << (RalphParser.RUNE_LIT - 72)) | (1 << (RalphParser.RAW_STRING_LIT - 72)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 72)))) !== 0) || _la === RalphParser.BYTE) {
					{
					this.state = 471;
					this.expression(0);
					}
				}

				this.state = 474;
				this.match(RalphParser.COLON);
				this.state = 475;
				this.expression(0);
				this.state = 476;
				this.match(RalphParser.COLON);
				this.state = 477;
				this.expression(0);
				}
				break;
			}
			this.state = 481;
			this.match(RalphParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, RalphParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(RalphParser.L_PAREN);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.FN || _la === RalphParser.PUB || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RalphParser.EXCLAMATION - 72)) | (1 << (RalphParser.PLUS - 72)) | (1 << (RalphParser.MINUS - 72)) | (1 << (RalphParser.CARET - 72)) | (1 << (RalphParser.STAR - 72)) | (1 << (RalphParser.AMPERSAND - 72)) | (1 << (RalphParser.RECEIVE - 72)) | (1 << (RalphParser.DECIMAL_LIT - 72)) | (1 << (RalphParser.BINARY_LIT - 72)) | (1 << (RalphParser.OCTAL_LIT - 72)) | (1 << (RalphParser.HEX_LIT - 72)) | (1 << (RalphParser.IMAGINARY_LIT - 72)) | (1 << (RalphParser.RUNE_LIT - 72)) | (1 << (RalphParser.RAW_STRING_LIT - 72)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 72)))) !== 0) || _la === RalphParser.BYTE) {
				{
				this.state = 490;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
				case 1:
					{
					this.state = 484;
					this.expressionList();
					}
					break;

				case 2:
					{
					this.state = 485;
					this.nonNamedType();
					this.state = 488;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
					case 1:
						{
						this.state = 486;
						this.match(RalphParser.COMMA);
						this.state = 487;
						this.expressionList();
						}
						break;
					}
					}
					break;
				}
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.ELLIPSIS) {
					{
					this.state = 492;
					this.match(RalphParser.ELLIPSIS);
					}
				}

				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.COMMA) {
					{
					this.state = 495;
					this.match(RalphParser.COMMA);
					}
				}

				}
			}

			this.state = 500;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDecl(): MethodDeclContext {
		let _localctx: MethodDeclContext = new MethodDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, RalphParser.RULE_methodDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT || _la === RalphParser.EOS) {
				{
				this.state = 502;
				this.annotation();
				this.state = 503;
				this.match(RalphParser.EOS);
				}
			}

			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PUB) {
				{
				this.state = 507;
				this.match(RalphParser.PUB);
				}
			}

			this.state = 510;
			this.match(RalphParser.FN);
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PAYABLE) {
				{
				this.state = 511;
				this.match(RalphParser.PAYABLE);
				}
			}

			this.state = 514;
			this.match(RalphParser.IDENTIFIER);
			this.state = 515;
			this.signature();
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_CURLY) {
				{
				this.state = 516;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceType(): SliceTypeContext {
		let _localctx: SliceTypeContext = new SliceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, RalphParser.RULE_sliceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this.match(RalphParser.L_BRACKET);
			this.state = 520;
			this.match(RalphParser.R_BRACKET);
			this.state = 521;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStruct(): TypeStructContext {
		let _localctx: TypeStructContext = new TypeStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, RalphParser.RULE_typeStruct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.typeStructHeader();
			this.state = 524;
			this.typeStructBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParam(): TypeParamContext {
		let _localctx: TypeParamContext = new TypeParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, RalphParser.RULE_typeParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStructHeader(): TypeStructHeaderContext {
		let _localctx: TypeStructHeaderContext = new TypeStructHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, RalphParser.RULE_typeStructHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this.typeParam();
			this.state = 529;
			this.match(RalphParser.IDENTIFIER);
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.LESS) {
				{
				this.state = 530;
				this.match(RalphParser.LESS);
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (RalphParser.LET - 25)) | (1 << (RalphParser.MUT - 25)) | (1 << (RalphParser.IDENTIFIER - 25)))) !== 0)) {
					{
					{
					this.state = 531;
					this.fieldDecl();
					this.state = 532;
					this.eos();
					}
					}
					this.state = 538;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 539;
				this.match(RalphParser.GREATER);
				}
			}

			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 542;
				this.match(RalphParser.L_PAREN);
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (RalphParser.LET - 25)) | (1 << (RalphParser.MUT - 25)) | (1 << (RalphParser.IDENTIFIER - 25)))) !== 0)) {
					{
					{
					this.state = 543;
					this.fieldDecl();
					this.state = 544;
					this.eos();
					}
					}
					this.state = 550;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 551;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.EXTENDS || _la === RalphParser.IMPLEMENTS) {
				{
				this.state = 554;
				_la = this._input.LA(1);
				if (!(_la === RalphParser.EXTENDS || _la === RalphParser.IMPLEMENTS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 555;
				this.match(RalphParser.IDENTIFIER);
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 556;
					this.match(RalphParser.L_PAREN);
					this.state = 562;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (RalphParser.LET - 25)) | (1 << (RalphParser.MUT - 25)) | (1 << (RalphParser.IDENTIFIER - 25)))) !== 0)) {
						{
						{
						this.state = 557;
						this.fieldDecl();
						this.state = 558;
						this.eos();
						}
						}
						this.state = 564;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 565;
					this.match(RalphParser.R_PAREN);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStructBody(): TypeStructBodyContext {
		let _localctx: TypeStructBodyContext = new TypeStructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, RalphParser.RULE_typeStructBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.match(RalphParser.L_CURLY);
			this.state = 581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.LET) | (1 << RalphParser.MUT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RalphParser.EVENT - 32)) | (1 << (RalphParser.EVMIT - 32)) | (1 << (RalphParser.AT - 32)) | (1 << (RalphParser.IDENTIFIER - 32)))) !== 0) || _la === RalphParser.EOS) {
				{
				{
				this.state = 575;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 571;
					this.fieldDecl();
					}
					break;

				case 2:
					{
					this.state = 572;
					this.eventEmit();
					}
					break;

				case 3:
					{
					this.state = 573;
					this.methodDecl();
					}
					break;

				case 4:
					{
					this.state = 574;
					this.typeName();
					}
					break;
				}
				this.state = 577;
				this.eos();
				}
				}
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 584;
			this.match(RalphParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventEmit(): EventEmitContext {
		let _localctx: EventEmitContext = new EventEmitContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, RalphParser.RULE_eventEmit);
		let _la: number;
		try {
			this.state = 608;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.EVENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 586;
				this.match(RalphParser.EVENT);
				this.state = 587;
				this.match(RalphParser.IDENTIFIER);
				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 588;
					this.match(RalphParser.L_PAREN);
					this.state = 594;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (RalphParser.LET - 25)) | (1 << (RalphParser.MUT - 25)) | (1 << (RalphParser.IDENTIFIER - 25)))) !== 0)) {
						{
						{
						this.state = 589;
						this.fieldDecl();
						this.state = 590;
						this.eos();
						}
						}
						this.state = 596;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 597;
					this.match(RalphParser.R_PAREN);
					}
				}

				}
				break;
			case RalphParser.EVMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 600;
				this.match(RalphParser.EVMIT);
				this.state = 601;
				this.match(RalphParser.IDENTIFIER);
				this.state = 606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 602;
					this.match(RalphParser.L_PAREN);
					this.state = 603;
					this.expressionList();
					this.state = 604;
					this.match(RalphParser.R_PAREN);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, RalphParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT) {
				{
				this.state = 610;
				this.match(RalphParser.AT);
				this.state = 611;
				this.match(RalphParser.USING);
				this.state = 612;
				this.match(RalphParser.L_PAREN);
				this.state = 613;
				this.varAssignParamList();
				this.state = 614;
				this.match(RalphParser.R_PAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varAssignParamList(): VarAssignParamListContext {
		let _localctx: VarAssignParamListContext = new VarAssignParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, RalphParser.RULE_varAssignParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.assign();
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 619;
				this.match(RalphParser.COMMA);
				this.state = 620;
				this.assign();
				}
				}
				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, RalphParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				{
				this.state = 626;
				this.match(RalphParser.IDENTIFIER);
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 627;
				this.varParamList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 630;
			this.match(RalphParser.ASSIGN);
			this.state = 631;
			this.expressionStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varParamList(): VarParamListContext {
		let _localctx: VarParamListContext = new VarParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, RalphParser.RULE_varParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this.match(RalphParser.L_PAREN);
			this.state = 634;
			this.match(RalphParser.IDENTIFIER);
			this.state = 639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 635;
				this.match(RalphParser.COMMA);
				this.state = 636;
				this.match(RalphParser.IDENTIFIER);
				}
				}
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 642;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, RalphParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.match(RalphParser.L_CURLY);
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.RETURN) | (1 << RalphParser.IF) | (1 << RalphParser.FOR) | (1 << RalphParser.WHILE) | (1 << RalphParser.BREAK) | (1 << RalphParser.CONTINUE) | (1 << RalphParser.TYPE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RalphParser.EVENT - 32)) | (1 << (RalphParser.EVMIT - 32)) | (1 << (RalphParser.BOOL - 32)) | (1 << (RalphParser.I256 - 32)) | (1 << (RalphParser.U256 - 32)) | (1 << (RalphParser.BYTEVEC - 32)) | (1 << (RalphParser.ADDRESS - 32)) | (1 << (RalphParser.IDENTIFIER - 32)) | (1 << (RalphParser.L_PAREN - 32)) | (1 << (RalphParser.L_CURLY - 32)) | (1 << (RalphParser.L_BRACKET - 32)) | (1 << (RalphParser.SEMI - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RalphParser.EXCLAMATION - 72)) | (1 << (RalphParser.PLUS - 72)) | (1 << (RalphParser.MINUS - 72)) | (1 << (RalphParser.CARET - 72)) | (1 << (RalphParser.STAR - 72)) | (1 << (RalphParser.AMPERSAND - 72)) | (1 << (RalphParser.RECEIVE - 72)) | (1 << (RalphParser.DECIMAL_LIT - 72)) | (1 << (RalphParser.BINARY_LIT - 72)) | (1 << (RalphParser.OCTAL_LIT - 72)) | (1 << (RalphParser.HEX_LIT - 72)) | (1 << (RalphParser.IMAGINARY_LIT - 72)) | (1 << (RalphParser.RUNE_LIT - 72)) | (1 << (RalphParser.RAW_STRING_LIT - 72)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 72)) | (1 << (RalphParser.EOS - 72)))) !== 0) || _la === RalphParser.BYTE) {
				{
				this.state = 645;
				this.statementList();
				}
			}

			this.state = 648;
			this.match(RalphParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, RalphParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 656;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 651;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
					case 1:
						{
						this.state = 650;
						this.match(RalphParser.SEMI);
						}
						break;
					}
					}
					break;

				case 2:
					{
					this.state = 654;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
					case 1:
						{
						this.state = 653;
						this.match(RalphParser.EOS);
						}
						break;
					}
					}
					break;
				}
				this.state = 658;
				this.statement();
				this.state = 659;
				this.eos();
				}
				}
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.RETURN) | (1 << RalphParser.IF) | (1 << RalphParser.FOR) | (1 << RalphParser.WHILE) | (1 << RalphParser.BREAK) | (1 << RalphParser.CONTINUE) | (1 << RalphParser.TYPE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RalphParser.EVENT - 32)) | (1 << (RalphParser.EVMIT - 32)) | (1 << (RalphParser.BOOL - 32)) | (1 << (RalphParser.I256 - 32)) | (1 << (RalphParser.U256 - 32)) | (1 << (RalphParser.BYTEVEC - 32)) | (1 << (RalphParser.ADDRESS - 32)) | (1 << (RalphParser.IDENTIFIER - 32)) | (1 << (RalphParser.L_PAREN - 32)) | (1 << (RalphParser.L_CURLY - 32)) | (1 << (RalphParser.L_BRACKET - 32)) | (1 << (RalphParser.SEMI - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RalphParser.EXCLAMATION - 72)) | (1 << (RalphParser.PLUS - 72)) | (1 << (RalphParser.MINUS - 72)) | (1 << (RalphParser.CARET - 72)) | (1 << (RalphParser.STAR - 72)) | (1 << (RalphParser.AMPERSAND - 72)) | (1 << (RalphParser.RECEIVE - 72)) | (1 << (RalphParser.DECIMAL_LIT - 72)) | (1 << (RalphParser.BINARY_LIT - 72)) | (1 << (RalphParser.OCTAL_LIT - 72)) | (1 << (RalphParser.HEX_LIT - 72)) | (1 << (RalphParser.IMAGINARY_LIT - 72)) | (1 << (RalphParser.RUNE_LIT - 72)) | (1 << (RalphParser.RAW_STRING_LIT - 72)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 72)) | (1 << (RalphParser.EOS - 72)))) !== 0) || _la === RalphParser.BYTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, RalphParser.RULE_statement);
		try {
			this.state = 674;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.TYPE:
			case RalphParser.LET:
			case RalphParser.CONST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 665;
				this.declaration();
				}
				break;
			case RalphParser.FN:
			case RalphParser.PUB:
			case RalphParser.EVENT:
			case RalphParser.EVMIT:
			case RalphParser.BOOL:
			case RalphParser.I256:
			case RalphParser.U256:
			case RalphParser.BYTEVEC:
			case RalphParser.ADDRESS:
			case RalphParser.IDENTIFIER:
			case RalphParser.L_PAREN:
			case RalphParser.L_BRACKET:
			case RalphParser.SEMI:
			case RalphParser.EXCLAMATION:
			case RalphParser.PLUS:
			case RalphParser.MINUS:
			case RalphParser.CARET:
			case RalphParser.STAR:
			case RalphParser.AMPERSAND:
			case RalphParser.RECEIVE:
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
			case RalphParser.EOS:
			case RalphParser.BYTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 666;
				this.simpleStmt();
				}
				break;
			case RalphParser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 667;
				this.returnStmt();
				}
				break;
			case RalphParser.BREAK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 668;
				this.breakStmt();
				}
				break;
			case RalphParser.CONTINUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 669;
				this.continueStmt();
				}
				break;
			case RalphParser.L_CURLY:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 670;
				this.block();
				}
				break;
			case RalphParser.IF:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 671;
				this.ifStmt();
				}
				break;
			case RalphParser.FOR:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 672;
				this.forStmt();
				}
				break;
			case RalphParser.WHILE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 673;
				this.whileStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleStmt(): SimpleStmtContext {
		let _localctx: SimpleStmtContext = new SimpleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, RalphParser.RULE_simpleStmt);
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 676;
				this.emptyStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 677;
				this.incDecStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 678;
				this.assignment();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 679;
				this.expressionStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 680;
				this.shortVarDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 681;
				this.eventEmit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStmt(): ExpressionStmtContext {
		let _localctx: ExpressionStmtContext = new ExpressionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, RalphParser.RULE_expressionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incDecStmt(): IncDecStmtContext {
		let _localctx: IncDecStmtContext = new IncDecStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, RalphParser.RULE_incDecStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.expression(0);
			this.state = 687;
			_la = this._input.LA(1);
			if (!(_la === RalphParser.PLUS_PLUS || _la === RalphParser.MINUS_MINUS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, RalphParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this.expressionList();
			this.state = 690;
			this.assign_op();
			this.state = 691;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign_op(): Assign_opContext {
		let _localctx: Assign_opContext = new Assign_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, RalphParser.RULE_assign_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (RalphParser.OR - 66)) | (1 << (RalphParser.DIV - 66)) | (1 << (RalphParser.MOD - 66)) | (1 << (RalphParser.LSHIFT - 66)) | (1 << (RalphParser.RSHIFT - 66)) | (1 << (RalphParser.BIT_CLEAR - 66)) | (1 << (RalphParser.PLUS - 66)) | (1 << (RalphParser.MINUS - 66)) | (1 << (RalphParser.CARET - 66)) | (1 << (RalphParser.STAR - 66)) | (1 << (RalphParser.AMPERSAND - 66)))) !== 0)) {
				{
				this.state = 693;
				_la = this._input.LA(1);
				if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (RalphParser.OR - 66)) | (1 << (RalphParser.DIV - 66)) | (1 << (RalphParser.MOD - 66)) | (1 << (RalphParser.LSHIFT - 66)) | (1 << (RalphParser.RSHIFT - 66)) | (1 << (RalphParser.BIT_CLEAR - 66)) | (1 << (RalphParser.PLUS - 66)) | (1 << (RalphParser.MINUS - 66)) | (1 << (RalphParser.CARET - 66)) | (1 << (RalphParser.STAR - 66)) | (1 << (RalphParser.AMPERSAND - 66)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 696;
			this.match(RalphParser.ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shortVarDecl(): ShortVarDeclContext {
		let _localctx: ShortVarDeclContext = new ShortVarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, RalphParser.RULE_shortVarDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			this.identifierList();
			this.state = 699;
			this.match(RalphParser.DECLARE_ASSIGN);
			this.state = 700;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStmt(): EmptyStmtContext {
		let _localctx: EmptyStmtContext = new EmptyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, RalphParser.RULE_emptyStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			_la = this._input.LA(1);
			if (!(_la === RalphParser.SEMI || _la === RalphParser.EOS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, RalphParser.RULE_returnStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this.match(RalphParser.RETURN);
			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.FN || _la === RalphParser.PUB || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RalphParser.EXCLAMATION - 72)) | (1 << (RalphParser.PLUS - 72)) | (1 << (RalphParser.MINUS - 72)) | (1 << (RalphParser.CARET - 72)) | (1 << (RalphParser.STAR - 72)) | (1 << (RalphParser.AMPERSAND - 72)) | (1 << (RalphParser.RECEIVE - 72)) | (1 << (RalphParser.DECIMAL_LIT - 72)) | (1 << (RalphParser.BINARY_LIT - 72)) | (1 << (RalphParser.OCTAL_LIT - 72)) | (1 << (RalphParser.HEX_LIT - 72)) | (1 << (RalphParser.IMAGINARY_LIT - 72)) | (1 << (RalphParser.RUNE_LIT - 72)) | (1 << (RalphParser.RAW_STRING_LIT - 72)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 72)))) !== 0) || _la === RalphParser.BYTE) {
				{
				this.state = 705;
				this.expressionList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStmt(): BreakStmtContext {
		let _localctx: BreakStmtContext = new BreakStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, RalphParser.RULE_breakStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(RalphParser.BREAK);
			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 709;
				this.match(RalphParser.IDENTIFIER);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStmt(): ContinueStmtContext {
		let _localctx: ContinueStmtContext = new ContinueStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, RalphParser.RULE_continueStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.match(RalphParser.CONTINUE);
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 713;
				this.match(RalphParser.IDENTIFIER);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, RalphParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.match(RalphParser.IF);
			this.state = 725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 717;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 718;
				this.eos();
				this.state = 719;
				this.expression(0);
				}
				break;

			case 3:
				{
				this.state = 721;
				this.simpleStmt();
				this.state = 722;
				this.eos();
				this.state = 723;
				this.expression(0);
				}
				break;
			}
			this.state = 727;
			this.block();
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ELSE) {
				{
				this.state = 728;
				this.match(RalphParser.ELSE);
				this.state = 731;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.IF:
					{
					this.state = 729;
					this.ifStmt();
					}
					break;
				case RalphParser.L_CURLY:
					{
					this.state = 730;
					this.block();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, RalphParser.RULE_forStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.match(RalphParser.FOR);
			{
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.FN || _la === RalphParser.PUB || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RalphParser.EXCLAMATION - 72)) | (1 << (RalphParser.PLUS - 72)) | (1 << (RalphParser.MINUS - 72)) | (1 << (RalphParser.CARET - 72)) | (1 << (RalphParser.STAR - 72)) | (1 << (RalphParser.AMPERSAND - 72)) | (1 << (RalphParser.RECEIVE - 72)) | (1 << (RalphParser.DECIMAL_LIT - 72)) | (1 << (RalphParser.BINARY_LIT - 72)) | (1 << (RalphParser.OCTAL_LIT - 72)) | (1 << (RalphParser.HEX_LIT - 72)) | (1 << (RalphParser.IMAGINARY_LIT - 72)) | (1 << (RalphParser.RUNE_LIT - 72)) | (1 << (RalphParser.RAW_STRING_LIT - 72)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 72)))) !== 0) || _la === RalphParser.BYTE) {
				{
				this.state = 736;
				this.expression(0);
				}
			}

			}
			this.state = 739;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStmt(): WhileStmtContext {
		let _localctx: WhileStmtContext = new WhileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, RalphParser.RULE_whileStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.match(RalphParser.WHILE);
			{
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.FN || _la === RalphParser.PUB || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_PAREN - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RalphParser.EXCLAMATION - 72)) | (1 << (RalphParser.PLUS - 72)) | (1 << (RalphParser.MINUS - 72)) | (1 << (RalphParser.CARET - 72)) | (1 << (RalphParser.STAR - 72)) | (1 << (RalphParser.AMPERSAND - 72)) | (1 << (RalphParser.RECEIVE - 72)) | (1 << (RalphParser.DECIMAL_LIT - 72)) | (1 << (RalphParser.BINARY_LIT - 72)) | (1 << (RalphParser.OCTAL_LIT - 72)) | (1 << (RalphParser.HEX_LIT - 72)) | (1 << (RalphParser.IMAGINARY_LIT - 72)) | (1 << (RalphParser.RUNE_LIT - 72)) | (1 << (RalphParser.RAW_STRING_LIT - 72)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 72)))) !== 0) || _la === RalphParser.BYTE) {
				{
				this.state = 742;
				this.expression(0);
				}
			}

			}
			this.state = 745;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, RalphParser.RULE_eos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			_la = this._input.LA(1);
			if (!(_la === RalphParser.EOF || _la === RalphParser.SEMI || _la === RalphParser.EOS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 12:
			return this.primaryExpr_sempred(_localctx as PrimaryExprContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpr_sempred(_localctx: PrimaryExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03j\u02F0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x03\x02\x03\x02\x03\x02\x07\x02\x90\n\x02\f\x02\x0E\x02\x93\v\x02" +
		"\x03\x02\x03\x02\x03\x02\x07\x02\x98\n\x02\f\x02\x0E\x02\x9B\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\xA5" +
		"\n\x03\f\x03\x0E\x03\xA8\v\x03\x03\x03\x05\x03\xAB\n\x03\x03\x04\x05\x04" +
		"\xAE\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05" +
		"\x06\xB7\n\x06\x03\x07\x03\x07\x03\x07\x07\x07\xBC\n\x07\f\x07\x0E\x07" +
		"\xBF\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xC7\n\b\f\b\x0E\b" +
		"\xCA\v\b\x03\b\x05\b\xCD\n\b\x03\t\x03\t\x05\t\xD1\n\t\x03\t\x03\t\x05" +
		"\t\xD5\n\t\x03\n\x03\n\x05\n\xD9\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07" +
		"\n\xE0\n\n\f\n\x0E\n\xE3\v\n\x03\n\x05\n\xE6\n\n\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\xEC\n\v\x03\v\x03\v\x05\v\xF0\n\v\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\xF6\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0107\n\f\f\f\x0E\f\u010A\v\f\x03" +
		"\r\x03\r\x03\r\x07\r\u010F\n\r\f\r\x0E\r\u0112\v\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u0118\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u0120\n\x0E\x07\x0E\u0122\n\x0E\f\x0E\x0E\x0E\u0125\v" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u012B\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x07\x12\u013B\n\x12\f\x12\x0E\x12\u013E\v\x12" +
		"\x03\x12\x05\x12\u0141\n\x12\x03\x13\x03\x13\x05\x13\u0145\n\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14\u014C\n\x14\f\x14\x0E\x14\u014F" +
		"\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15" +
		"\u0158\n\x15\x03\x16\x03\x16\x05\x16\u015C\n\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x05\x17\u0162\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x05\x1B\u016E\n\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u0172\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0179" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D" +
		"\u0182\n\x1D\f\x1D\x0E\x1D\u0185\v\x1D\x03\x1D\x05\x1D\u0188\n\x1D\x05" +
		"\x1D\u018A\n\x1D\x03\x1D\x05\x1D\u018D\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x07\x1E\u0193\n\x1E\f\x1E\x0E\x1E\u0196\v\x1E\x03\x1E\x05\x1E\u0199" +
		"\n\x1E\x05\x1E\u019B\n\x1E\x03\x1E\x03\x1E\x03\x1F\x05\x1F\u01A0\n\x1F" +
		"\x03\x1F\x05\x1F\u01A3\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 " +
		"\x05 \u01AC\n \x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01B4\n!\x03\"\x03\"" +
		"\x03#\x03#\x05#\u01BA\n#\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x05&\u01C3" +
		"\n&\x03&\x05&\u01C6\n&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(" +
		"\x03(\x03)\x03)\x05)\u01D4\n)\x03)\x03)\x05)\u01D8\n)\x03)\x05)\u01DB" +
		"\n)\x03)\x03)\x03)\x03)\x03)\x05)\u01E2\n)\x03)\x03)\x03*\x03*\x03*\x03" +
		"*\x03*\x05*\u01EB\n*\x05*\u01ED\n*\x03*\x05*\u01F0\n*\x03*\x05*\u01F3" +
		"\n*\x05*\u01F5\n*\x03*\x03*\x03+\x03+\x03+\x05+\u01FC\n+\x03+\x05+\u01FF" +
		"\n+\x03+\x03+\x05+\u0203\n+\x03+\x03+\x03+\x05+\u0208\n+\x03,\x03,\x03" +
		",\x03,\x03-\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u0219" +
		"\n/\f/\x0E/\u021C\v/\x03/\x05/\u021F\n/\x03/\x03/\x03/\x03/\x07/\u0225" +
		"\n/\f/\x0E/\u0228\v/\x03/\x05/\u022B\n/\x03/\x03/\x03/\x03/\x03/\x03/" +
		"\x07/\u0233\n/\f/\x0E/\u0236\v/\x03/\x05/\u0239\n/\x05/\u023B\n/\x030" +
		"\x030\x030\x030\x030\x050\u0242\n0\x030\x030\x070\u0246\n0\f0\x0E0\u0249" +
		"\v0\x030\x030\x031\x031\x031\x031\x031\x031\x071\u0253\n1\f1\x0E1\u0256" +
		"\v1\x031\x051\u0259\n1\x031\x031\x031\x031\x031\x031\x051\u0261\n1\x05" +
		"1\u0263\n1\x032\x032\x032\x032\x032\x032\x052\u026B\n2\x033\x033\x033" +
		"\x073\u0270\n3\f3\x0E3\u0273\v3\x034\x034\x054\u0277\n4\x034\x034\x03" +
		"4\x035\x035\x035\x035\x075\u0280\n5\f5\x0E5\u0283\v5\x035\x035\x036\x03" +
		"6\x056\u0289\n6\x036\x036\x037\x057\u028E\n7\x037\x057\u0291\n7\x057\u0293" +
		"\n7\x037\x037\x037\x067\u0298\n7\r7\x0E7\u0299\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x058\u02A5\n8\x039\x039\x039\x039\x039\x039\x05" +
		"9\u02AD\n9\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03=\x05=\u02B9" +
		"\n=\x03=\x03=\x03>\x03>\x03>\x03>\x03?\x03?\x03@\x03@\x05@\u02C5\n@\x03" +
		"A\x03A\x05A\u02C9\nA\x03B\x03B\x05B\u02CD\nB\x03C\x03C\x03C\x03C\x03C" +
		"\x03C\x03C\x03C\x03C\x05C\u02D8\nC\x03C\x03C\x03C\x03C\x05C\u02DE\nC\x05" +
		"C\u02E0\nC\x03D\x03D\x05D\u02E4\nD\x03D\x03D\x03E\x03E\x05E\u02EA\nE\x03" +
		"E\x03E\x03F\x03F\x03F\x02\x02\x04\x16\x1AG\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x02\x10\x04\x02,,77\x03\x02JP\x04\x02EINO\x04" +
		"\x02DDKM\x03\x02>C\x04\x02&*jj\x04\x02QTXY\x03\x02_`\x03\x02\t\x0F\x04" +
		"\x02\x1F\x1F!!\x03\x0289\x04\x02DIKO\x04\x0255hh\x04\x0355hh\x02\u0323" +
		"\x02\x91\x03\x02\x02\x02\x04\x9E\x03\x02\x02\x02\x06\xAD\x03\x02\x02\x02" +
		"\b\xB1\x03\x02\x02\x02\n\xB6\x03\x02\x02\x02\f\xB8\x03\x02\x02\x02\x0E" +
		"\xC0\x03\x02\x02\x02\x10\xCE\x03\x02\x02\x02\x12\xD6\x03\x02\x02\x02\x14" +
		"\xE7\x03\x02\x02\x02\x16\xF5\x03\x02\x02\x02\x18\u010B\x03\x02\x02\x02" +
		"\x1A\u0117\x03\x02\x02\x02\x1C\u0126\x03\x02\x02\x02\x1E\u012E\x03\x02" +
		"\x02\x02 \u0132\x03\x02\x02\x02\"\u0134\x03\x02\x02\x02$\u0142\x03\x02" +
		"\x02\x02&\u0148\x03\x02\x02\x02(\u0157\x03\x02\x02\x02*\u015B\x03\x02" +
		"\x02\x02,\u0161\x03\x02\x02\x02.\u0163\x03\x02\x02\x020\u0168\x03\x02" +
		"\x02\x022\u016A\x03\x02\x02\x024\u016D\x03\x02\x02\x026\u0175\x03\x02" +
		"\x02\x028\u018C\x03\x02\x02\x02:\u018E\x03\x02\x02\x02<\u019F\x03\x02" +
		"\x02\x02>\u01AB\x03\x02\x02\x02@\u01B3\x03\x02\x02\x02B\u01B5\x03\x02" +
		"\x02\x02D\u01B9\x03\x02\x02\x02F\u01BB\x03\x02\x02\x02H\u01BD\x03\x02" +
		"\x02\x02J\u01C2\x03\x02\x02\x02L\u01CB\x03\x02\x02\x02N\u01CD\x03\x02" +
		"\x02\x02P\u01D1\x03\x02\x02\x02R\u01E5\x03\x02\x02\x02T\u01FB\x03\x02" +
		"\x02\x02V\u0209\x03\x02\x02\x02X\u020D\x03\x02\x02\x02Z\u0210\x03\x02" +
		"\x02\x02\\\u0212\x03\x02\x02\x02^\u023C\x03\x02\x02\x02`\u0262\x03\x02" +
		"\x02\x02b\u026A\x03\x02\x02\x02d\u026C\x03\x02\x02\x02f\u0276\x03\x02" +
		"\x02\x02h\u027B\x03\x02\x02\x02j\u0286\x03\x02\x02\x02l\u0297\x03\x02" +
		"\x02\x02n\u02A4\x03\x02\x02\x02p\u02AC\x03\x02\x02\x02r\u02AE\x03\x02" +
		"\x02\x02t\u02B0\x03\x02\x02\x02v\u02B3\x03\x02\x02\x02x\u02B8\x03\x02" +
		"\x02\x02z\u02BC\x03\x02\x02\x02|\u02C0\x03\x02\x02\x02~\u02C2\x03\x02" +
		"\x02\x02\x80\u02C6\x03\x02\x02\x02\x82\u02CA\x03\x02\x02\x02\x84\u02CE" +
		"\x03\x02\x02\x02\x86\u02E1\x03\x02\x02\x02\x88\u02E7\x03\x02\x02\x02\x8A" +
		"\u02ED\x03\x02\x02\x02\x8C\x8D\x05\x04\x03\x02\x8D\x8E\x05\x8AF\x02\x8E" +
		"\x90\x03\x02\x02\x02\x8F\x8C\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91" +
		"\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x99\x03\x02\x02\x02\x93" +
		"\x91\x03\x02\x02\x02\x94\x95\x05\n\x06\x02\x95\x96\x05\x8AF\x02\x96\x98" +
		"\x03\x02\x02\x02\x97\x94\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97" +
		"\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x99" +
		"\x03\x02\x02\x02\x9C\x9D\x07\x02\x02\x03\x9D\x03\x03\x02\x02\x02\x9E\xAA" +
		"\x07\x03\x02\x02\x9F\xAB\x05\x06\x04\x02\xA0\xA6\x07-\x02\x02\xA1\xA2" +
		"\x05\x06\x04\x02\xA2\xA3\x05\x8AF\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA1" +
		"\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7" +
		"\x03\x02\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAB" +
		"\x07.\x02\x02\xAA\x9F\x03\x02\x02\x02\xAA\xA0\x03\x02\x02\x02\xAB\x05" +
		"\x03\x02\x02\x02\xAC\xAE\t\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE" +
		"\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x05\b\x05\x02\xB0\x07" +
		"\x03\x02\x02\x02\xB1\xB2\x05L\'\x02\xB2\t\x03\x02\x02\x02\xB3\xB7\x05" +
		"\x0E\b\x02\xB4\xB7\x05\"\x12\x02\xB5\xB7\x05\x12\n\x02\xB6\xB3\x03\x02" +
		"\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\v\x03\x02" +
		"\x02\x02\xB8\xBD\x07,\x02\x02\xB9\xBA\x074\x02\x02\xBA\xBC\x07,\x02\x02" +
		"\xBB\xB9\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02" +
		"\xBD\xBE\x03\x02\x02\x02\xBE\r\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02" +
		"\xC0\xCC\x07\x1C\x02\x02\xC1\xCD\x05\x10\t\x02\xC2\xC8\x07-\x02\x02\xC3" +
		"\xC4\x05\x10\t\x02\xC4\xC5\x05\x8AF\x02\xC5\xC7\x03\x02\x02\x02\xC6\xC3" +
		"\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9" +
		"\x03\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCD" +
		"\x07.\x02\x02\xCC\xC1\x03\x02\x02\x02\xCC\xC2\x03\x02\x02\x02\xCD\x0F" +
		"\x03\x02\x02\x02\xCE\xD4\x05\f\x07\x02\xCF\xD1\x05(\x15\x02\xD0\xCF\x03" +
		"\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x07" +
		"3\x02\x02\xD3\xD5\x05\x18\r\x02\xD4\xD0\x03\x02\x02\x02\xD4\xD5\x03\x02" +
		"\x02\x02\xD5\x11\x03\x02\x02\x02\xD6\xD8\x07\x1B\x02\x02\xD7\xD9\x07\x1D" +
		"\x02\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xE5\x03\x02" +
		"\x02\x02\xDA\xE6\x05\x14\v\x02\xDB\xE1\x07-\x02\x02\xDC\xDD\x05\x14\v" +
		"\x02\xDD\xDE\x05\x8AF\x02\xDE\xE0\x03\x02\x02\x02\xDF\xDC\x03\x02\x02" +
		"\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02" +
		"\x02\xE2\xE4\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE6\x07.\x02" +
		"\x02\xE5\xDA\x03\x02\x02\x02\xE5\xDB\x03\x02\x02\x02\xE6\x13\x03\x02\x02" +
		"\x02\xE7\xEF\x05\f\x07\x02\xE8\xEB\x05(\x15\x02\xE9\xEA\x073\x02\x02\xEA" +
		"\xEC\x05\x18\r\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC" +
		"\xF0\x03\x02\x02\x02\xED\xEE\x073\x02\x02\xEE\xF0\x05\x18\r\x02\xEF\xE8" +
		"\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\x15\x03\x02\x02\x02\xF1\xF2" +
		"\b\f\x01\x02\xF2\xF6\x05\x1A\x0E\x02\xF3\xF4\t\x03\x02\x02\xF4\xF6\x05" +
		"\x16\f\b\xF5\xF1\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\u0108\x03" +
		"\x02\x02\x02\xF7\xF8\f\x07\x02\x02\xF8\xF9\t\x04\x02\x02\xF9\u0107\x05" +
		"\x16\f\b\xFA\xFB\f\x06\x02\x02\xFB\xFC\t\x05\x02\x02\xFC\u0107\x05\x16" +
		"\f\x07\xFD\xFE\f\x05\x02\x02\xFE\xFF\t\x06\x02\x02\xFF\u0107\x05\x16\f" +
		"\x06\u0100\u0101\f\x04\x02\x02\u0101\u0102\x07=\x02\x02\u0102\u0107\x05" +
		"\x16\f\x05\u0103\u0104\f\x03\x02\x02\u0104\u0105\x07<\x02\x02\u0105\u0107" +
		"\x05\x16\f\x04\u0106\xF7\x03\x02\x02\x02\u0106\xFA\x03\x02\x02\x02\u0106" +
		"\xFD\x03\x02\x02\x02\u0106\u0100\x03\x02\x02\x02\u0106\u0103\x03\x02\x02" +
		"\x02\u0107\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109" +
		"\x03\x02\x02\x02\u0109\x17\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02" +
		"\u010B\u0110\x05\x16\f\x02\u010C\u010D\x074\x02\x02\u010D\u010F\x05\x16" +
		"\f\x02\u010E\u010C\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E" +
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\x19\x03\x02\x02\x02" +
		"\u0112\u0110\x03\x02\x02\x02\u0113\u0114\b\x0E\x01\x02\u0114\u0118\x05" +
		"@!\x02\u0115\u0118\x05\x1C\x0F\x02\u0116\u0118\x05\x1E\x10\x02\u0117\u0113" +
		"\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02" +
		"\u0118\u0123\x03\x02\x02\x02\u0119\u011F\f\x03\x02\x02\u011A\u011B\x07" +
		"7\x02\x02\u011B\u0120\x07,\x02\x02\u011C\u0120\x05N(\x02\u011D\u0120\x05" +
		"P)\x02\u011E\u0120\x05R*\x02\u011F\u011A\x03\x02\x02\x02\u011F\u011C\x03" +
		"\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120" +
		"\u0122\x03\x02\x02\x02\u0121\u0119\x03\x02\x02\x02\u0122\u0125\x03\x02" +
		"\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\x1B\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0127\x05> \x02" +
		"\u0127\u0128\x07-\x02\x02\u0128\u012A\x05\x16\f\x02\u0129\u012B\x074\x02" +
		"\x02\u012A\u0129\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C" +
		"\x03\x02\x02\x02\u012C\u012D\x07.\x02\x02\u012D\x1D\x03\x02\x02\x02\u012E" +
		"\u012F\x05> \x02\u012F\u0130\x077\x02\x02\u0130\u0131\x07,\x02\x02\u0131" +
		"\x1F\x03\x02\x02\x02\u0132\u0133\t\x07\x02\x02\u0133!\x03\x02\x02\x02" +
		"\u0134\u0140\x07\x1A\x02\x02\u0135\u0141\x05$\x13\x02\u0136\u013C\x07" +
		"-\x02\x02\u0137\u0138\x05$\x13\x02\u0138\u0139\x05\x8AF\x02\u0139\u013B" +
		"\x03\x02\x02\x02\u013A\u0137\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02" +
		"\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013F\x03" +
		"\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0141\x07.\x02\x02\u0140" +
		"\u0135\x03\x02\x02\x02\u0140\u0136\x03\x02\x02\x02\u0141#\x03\x02\x02" +
		"\x02\u0142\u0144\x07,\x02\x02\u0143\u0145\x073\x02\x02\u0144\u0143\x03" +
		"\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146" +
		"\u0147\x05(\x15\x02\u0147%\x03\x02\x02\x02\u0148\u014D\x05(\x15\x02\u0149" +
		"\u014A\x074\x02\x02\u014A\u014C\x05(\x15\x02\u014B\u0149\x03\x02\x02\x02" +
		"\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03" +
		"\x02\x02\x02\u014E\'\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150" +
		"\u0158\x05*\x16\x02\u0151\u0158\x05,\x17\x02\u0152\u0153\x07-\x02\x02" +
		"\u0153\u0154\x05(\x15\x02\u0154\u0155\x07.\x02\x02\u0155\u0158\x03\x02" +
		"\x02\x02\u0156\u0158\x05X-\x02\u0157\u0150\x03\x02\x02\x02\u0157\u0151" +
		"\x03\x02\x02\x02\u0157\u0152\x03\x02\x02\x02\u0157\u0156\x03\x02\x02\x02" +
		"\u0158)\x03\x02\x02\x02\u0159\u015C\x05H%\x02\u015A\u015C\x07,\x02\x02" +
		"\u015B\u0159\x03\x02\x02\x02\u015B\u015A\x03\x02\x02\x02\u015C+\x03\x02" +
		"\x02\x02\u015D\u0162\x05 \x11\x02\u015E\u0162\x05.\x18\x02\u015F\u0162" +
		"\x054\x1B\x02\u0160\u0162\x05V,\x02\u0161\u015D\x03\x02\x02\x02\u0161" +
		"\u015E\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0160\x03\x02" +
		"\x02\x02\u0162-\x03\x02\x02\x02\u0163\u0164\x071\x02\x02\u0164\u0165\x05" +
		"0\x19\x02\u0165\u0166\x052\x1A\x02\u0166\u0167\x072\x02\x02\u0167/\x03" +
		"\x02\x02\x02\u0168\u0169\x05\x16\f\x02\u01691\x03\x02\x02\x02\u016A\u016B" +
		"\x05(\x15\x02\u016B3\x03\x02\x02\x02\u016C\u016E\x07\x06\x02\x02\u016D" +
		"\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x03\x02" +
		"\x02\x02\u016F\u0171\x07\x05\x02\x02\u0170\u0172\x07\x07\x02\x02\u0171" +
		"\u0170\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x03\x02" +
		"\x02\x02\u0173\u0174\x056\x1C\x02\u01745\x03\x02\x02\x02\u0175\u0178\x05" +
		":\x1E\x02\u0176\u0177\x07+\x02\x02\u0177\u0179\x058\x1D\x02\u0178\u0176" +
		"\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u01797\x03\x02\x02\x02\u017A" +
		"\u017B\x07-\x02\x02\u017B\u018D\x07.\x02\x02\u017C\u018D\x05(\x15\x02" +
		"\u017D\u0189\x07-\x02\x02\u017E\u0183\x05(\x15\x02\u017F\u0180\x074\x02" +
		"\x02\u0180\u0182\x05(\x15\x02\u0181\u017F\x03\x02\x02\x02\u0182\u0185" +
		"\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02" +
		"\u0184\u0187\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0186\u0188\x07" +
		"4\x02\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188" +
		"\u018A\x03\x02\x02\x02\u0189\u017E\x03\x02\x02\x02\u0189\u018A\x03\x02" +
		"\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018D\x07.\x02\x02\u018C\u017A" +
		"\x03\x02\x02\x02\u018C\u017C\x03\x02\x02\x02\u018C\u017D\x03\x02\x02\x02" +
		"\u018D9\x03\x02\x02\x02\u018E\u019A\x07-\x02\x02\u018F\u0194\x05<\x1F" +
		"\x02\u0190\u0191\x074\x02\x02\u0191\u0193\x05<\x1F\x02\u0192\u0190\x03" +
		"\x02\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194" +
		"\u0195\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194\x03\x02" +
		"\x02\x02\u0197\u0199\x074\x02\x02\u0198\u0197\x03\x02\x02\x02\u0198\u0199" +
		"\x03\x02\x02\x02\u0199\u019B\x03\x02\x02\x02\u019A\u018F\x03\x02\x02\x02" +
		"\u019A\u019B\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x07" +
		".\x02\x02\u019D;\x03\x02\x02\x02\u019E\u01A0\x05\f\x07\x02\u019F\u019E" +
		"\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A2\x03\x02\x02\x02" +
		"\u01A1\u01A3\x07;\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2\u01A3\x03" +
		"\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A5\x05(\x15\x02\u01A5" +
		"=\x03\x02\x02\x02\u01A6\u01AC\x05,\x17\x02\u01A7\u01A8\x07-\x02\x02\u01A8" +
		"\u01A9\x05> \x02\u01A9\u01AA\x07.\x02\x02\u01AA\u01AC\x03\x02\x02\x02" +
		"\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01A7\x03\x02\x02\x02\u01AC?\x03\x02" +
		"\x02\x02\u01AD\u01B4\x05B\"\x02\u01AE\u01B4\x07,\x02\x02\u01AF\u01B0\x07" +
		"-\x02\x02\u01B0\u01B1\x05\x16\f\x02\u01B1\u01B2\x07.\x02\x02\u01B2\u01B4" +
		"\x03\x02\x02\x02\u01B3\u01AD\x03\x02\x02\x02\u01B3\u01AE\x03\x02\x02\x02" +
		"\u01B3\u01AF\x03\x02\x02\x02\u01B4A\x03\x02\x02\x02\u01B5\u01B6\x05D#" +
		"\x02\u01B6C\x03\x02\x02\x02\u01B7\u01BA\x05F$\x02\u01B8\u01BA\x05L\'\x02" +
		"\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01B8\x03\x02\x02\x02\u01BAE\x03\x02" +
		"\x02\x02\u01BB\u01BC\t\b\x02\x02\u01BCG\x03\x02\x02\x02\u01BD\u01BE\x07" +
		",\x02\x02\u01BE\u01BF\x077\x02\x02\u01BF\u01C0\x07,\x02\x02\u01C0I\x03" +
		"\x02\x02\x02\u01C1\u01C3\x07\x1B\x02\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2" +
		"\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C6\x07\x1D" +
		"\x02\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6" +
		"\u01C7\x03\x02\x02\x02\u01C7\u01C8\x05\f\x07\x02\u01C8\u01C9\x076\x02" +
		"\x02\u01C9\u01CA\x05(\x15\x02\u01CAK\x03\x02\x02\x02\u01CB\u01CC\t\t\x02" +
		"\x02\u01CCM\x03\x02\x02\x02\u01CD\u01CE\x071\x02\x02\u01CE\u01CF\x05\x16" +
		"\f\x02\u01CF\u01D0\x072\x02\x02\u01D0O\x03\x02\x02\x02\u01D1\u01E1\x07" +
		"1\x02\x02\u01D2\u01D4\x05\x16\f\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3" +
		"\u01D4\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D7\x076\x02" +
		"\x02\u01D6\u01D8\x05\x16\f\x02\u01D7\u01D6\x03\x02\x02\x02\u01D7\u01D8" +
		"\x03\x02\x02\x02\u01D8\u01E2\x03\x02\x02\x02\u01D9\u01DB\x05\x16\f\x02" +
		"\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03" +
		"\x02\x02\x02\u01DC\u01DD\x076\x02\x02\u01DD\u01DE\x05\x16\f\x02\u01DE" +
		"\u01DF\x076\x02\x02\u01DF\u01E0\x05\x16\f\x02\u01E0\u01E2\x03\x02\x02" +
		"\x02\u01E1\u01D3\x03\x02\x02\x02\u01E1\u01DA\x03\x02\x02\x02\u01E2\u01E3" +
		"\x03\x02\x02\x02\u01E3\u01E4\x072\x02\x02\u01E4Q\x03\x02\x02\x02\u01E5" +
		"\u01F4\x07-\x02\x02\u01E6\u01ED\x05\x18\r\x02\u01E7\u01EA\x05> \x02\u01E8" +
		"\u01E9\x074\x02\x02\u01E9\u01EB\x05\x18\r\x02\u01EA\u01E8\x03\x02\x02" +
		"\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC\u01E6" +
		"\x03\x02\x02\x02\u01EC\u01E7\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02" +
		"\u01EE\u01F0\x07;\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03" +
		"\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01F3\x074\x02\x02\u01F2" +
		"\u01F1\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03\x02" +
		"\x02\x02\u01F4\u01EC\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5" +
		"\u01F6\x03\x02\x02\x02\u01F6\u01F7\x07.\x02\x02\u01F7S\x03\x02\x02\x02" +
		"\u01F8\u01F9\x05b2\x02\u01F9\u01FA\x07h\x02\x02\u01FA\u01FC\x03\x02\x02" +
		"\x02\u01FB\u01F8\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FE" +
		"\x03\x02\x02\x02\u01FD\u01FF\x07\x06\x02\x02\u01FE\u01FD\x03\x02\x02\x02" +
		"\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0202\x07" +
		"\x05\x02\x02\u0201\u0203\x07\x07\x02\x02\u0202\u0201\x03\x02\x02\x02\u0202" +
		"\u0203\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x07,\x02" +
		"\x02\u0205\u0207\x056\x1C\x02\u0206\u0208\x05j6\x02\u0207\u0206\x03\x02" +
		"\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208U\x03\x02\x02\x02\u0209\u020A" +
		"\x071\x02\x02\u020A\u020B";
	private static readonly _serializedATNSegment1: string =
		"\x072\x02\x02\u020B\u020C\x052\x1A\x02\u020CW\x03\x02\x02\x02\u020D\u020E" +
		"\x05\\/\x02\u020E\u020F\x05^0\x02\u020FY\x03\x02\x02\x02\u0210\u0211\t" +
		"\n\x02\x02\u0211[\x03\x02\x02\x02\u0212\u0213\x05Z.\x02\u0213\u021E\x07" +
		",\x02\x02\u0214\u021A\x07@\x02\x02\u0215\u0216\x05J&\x02\u0216\u0217\x05" +
		"\x8AF\x02\u0217\u0219\x03\x02\x02\x02\u0218\u0215\x03\x02\x02\x02\u0219" +
		"\u021C\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02" +
		"\x02\x02\u021B\u021D\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D" +
		"\u021F\x07B\x02\x02\u021E\u0214\x03\x02\x02\x02\u021E\u021F\x03\x02\x02" +
		"\x02\u021F\u022A\x03\x02\x02\x02\u0220\u0226\x07-\x02\x02\u0221\u0222" +
		"\x05J&\x02\u0222\u0223\x05\x8AF\x02\u0223\u0225\x03\x02\x02\x02\u0224" +
		"\u0221\x03\x02\x02\x02\u0225\u0228\x03\x02\x02\x02\u0226\u0224\x03\x02" +
		"\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0229\x03\x02\x02\x02\u0228" +
		"\u0226\x03\x02\x02\x02\u0229\u022B\x07.\x02\x02\u022A\u0220\x03\x02\x02" +
		"\x02\u022A\u022B\x03\x02\x02\x02\u022B\u023A\x03\x02\x02\x02\u022C\u022D" +
		"\t\v\x02\x02\u022D\u0238\x07,\x02\x02\u022E\u0234\x07-\x02\x02\u022F\u0230" +
		"\x05J&\x02\u0230\u0231\x05\x8AF\x02\u0231\u0233\x03\x02\x02\x02\u0232" +
		"\u022F\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02" +
		"\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0237\x03\x02\x02\x02\u0236" +
		"\u0234\x03\x02\x02\x02\u0237\u0239\x07.\x02\x02\u0238\u022E\x03\x02\x02" +
		"\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023B\x03\x02\x02\x02\u023A\u022C" +
		"\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B]\x03\x02\x02\x02\u023C" +
		"\u0247\x07/\x02\x02\u023D\u0242\x05J&\x02\u023E\u0242\x05`1\x02\u023F" +
		"\u0242\x05T+\x02\u0240\u0242\x05*\x16\x02\u0241\u023D\x03\x02\x02\x02" +
		"\u0241\u023E\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241\u0240\x03" +
		"\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0244\x05\x8AF\x02\u0244" +
		"\u0246\x03\x02\x02\x02\u0245\u0241\x03\x02\x02\x02\u0246\u0249\x03\x02" +
		"\x02\x02\u0247\u0245\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248" +
		"\u024A\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u024A\u024B\x070\x02" +
		"\x02\u024B_\x03\x02\x02\x02\u024C\u024D\x07\"\x02\x02\u024D\u0258\x07" +
		",\x02\x02\u024E\u0254\x07-\x02\x02\u024F\u0250\x05J&\x02\u0250\u0251\x05" +
		"\x8AF\x02\u0251\u0253\x03\x02\x02\x02\u0252\u024F\x03\x02\x02\x02\u0253" +
		"\u0256\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0254\u0255\x03\x02" +
		"\x02\x02\u0255\u0257\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02\u0257" +
		"\u0259\x07.\x02\x02\u0258\u024E\x03\x02\x02\x02\u0258\u0259\x03\x02\x02" +
		"\x02\u0259\u0263\x03\x02\x02\x02\u025A\u025B\x07#\x02\x02\u025B\u0260" +
		"\x07,\x02\x02\u025C\u025D\x07-\x02\x02\u025D\u025E\x05\x18\r\x02\u025E" +
		"\u025F\x07.\x02\x02\u025F\u0261\x03\x02\x02\x02\u0260\u025C\x03\x02\x02" +
		"\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0263\x03\x02\x02\x02\u0262\u024C" +
		"\x03\x02\x02\x02\u0262\u025A\x03\x02\x02\x02\u0263a\x03\x02\x02\x02\u0264" +
		"\u0265\x07%\x02\x02\u0265\u0266\x07$\x02\x02\u0266\u0267\x07-\x02\x02" +
		"\u0267\u0268\x05d3\x02\u0268\u0269\x07.\x02\x02\u0269\u026B\x03\x02\x02" +
		"\x02\u026A\u0264\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026Bc\x03" +
		"\x02\x02\x02\u026C\u0271\x05f4\x02\u026D\u026E\x074\x02\x02\u026E\u0270" +
		"\x05f4\x02\u026F\u026D\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271" +
		"\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272e\x03\x02\x02" +
		"\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0277\x07,\x02\x02\u0275\u0277" +
		"\x05h5\x02\u0276\u0274\x03\x02\x02\x02\u0276\u0275\x03\x02\x02\x02\u0277" +
		"\u0278\x03\x02\x02\x02\u0278\u0279\x073\x02\x02\u0279\u027A\x05r:\x02" +
		"\u027Ag\x03\x02\x02\x02\u027B\u027C\x07-\x02\x02\u027C\u0281\x07,\x02" +
		"\x02\u027D\u027E\x074\x02\x02\u027E\u0280\x07,\x02\x02\u027F\u027D\x03" +
		"\x02\x02\x02\u0280\u0283\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281" +
		"\u0282\x03\x02\x02\x02\u0282\u0284\x03\x02\x02\x02\u0283\u0281\x03\x02" +
		"\x02\x02\u0284\u0285\x07.\x02\x02\u0285i\x03\x02\x02\x02\u0286\u0288\x07" +
		"/\x02\x02\u0287\u0289\x05l7\x02\u0288\u0287\x03\x02\x02\x02\u0288\u0289" +
		"\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028B\x070\x02\x02" +
		"\u028Bk\x03\x02\x02\x02\u028C\u028E\x075\x02\x02\u028D\u028C\x03\x02\x02" +
		"\x02\u028D\u028E\x03\x02\x02\x02\u028E\u0293\x03\x02\x02\x02\u028F\u0291" +
		"\x07h\x02\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02" +
		"\u0291\u0293\x03\x02\x02\x02\u0292\u028D\x03\x02\x02\x02\u0292\u0290\x03" +
		"\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x05n8\x02\u0295\u0296" +
		"\x05\x8AF\x02\u0296\u0298\x03\x02\x02\x02\u0297\u0292\x03\x02\x02\x02" +
		"\u0298\u0299\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u0299\u029A\x03" +
		"\x02\x02\x02\u029Am\x03\x02\x02\x02\u029B\u02A5\x05\n\x06\x02\u029C\u02A5" +
		"\x05p9\x02\u029D\u02A5\x05~@\x02\u029E\u02A5\x05\x80A\x02\u029F\u02A5" +
		"\x05\x82B\x02\u02A0\u02A5\x05j6\x02\u02A1\u02A5\x05\x84C\x02\u02A2\u02A5" +
		"\x05\x86D\x02\u02A3\u02A5\x05\x88E\x02\u02A4\u029B\x03\x02\x02\x02\u02A4" +
		"\u029C\x03\x02\x02\x02\u02A4\u029D\x03\x02\x02\x02\u02A4\u029E\x03\x02" +
		"\x02\x02\u02A4\u029F\x03\x02\x02\x02\u02A4\u02A0\x03\x02\x02\x02\u02A4" +
		"\u02A1\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A3\x03\x02" +
		"\x02\x02\u02A5o\x03\x02\x02\x02\u02A6\u02AD\x05|?\x02\u02A7\u02AD\x05" +
		"t;\x02\u02A8\u02AD\x05v<\x02\u02A9\u02AD\x05r:\x02\u02AA\u02AD\x05z>\x02" +
		"\u02AB\u02AD\x05`1\x02\u02AC\u02A6\x03\x02\x02\x02\u02AC\u02A7\x03\x02" +
		"\x02\x02\u02AC\u02A8\x03\x02\x02\x02\u02AC\u02A9\x03\x02\x02\x02\u02AC" +
		"\u02AA\x03\x02\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02ADq\x03\x02\x02" +
		"\x02\u02AE\u02AF\x05\x16\f\x02\u02AFs\x03\x02\x02\x02\u02B0\u02B1\x05" +
		"\x16\f\x02\u02B1\u02B2\t\f\x02\x02\u02B2u\x03\x02\x02\x02\u02B3\u02B4" +
		"\x05\x18\r\x02\u02B4\u02B5\x05x=\x02\u02B5\u02B6\x05\x18\r\x02\u02B6w" +
		"\x03\x02\x02\x02\u02B7\u02B9\t\r\x02\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8" +
		"\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x073\x02" +
		"\x02\u02BBy\x03\x02\x02\x02\u02BC\u02BD\x05\f\x07\x02\u02BD\u02BE\x07" +
		":\x02\x02\u02BE\u02BF\x05\x18\r\x02\u02BF{\x03\x02\x02\x02\u02C0\u02C1" +
		"\t\x0E\x02\x02\u02C1}\x03\x02\x02\x02\u02C2\u02C4\x07\b\x02\x02\u02C3" +
		"\u02C5\x05\x18\r\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02" +
		"\x02\u02C5\x7F\x03\x02\x02\x02\u02C6\u02C8\x07\x14\x02\x02\u02C7\u02C9" +
		"\x07,\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02" +
		"\u02C9\x81\x03\x02\x02\x02\u02CA\u02CC\x07\x15\x02\x02\u02CB\u02CD\x07" +
		",\x02\x02\u02CC\u02CB\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD" +
		"\x83\x03\x02\x02\x02\u02CE\u02D7\x07\x10\x02\x02\u02CF\u02D8\x05\x16\f" +
		"\x02\u02D0\u02D1\x05\x8AF\x02\u02D1\u02D2\x05\x16\f\x02\u02D2\u02D8\x03" +
		"\x02\x02\x02\u02D3\u02D4\x05p9\x02\u02D4\u02D5\x05\x8AF\x02\u02D5\u02D6" +
		"\x05\x16\f\x02\u02D6\u02D8\x03\x02\x02\x02\u02D7\u02CF\x03\x02\x02\x02" +
		"\u02D7\u02D0\x03\x02\x02\x02\u02D7\u02D3\x03\x02\x02\x02\u02D8\u02D9\x03" +
		"\x02\x02\x02\u02D9\u02DF\x05j6\x02\u02DA\u02DD\x07\x11\x02\x02\u02DB\u02DE" +
		"\x05\x84C\x02\u02DC\u02DE\x05j6\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD" +
		"\u02DC\x03\x02\x02\x02\u02DE\u02E0\x03\x02\x02\x02\u02DF\u02DA\x03\x02" +
		"\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\x85\x03\x02\x02\x02\u02E1\u02E3" +
		"\x07\x12\x02\x02\u02E2\u02E4\x05\x16\f\x02\u02E3\u02E2\x03\x02\x02\x02" +
		"\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x05" +
		"j6\x02\u02E6\x87\x03\x02\x02\x02\u02E7\u02E9\x07\x13\x02\x02\u02E8\u02EA" +
		"\x05\x16\f\x02\u02E9\u02E8\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02" +
		"\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x05j6\x02\u02EC\x89\x03\x02\x02" +
		"\x02\u02ED\u02EE\t\x0F\x02\x02\u02EE\x8B\x03\x02\x02\x02`\x91\x99\xA6" +
		"\xAA\xAD\xB6\xBD\xC8\xCC\xD0\xD4\xD8\xE1\xE5\xEB\xEF\xF5\u0106\u0108\u0110" +
		"\u0117\u011F\u0123\u012A\u013C\u0140\u0144\u014D\u0157\u015B\u0161\u016D" +
		"\u0171\u0178\u0183\u0187\u0189\u018C\u0194\u0198\u019A\u019F\u01A2\u01AB" +
		"\u01B3\u01B9\u01C2\u01C5\u01D3\u01D7\u01DA\u01E1\u01EA\u01EC\u01EF\u01F2" +
		"\u01F4\u01FB\u01FE\u0202\u0207\u021A\u021E\u0226\u022A\u0234\u0238\u023A" +
		"\u0241\u0247\u0254\u0258\u0260\u0262\u026A\u0271\u0276\u0281\u0288\u028D" +
		"\u0290\u0292\u0299\u02A4\u02AC\u02B8\u02C4\u02C8\u02CC\u02D7\u02DD\u02DF" +
		"\u02E3\u02E9";
	public static readonly _serializedATN: string = Utils.join(
		[
			RalphParser._serializedATNSegment0,
			RalphParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RalphParser.__ATN) {
			RalphParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RalphParser._serializedATN));
		}

		return RalphParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RalphParser.EOF, 0); }
	public importDecl(): ImportDeclContext[];
	public importDecl(i: number): ImportDeclContext;
	public importDecl(i?: number): ImportDeclContext | ImportDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclContext);
		} else {
			return this.getRuleContext(i, ImportDeclContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(RalphParser.IMPORT, 0); }
	public importSpec(): ImportSpecContext[];
	public importSpec(i: number): ImportSpecContext;
	public importSpec(i?: number): ImportSpecContext | ImportSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportSpecContext);
		} else {
			return this.getRuleContext(i, ImportSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_importDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterImportDecl) {
			listener.enterImportDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitImportDecl) {
			listener.exitImportDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitImportDecl) {
			return visitor.visitImportDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportSpecContext extends ParserRuleContext {
	public _alias!: Token;
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_importSpec; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterImportSpec) {
			listener.enterImportSpec(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitImportSpec) {
			listener.exitImportSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitImportSpec) {
			return visitor.visitImportSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportPathContext extends ParserRuleContext {
	public string_(): String_Context {
		return this.getRuleContext(0, String_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_importPath; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterImportPath) {
			listener.enterImportPath(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitImportPath) {
			listener.exitImportPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitImportPath) {
			return visitor.visitImportPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public constDecl(): ConstDeclContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclContext);
	}
	public typeDecl(): TypeDeclContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclContext);
	}
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_declaration; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(RalphParser.CONST, 0); }
	public constSpec(): ConstSpecContext[];
	public constSpec(i: number): ConstSpecContext;
	public constSpec(i?: number): ConstSpecContext | ConstSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstSpecContext);
		} else {
			return this.getRuleContext(i, ConstSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_constDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterConstDecl) {
			listener.enterConstDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitConstDecl) {
			listener.exitConstDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitConstDecl) {
			return visitor.visitConstDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstSpecContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_constSpec; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterConstSpec) {
			listener.enterConstSpec(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitConstSpec) {
			listener.exitConstSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitConstSpec) {
			return visitor.visitConstSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(RalphParser.LET, 0); }
	public varSpec(): VarSpecContext[];
	public varSpec(i: number): VarSpecContext;
	public varSpec(i?: number): VarSpecContext | VarSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarSpecContext);
		} else {
			return this.getRuleContext(i, VarSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarSpecContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varSpec; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarSpec) {
			listener.enterVarSpec(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarSpec) {
			listener.exitVarSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarSpec) {
			return visitor.visitVarSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _unary_op!: Token;
	public _mul_op!: Token;
	public _add_op!: Token;
	public _rel_op!: Token;
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MINUS, 0); }
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EXCLAMATION, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CARET, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.STAR, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(RalphParser.AMPERSAND, 0); }
	public RECEIVE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.RECEIVE, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MOD, 0); }
	public LSHIFT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LSHIFT, 0); }
	public RSHIFT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.RSHIFT, 0); }
	public BIT_CLEAR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BIT_CLEAR, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.OR, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.NOT_EQUALS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LESS, 0); }
	public LESS_OR_EQUALS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LESS_OR_EQUALS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.GREATER, 0); }
	public GREATER_OR_EQUALS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.GREATER_OR_EQUALS, 0); }
	public LOGICAL_AND(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LOGICAL_AND, 0); }
	public LOGICAL_OR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LOGICAL_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_expression; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	public operand(): OperandContext | undefined {
		return this.tryGetRuleContext(0, OperandContext);
	}
	public conversion(): ConversionContext | undefined {
		return this.tryGetRuleContext(0, ConversionContext);
	}
	public methodExpr(): MethodExprContext | undefined {
		return this.tryGetRuleContext(0, MethodExprContext);
	}
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public index(): IndexContext | undefined {
		return this.tryGetRuleContext(0, IndexContext);
	}
	public slice_(): Slice_Context | undefined {
		return this.tryGetRuleContext(0, Slice_Context);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_primaryExpr; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConversionContext extends ParserRuleContext {
	public nonNamedType(): NonNamedTypeContext {
		return this.getRuleContext(0, NonNamedTypeContext);
	}
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(RalphParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_conversion; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterConversion) {
			listener.enterConversion(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitConversion) {
			listener.exitConversion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitConversion) {
			return visitor.visitConversion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodExprContext extends ParserRuleContext {
	public nonNamedType(): NonNamedTypeContext {
		return this.getRuleContext(0, NonNamedTypeContext);
	}
	public DOT(): TerminalNode { return this.getToken(RalphParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_methodExpr; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterMethodExpr) {
			listener.enterMethodExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitMethodExpr) {
			listener.exitMethodExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitMethodExpr) {
			return visitor.visitMethodExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BOOL, 0); }
	public I256(): TerminalNode | undefined { return this.tryGetToken(RalphParser.I256, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BYTE, 0); }
	public U256(): TerminalNode | undefined { return this.tryGetToken(RalphParser.U256, 0); }
	public BYTEVEC(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BYTEVEC, 0); }
	public ADDRESS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ADDRESS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(RalphParser.TYPE, 0); }
	public typeSpec(): TypeSpecContext[];
	public typeSpec(i: number): TypeSpecContext;
	public typeSpec(i?: number): TypeSpecContext | TypeSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecContext);
		} else {
			return this.getRuleContext(i, TypeSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeDecl) {
			listener.enterTypeDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeDecl) {
			listener.exitTypeDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeDecl) {
			return visitor.visitTypeDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeSpec; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeSpec) {
			listener.enterTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeSpec) {
			listener.exitTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeSpec) {
			return visitor.visitTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public typeLit(): TypeLitContext | undefined {
		return this.tryGetRuleContext(0, TypeLitContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public typeStruct(): TypeStructContext | undefined {
		return this.tryGetRuleContext(0, TypeStructContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_type_; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public qualifiedIdent(): QualifiedIdentContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdentContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeName; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeLitContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public sliceType(): SliceTypeContext | undefined {
		return this.tryGetRuleContext(0, SliceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeLit; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeLit) {
			listener.enterTypeLit(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeLit) {
			listener.exitTypeLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeLit) {
			return visitor.visitTypeLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(RalphParser.L_BRACKET, 0); }
	public arrayLength(): ArrayLengthContext {
		return this.getRuleContext(0, ArrayLengthContext);
	}
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(RalphParser.R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLengthContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_arrayLength; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterArrayLength) {
			listener.enterArrayLength(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitArrayLength) {
			listener.exitArrayLength(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitArrayLength) {
			return visitor.visitArrayLength(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementTypeContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_elementType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterElementType) {
			listener.enterElementType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitElementType) {
			listener.exitElementType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitElementType) {
			return visitor.visitElementType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(RalphParser.FN, 0); }
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	public PUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PUB, 0); }
	public PAYABLE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PAYABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_functionType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignatureContext extends ParserRuleContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public R_ARROW(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_ARROW, 0); }
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_signature; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterSignature) {
			listener.enterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitSignature) {
			listener.exitSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitSignature) {
			return visitor.visitSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_result; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterResult) {
			listener.enterResult(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitResult) {
			listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public parameterDecl(): ParameterDeclContext[];
	public parameterDecl(i: number): ParameterDeclContext;
	public parameterDecl(i?: number): ParameterDeclContext | ParameterDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclContext);
		} else {
			return this.getRuleContext(i, ParameterDeclContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_parameters; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_parameterDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterParameterDecl) {
			listener.enterParameterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitParameterDecl) {
			listener.exitParameterDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitParameterDecl) {
			return visitor.visitParameterDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonNamedTypeContext extends ParserRuleContext {
	public typeLit(): TypeLitContext | undefined {
		return this.tryGetRuleContext(0, TypeLitContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public nonNamedType(): NonNamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NonNamedTypeContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_nonNamedType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterNonNamedType) {
			listener.enterNonNamedType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitNonNamedType) {
			listener.exitNonNamedType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitNonNamedType) {
			return visitor.visitNonNamedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_operand; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitOperand) {
			return visitor.visitOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public basicLit(): BasicLitContext {
		return this.getRuleContext(0, BasicLitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_literal; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicLitContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public string_(): String_Context | undefined {
		return this.tryGetRuleContext(0, String_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_basicLit; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterBasicLit) {
			listener.enterBasicLit(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitBasicLit) {
			listener.exitBasicLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitBasicLit) {
			return visitor.visitBasicLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public DECIMAL_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DECIMAL_LIT, 0); }
	public BINARY_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BINARY_LIT, 0); }
	public OCTAL_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.OCTAL_LIT, 0); }
	public HEX_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.HEX_LIT, 0); }
	public IMAGINARY_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IMAGINARY_LIT, 0); }
	public RUNE_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.RUNE_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_integer; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedIdentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(RalphParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_qualifiedIdent; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterQualifiedIdent) {
			listener.enterQualifiedIdent(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitQualifiedIdent) {
			listener.exitQualifiedIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitQualifiedIdent) {
			return visitor.visitQualifiedIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public COLON(): TerminalNode { return this.getToken(RalphParser.COLON, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public LET(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LET, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_fieldDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterFieldDecl) {
			listener.enterFieldDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitFieldDecl) {
			listener.exitFieldDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitFieldDecl) {
			return visitor.visitFieldDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_Context extends ParserRuleContext {
	public RAW_STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.RAW_STRING_LIT, 0); }
	public INTERPRETED_STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.INTERPRETED_STRING_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_string_; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterString_) {
			listener.enterString_(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitString_) {
			listener.exitString_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitString_) {
			return visitor.visitString_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(RalphParser.L_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(RalphParser.R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_index; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterIndex) {
			listener.enterIndex(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitIndex) {
			listener.exitIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitIndex) {
			return visitor.visitIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Slice_Context extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(RalphParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(RalphParser.R_BRACKET, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COLON);
		} else {
			return this.getToken(RalphParser.COLON, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_slice_; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterSlice_) {
			listener.enterSlice_(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitSlice_) {
			listener.exitSlice_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitSlice_) {
			return visitor.visitSlice_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public nonNamedType(): NonNamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NonNamedTypeContext);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ELLIPSIS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_arguments; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(RalphParser.FN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public EOS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EOS, 0); }
	public PUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PUB, 0); }
	public PAYABLE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PAYABLE, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_methodDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterMethodDecl) {
			listener.enterMethodDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitMethodDecl) {
			listener.exitMethodDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitMethodDecl) {
			return visitor.visitMethodDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceTypeContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(RalphParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(RalphParser.R_BRACKET, 0); }
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_sliceType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterSliceType) {
			listener.enterSliceType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitSliceType) {
			listener.exitSliceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitSliceType) {
			return visitor.visitSliceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStructContext extends ParserRuleContext {
	public typeStructHeader(): TypeStructHeaderContext {
		return this.getRuleContext(0, TypeStructHeaderContext);
	}
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeStruct; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeStruct) {
			listener.enterTypeStruct(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeStruct) {
			listener.exitTypeStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeStruct) {
			return visitor.visitTypeStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParamContext extends ParserRuleContext {
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.STRUCT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ENUM, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.INTERFACE, 0); }
	public TXSCRIPT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.TXSCRIPT, 0); }
	public TXCONTRACT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.TXCONTRACT, 0); }
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONTRACT, 0); }
	public ASSETSCRIPT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSETSCRIPT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeParam; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeParam) {
			listener.enterTypeParam(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeParam) {
			listener.exitTypeParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeParam) {
			return visitor.visitTypeParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStructHeaderContext extends ParserRuleContext {
	public typeParam(): TypeParamContext {
		return this.getRuleContext(0, TypeParamContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public LESS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LESS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.GREATER, 0); }
	public L_PAREN(): TerminalNode[];
	public L_PAREN(i: number): TerminalNode;
	public L_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.L_PAREN);
		} else {
			return this.getToken(RalphParser.L_PAREN, i);
		}
	}
	public R_PAREN(): TerminalNode[];
	public R_PAREN(i: number): TerminalNode;
	public R_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.R_PAREN);
		} else {
			return this.getToken(RalphParser.R_PAREN, i);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IMPLEMENTS, 0); }
	public fieldDecl(): FieldDeclContext[];
	public fieldDecl(i: number): FieldDeclContext;
	public fieldDecl(i?: number): FieldDeclContext | FieldDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclContext);
		} else {
			return this.getRuleContext(i, FieldDeclContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeStructHeader; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeStructHeader) {
			listener.enterTypeStructHeader(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeStructHeader) {
			listener.exitTypeStructHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeStructHeader) {
			return visitor.visitTypeStructHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStructBodyContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public fieldDecl(): FieldDeclContext[];
	public fieldDecl(i: number): FieldDeclContext;
	public fieldDecl(i?: number): FieldDeclContext | FieldDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclContext);
		} else {
			return this.getRuleContext(i, FieldDeclContext);
		}
	}
	public eventEmit(): EventEmitContext[];
	public eventEmit(i: number): EventEmitContext;
	public eventEmit(i?: number): EventEmitContext | EventEmitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventEmitContext);
		} else {
			return this.getRuleContext(i, EventEmitContext);
		}
	}
	public methodDecl(): MethodDeclContext[];
	public methodDecl(i: number): MethodDeclContext;
	public methodDecl(i?: number): MethodDeclContext | MethodDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodDeclContext);
		} else {
			return this.getRuleContext(i, MethodDeclContext);
		}
	}
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeStructBody; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeStructBody) {
			listener.enterTypeStructBody(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeStructBody) {
			listener.exitTypeStructBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeStructBody) {
			return visitor.visitTypeStructBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventEmitContext extends ParserRuleContext {
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EVENT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public fieldDecl(): FieldDeclContext[];
	public fieldDecl(i: number): FieldDeclContext;
	public fieldDecl(i?: number): FieldDeclContext | FieldDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclContext);
		} else {
			return this.getRuleContext(i, FieldDeclContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public EVMIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EVMIT, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_eventEmit; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEventEmit) {
			listener.enterEventEmit(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEventEmit) {
			listener.exitEventEmit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEventEmit) {
			return visitor.visitEventEmit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.AT, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(RalphParser.USING, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public varAssignParamList(): VarAssignParamListContext | undefined {
		return this.tryGetRuleContext(0, VarAssignParamListContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_annotation; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarAssignParamListContext extends ParserRuleContext {
	public assign(): AssignContext[];
	public assign(i: number): AssignContext;
	public assign(i?: number): AssignContext | AssignContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignContext);
		} else {
			return this.getRuleContext(i, AssignContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varAssignParamList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarAssignParamList) {
			listener.enterVarAssignParamList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarAssignParamList) {
			listener.exitVarAssignParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarAssignParamList) {
			return visitor.visitVarAssignParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode { return this.getToken(RalphParser.ASSIGN, 0); }
	public expressionStmt(): ExpressionStmtContext {
		return this.getRuleContext(0, ExpressionStmtContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	public varParamList(): VarParamListContext | undefined {
		return this.tryGetRuleContext(0, VarParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_assign; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarParamListContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varParamList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarParamList) {
			listener.enterVarParamList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarParamList) {
			listener.exitVarParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarParamList) {
			return visitor.visitVarParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_block; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.SEMI);
		} else {
			return this.getToken(RalphParser.SEMI, i);
		}
	}
	public EOS(): TerminalNode[];
	public EOS(i: number): TerminalNode;
	public EOS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.EOS);
		} else {
			return this.getToken(RalphParser.EOS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_statementList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public breakStmt(): BreakStmtContext | undefined {
		return this.tryGetRuleContext(0, BreakStmtContext);
	}
	public continueStmt(): ContinueStmtContext | undefined {
		return this.tryGetRuleContext(0, ContinueStmtContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
	}
	public whileStmt(): WhileStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_statement; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStmtContext extends ParserRuleContext {
	public emptyStmt(): EmptyStmtContext | undefined {
		return this.tryGetRuleContext(0, EmptyStmtContext);
	}
	public incDecStmt(): IncDecStmtContext | undefined {
		return this.tryGetRuleContext(0, IncDecStmtContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public expressionStmt(): ExpressionStmtContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStmtContext);
	}
	public shortVarDecl(): ShortVarDeclContext | undefined {
		return this.tryGetRuleContext(0, ShortVarDeclContext);
	}
	public eventEmit(): EventEmitContext | undefined {
		return this.tryGetRuleContext(0, EventEmitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_simpleStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterSimpleStmt) {
			listener.enterSimpleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitSimpleStmt) {
			listener.exitSimpleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitSimpleStmt) {
			return visitor.visitSimpleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_expressionStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterExpressionStmt) {
			listener.enterExpressionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitExpressionStmt) {
			listener.exitExpressionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitExpressionStmt) {
			return visitor.visitExpressionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncDecStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PLUS_PLUS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PLUS_PLUS, 0); }
	public MINUS_MINUS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MINUS_MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_incDecStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterIncDecStmt) {
			listener.enterIncDecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitIncDecStmt) {
			listener.exitIncDecStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitIncDecStmt) {
			return visitor.visitIncDecStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	public assign_op(): Assign_opContext {
		return this.getRuleContext(0, Assign_opContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_assignment; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assign_opContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode { return this.getToken(RalphParser.ASSIGN, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MINUS, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.OR, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CARET, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.STAR, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MOD, 0); }
	public LSHIFT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LSHIFT, 0); }
	public RSHIFT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.RSHIFT, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(RalphParser.AMPERSAND, 0); }
	public BIT_CLEAR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BIT_CLEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_assign_op; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterAssign_op) {
			listener.enterAssign_op(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitAssign_op) {
			listener.exitAssign_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitAssign_op) {
			return visitor.visitAssign_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShortVarDeclContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public DECLARE_ASSIGN(): TerminalNode { return this.getToken(RalphParser.DECLARE_ASSIGN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_shortVarDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterShortVarDecl) {
			listener.enterShortVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitShortVarDecl) {
			listener.exitShortVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitShortVarDecl) {
			return visitor.visitShortVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStmtContext extends ParserRuleContext {
	public EOS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EOS, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RalphParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_emptyStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEmptyStmt) {
			listener.enterEmptyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEmptyStmt) {
			listener.exitEmptyStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEmptyStmt) {
			return visitor.visitEmptyStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(RalphParser.RETURN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(RalphParser.BREAK, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_breakStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterBreakStmt) {
			listener.enterBreakStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitBreakStmt) {
			listener.exitBreakStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitBreakStmt) {
			return visitor.visitBreakStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStmtContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(RalphParser.CONTINUE, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_continueStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterContinueStmt) {
			listener.enterContinueStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitContinueStmt) {
			listener.exitContinueStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitContinueStmt) {
			return visitor.visitContinueStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(RalphParser.IF, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public eos(): EosContext | undefined {
		return this.tryGetRuleContext(0, EosContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ELSE, 0); }
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(RalphParser.FOR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(RalphParser.WHILE, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_whileStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterWhileStmt) {
			listener.enterWhileStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitWhileStmt) {
			listener.exitWhileStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RalphParser.SEMI, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EOF, 0); }
	public EOS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EOS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_eos; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


