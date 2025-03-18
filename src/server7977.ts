
const express = require('express')
import {handler7977} from "./handler7977";
const app = express()
app.get('/7977', handler7977)
app.listen(3000, () => {})
        