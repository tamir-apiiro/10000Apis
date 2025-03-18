
const express = require('express')
import {handler7238} from "./handler7238";
const app = express()
app.get('/7238', handler7238)
app.listen(3000, () => {})
        