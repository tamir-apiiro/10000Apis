
const express = require('express')
import {handler9652} from "./handler9652";
const app = express()
app.get('/9652', handler9652)
app.listen(3000, () => {})
        