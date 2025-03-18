
const express = require('express')
import {handler669} from "./handler669";
const app = express()
app.get('/669', handler669)
app.listen(3000, () => {})
        