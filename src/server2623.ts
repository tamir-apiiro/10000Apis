
const express = require('express')
import {handler2623} from "./handler2623";
const app = express()
app.get('/2623', handler2623)
app.listen(3000, () => {})
        