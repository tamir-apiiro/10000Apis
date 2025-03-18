
const express = require('express')
import {handler4397} from "./handler4397";
const app = express()
app.get('/4397', handler4397)
app.listen(3000, () => {})
        