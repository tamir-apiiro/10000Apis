
const express = require('express')
import {handler9747} from "./handler9747";
const app = express()
app.get('/9747', handler9747)
app.listen(3000, () => {})
        