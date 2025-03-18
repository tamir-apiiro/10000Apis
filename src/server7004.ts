
const express = require('express')
import {handler7004} from "./handler7004";
const app = express()
app.get('/7004', handler7004)
app.listen(3000, () => {})
        