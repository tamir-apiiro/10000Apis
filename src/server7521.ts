
const express = require('express')
import {handler7521} from "./handler7521";
const app = express()
app.get('/7521', handler7521)
app.listen(3000, () => {})
        