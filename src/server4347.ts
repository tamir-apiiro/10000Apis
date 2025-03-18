
const express = require('express')
import {handler4347} from "./handler4347";
const app = express()
app.get('/4347', handler4347)
app.listen(3000, () => {})
        