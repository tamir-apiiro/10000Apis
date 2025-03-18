
const express = require('express')
import {handler9178} from "./handler9178";
const app = express()
app.get('/9178', handler9178)
app.listen(3000, () => {})
        