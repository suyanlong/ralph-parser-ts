// Generated from ./src/RalphParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RalphParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RalphParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RalphParser.sourceFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceFile?: (ctx: SourceFileContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.importDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDecl?: (ctx: ImportDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.constDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDecl?: (ctx: ConstDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.letDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetDecl?: (ctx: LetDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.arrayExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpr?: (ctx: ArrayExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.methodExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodExpr?: (ctx: MethodExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.primaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.arrayLength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLength?: (ctx: ArrayLengthContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDecl?: (ctx: TypeDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult?: (ctx: ResultContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.parameterDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDecl?: (ctx: ParameterDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.methodDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDecl?: (ctx: MethodDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.basicLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicLit?: (ctx: BasicLitContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.fieldDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDecl?: (ctx: FieldDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.string_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_?: (ctx: String_Context) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeStruct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStruct?: (ctx: TypeStructContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParam?: (ctx: TypeParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeStructHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStructHeader?: (ctx: TypeStructHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeStructBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStructBody?: (ctx: TypeStructBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.eventEmit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventEmit?: (ctx: EventEmitContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.assignParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignParamList?: (ctx: AssignParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.simpleStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleStmt?: (ctx: SimpleStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.expressionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStmt?: (ctx: ExpressionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.emptyStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStmt?: (ctx: EmptyStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.whileStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;
}

