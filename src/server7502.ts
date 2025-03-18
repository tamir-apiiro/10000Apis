
const express = require('express')
import {handler7502} from "./handler7502";
const app = express()
app.get('/7502', handler7502)
app.listen(3000, () => {})
        