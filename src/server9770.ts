
const express = require('express')
import {handler9770} from "./handler9770";
const app = express()
app.get('/9770', handler9770)
app.listen(3000, () => {})
        