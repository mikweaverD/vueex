<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterVueApp.label.home.title')" id="label-heading">Labels</span>
            <router-link :to="{name: 'LabelCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-label">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterVueApp.label.home.createLabel')">
                    Create a new Label
                </span>
            </router-link>
        </h2>
        <b-alert :show="dismissCountDown"
            dismissible
            :variant="alertType"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{alertMessage}}
        </b-alert>
        <br/>
        <div class="alert alert-warning" v-if="!isFetching && labels && labels.length === 0">
            <span v-text="$t('jhipsterVueApp.label.home.notFound')">No labels found</span>
        </div>
        <div class="table-responsive" v-if="labels && labels.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('global.field.id')">ID</span></th>
                    <th><span v-text="$t('jhipsterVueApp.label.label')">Label</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="label in labels"
                    :key="label.id">
                    <td>
                        <router-link :to="{name: 'LabelView', params: {labelId: label.id}}">{{label.id}}</router-link>
                    </td>
                    <td>{{label.label}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'LabelView', params: {labelId: label.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'LabelEdit', params: {labelId: label.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(label)"
                                   variant="danger"
                                   class="btn btn-sm"
                                   v-b-modal.removeEntity>
                                <font-awesome-icon icon="times"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.delete')">Delete</span>
                            </b-button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <b-modal ref="removeEntity" id="removeEntity" >
            <span slot="modal-title"><span id="jhipsterVueApp.label.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-label-heading" v-text="$t('jhipsterVueApp.label.delete.question', {'id': removeId})">Are you sure you want to delete this Label?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-label" v-text="$t('entity.action.delete')" v-on:click="removeLabel()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./label.component.ts">
</script>
