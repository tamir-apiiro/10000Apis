
const express = require('express')
import {handler4578} from "./handler4578";
const app = express()
app.get('/4578', handler4578)
app.listen(3000, () => {})
        