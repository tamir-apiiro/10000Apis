
const express = require('express')
import {handler9103} from "./handler9103";
const app = express()
app.get('/9103', handler9103)
app.listen(3000, () => {})
        