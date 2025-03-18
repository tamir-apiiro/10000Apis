
const express = require('express')
import {handler9540} from "./handler9540";
const app = express()
app.get('/9540', handler9540)
app.listen(3000, () => {})
        