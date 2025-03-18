
const express = require('express')
import {handler4552} from "./handler4552";
const app = express()
app.get('/4552', handler4552)
app.listen(3000, () => {})
        