
const express = require('express')
import {handler4685} from "./handler4685";
const app = express()
app.get('/4685', handler4685)
app.listen(3000, () => {})
        