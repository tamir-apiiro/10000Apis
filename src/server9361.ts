
const express = require('express')
import {handler9361} from "./handler9361";
const app = express()
app.get('/9361', handler9361)
app.listen(3000, () => {})
        