
const express = require('express')
import {handler7083} from "./handler7083";
const app = express()
app.get('/7083', handler7083)
app.listen(3000, () => {})
        