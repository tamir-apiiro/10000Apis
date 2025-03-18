
const express = require('express')
import {handler8996} from "./handler8996";
const app = express()
app.get('/8996', handler8996)
app.listen(3000, () => {})
        