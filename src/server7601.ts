
const express = require('express')
import {handler7601} from "./handler7601";
const app = express()
app.get('/7601', handler7601)
app.listen(3000, () => {})
        