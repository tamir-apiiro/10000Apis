
const express = require('express')
import {handler7428} from "./handler7428";
const app = express()
app.get('/7428', handler7428)
app.listen(3000, () => {})
        