
const express = require('express')
import {handler7574} from "./handler7574";
const app = express()
app.get('/7574', handler7574)
app.listen(3000, () => {})
        