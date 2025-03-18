
const express = require('express')
import {handler2747} from "./handler2747";
const app = express()
app.get('/2747', handler2747)
app.listen(3000, () => {})
        