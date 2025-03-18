
const express = require('express')
import {handler7094} from "./handler7094";
const app = express()
app.get('/7094', handler7094)
app.listen(3000, () => {})
        