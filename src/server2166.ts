
const express = require('express')
import {handler2166} from "./handler2166";
const app = express()
app.get('/2166', handler2166)
app.listen(3000, () => {})
        