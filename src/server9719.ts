
const express = require('express')
import {handler9719} from "./handler9719";
const app = express()
app.get('/9719', handler9719)
app.listen(3000, () => {})
        