
const express = require('express')
import {handler9715} from "./handler9715";
const app = express()
app.get('/9715', handler9715)
app.listen(3000, () => {})
        