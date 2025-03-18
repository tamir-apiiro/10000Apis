
const express = require('express')
import {handler7586} from "./handler7586";
const app = express()
app.get('/7586', handler7586)
app.listen(3000, () => {})
        