
const express = require('express')
import {handler4615} from "./handler4615";
const app = express()
app.get('/4615', handler4615)
app.listen(3000, () => {})
        