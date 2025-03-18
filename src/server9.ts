
const express = require('express')
import {handler9} from "./handler9";
const app = express()
app.get('/9', handler9)
app.listen(3000, () => {})
        