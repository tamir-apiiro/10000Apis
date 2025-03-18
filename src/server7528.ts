
const express = require('express')
import {handler7528} from "./handler7528";
const app = express()
app.get('/7528', handler7528)
app.listen(3000, () => {})
        