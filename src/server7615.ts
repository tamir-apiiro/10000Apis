
const express = require('express')
import {handler7615} from "./handler7615";
const app = express()
app.get('/7615', handler7615)
app.listen(3000, () => {})
        