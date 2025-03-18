
const express = require('express')
import {handler7915} from "./handler7915";
const app = express()
app.get('/7915', handler7915)
app.listen(3000, () => {})
        