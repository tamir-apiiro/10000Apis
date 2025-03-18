
const express = require('express')
import {handler190} from "./handler190";
const app = express()
app.get('/190', handler190)
app.listen(3000, () => {})
        