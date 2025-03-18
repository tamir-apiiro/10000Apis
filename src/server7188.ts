
const express = require('express')
import {handler7188} from "./handler7188";
const app = express()
app.get('/7188', handler7188)
app.listen(3000, () => {})
        