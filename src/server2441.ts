
const express = require('express')
import {handler2441} from "./handler2441";
const app = express()
app.get('/2441', handler2441)
app.listen(3000, () => {})
        