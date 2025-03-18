
const express = require('express')
import {handler7166} from "./handler7166";
const app = express()
app.get('/7166', handler7166)
app.listen(3000, () => {})
        