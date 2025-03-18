
const express = require('express')
import {handler510} from "./handler510";
const app = express()
app.get('/510', handler510)
app.listen(3000, () => {})
        