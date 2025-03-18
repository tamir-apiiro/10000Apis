
const express = require('express')
import {handler7511} from "./handler7511";
const app = express()
app.get('/7511', handler7511)
app.listen(3000, () => {})
        