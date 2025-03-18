
const express = require('express')
import {handler4067} from "./handler4067";
const app = express()
app.get('/4067', handler4067)
app.listen(3000, () => {})
        