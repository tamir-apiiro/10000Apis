
const express = require('express')
import {handler9370} from "./handler9370";
const app = express()
app.get('/9370', handler9370)
app.listen(3000, () => {})
        