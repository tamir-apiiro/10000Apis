
const express = require('express')
import {handler8590} from "./handler8590";
const app = express()
app.get('/8590', handler8590)
app.listen(3000, () => {})
        