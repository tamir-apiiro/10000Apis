
const express = require('express')
import {handler2094} from "./handler2094";
const app = express()
app.get('/2094', handler2094)
app.listen(3000, () => {})
        