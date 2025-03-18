
const express = require('express')
import {handler7678} from "./handler7678";
const app = express()
app.get('/7678', handler7678)
app.listen(3000, () => {})
        