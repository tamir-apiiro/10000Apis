
const express = require('express')
import {handler4755} from "./handler4755";
const app = express()
app.get('/4755', handler4755)
app.listen(3000, () => {})
        