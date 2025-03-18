
const express = require('express')
import {handler7902} from "./handler7902";
const app = express()
app.get('/7902', handler7902)
app.listen(3000, () => {})
        