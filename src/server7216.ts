
const express = require('express')
import {handler7216} from "./handler7216";
const app = express()
app.get('/7216', handler7216)
app.listen(3000, () => {})
        