
const express = require('express')
import {handler4136} from "./handler4136";
const app = express()
app.get('/4136', handler4136)
app.listen(3000, () => {})
        