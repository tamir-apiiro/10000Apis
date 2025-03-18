
const express = require('express')
import {handler6646} from "./handler6646";
const app = express()
app.get('/6646', handler6646)
app.listen(3000, () => {})
        