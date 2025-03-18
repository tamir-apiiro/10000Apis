
const express = require('express')
import {handler4056} from "./handler4056";
const app = express()
app.get('/4056', handler4056)
app.listen(3000, () => {})
        