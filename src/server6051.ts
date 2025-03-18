
const express = require('express')
import {handler6051} from "./handler6051";
const app = express()
app.get('/6051', handler6051)
app.listen(3000, () => {})
        