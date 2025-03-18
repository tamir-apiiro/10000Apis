
const express = require('express')
import {handler6615} from "./handler6615";
const app = express()
app.get('/6615', handler6615)
app.listen(3000, () => {})
        