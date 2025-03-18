
const express = require('express')
import {handler7896} from "./handler7896";
const app = express()
app.get('/7896', handler7896)
app.listen(3000, () => {})
        