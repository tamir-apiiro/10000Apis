
const express = require('express')
import {handler4027} from "./handler4027";
const app = express()
app.get('/4027', handler4027)
app.listen(3000, () => {})
        