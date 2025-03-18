
const express = require('express')
import {handler4188} from "./handler4188";
const app = express()
app.get('/4188', handler4188)
app.listen(3000, () => {})
        