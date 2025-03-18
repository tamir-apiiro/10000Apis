
const express = require('express')
import {handler9344} from "./handler9344";
const app = express()
app.get('/9344', handler9344)
app.listen(3000, () => {})
        