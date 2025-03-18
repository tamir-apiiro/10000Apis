
const express = require('express')
import {handler7722} from "./handler7722";
const app = express()
app.get('/7722', handler7722)
app.listen(3000, () => {})
        