
const express = require('express')
import {handler7602} from "./handler7602";
const app = express()
app.get('/7602', handler7602)
app.listen(3000, () => {})
        