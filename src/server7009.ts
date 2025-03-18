
const express = require('express')
import {handler7009} from "./handler7009";
const app = express()
app.get('/7009', handler7009)
app.listen(3000, () => {})
        