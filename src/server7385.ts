
const express = require('express')
import {handler7385} from "./handler7385";
const app = express()
app.get('/7385', handler7385)
app.listen(3000, () => {})
        