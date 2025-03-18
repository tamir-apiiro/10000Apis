
const express = require('express')
import {handler7276} from "./handler7276";
const app = express()
app.get('/7276', handler7276)
app.listen(3000, () => {})
        