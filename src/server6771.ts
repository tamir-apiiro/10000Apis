
const express = require('express')
import {handler6771} from "./handler6771";
const app = express()
app.get('/6771', handler6771)
app.listen(3000, () => {})
        