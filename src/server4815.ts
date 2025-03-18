
const express = require('express')
import {handler4815} from "./handler4815";
const app = express()
app.get('/4815', handler4815)
app.listen(3000, () => {})
        