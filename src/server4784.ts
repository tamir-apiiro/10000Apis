
const express = require('express')
import {handler4784} from "./handler4784";
const app = express()
app.get('/4784', handler4784)
app.listen(3000, () => {})
        