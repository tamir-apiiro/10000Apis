
const express = require('express')
import {handler4937} from "./handler4937";
const app = express()
app.get('/4937', handler4937)
app.listen(3000, () => {})
        