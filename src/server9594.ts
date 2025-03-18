
const express = require('express')
import {handler9594} from "./handler9594";
const app = express()
app.get('/9594', handler9594)
app.listen(3000, () => {})
        