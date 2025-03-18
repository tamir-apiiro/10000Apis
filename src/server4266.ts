
const express = require('express')
import {handler4266} from "./handler4266";
const app = express()
app.get('/4266', handler4266)
app.listen(3000, () => {})
        