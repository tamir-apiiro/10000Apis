
const express = require('express')
import {handler4051} from "./handler4051";
const app = express()
app.get('/4051', handler4051)
app.listen(3000, () => {})
        