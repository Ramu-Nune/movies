<template>
	<el-row type="flex" justify="center">
		<el-col :span="12">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="Title" label="" width="30">
					<template slot-scope="scope">
						<i :class="scope.row.star ? 'el-icon-star-on' : 'el-icon-star-off'" @click="toggleStar(scope.row)"></i>
					</template>
				</el-table-column>
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
			tableData: JSON.parse(localStorage.getItem('favourites')) || []
		}
	},
	methods: {
		toggleStar (row) {
			row.star = !row.star
			this.tableData = this.tableData.filter(x => x.star)
			localStorage.setItem('favourites', JSON.stringify(this.tableData))
		}
	}
}
</script>