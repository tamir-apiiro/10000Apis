
const express = require('express')
import {handler9577} from "./handler9577";
const app = express()
app.get('/9577', handler9577)
app.listen(3000, () => {})
        