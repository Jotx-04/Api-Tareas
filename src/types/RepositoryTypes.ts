export interface Repository<T = unknown>{
    create(date: T): Promise<T>
    read(): Promise<T[]>
}