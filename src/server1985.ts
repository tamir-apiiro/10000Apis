
const express = require('express')
import {handler1985} from "./handler1985";
const app = express()
app.get('/1985', handler1985)
app.listen(3000, () => {})
        