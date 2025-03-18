
const express = require('express')
import {handler7464} from "./handler7464";
const app = express()
app.get('/7464', handler7464)
app.listen(3000, () => {})
        