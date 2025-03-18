
const express = require('express')
import {handler9120} from "./handler9120";
const app = express()
app.get('/9120', handler9120)
app.listen(3000, () => {})
        