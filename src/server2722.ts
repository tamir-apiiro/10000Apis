
const express = require('express')
import {handler2722} from "./handler2722";
const app = express()
app.get('/2722', handler2722)
app.listen(3000, () => {})
        