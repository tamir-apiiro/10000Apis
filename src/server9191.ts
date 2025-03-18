
const express = require('express')
import {handler9191} from "./handler9191";
const app = express()
app.get('/9191', handler9191)
app.listen(3000, () => {})
        