
const express = require('express')
import {handler334} from "./handler334";
const app = express()
app.get('/334', handler334)
app.listen(3000, () => {})
        