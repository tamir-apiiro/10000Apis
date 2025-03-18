
const express = require('express')
import {handler3747} from "./handler3747";
const app = express()
app.get('/3747', handler3747)
app.listen(3000, () => {})
        