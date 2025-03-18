
const express = require('express')
import {handler7448} from "./handler7448";
const app = express()
app.get('/7448', handler7448)
app.listen(3000, () => {})
        