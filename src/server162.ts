
const express = require('express')
import {handler162} from "./handler162";
const app = express()
app.get('/162', handler162)
app.listen(3000, () => {})
        