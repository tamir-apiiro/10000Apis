
const express = require('express')
import {handler7798} from "./handler7798";
const app = express()
app.get('/7798', handler7798)
app.listen(3000, () => {})
        