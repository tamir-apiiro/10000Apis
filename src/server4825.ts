
const express = require('express')
import {handler4825} from "./handler4825";
const app = express()
app.get('/4825', handler4825)
app.listen(3000, () => {})
        