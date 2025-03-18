
const express = require('express')
import {handler2902} from "./handler2902";
const app = express()
app.get('/2902', handler2902)
app.listen(3000, () => {})
        