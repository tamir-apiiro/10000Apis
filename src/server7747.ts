
const express = require('express')
import {handler7747} from "./handler7747";
const app = express()
app.get('/7747', handler7747)
app.listen(3000, () => {})
        