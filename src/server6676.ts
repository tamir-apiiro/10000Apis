
const express = require('express')
import {handler6676} from "./handler6676";
const app = express()
app.get('/6676', handler6676)
app.listen(3000, () => {})
        