// Generated from ./src/RalphParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SourceFileContext } from "./RalphParser";
import { ImportDeclContext } from "./RalphParser";
import { DeclarationContext } from "./RalphParser";
import { IdentifierListContext } from "./RalphParser";
import { ConstDeclContext } from "./RalphParser";
import { LetDeclContext } from "./RalphParser";
import { ExpressionContext } from "./RalphParser";
import { ExpressionListContext } from "./RalphParser";
import { ArrayExprContext } from "./RalphParser";
import { MethodExprContext } from "./RalphParser";
import { PrimaryExprContext } from "./RalphParser";
import { PrimitiveTypeContext } from "./RalphParser";
import { ArrayTypeContext } from "./RalphParser";
import { ArrayLengthContext } from "./RalphParser";
import { TypeDeclContext } from "./RalphParser";
import { ResultContext } from "./RalphParser";
import { ParameterDeclContext } from "./RalphParser";
import { MethodDeclContext } from "./RalphParser";
import { BasicLitContext } from "./RalphParser";
import { IntegerContext } from "./RalphParser";
import { FieldDeclContext } from "./RalphParser";
import { String_Context } from "./RalphParser";
import { TypeStructContext } from "./RalphParser";
import { TypeParamContext } from "./RalphParser";
import { TypeStructHeaderContext } from "./RalphParser";
import { TypeStructBodyContext } from "./RalphParser";
import { EventEmitContext } from "./RalphParser";
import { AnnotationContext } from "./RalphParser";
import { AssignParamListContext } from "./RalphParser";
import { AssignContext } from "./RalphParser";
import { BlockContext } from "./RalphParser";
import { StatementListContext } from "./RalphParser";
import { StatementContext } from "./RalphParser";
import { SimpleStmtContext } from "./RalphParser";
import { ExpressionStmtContext } from "./RalphParser";
import { EmptyStmtContext } from "./RalphParser";
import { ReturnStmtContext } from "./RalphParser";
import { IfStmtContext } from "./RalphParser";
import { WhileStmtContext } from "./RalphParser";
import { EosContext } from "./RalphParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RalphParser`.
 */
export interface RalphParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RalphParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	enterSourceFile?: (ctx: SourceFileContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	exitSourceFile?: (ctx: SourceFileContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.importDecl`.
	 * @param ctx the parse tree
	 */
	enterImportDecl?: (ctx: ImportDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.importDecl`.
	 * @param ctx the parse tree
	 */
	exitImportDecl?: (ctx: ImportDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.constDecl`.
	 * @param ctx the parse tree
	 */
	enterConstDecl?: (ctx: ConstDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.constDecl`.
	 * @param ctx the parse tree
	 */
	exitConstDecl?: (ctx: ConstDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.letDecl`.
	 * @param ctx the parse tree
	 */
	enterLetDecl?: (ctx: LetDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.letDecl`.
	 * @param ctx the parse tree
	 */
	exitLetDecl?: (ctx: LetDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.arrayExpr`.
	 * @param ctx the parse tree
	 */
	enterArrayExpr?: (ctx: ArrayExprContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.arrayExpr`.
	 * @param ctx the parse tree
	 */
	exitArrayExpr?: (ctx: ArrayExprContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.methodExpr`.
	 * @param ctx the parse tree
	 */
	enterMethodExpr?: (ctx: MethodExprContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.methodExpr`.
	 * @param ctx the parse tree
	 */
	exitMethodExpr?: (ctx: MethodExprContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.arrayLength`.
	 * @param ctx the parse tree
	 */
	enterArrayLength?: (ctx: ArrayLengthContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.arrayLength`.
	 * @param ctx the parse tree
	 */
	exitArrayLength?: (ctx: ArrayLengthContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.typeDecl`.
	 * @param ctx the parse tree
	 */
	enterTypeDecl?: (ctx: TypeDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.typeDecl`.
	 * @param ctx the parse tree
	 */
	exitTypeDecl?: (ctx: TypeDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.result`.
	 * @param ctx the parse tree
	 */
	enterResult?: (ctx: ResultContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.result`.
	 * @param ctx the parse tree
	 */
	exitResult?: (ctx: ResultContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.parameterDecl`.
	 * @param ctx the parse tree
	 */
	enterParameterDecl?: (ctx: ParameterDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.parameterDecl`.
	 * @param ctx the parse tree
	 */
	exitParameterDecl?: (ctx: ParameterDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.methodDecl`.
	 * @param ctx the parse tree
	 */
	enterMethodDecl?: (ctx: MethodDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.methodDecl`.
	 * @param ctx the parse tree
	 */
	exitMethodDecl?: (ctx: MethodDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.basicLit`.
	 * @param ctx the parse tree
	 */
	enterBasicLit?: (ctx: BasicLitContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.basicLit`.
	 * @param ctx the parse tree
	 */
	exitBasicLit?: (ctx: BasicLitContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.fieldDecl`.
	 * @param ctx the parse tree
	 */
	enterFieldDecl?: (ctx: FieldDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.fieldDecl`.
	 * @param ctx the parse tree
	 */
	exitFieldDecl?: (ctx: FieldDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.string_`.
	 * @param ctx the parse tree
	 */
	enterString_?: (ctx: String_Context) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.string_`.
	 * @param ctx the parse tree
	 */
	exitString_?: (ctx: String_Context) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.typeStruct`.
	 * @param ctx the parse tree
	 */
	enterTypeStruct?: (ctx: TypeStructContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.typeStruct`.
	 * @param ctx the parse tree
	 */
	exitTypeStruct?: (ctx: TypeStructContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.typeParam`.
	 * @param ctx the parse tree
	 */
	enterTypeParam?: (ctx: TypeParamContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.typeParam`.
	 * @param ctx the parse tree
	 */
	exitTypeParam?: (ctx: TypeParamContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.typeStructHeader`.
	 * @param ctx the parse tree
	 */
	enterTypeStructHeader?: (ctx: TypeStructHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.typeStructHeader`.
	 * @param ctx the parse tree
	 */
	exitTypeStructHeader?: (ctx: TypeStructHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.typeStructBody`.
	 * @param ctx the parse tree
	 */
	enterTypeStructBody?: (ctx: TypeStructBodyContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.typeStructBody`.
	 * @param ctx the parse tree
	 */
	exitTypeStructBody?: (ctx: TypeStructBodyContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.eventEmit`.
	 * @param ctx the parse tree
	 */
	enterEventEmit?: (ctx: EventEmitContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.eventEmit`.
	 * @param ctx the parse tree
	 */
	exitEventEmit?: (ctx: EventEmitContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.assignParamList`.
	 * @param ctx the parse tree
	 */
	enterAssignParamList?: (ctx: AssignParamListContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.assignParamList`.
	 * @param ctx the parse tree
	 */
	exitAssignParamList?: (ctx: AssignParamListContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.simpleStmt`.
	 * @param ctx the parse tree
	 */
	enterSimpleStmt?: (ctx: SimpleStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.simpleStmt`.
	 * @param ctx the parse tree
	 */
	exitSimpleStmt?: (ctx: SimpleStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.expressionStmt`.
	 * @param ctx the parse tree
	 */
	enterExpressionStmt?: (ctx: ExpressionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.expressionStmt`.
	 * @param ctx the parse tree
	 */
	exitExpressionStmt?: (ctx: ExpressionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.emptyStmt`.
	 * @param ctx the parse tree
	 */
	enterEmptyStmt?: (ctx: EmptyStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.emptyStmt`.
	 * @param ctx the parse tree
	 */
	exitEmptyStmt?: (ctx: EmptyStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	enterWhileStmt?: (ctx: WhileStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	exitWhileStmt?: (ctx: WhileStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.eos`.
	 * @param ctx the parse tree
	 */
	enterEos?: (ctx: EosContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.eos`.
	 * @param ctx the parse tree
	 */
	exitEos?: (ctx: EosContext) => void;
}

