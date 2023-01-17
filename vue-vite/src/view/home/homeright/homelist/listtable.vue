<template>
    <div class="list-table">
        <!-- <TableContainer v-loading="loadingTable" minHeight="609px"> -->
            <el-table v-loading="loadingTable" :data="eventdata" style="width: 100%;height: 640px; border-radius: 10px;overflow-y: auto;">
                <el-table-column  prop="eventName" label="名称" width="250" />
                <el-table-column prop="eventDetailAddress" label="地址" width="250">
                    <template #default="scope">
                    <span style="color:#70B1FD">{{scope.row.eventDetailAddress}}</span> 
                    </template>
                </el-table-column>
                <el-table-column prop="eventTime" label="时间" width="200" />
                <el-table-column  label="描述" width="200">
                    <template #default="scope">
                        <el-popover placement="top-start" title="描述" :width="200" trigger="hover" :content="scope.row.eventDescription"> 
                                <template #reference>
                                    <!-- <div style="width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{scope.row.eventDescription}}</div> -->
                                    <el-tag class="list-tag" type="warning">{{scope.row.eventDescription.slice(0,12)}}...</el-tag>
                                </template>
                            </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="eventSubmitOrganizationName" label="委办局" align="center" min-width="120"/>
                <el-table-column prop="eventLongitude" label="经度" align="center" min-width="60" />
                <el-table-column prop="eventLatitude" label="纬度" align="center" min-width="60" />
                <!-- eventOrder -->
                <el-table-column  label="是否开单" min-width="70" align="center">
                    <template #default="scope">
                    <!-- <span v-if="scope.row.eventOrder==0||scope.row.eventOrder==null" style="color:#70B1FD">未开单</span>  -->
                    <el-tag v-if="scope.row.eventHasDetail==0||scope.row.eventHasDetail==null" class="ml-2" type="info">未开单</el-tag>
                    <el-tag v-if="scope.row.eventHasDetail==1" class="ml-2" type="success">已开单</el-tag>
                    <!-- <span v-else style="color:#5AC790">已开单</span> -->
                    </template>
                </el-table-column>
                
                <el-table-column  label="操作" align="center" min-width="100">
                <template #default="scope">
                    <el-button type="success" plain @click="eventDetail(scope.row)">详情</el-button>
                    <el-button type="primary" plain>编辑</el-button>
                    <el-button type="danger" plain>删除</el-button>   
                </template>
                </el-table-column>
            </el-table>
        <!-- </TableContainer> -->
         

        <div class="list-pagination">
                 <el-pagination  
                    background 
                    :page-sizes="[10,20, 30, 40, 50]"
                    layout="sizes,prev, pager, next,jumper" :total="eventObj.total||0" 
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    />
        </div>
       
        
    </div>
</template>
<script setup>
const props=defineProps({
    eventdata:{
        type:Array,
        default:()=>[]
    },
    eventObj:{
        type:Object,
        default:()=>{}
    },
    loadingTable:{
        type:Boolean,
        default:()=>false
    }
}
)

const emit = defineEmits(['handleCurrentChange','eventDetail'])
const handleCurrentChange=(item)=>{
    emit('handleCurrentChange',item)
    console.log(item,123)
}
const handleSizeChange=(item)=>{
    console.log(item,789)
}
const eventDetail=(item)=>{
    emit('eventDetail',item)
}

const buttonRef = ref()

</script>
<style lang="scss" scoped>
    ::-webkit-scrollbar {
        display: none;
    }
    .list-table{
        // width: 100%;
        height: 800px;
        background-color: #fff;
        margin: 30px;
        border-radius: 10px;
        padding: 0 15px;
        box-shadow: 0px 0px 10px rgba(200,200,200,0.5);
        ::v-deep(.el-table__inner-wrapper){
            // margin: 0 15px;
        }
        ::v-deep(.el-table__header){
            height: 80px;
        };
        ::v-deep(.el-table__row){
            height: 70px;
        }
        .list-tag{
            ::deep(.el-tag__content){
                width:200px;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            }
        }
        // .el-table__header-wrapper{
        //     height: 100px;
        // }
        .list-pagination{
            width: 100%;
            height: 100px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
   
</style>