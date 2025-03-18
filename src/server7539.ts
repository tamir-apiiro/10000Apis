
const express = require('express')
import {handler7539} from "./handler7539";
const app = express()
app.get('/7539', handler7539)
app.listen(3000, () => {})
        