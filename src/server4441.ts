
const express = require('express')
import {handler4441} from "./handler4441";
const app = express()
app.get('/4441', handler4441)
app.listen(3000, () => {})
        