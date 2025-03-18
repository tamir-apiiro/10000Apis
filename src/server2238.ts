
const express = require('express')
import {handler2238} from "./handler2238";
const app = express()
app.get('/2238', handler2238)
app.listen(3000, () => {})
        