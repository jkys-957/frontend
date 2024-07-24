package com.exam;

import io.javalin.Javalin;

public class Main {
    public static void main(String[] args) {
            var app = Javalin.create(/*config*/)
            .get("/", ctx -> ctx.result("Hello World"))
            .post("/input", ctx -> {    
                // String name = ctx.formParam("name");
                // String password = ctx.formParam("password");
                // System.out.println("name : " + name + " pw : " + password);
                // // some code
                // ctx.status(201);
                ctx.result(ctx.formParam("hidden"));
            })
            .get("/input", ctx -> {
                String name = ctx.queryParam("name");
                String password = ctx.queryParam("password");
                System.out.println("name : " + name + " pw : " + password);
                ctx.result("name : " + name + " pw : " + password);
                ctx.status(201);
            })


            
            .start(7070);

            
    }
}