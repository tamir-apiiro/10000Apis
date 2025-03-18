
const express = require('express')
import {handler9309} from "./handler9309";
const app = express()
app.get('/9309', handler9309)
app.listen(3000, () => {})
        