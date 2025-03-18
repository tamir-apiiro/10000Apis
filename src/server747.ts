
const express = require('express')
import {handler747} from "./handler747";
const app = express()
app.get('/747', handler747)
app.listen(3000, () => {})
        