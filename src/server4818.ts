
const express = require('express')
import {handler4818} from "./handler4818";
const app = express()
app.get('/4818', handler4818)
app.listen(3000, () => {})
        