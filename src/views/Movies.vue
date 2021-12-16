<template>
	<el-row type="flex" justify="center">
		<el-col :span="12">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="Title" label="Title"></el-table-column>
				<el-table-column prop="Year" label="Year" width="180"></el-table-column>
				<el-table-column prop="imdbID" label="ID" width="180"></el-table-column>
			</el-table>
		</el-col>
	</el-row>
</template>

<script>
import axios from 'axios'
export default {
	data () {
		return {
			tableData: []
		}
	},
	created () {
		this.getMovies()
	},
	methods: {
		async getMovies () {
			try {
				let {data} = await axios.get('https://jsonmock.hackerrank.com/api/movies')
				this.tableData = data.data
			} catch (err) {
				this.$message({
					showClose: true,
					message: 'Oops, this is a error message.',
					type: 'error'
				})
				throw new Error(err)
			}
		}
	}
}
</script>