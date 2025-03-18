
const express = require('express')
import {handler7207} from "./handler7207";
const app = express()
app.get('/7207', handler7207)
app.listen(3000, () => {})
        