
const express = require('express')
import {handler9351} from "./handler9351";
const app = express()
app.get('/9351', handler9351)
app.listen(3000, () => {})
        