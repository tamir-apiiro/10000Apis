
const express = require('express')
import {handler7531} from "./handler7531";
const app = express()
app.get('/7531', handler7531)
app.listen(3000, () => {})
        