
const express = require('express')
import {handler4224} from "./handler4224";
const app = express()
app.get('/4224', handler4224)
app.listen(3000, () => {})
        