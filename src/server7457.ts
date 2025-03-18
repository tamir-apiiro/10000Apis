
const express = require('express')
import {handler7457} from "./handler7457";
const app = express()
app.get('/7457', handler7457)
app.listen(3000, () => {})
        