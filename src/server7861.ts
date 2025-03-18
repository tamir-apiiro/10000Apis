
const express = require('express')
import {handler7861} from "./handler7861";
const app = express()
app.get('/7861', handler7861)
app.listen(3000, () => {})
        