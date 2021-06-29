import { mixins } from 'vue-class-component';

import { Component, Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IOperation } from '@/shared/model/operation.model';
import AlertMixin from '@/shared/alert/alert.mixin';

import OperationService from './operation.service';

@Component({
  mixins: [Vue2Filters.mixin],
})
export default class Operation extends mixins(AlertMixin) {
  @Inject('operationService') private operationService: () => OperationService;
  private removeId: number = null;

  public operations: IOperation[] = [];

  public isFetching = false;

  public mounted(): void {
    this.retrieveAllOperations();
  }

  public clear(): void {
    this.retrieveAllOperations();
  }

  public retrieveAllOperations(): void {
    this.isFetching = true;

    this.operationService()
      .retrieve()
      .then(
        res => {
          this.operations = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IOperation): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeEntity) {
      (<any>this.$refs.removeEntity).show();
    }
  }

  public removeOperation(): void {
    this.operationService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterVueApp.operation.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();
        this.removeId = null;
        this.retrieveAllOperations();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
