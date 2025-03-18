
const express = require('express')
import {handler2919} from "./handler2919";
const app = express()
app.get('/2919', handler2919)
app.listen(3000, () => {})
        