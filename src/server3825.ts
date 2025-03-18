
const express = require('express')
import {handler3825} from "./handler3825";
const app = express()
app.get('/3825', handler3825)
app.listen(3000, () => {})
        