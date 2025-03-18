
const express = require('express')
import {handler9162} from "./handler9162";
const app = express()
app.get('/9162', handler9162)
app.listen(3000, () => {})
        