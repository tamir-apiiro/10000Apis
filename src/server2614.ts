
const express = require('express')
import {handler2614} from "./handler2614";
const app = express()
app.get('/2614', handler2614)
app.listen(3000, () => {})
        