
const express = require('express')
import {handler4395} from "./handler4395";
const app = express()
app.get('/4395', handler4395)
app.listen(3000, () => {})
        