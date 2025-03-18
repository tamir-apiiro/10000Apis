
const express = require('express')
import {handler6867} from "./handler6867";
const app = express()
app.get('/6867', handler6867)
app.listen(3000, () => {})
        