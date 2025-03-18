
const express = require('express')
import {handler4542} from "./handler4542";
const app = express()
app.get('/4542', handler4542)
app.listen(3000, () => {})
        