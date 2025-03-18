
const express = require('express')
import {handler4519} from "./handler4519";
const app = express()
app.get('/4519', handler4519)
app.listen(3000, () => {})
        