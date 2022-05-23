export interface TaskEntity {
    id:	string;
    name:	string;
    shortDesc:	string;
    fullDesc:	string;
    date:	string;
    status:	boolean;

}

export type Tasks = TaskEntity[];

export interface ButtonProps {
    text: string;
}

export interface TodooProps {
    id: string;
}
