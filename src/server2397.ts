
const express = require('express')
import {handler2397} from "./handler2397";
const app = express()
app.get('/2397', handler2397)
app.listen(3000, () => {})
        