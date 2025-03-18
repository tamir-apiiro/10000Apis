
const express = require('express')
import {handler6619} from "./handler6619";
const app = express()
app.get('/6619', handler6619)
app.listen(3000, () => {})
        