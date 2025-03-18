
const express = require('express')
import {handler559} from "./handler559";
const app = express()
app.get('/559', handler559)
app.listen(3000, () => {})
        