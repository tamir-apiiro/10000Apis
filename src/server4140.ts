
const express = require('express')
import {handler4140} from "./handler4140";
const app = express()
app.get('/4140', handler4140)
app.listen(3000, () => {})
        