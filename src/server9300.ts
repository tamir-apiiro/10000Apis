
const express = require('express')
import {handler9300} from "./handler9300";
const app = express()
app.get('/9300', handler9300)
app.listen(3000, () => {})
        