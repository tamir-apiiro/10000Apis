
const express = require('express')
import {handler702} from "./handler702";
const app = express()
app.get('/702', handler702)
app.listen(3000, () => {})
        