
const express = require('express')
import {handler1747} from "./handler1747";
const app = express()
app.get('/1747', handler1747)
app.listen(3000, () => {})
        