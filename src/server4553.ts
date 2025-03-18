
const express = require('express')
import {handler4553} from "./handler4553";
const app = express()
app.get('/4553', handler4553)
app.listen(3000, () => {})
        