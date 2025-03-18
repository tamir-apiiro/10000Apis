
const express = require('express')
import {handler7168} from "./handler7168";
const app = express()
app.get('/7168', handler7168)
app.listen(3000, () => {})
        