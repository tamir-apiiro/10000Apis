
const express = require('express')
import {handler7162} from "./handler7162";
const app = express()
app.get('/7162', handler7162)
app.listen(3000, () => {})
        