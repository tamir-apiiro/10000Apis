
const express = require('express')
import {handler9550} from "./handler9550";
const app = express()
app.get('/9550', handler9550)
app.listen(3000, () => {})
        