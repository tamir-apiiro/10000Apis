
const express = require('express')
import {handler2673} from "./handler2673";
const app = express()
app.get('/2673', handler2673)
app.listen(3000, () => {})
        