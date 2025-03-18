
const express = require('express')
import {handler6906} from "./handler6906";
const app = express()
app.get('/6906', handler6906)
app.listen(3000, () => {})
        