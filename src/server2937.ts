
const express = require('express')
import {handler2937} from "./handler2937";
const app = express()
app.get('/2937', handler2937)
app.listen(3000, () => {})
        