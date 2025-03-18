
const express = require('express')
import {handler7834} from "./handler7834";
const app = express()
app.get('/7834', handler7834)
app.listen(3000, () => {})
        