
const express = require('express')
import {handler9266} from "./handler9266";
const app = express()
app.get('/9266', handler9266)
app.listen(3000, () => {})
        