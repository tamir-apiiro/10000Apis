
const express = require('express')
import {handler4676} from "./handler4676";
const app = express()
app.get('/4676', handler4676)
app.listen(3000, () => {})
        