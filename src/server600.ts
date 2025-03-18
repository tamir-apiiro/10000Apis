
const express = require('express')
import {handler600} from "./handler600";
const app = express()
app.get('/600', handler600)
app.listen(3000, () => {})
        