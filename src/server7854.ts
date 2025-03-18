
const express = require('express')
import {handler7854} from "./handler7854";
const app = express()
app.get('/7854', handler7854)
app.listen(3000, () => {})
        