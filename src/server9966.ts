
const express = require('express')
import {handler9966} from "./handler9966";
const app = express()
app.get('/9966', handler9966)
app.listen(3000, () => {})
        