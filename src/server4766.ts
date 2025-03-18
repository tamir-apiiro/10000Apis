
const express = require('express')
import {handler4766} from "./handler4766";
const app = express()
app.get('/4766', handler4766)
app.listen(3000, () => {})
        