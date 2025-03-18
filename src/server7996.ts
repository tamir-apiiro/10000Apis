
const express = require('express')
import {handler7996} from "./handler7996";
const app = express()
app.get('/7996', handler7996)
app.listen(3000, () => {})
        