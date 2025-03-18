
const express = require('express')
import {handler6922} from "./handler6922";
const app = express()
app.get('/6922', handler6922)
app.listen(3000, () => {})
        