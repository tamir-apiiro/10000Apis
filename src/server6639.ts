
const express = require('express')
import {handler6639} from "./handler6639";
const app = express()
app.get('/6639', handler6639)
app.listen(3000, () => {})
        