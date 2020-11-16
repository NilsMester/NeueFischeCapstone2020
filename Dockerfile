FROM openjdk:15-oracle

MAINTAINER Nils Mester <n-mester@mailbox.org>

ADD backend/target/link-librarian.jar app.jar

CMD ["sh" , "-c", "java -jar -Dserver.port=$PORT -Djwt.secretkey=$JWT_SECRETKEY app.jar"]
