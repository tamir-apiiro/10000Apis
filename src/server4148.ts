
const express = require('express')
import {handler4148} from "./handler4148";
const app = express()
app.get('/4148', handler4148)
app.listen(3000, () => {})
        