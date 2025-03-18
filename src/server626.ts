
const express = require('express')
import {handler626} from "./handler626";
const app = express()
app.get('/626', handler626)
app.listen(3000, () => {})
        