
const express = require('express')
import {handler7441} from "./handler7441";
const app = express()
app.get('/7441', handler7441)
app.listen(3000, () => {})
        