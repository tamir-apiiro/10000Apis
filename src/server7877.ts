
const express = require('express')
import {handler7877} from "./handler7877";
const app = express()
app.get('/7877', handler7877)
app.listen(3000, () => {})
        