
const express = require('express')
import {handler7016} from "./handler7016";
const app = express()
app.get('/7016', handler7016)
app.listen(3000, () => {})
        