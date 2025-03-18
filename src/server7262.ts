
const express = require('express')
import {handler7262} from "./handler7262";
const app = express()
app.get('/7262', handler7262)
app.listen(3000, () => {})
        