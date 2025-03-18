
const express = require('express')
import {handler2834} from "./handler2834";
const app = express()
app.get('/2834', handler2834)
app.listen(3000, () => {})
        