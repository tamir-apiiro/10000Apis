
const express = require('express')
import {handler4026} from "./handler4026";
const app = express()
app.get('/4026', handler4026)
app.listen(3000, () => {})
        