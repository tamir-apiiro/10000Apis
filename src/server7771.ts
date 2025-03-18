
const express = require('express')
import {handler7771} from "./handler7771";
const app = express()
app.get('/7771', handler7771)
app.listen(3000, () => {})
        