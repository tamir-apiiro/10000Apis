
const express = require('express')
import {handler4145} from "./handler4145";
const app = express()
app.get('/4145', handler4145)
app.listen(3000, () => {})
        