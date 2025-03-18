
const express = require('express')
import {handler4831} from "./handler4831";
const app = express()
app.get('/4831', handler4831)
app.listen(3000, () => {})
        