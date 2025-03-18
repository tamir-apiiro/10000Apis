
const express = require('express')
import {handler7247} from "./handler7247";
const app = express()
app.get('/7247', handler7247)
app.listen(3000, () => {})
        