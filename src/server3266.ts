
const express = require('express')
import {handler3266} from "./handler3266";
const app = express()
app.get('/3266', handler3266)
app.listen(3000, () => {})
        