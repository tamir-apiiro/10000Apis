
const express = require('express')
import {handler4221} from "./handler4221";
const app = express()
app.get('/4221', handler4221)
app.listen(3000, () => {})
        