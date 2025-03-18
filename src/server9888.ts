
const express = require('express')
import {handler9888} from "./handler9888";
const app = express()
app.get('/9888', handler9888)
app.listen(3000, () => {})
        