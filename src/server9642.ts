
const express = require('express')
import {handler9642} from "./handler9642";
const app = express()
app.get('/9642', handler9642)
app.listen(3000, () => {})
        