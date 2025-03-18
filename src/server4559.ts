
const express = require('express')
import {handler4559} from "./handler4559";
const app = express()
app.get('/4559', handler4559)
app.listen(3000, () => {})
        