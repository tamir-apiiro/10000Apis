
const express = require('express')
import {handler4132} from "./handler4132";
const app = express()
app.get('/4132', handler4132)
app.listen(3000, () => {})
        