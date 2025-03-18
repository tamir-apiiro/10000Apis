
const express = require('express')
import {handler7787} from "./handler7787";
const app = express()
app.get('/7787', handler7787)
app.listen(3000, () => {})
        