<template>
	<div v-loading="pending">
		<el-row type="flex" justify="center" class="mb-20">
			<el-col :span="12">
				<el-input placeholder="Search Movie" v-model="search" @change="getMovies()" clearable></el-input>
			</el-col>
		</el-row>
		<el-row type="flex" justify="center">
			<el-col v-if="pagination">
				<el-pagination class="pull-right" :page-size="page.size" layout="total, sizes, prev, pager, next, jumper" :total="page.total" :current-page.sync="page.current" @current-change="getMovies" @size-change="size => ((page.size = size) && getMovies())"></el-pagination>
			</el-col>
		</el-row>
		<el-row type="flex" justify="center" v-loading="pending">
			<el-col :span="12">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column prop="Title" label="Title"></el-table-column>
					<el-table-column prop="Year" label="Year" width="180"></el-table-column>
					<el-table-column prop="imdbID" label="ID" width="180"></el-table-column>
				</el-table>
			</el-col>
		</el-row>
	</div>
</template>
<style>
.mb-20 {
	margin-bottom: 20px;
}
</style>
<script>
import axios from 'axios'
export default {
	data () {
		return {
			page: { total: 0, current: 1, size: 10 },
			tableData: [],
			pending: false,
			search: '',
			pagination: false
		}
	},
	created () {
		this.getMovies()
	},
	methods: {
		async getMovies () {
			try {
				this.pending = true
				// https://jsonmock.hackerrank.com/api/movies/search/?Title=$%7Btitle%7D&page=$%7Bpage
				let params = {}
				if (this.search) params.Title = this.search
				if (this.pagination) params.page = this.page.current

				let {data} = await axios.get('https://jsonmock.hackerrank.com/api/movies/search', {params})
				this.pagination = data.total > 10
				this.page.size = data.per_page
				this.page.total = data.total_pages
				this.tableData = data.data
			} catch (err) {
				this.$message({
					showClose: true,
					message: 'Oops, this is a error message.',
					type: 'error'
				})
				throw new Error(err)
			} finally {
				this.pending = false
			}
		}
	}
}
</script>