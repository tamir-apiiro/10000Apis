
const express = require('express')
import {handler9914} from "./handler9914";
const app = express()
app.get('/9914', handler9914)
app.listen(3000, () => {})
        