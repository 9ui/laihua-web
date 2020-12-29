import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

interface Student {
  name: string;
  age: number;
  sex: string;
}

@Module({
  name: 'modules/student',
  namespaced: true,
  stateFactory: true,
})
export default class StudentModule extends VuexModule {
  private students: Student[] = [];

  public get getStudents() {
    return this.students;
  }

  @Mutation
  public setStudents(stu: Student): void {
    this.students.push(stu);
  }
}
