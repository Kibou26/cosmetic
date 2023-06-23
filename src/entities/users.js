const { Entity, Column, PrimaryGeneratedColumn } = require("typeorm");

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    name;

    @Column()
    email;
}

module.exports = User;