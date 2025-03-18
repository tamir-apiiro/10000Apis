
const express = require('express')
import {handler7799} from "./handler7799";
const app = express()
app.get('/7799', handler7799)
app.listen(3000, () => {})
        