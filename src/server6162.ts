
const express = require('express')
import {handler6162} from "./handler6162";
const app = express()
app.get('/6162', handler6162)
app.listen(3000, () => {})
        