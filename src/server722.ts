
const express = require('express')
import {handler722} from "./handler722";
const app = express()
app.get('/722', handler722)
app.listen(3000, () => {})
        