
const express = require('express')
import {handler6117} from "./handler6117";
const app = express()
app.get('/6117', handler6117)
app.listen(3000, () => {})
        