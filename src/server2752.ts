
const express = require('express')
import {handler2752} from "./handler2752";
const app = express()
app.get('/2752', handler2752)
app.listen(3000, () => {})
        