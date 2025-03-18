
const express = require('express')
import {handler4120} from "./handler4120";
const app = express()
app.get('/4120', handler4120)
app.listen(3000, () => {})
        