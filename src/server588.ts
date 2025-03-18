
const express = require('express')
import {handler588} from "./handler588";
const app = express()
app.get('/588', handler588)
app.listen(3000, () => {})
        