
const express = require('express')
import {handler6747} from "./handler6747";
const app = express()
app.get('/6747', handler6747)
app.listen(3000, () => {})
        