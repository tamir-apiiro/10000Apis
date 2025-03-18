
const express = require('express')
import {handler4797} from "./handler4797";
const app = express()
app.get('/4797', handler4797)
app.listen(3000, () => {})
        