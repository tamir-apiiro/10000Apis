
const express = require('express')
import {handler4280} from "./handler4280";
const app = express()
app.get('/4280', handler4280)
app.listen(3000, () => {})
        